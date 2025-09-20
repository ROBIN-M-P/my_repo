
const assert = require('assert');
const {
  initializeTestEnvironment,
  assertFails,
  assertSucceeds,
} = require('@firebase/rules-unit-testing');
const { readFileSync } = require('fs');

// Test data
const adminId = "admin-user";
const doctorId = "doctor-user";
const patientId1 = "patient-user-1"; // Assigned to doctorId
const patientId2 = "patient-user-2"; // Unassigned

const testData = {
  [`users/${adminId}`]: { role: "admin", name: "Admin User" },
  [`users/${doctorId}`]: { role: "doctor", name: "Doctor User" },
  [`users/${patientId1}`]: { role: "patient", name: "Patient One", assignedDoctorId: doctorId },
  [`users/${patientId2}`]: { role: "patient", name: "Patient Two", assignedDoctorId: "another-doctor" },
  [`scans/scan-for-patient1`]: { patientId: patientId1, data: "..." },
  [`scans/scan-for-patient2`]: { patientId: patientId2, data: "..." },
};

describe("Firestore Security Rules", () => {
  let testEnv;

  before(async () => {
    // This will start an in-memory emulator
    testEnv = await initializeTestEnvironment({
      projectId: "visioncare-ai",
      firestore: {
        // By not specifying host/port, the library will start its own emulator
        rules: readFileSync("firestore.rules", "utf8"),
      },
    });
  });

  after(async () => {
    // The library automatically shuts down the emulator when this is called
    if (testEnv) {
      await testEnv.cleanup();
    }
  });

  beforeEach(async () => {
    await testEnv.clearFirestore();
    await testEnv.withSecurityRulesDisabled(async (context) => {
      const adminDb = context.firestore();
      for (const key in testData) {
        await adminDb.doc(key).set(testData[key]);
      }
    });
  });

  // === Unauthenticated Users ===
  describe("Unauthenticated Access", () => {
    it("should deny reading any document", async () => {
      const db = testEnv.unauthenticatedContext().firestore();
      await assertFails(db.collection("users").get());
      await assertFails(db.doc(`users/${patientId1}`).get());
      await assertFails(db.doc(`scans/scan-for-patient1`).get());
    });
  });

  // === Patient Rules ===
  describe("Patient Access", () => {
    let db;
    before(() => {
      db = testEnv.authenticatedContext(patientId1).firestore();
    });

    it("should allow a patient to read their own profile", async () => {
      await assertSucceeds(db.doc(`users/${patientId1}`).get());
    });

    it("should deny a patient from reading another user's profile", async () => {
      await assertFails(db.doc(`users/${patientId2}`).get());
      await assertFails(db.doc(`users/${doctorId}`).get());
    });
    
    it("should allow a patient to read their own scans", async () => {
        await assertSucceeds(db.doc('scans/scan-for-patient1').get());
    });

    it("should deny a patient from reading another user's scans", async () => {
        await assertFails(db.doc('scans/scan-for-patient2').get());
    });
  });

  // === Doctor Rules ===
  describe("Doctor Access", () => {
    let db;
    before(() => {
        db = testEnv.authenticatedContext(doctorId).firestore();
    });

    it("should allow a doctor to read the profile of their assigned patient", async () => {
      await assertSucceeds(db.doc(`users/${patientId1}`).get());
    });

    it("should deny a doctor from reading the profile of an unassigned patient", async () => {
      await assertFails(db.doc(`users/${patientId2}`).get());
    });

    it("should allow a doctor to read the scans of their assigned patient", async () => {
      await assertSucceeds(db.doc('scans/scan-for-patient1').get());
    });

    it("should deny a doctor from reading the scans of an unassigned patient", async () => {
      await assertFails(db.doc('scans/scan-for-patient2').get());
    });

    it("should deny a doctor from updating a patient's profile", async () => {
        await assertFails(db.doc(`users/${patientId1}`).update({ name: "New Name" }));
    });
  });

  // === Admin Rules ===
  describe("Admin Access", () => {
    let db;
    before(() => {
        db = testEnv.authenticatedContext(adminId).firestore();
    });

    it("should allow an admin to read any document", async () => {
      await assertSucceeds(db.collection("users").get());
      await assertSucceeds(db.collection("scans").get());
      await assertSucceeds(db.doc(`users/${patientId2}`).get());
    });

    it("should allow an admin to write to any document", async () => {
        await assertSucceeds(db.doc(`users/${patientId1}`).update({ name: "Admin Edit" }));
        await assertSucceeds(db.doc('scans/scan-for-patient2').update({ data: "Admin Edit" }));
    });
  });
});

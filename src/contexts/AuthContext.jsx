import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock users database
  const mockUsers = {
    // Admin users
    'admin@retinalai.com': {
      id: 'admin-001',
      email: 'admin@retinalai.com',
      password: 'admin123',
      role: 'admin',
      name: 'System Administrator',
      permissions: ['view_all_patients', 'manage_users', 'system_settings', 'view_analytics']
    },
    'admin2@retinalai.com': {
      id: 'admin-002',
      email: 'admin2@retinalai.com',
      password: 'admin456',
      role: 'admin',
      name: 'Dr. Sarah Admin',
      permissions: ['view_all_patients', 'manage_users', 'system_settings', 'view_analytics']
    },
    
    // Doctor users
    'dr.smith@hospital.com': {
      id: 'doc-001',
      email: 'dr.smith@hospital.com',
      password: 'doctor123',
      role: 'doctor',
      name: 'Dr. John Smith',
      specialty: 'Ophthalmologist',
      hospital: 'City General Hospital',
      patients: ['patient-001', 'patient-002', 'patient-003'],
      permissions: ['view_assigned_patients', 'create_reports', 'ai_analysis']
    },
    'dr.johnson@clinic.com': {
      id: 'doc-002',
      email: 'dr.johnson@clinic.com',
      password: 'doctor456',
      role: 'doctor',
      name: 'Dr. Emily Johnson',
      specialty: 'Retinal Specialist',
      hospital: 'Eye Care Clinic',
      patients: ['patient-004', 'patient-005'],
      permissions: ['view_assigned_patients', 'create_reports', 'ai_analysis']
    },
    'dr.chen@medical.com': {
      id: 'doc-003',
      email: 'dr.chen@medical.com',
      password: 'doctor789',
      role: 'doctor',
      name: 'Dr. Michael Chen',
      specialty: 'Ophthalmologist',
      hospital: 'Medical Center',
      patients: ['patient-006'],
      permissions: ['view_assigned_patients', 'create_reports', 'ai_analysis']
    },
    
    // Patient users
    'john.doe@email.com': {
      id: 'patient-001',
      email: 'john.doe@email.com',
      password: 'patient123',
      role: 'patient',
      name: 'John Doe',
      age: 45,
      patientId: 'P-2024-001',
      assignedDoctor: 'doc-001',
      medicalHistory: ['Diabetes Type 2', 'Hypertension'],
      permissions: ['view_own_results', 'take_tests', 'ai_consultation']
    },
    'maria.garcia@email.com': {
      id: 'patient-002',
      email: 'maria.garcia@email.com',
      password: 'patient456',
      role: 'patient',
      name: 'Maria Garcia',
      age: 52,
      patientId: 'P-2024-002',
      assignedDoctor: 'doc-001',
      medicalHistory: ['Diabetes Type 1'],
      permissions: ['view_own_results', 'take_tests', 'ai_consultation']
    },
    'robert.wilson@email.com': {
      id: 'patient-003',
      email: 'robert.wilson@email.com',
      password: 'patient789',
      role: 'patient',
      name: 'Robert Wilson',
      age: 38,
      patientId: 'P-2024-003',
      assignedDoctor: 'doc-001',
      medicalHistory: ['Family history of glaucoma'],
      permissions: ['view_own_results', 'take_tests', 'ai_consultation']
    },
    'lisa.anderson@email.com': {
      id: 'patient-004',
      email: 'lisa.anderson@email.com',
      password: 'patient101',
      role: 'patient',
      name: 'Lisa Anderson',
      age: 29,
      patientId: 'P-2024-004',
      assignedDoctor: 'doc-002',
      medicalHistory: ['Myopia'],
      permissions: ['view_own_results', 'take_tests', 'ai_consultation']
    },
    'david.brown@email.com': {
      id: 'patient-005',
      email: 'david.brown@email.com',
      password: 'patient202',
      role: 'patient',
      name: 'David Brown',
      age: 61,
      patientId: 'P-2024-005',
      assignedDoctor: 'doc-002',
      medicalHistory: ['Age-related macular degeneration'],
      permissions: ['view_own_results', 'take_tests', 'ai_consultation']
    },
    'susan.white@email.com': {
      id: 'patient-006',
      email: 'susan.white@email.com',
      password: 'patient303',
      role: 'patient',
      name: 'Susan White',
      age: 47,
      patientId: 'P-2024-006',
      assignedDoctor: 'doc-003',
      medicalHistory: ['Hypertensive retinopathy'],
      permissions: ['view_own_results', 'take_tests', 'ai_consultation']
    }
  };

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('retinalai_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('retinalai_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = mockUsers[email];
      
      if (!userData || userData.password !== password) {
        throw new Error('Invalid email or password');
      }

      // Remove password from user data before storing
      const { password: _, ...userWithoutPassword } = userData;
      
      setUser(userWithoutPassword);
      localStorage.setItem('retinalai_user', JSON.stringify(userWithoutPassword));
      
      return userWithoutPassword;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('retinalai_user');
  };

  const hasPermission = (permission) => {
    return user?.permissions?.includes(permission) || false;
  };

  const canAccessPatient = (patientId) => {
    if (user?.role === 'admin') return true;
    if (user?.role === 'doctor') return user?.patients?.includes(patientId);
    if (user?.role === 'patient') return user?.id === patientId;
    return false;
  };

  const value = {
    user,
    login,
    logout,
    loading,
    hasPermission,
    canAccessPatient,
    isAdmin: user?.role === 'admin',
    isDoctor: user?.role === 'doctor',
    isPatient: user?.role === 'patient'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
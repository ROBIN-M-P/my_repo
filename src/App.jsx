import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ImageUpload from './pages/ImageUpload';
import Analysis from './pages/Analysis';
import Results from './pages/Results';
import PatientDashboard from './pages/PatientDashboard';
import AdminDashboard from './pages/AdminDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import DiseaseLibrary from './pages/DiseaseLibrary';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import VisionTests from './pages/VisionTests';
import ColorBlindTest from './pages/ColorBlindTest';
import VisualAcuityTest from './pages/VisualAcuityTest';
import AstigmatismTest from './pages/AstigmatismTest';
import ContrastSensitivityTest from './pages/ContrastSensitivityTest';
import PeripheralVisionTest from './pages/PeripheralVisionTest';
import AIConsultation from './pages/AIConsultation';
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';
import './App.css';

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            
            {/* Protected routes */}
            <Route path="/*" element={
              <ProtectedRoute>
                <Navbar />
                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    
                    {/* Role-based dashboard routing */}
                    <Route path="/dashboard" element={
                      <ProtectedRoute>
                        <DashboardRouter />
                      </ProtectedRoute>
                    } />
                    
                    {/* Admin only routes */}
                    <Route path="/admin" element={
                      <ProtectedRoute requiredRole="admin">
                        <AdminDashboard />
                      </ProtectedRoute>
                    } />
                    
                    {/* Doctor routes */}
                    <Route path="/doctor" element={
                      <ProtectedRoute requiredRole="doctor">
                        <DoctorDashboard />
                      </ProtectedRoute>
                    } />
                    
                    {/* Patient routes */}
                    <Route path="/patient" element={
                      <ProtectedRoute requiredRole="patient">
                        <PatientDashboard />
                      </ProtectedRoute>
                    } />
                    
                    {/* Common protected routes */}
                    <Route path="/upload" element={
                      <ProtectedRoute requiredPermission="ai_analysis">
                        <ImageUpload />
                      </ProtectedRoute>
                    } />
                    <Route path="/analysis" element={
                      <ProtectedRoute requiredPermission="ai_analysis">
                        <Analysis />
                      </ProtectedRoute>
                    } />
                    <Route path="/results" element={<Results />} />
                    <Route path="/diseases" element={<DiseaseLibrary />} />
                    <Route path="/reports" element={
                      <ProtectedRoute requiredPermission="create_reports">
                        <Reports />
                      </ProtectedRoute>
                    } />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/tests" element={<VisionTests />} />
                    <Route path="/test/color-blind" element={<ColorBlindTest />} />
                    <Route path="/test/visual-acuity" element={<VisualAcuityTest />} />
                    <Route path="/test/astigmatism" element={<AstigmatismTest />} />
                    <Route path="/test/contrast-sensitivity" element={<ContrastSensitivityTest />} />
                    <Route path="/test/peripheral-vision" element={<PeripheralVisionTest />} />
                    <Route path="/consultation" element={
                      <ProtectedRoute requiredPermission="ai_consultation">
                        <AIConsultation />
                      </ProtectedRoute>
                    } />
                  </Routes>
                </main>
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

// Dashboard router component to redirect based on user role
const DashboardRouter = () => {
  const { user } = useAuth();
  
  switch (user?.role) {
    case 'admin':
      return <AdminDashboard />;
    case 'doctor':
      return <DoctorDashboard />;
    case 'patient':
      return <PatientDashboard />;
    default:
      return <PatientDashboard />;
  }
};

// Import useAuth hook
import { useAuth } from './contexts/AuthContext';

export default App;
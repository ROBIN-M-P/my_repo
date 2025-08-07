import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Eye, Mail, Lock, AlertCircle, User, Stethoscope, Shield } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showDemoAccounts, setShowDemoAccounts] = useState(false);

  const from = location.state?.from?.pathname || '/dashboard';

  const demoAccounts = [
    {
      role: 'admin',
      icon: <Shield size={20} />,
      title: 'System Administrator',
      email: 'admin@retinalai.com',
      password: 'admin123',
      description: 'Full system access, user management, analytics'
    },
    {
      role: 'doctor',
      icon: <Stethoscope size={20} />,
      title: 'Doctor Account',
      email: 'dr.smith@hospital.com',
      password: 'doctor123',
      description: 'Patient management, AI analysis, reports'
    },
    {
      role: 'patient',
      icon: <User size={20} />,
      title: 'Patient Account',
      email: 'john.doe@email.com',
      password: 'patient123',
      description: 'Personal results, vision tests, AI consultation'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(formData.email, formData.password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = (email, password) => {
    setFormData({ email, password });
    setError('');
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="brand-logo">
              <Eye size={40} />
            </div>
            <h1 className="login-title">RetinalAI</h1>
            <p className="login-subtitle">AI-Powered Retinal Disease Detection</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-message">
                <AlertCircle size={20} />
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-container">
                <Mail className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-container">
                <Lock className="input-icon" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="login-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="demo-section">
            <button 
              onClick={() => setShowDemoAccounts(!showDemoAccounts)}
              className="demo-toggle"
            >
              {showDemoAccounts ? 'Hide' : 'Show'} Demo Accounts
            </button>

            {showDemoAccounts && (
              <div className="demo-accounts">
                <h3>Demo Accounts</h3>
                <div className="demo-grid">
                  {demoAccounts.map((account, index) => (
                    <div key={index} className="demo-card">
                      <div className="demo-header">
                        <div className={`demo-icon ${account.role}`}>
                          {account.icon}
                        </div>
                        <h4>{account.title}</h4>
                      </div>
                      <p className="demo-description">{account.description}</p>
                      <div className="demo-credentials">
                        <div className="credential">
                          <strong>Email:</strong> {account.email}
                        </div>
                        <div className="credential">
                          <strong>Password:</strong> {account.password}
                        </div>
                      </div>
                      <button
                        onClick={() => handleDemoLogin(account.email, account.password)}
                        className={`demo-login-btn ${account.role}`}
                      >
                        Use This Account
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="login-info">
          <h2>Secure Access Portal</h2>
          <div className="info-features">
            <div className="feature">
              <Shield size={24} />
              <div>
                <h4>Role-Based Access</h4>
                <p>Secure authentication with appropriate permissions for each user type</p>
              </div>
            </div>
            <div className="feature">
              <Eye size={24} />
              <div>
                <h4>AI-Powered Analysis</h4>
                <p>Advanced retinal disease detection with clinical-grade accuracy</p>
              </div>
            </div>
            <div className="feature">
              <User size={24} />
              <div>
                <h4>Patient-Centered Care</h4>
                <p>Comprehensive patient management and tracking system</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .login-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1200px;
          width: 100%;
          align-items: center;
        }

        .login-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
        }

        .login-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .brand-logo {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: white;
        }

        .login-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 8px 0;
        }

        .login-subtitle {
          color: #6b7280;
          margin: 0;
          font-size: 1rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid rgba(239, 68, 68, 0.2);
          font-size: 0.95rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-weight: 600;
          color: #374151;
          font-size: 0.95rem;
        }

        .input-container {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          width: 20px;
          height: 20px;
        }

        .input-container input {
          width: 100%;
          padding: 16px 16px 16px 48px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .input-container input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .login-button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .login-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .login-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .demo-section {
          margin-top: 30px;
          border-top: 1px solid #e5e7eb;
          padding-top: 30px;
        }

        .demo-toggle {
          width: 100%;
          padding: 12px;
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          color: #374151;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .demo-toggle:hover {
          background: #e5e7eb;
        }

        .demo-accounts {
          margin-top: 20px;
        }

        .demo-accounts h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 16px 0;
          text-align: center;
        }

        .demo-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .demo-card {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 16px;
        }

        .demo-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .demo-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .demo-icon.admin {
          background: #ef4444;
        }

        .demo-icon.doctor {
          background: #10b981;
        }

        .demo-icon.patient {
          background: #3b82f6;
        }

        .demo-header h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .demo-description {
          color: #6b7280;
          font-size: 0.9rem;
          margin: 0 0 12px 0;
          line-height: 1.4;
        }

        .demo-credentials {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 12px;
        }

        .credential {
          font-size: 0.85rem;
          color: #374151;
        }

        .demo-login-btn {
          width: 100%;
          padding: 8px 16px;
          border: none;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
        }

        .demo-login-btn.admin {
          background: #ef4444;
        }

        .demo-login-btn.doctor {
          background: #10b981;
        }

        .demo-login-btn.patient {
          background: #3b82f6;
        }

        .demo-login-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .login-info {
          color: white;
        }

        .login-info h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 30px 0;
          line-height: 1.2;
        }

        .info-features {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .feature {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .feature svg {
          flex-shrink: 0;
          margin-top: 4px;
        }

        .feature h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 8px 0;
        }

        .feature p {
          margin: 0;
          opacity: 0.9;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .login-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .login-card {
            padding: 30px 20px;
          }

          .login-info {
            text-align: center;
          }

          .login-info h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
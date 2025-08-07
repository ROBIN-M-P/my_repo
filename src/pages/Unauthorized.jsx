import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Shield, ArrowLeft, Home } from 'lucide-react';

const Unauthorized = () => {
  const { user, logout } = useAuth();

  return (
    <div className="unauthorized-page">
      <div className="container">
        <div className="unauthorized-card">
          <div className="unauthorized-icon">
            <Shield size={64} />
          </div>
          
          <h1 className="unauthorized-title">Access Denied</h1>
          <p className="unauthorized-message">
            You don't have permission to access this resource. Your current role 
            ({user?.role || 'unknown'}) doesn't have the required permissions.
          </p>

          <div className="user-info">
            <h3>Current User Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <strong>Name:</strong> {user?.name || 'Unknown'}
              </div>
              <div className="info-item">
                <strong>Role:</strong> {user?.role || 'Unknown'}
              </div>
              <div className="info-item">
                <strong>Email:</strong> {user?.email || 'Unknown'}
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <Link to="/dashboard" className="btn btn-primary">
              <Home size={20} />
              Go to Dashboard
            </Link>
            <button onClick={logout} className="btn btn-secondary">
              <ArrowLeft size={20} />
              Switch Account
            </button>
          </div>

          <div className="help-section">
            <h4>Need Access?</h4>
            <p>
              If you believe you should have access to this resource, please contact 
              your system administrator or the appropriate medical staff.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .unauthorized-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .unauthorized-card {
          background: white;
          border-radius: 20px;
          padding: 60px 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
          text-align: center;
        }

        .unauthorized-icon {
          color: #ef4444;
          margin-bottom: 30px;
          display: flex;
          justify-content: center;
        }

        .unauthorized-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 20px 0;
        }

        .unauthorized-message {
          color: #6b7280;
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0 0 40px 0;
        }

        .user-info {
          background: #f9fafb;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 40px;
          text-align: left;
        }

        .user-info h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 16px 0;
          text-align: center;
        }

        .info-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .info-item:last-child {
          border-bottom: none;
        }

        .info-item strong {
          color: #374151;
        }

        .action-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
          background: rgba(107, 114, 128, 0.1);
          color: #374151;
          border: 1px solid rgba(107, 114, 128, 0.2);
        }

        .btn-secondary:hover {
          background: rgba(107, 114, 128, 0.15);
          transform: translateY(-1px);
        }

        .help-section {
          border-top: 1px solid #e5e7eb;
          padding-top: 30px;
        }

        .help-section h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 12px 0;
        }

        .help-section p {
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .unauthorized-card {
            padding: 40px 20px;
          }

          .unauthorized-title {
            font-size: 2rem;
          }

          .action-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default Unauthorized;
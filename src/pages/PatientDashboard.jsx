import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Calendar, Eye, TrendingUp, AlertTriangle, CheckCircle, Clock, FileText, BarChart3, Activity } from 'lucide-react';

const PatientDashboard = () => {
  const [patientData, setPatientData] = useState(null);
  const [recentTests, setRecentTests] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);

  useEffect(() => {
    // Load patient data and recent activity
    const mockPatientData = {
      name: 'John Doe',
      age: 45,
      patientId: 'P-2024-001',
      lastVisit: '2024-01-15',
      nextAppointment: '2024-02-15',
      riskLevel: 'Medium',
      conditions: ['Diabetic Retinopathy', 'Mild Glaucoma']
    };

    const mockRecentTests = [
      {
        id: 1,
        date: '2024-01-15',
        type: 'Fundus Photography',
        result: 'Mild Diabetic Retinopathy',
        status: 'completed',
        riskLevel: 'medium'
      },
      {
        id: 2,
        date: '2024-01-10',
        type: 'OCT Scan',
        result: 'Normal Macula',
        status: 'completed',
        riskLevel: 'low'
      },
      {
        id: 3,
        date: '2024-01-05',
        type: 'Visual Field Test',
        result: 'Mild Defects',
        status: 'completed',
        riskLevel: 'medium'
      }
    ];

    const mockAppointments = [
      {
        id: 1,
        date: '2024-02-15',
        time: '10:00 AM',
        type: 'Follow-up Examination',
        doctor: 'Dr. Smith'
      },
      {
        id: 2,
        date: '2024-03-01',
        time: '2:30 PM',
        type: 'OCT Scan',
        doctor: 'Dr. Johnson'
      }
    ];

    setPatientData(mockPatientData);
    setRecentTests(mockRecentTests);
    setUpcomingAppointments(mockAppointments);
  }, []);

  const getRiskColor = (risk) => {
    switch (risk?.toLowerCase()) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="status-icon completed" />;
      case 'pending': return <Clock className="status-icon pending" />;
      case 'scheduled': return <Calendar className="status-icon scheduled" />;
      default: return <Activity className="status-icon" />;
    }
  };

  if (!patientData) {
    return (
      <div className="dashboard-loading">
        <div className="container">
          <div className="loading-spinner"></div>
          <p>Loading patient dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="patient-dashboard">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Patient Dashboard</h1>
          <p className="page-subtitle">
            Comprehensive overview of your eye health and treatment progress
          </p>
        </div>

        {/* Patient Info Card */}
        <div className="patient-info-card">
          <div className="patient-avatar">
            <User size={48} />
          </div>
          <div className="patient-details">
            <h2 className="patient-name">{patientData.name}</h2>
            <div className="patient-meta">
              <span>Age: {patientData.age}</span>
              <span>ID: {patientData.patientId}</span>
              <span>Last Visit: {new Date(patientData.lastVisit).toLocaleDateString()}</span>
            </div>
            <div 
              className="risk-badge"
              style={{ backgroundColor: getRiskColor(patientData.riskLevel) }}
            >
              {patientData.riskLevel} Risk
            </div>
          </div>
          <div className="quick-actions">
            <Link to="/upload" className="btn btn-primary">
              <Eye />
              New Analysis
            </Link>
            <Link to="/results" className="btn btn-secondary">
              <FileText />
              View Reports
            </Link>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          {/* Health Overview */}
          <div className="dashboard-card health-overview">
            <div className="card-header">
              <h3>Health Overview</h3>
              <TrendingUp className="card-icon" />
            </div>
            <div className="health-stats">
              <div className="health-stat">
                <div className="stat-label">Current Conditions</div>
                <div className="conditions-list">
                  {patientData.conditions.map((condition, index) => (
                    <span key={index} className="condition-tag">
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
              <div className="health-stat">
                <div className="stat-label">Next Appointment</div>
                <div className="stat-value">
                  {new Date(patientData.nextAppointment).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Tests */}
          <div className="dashboard-card recent-tests">
            <div className="card-header">
              <h3>Recent Tests</h3>
              <BarChart3 className="card-icon" />
            </div>
            <div className="tests-list">
              {recentTests.map((test) => (
                <div key={test.id} className="test-item">
                  <div className="test-info">
                    <div className="test-type">{test.type}</div>
                    <div className="test-date">{new Date(test.date).toLocaleDateString()}</div>
                  </div>
                  <div className="test-result">
                    <div className="result-text">{test.result}</div>
                    <div 
                      className="risk-indicator"
                      style={{ backgroundColor: getRiskColor(test.riskLevel) }}
                    >
                      {test.riskLevel}
                    </div>
                  </div>
                  {getStatusIcon(test.status)}
                </div>
              ))}
            </div>
            <Link to="/results" className="view-all-link">
              View All Results →
            </Link>
          </div>

          {/* Upcoming Appointments */}
          <div className="dashboard-card appointments">
            <div className="card-header">
              <h3>Upcoming Appointments</h3>
              <Calendar className="card-icon" />
            </div>
            <div className="appointments-list">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="appointment-item">
                  <div className="appointment-date">
                    <div className="date">{new Date(appointment.date).getDate()}</div>
                    <div className="month">
                      {new Date(appointment.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                  <div className="appointment-details">
                    <div className="appointment-type">{appointment.type}</div>
                    <div className="appointment-time">{appointment.time}</div>
                    <div className="appointment-doctor">{appointment.doctor}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-card quick-actions-card">
            <div className="card-header">
              <h3>Quick Actions</h3>
              <Activity className="card-icon" />
            </div>
            <div className="actions-grid">
              <Link to="/upload" className="action-item">
                <Eye className="action-icon" />
                <span>Upload Images</span>
              </Link>
              <Link to="/results" className="action-item">
                <FileText className="action-icon" />
                <span>View Reports</span>
              </Link>
              <Link to="/diseases" className="action-item">
                <AlertTriangle className="action-icon" />
                <span>Disease Info</span>
              </Link>
              <Link to="/settings" className="action-item">
                <User className="action-icon" />
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Health Alerts */}
        <div className="health-alerts">
          <div className="alert-card warning">
            <AlertTriangle className="alert-icon" />
            <div className="alert-content">
              <h4>Follow-up Required</h4>
              <p>Your recent diabetic retinopathy screening shows progression. Please schedule a follow-up appointment within 2 weeks.</p>
            </div>
            <button className="btn btn-warning">Schedule Now</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .patient-dashboard {
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .dashboard-loading {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .patient-info-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .patient-avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .patient-details {
          flex: 1;
        }

        .patient-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 12px 0;
        }

        .patient-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .patient-meta span {
          color: #6b7280;
          font-size: 0.95rem;
        }

        .risk-badge {
          padding: 6px 16px;
          border-radius: 20px;
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          display: inline-block;
        }

        .quick-actions {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .dashboard-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .card-header h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .card-icon {
          width: 24px;
          height: 24px;
          color: #667eea;
        }

        .health-stats {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .health-stat {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .stat-label {
          font-weight: 600;
          color: #374151;
          font-size: 0.95rem;
        }

        .conditions-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .condition-tag {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .stat-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1f2937;
        }

        .tests-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 20px;
        }

        .test-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: #f9fafb;
          border-radius: 12px;
        }

        .test-info {
          flex: 1;
        }

        .test-type {
          font-weight: 600;
          color: #1f2937;
          font-size: 0.95rem;
        }

        .test-date {
          color: #6b7280;
          font-size: 0.85rem;
        }

        .test-result {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }

        .result-text {
          font-size: 0.9rem;
          color: #374151;
        }

        .risk-indicator {
          padding: 2px 8px;
          border-radius: 10px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .status-icon {
          width: 20px;
          height: 20px;
        }

        .status-icon.completed {
          color: #10b981;
        }

        .status-icon.pending {
          color: #f59e0b;
        }

        .status-icon.scheduled {
          color: #667eea;
        }

        .view-all-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .view-all-link:hover {
          text-decoration: underline;
        }

        .appointments-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .appointment-item {
          display: flex;
          gap: 16px;
          padding: 16px;
          background: #f9fafb;
          border-radius: 12px;
        }

        .appointment-date {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #667eea;
          color: white;
          border-radius: 8px;
          padding: 8px;
          min-width: 50px;
        }

        .appointment-date .date {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .appointment-date .month {
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .appointment-details {
          flex: 1;
        }

        .appointment-type {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .appointment-time {
          color: #667eea;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .appointment-doctor {
          color: #6b7280;
          font-size: 0.85rem;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .action-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px;
          background: #f9fafb;
          border-radius: 12px;
          text-decoration: none;
          color: #374151;
          transition: all 0.3s ease;
        }

        .action-item:hover {
          background: #e5e7eb;
          transform: translateY(-2px);
        }

        .action-icon {
          width: 24px;
          height: 24px;
          color: #667eea;
        }

        .action-item span {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .health-alerts {
          margin-top: 40px;
        }

        .alert-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .alert-card.warning {
          border-left: 4px solid #f59e0b;
        }

        .alert-icon {
          width: 32px;
          height: 32px;
          color: #f59e0b;
          flex-shrink: 0;
        }

        .alert-content {
          flex: 1;
        }

        .alert-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 8px 0;
        }

        .alert-content p {
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }

        .btn-warning {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
        }

        .btn-warning:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
        }

        @media (max-width: 768px) {
          .patient-info-card {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .patient-meta {
            justify-content: center;
          }

          .quick-actions {
            width: 100%;
            justify-content: center;
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .dashboard-card {
            padding: 20px;
          }

          .actions-grid {
            grid-template-columns: 1fr;
          }

          .alert-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default PatientDashboard;
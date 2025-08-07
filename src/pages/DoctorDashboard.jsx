import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Users, Eye, FileText, Calendar, AlertTriangle, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const DoctorDashboard = () => {
  const { user } = useAuth();
  const [patientStats, setPatientStats] = useState({
    totalPatients: 0,
    highRiskPatients: 0,
    pendingReviews: 0,
    completedToday: 0
  });

  const [recentPatients, setRecentPatients] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pendingReviews, setPendingReviews] = useState([]);

  useEffect(() => {
    // Mock data based on doctor's assigned patients
    const mockPatientStats = {
      totalPatients: user?.patients?.length || 0,
      highRiskPatients: 2,
      pendingReviews: 4,
      completedToday: 8
    };

    const mockRecentPatients = [
      {
        id: 'patient-001',
        name: 'John Doe',
        age: 45,
        lastVisit: '2024-01-15',
        condition: 'Diabetic Retinopathy',
        riskLevel: 'Medium',
        status: 'Follow-up Required'
      },
      {
        id: 'patient-002',
        name: 'Maria Garcia',
        age: 52,
        lastVisit: '2024-01-14',
        condition: 'Normal',
        riskLevel: 'Low',
        status: 'Stable'
      },
      {
        id: 'patient-003',
        name: 'Robert Wilson',
        age: 38,
        lastVisit: '2024-01-13',
        condition: 'Glaucoma Suspect',
        riskLevel: 'Medium',
        status: 'Monitoring'
      }
    ];

    const mockAppointments = [
      {
        id: 1,
        patientName: 'John Doe',
        time: '10:00 AM',
        date: '2024-01-16',
        type: 'Follow-up',
        duration: '30 min'
      },
      {
        id: 2,
        patientName: 'Sarah Johnson',
        time: '2:30 PM',
        date: '2024-01-16',
        type: 'Initial Consultation',
        duration: '45 min'
      },
      {
        id: 3,
        patientName: 'Michael Brown',
        time: '9:00 AM',
        date: '2024-01-17',
        type: 'Retinal Screening',
        duration: '60 min'
      }
    ];

    const mockPendingReviews = [
      {
        id: 1,
        patientName: 'Lisa Anderson',
        analysisDate: '2024-01-15',
        finding: 'Moderate Diabetic Retinopathy',
        confidence: 94,
        priority: 'High'
      },
      {
        id: 2,
        patientName: 'David Brown',
        analysisDate: '2024-01-15',
        finding: 'Early AMD',
        confidence: 87,
        priority: 'Medium'
      },
      {
        id: 3,
        patientName: 'Susan White',
        analysisDate: '2024-01-14',
        finding: 'Hypertensive Retinopathy',
        confidence: 91,
        priority: 'Medium'
      }
    ];

    setPatientStats(mockPatientStats);
    setRecentPatients(mockRecentPatients);
    setUpcomingAppointments(mockAppointments);
    setPendingReviews(mockPendingReviews);
  }, [user]);

  const getRiskColor = (risk) => {
    switch (risk?.toLowerCase()) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <div className="doctor-dashboard">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Doctor Dashboard</h1>
          <p className="page-subtitle">
            Patient management and clinical overview for {user?.name}
          </p>
        </div>

        <div className="doctor-info-card">
          <div className="doctor-avatar">
            <Users size={32} />
          </div>
          <div className="doctor-details">
            <h2>{user?.name}</h2>
            <p className="specialty">{user?.specialty}</p>
            <p className="hospital">{user?.hospital}</p>
          </div>
          <div className="doctor-stats">
            <div className="stat-item">
              <span className="stat-number">{patientStats.totalPatients}</span>
              <span className="stat-label">Assigned Patients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{patientStats.completedToday}</span>
              <span className="stat-label">Reviews Today</span>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon patients">
              <Users size={28} />
            </div>
            <div className="stat-content">
              <h3>Total Patients</h3>
              <div className="stat-number">{patientStats.totalPatients}</div>
              <div className="stat-change">Active cases</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon high-risk">
              <AlertTriangle size={28} />
            </div>
            <div className="stat-content">
              <h3>High Risk</h3>
              <div className="stat-number">{patientStats.highRiskPatients}</div>
              <div className="stat-change">Require attention</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon pending">
              <Clock size={28} />
            </div>
            <div className="stat-content">
              <h3>Pending Reviews</h3>
              <div className="stat-number">{patientStats.pendingReviews}</div>
              <div className="stat-change">Awaiting review</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon completed">
              <CheckCircle size={28} />
            </div>
            <div className="stat-content">
              <h3>Completed Today</h3>
              <div className="stat-number">{patientStats.completedToday}</div>
              <div className="stat-change">Reviews completed</div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="dashboard-grid">
          {/* Recent Patients */}
          <div className="dashboard-card patients-card">
            <div className="card-header">
              <h3>Recent Patients</h3>
              <Users className="card-icon" />
            </div>
            <div className="patients-list">
              {recentPatients.map((patient) => (
                <div key={patient.id} className="patient-item">
                  <div className="patient-info">
                    <div className="patient-name">{patient.name}</div>
                    <div className="patient-details">
                      Age: {patient.age} • Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="patient-status">
                    <div className="condition">{patient.condition}</div>
                    <div 
                      className="risk-badge"
                      style={{ backgroundColor: getRiskColor(patient.riskLevel) }}
                    >
                      {patient.riskLevel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="dashboard-card appointments-card">
            <div className="card-header">
              <h3>Today's Appointments</h3>
              <Calendar className="card-icon" />
            </div>
            <div className="appointments-list">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="appointment-item">
                  <div className="appointment-time">
                    <div className="time">{appointment.time}</div>
                    <div className="duration">{appointment.duration}</div>
                  </div>
                  <div className="appointment-details">
                    <div className="patient-name">{appointment.patientName}</div>
                    <div className="appointment-type">{appointment.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Reviews */}
          <div className="dashboard-card reviews-card">
            <div className="card-header">
              <h3>Pending AI Reviews</h3>
              <Eye className="card-icon" />
            </div>
            <div className="reviews-list">
              {pendingReviews.map((review) => (
                <div key={review.id} className="review-item">
                  <div className="review-info">
                    <div className="patient-name">{review.patientName}</div>
                    <div className="finding">{review.finding}</div>
                    <div className="analysis-date">
                      {new Date(review.analysisDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="review-metrics">
                    <div className="confidence">
                      Confidence: {review.confidence}%
                    </div>
                    <div 
                      className="priority-badge"
                      style={{ backgroundColor: getPriorityColor(review.priority) }}
                    >
                      {review.priority}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions-section">
          <div className="actions-card">
            <h3>Quick Actions</h3>
            <div className="actions-grid">
              <button className="action-btn">
                <Eye size={20} />
                <span>New Analysis</span>
              </button>
              <button className="action-btn">
                <FileText size={20} />
                <span>Generate Report</span>
              </button>
              <button className="action-btn">
                <Calendar size={20} />
                <span>Schedule Appointment</span>
              </button>
              <button className="action-btn">
                <TrendingUp size={20} />
                <span>Patient Analytics</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .doctor-dashboard {
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .doctor-info-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .doctor-avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .doctor-details {
          flex: 1;
        }

        .doctor-details h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 8px 0;
        }

        .specialty {
          font-size: 1.1rem;
          color: #10b981;
          font-weight: 600;
          margin: 0 0 4px 0;
        }

        .hospital {
          color: #6b7280;
          margin: 0;
        }

        .doctor-stats {
          display: flex;
          gap: 30px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #6b7280;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .stat-icon.patients {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        }

        .stat-icon.high-risk {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        }

        .stat-icon.pending {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }

        .stat-icon.completed {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .stat-content h3 {
          font-size: 0.9rem;
          color: #6b7280;
          margin: 0 0 4px 0;
          font-weight: 500;
        }

        .stat-content .stat-number {
          font-size: 2.2rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .stat-change {
          font-size: 0.8rem;
          color: #6b7280;
          font-weight: 500;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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

        .patients-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .patient-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: #f9fafb;
          border-radius: 12px;
        }

        .patient-info {
          flex: 1;
        }

        .patient-name {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .patient-details {
          font-size: 0.9rem;
          color: #6b7280;
        }

        .patient-status {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }

        .condition {
          font-size: 0.9rem;
          color: #374151;
        }

        .risk-badge {
          padding: 4px 8px;
          border-radius: 12px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
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

        .appointment-time {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #667eea;
          color: white;
          border-radius: 8px;
          padding: 8px;
          min-width: 80px;
        }

        .time {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .duration {
          font-size: 0.8rem;
          opacity: 0.9;
        }

        .appointment-details {
          flex: 1;
        }

        .appointment-details .patient-name {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .appointment-type {
          color: #6b7280;
          font-size: 0.9rem;
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .review-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: #f9fafb;
          border-radius: 12px;
        }

        .review-info {
          flex: 1;
        }

        .review-info .patient-name {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .finding {
          color: #374151;
          font-size: 0.9rem;
          margin-bottom: 4px;
        }

        .analysis-date {
          color: #6b7280;
          font-size: 0.8rem;
        }

        .review-metrics {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }

        .confidence {
          font-size: 0.9rem;
          color: #374151;
        }

        .priority-badge {
          padding: 4px 8px;
          border-radius: 12px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .quick-actions-section {
          margin-top: 40px;
        }

        .actions-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .actions-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 24px 0;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .action-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #374151;
        }

        .action-btn:hover {
          background: #e5e7eb;
          transform: translateY(-2px);
        }

        .action-btn span {
          font-size: 0.9rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .doctor-info-card {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .doctor-stats {
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }

          .actions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default DoctorDashboard;
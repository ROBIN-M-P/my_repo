import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Users, Activity, BarChart3, Settings, Eye, AlertTriangle, TrendingUp, UserCheck } from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPatients: 0,
    totalDoctors: 0,
    totalAnalyses: 0,
    highRiskCases: 0,
    systemHealth: 'Good'
  });

  const [recentActivity, setRecentActivity] = useState([]);
  const [systemAlerts, setSystemAlerts] = useState([]);

  useEffect(() => {
    // Mock data for admin dashboard
    setStats({
      totalUsers: 156,
      totalPatients: 128,
      totalDoctors: 24,
      totalAnalyses: 2847,
      highRiskCases: 23,
      systemHealth: 'Good'
    });

    setRecentActivity([
      {
        id: 1,
        type: 'user_registration',
        message: 'New patient registered: Sarah Johnson',
        timestamp: '2024-01-15 14:30',
        severity: 'info'
      },
      {
        id: 2,
        type: 'high_risk_detection',
        message: 'High-risk diabetic retinopathy detected for Patient P-2024-045',
        timestamp: '2024-01-15 13:45',
        severity: 'warning'
      },
      {
        id: 3,
        type: 'system_update',
        message: 'AI model updated to version 2.1.3',
        timestamp: '2024-01-15 12:00',
        severity: 'success'
      },
      {
        id: 4,
        type: 'doctor_login',
        message: 'Dr. Michael Chen logged in from new device',
        timestamp: '2024-01-15 11:20',
        severity: 'info'
      },
      {
        id: 5,
        type: 'analysis_completed',
        message: '50 retinal analyses completed in the last hour',
        timestamp: '2024-01-15 10:00',
        severity: 'success'
      }
    ]);

    setSystemAlerts([
      {
        id: 1,
        type: 'warning',
        title: 'High Server Load',
        message: 'AI processing servers are at 85% capacity',
        action: 'Scale Resources'
      },
      {
        id: 2,
        type: 'info',
        title: 'Scheduled Maintenance',
        message: 'System maintenance scheduled for tonight at 2:00 AM',
        action: 'View Details'
      }
    ]);
  }, []);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'user_registration': return <UserCheck size={16} />;
      case 'high_risk_detection': return <AlertTriangle size={16} />;
      case 'system_update': return <Settings size={16} />;
      case 'doctor_login': return <Users size={16} />;
      case 'analysis_completed': return <Eye size={16} />;
      default: return <Activity size={16} />;
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'warning': return '#f59e0b';
      case 'success': return '#10b981';
      case 'error': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="page-subtitle">
            System overview and management console for RetinalAI platform
          </p>
        </div>

        <div className="welcome-card">
          <div className="welcome-content">
            <h2>Welcome back, {user?.name}</h2>
            <p>System Administrator Dashboard - Full platform oversight and control</p>
          </div>
          <div className="admin-badge">
            <Settings size={24} />
            <span>Admin</span>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon users">
              <Users size={32} />
            </div>
            <div className="stat-content">
              <h3>Total Users</h3>
              <div className="stat-number">{stats.totalUsers}</div>
              <div className="stat-change">+12 this week</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon patients">
              <UserCheck size={32} />
            </div>
            <div className="stat-content">
              <h3>Active Patients</h3>
              <div className="stat-number">{stats.totalPatients}</div>
              <div className="stat-change">+8 this week</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon doctors">
              <Activity size={32} />
            </div>
            <div className="stat-content">
              <h3>Medical Staff</h3>
              <div className="stat-number">{stats.totalDoctors}</div>
              <div className="stat-change">+2 this month</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon analyses">
              <Eye size={32} />
            </div>
            <div className="stat-content">
              <h3>Total Analyses</h3>
              <div className="stat-number">{stats.totalAnalyses}</div>
              <div className="stat-change">+156 today</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon high-risk">
              <AlertTriangle size={32} />
            </div>
            <div className="stat-content">
              <h3>High Risk Cases</h3>
              <div className="stat-number">{stats.highRiskCases}</div>
              <div className="stat-change">+3 this week</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon system">
              <TrendingUp size={32} />
            </div>
            <div className="stat-content">
              <h3>System Health</h3>
              <div className="stat-status">{stats.systemHealth}</div>
              <div className="stat-change">All systems operational</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="dashboard-grid">
          {/* Recent Activity */}
          <div className="dashboard-card activity-card">
            <div className="card-header">
              <h3>Recent Activity</h3>
              <Activity className="card-icon" />
            </div>
            <div className="activity-list">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div 
                    className="activity-icon"
                    style={{ color: getSeverityColor(activity.severity) }}
                  >
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="activity-content">
                    <div className="activity-message">{activity.message}</div>
                    <div className="activity-time">{activity.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Alerts */}
          <div className="dashboard-card alerts-card">
            <div className="card-header">
              <h3>System Alerts</h3>
              <AlertTriangle className="card-icon" />
            </div>
            <div className="alerts-list">
              {systemAlerts.map((alert) => (
                <div key={alert.id} className={`alert-item ${alert.type}`}>
                  <div className="alert-content">
                    <h4>{alert.title}</h4>
                    <p>{alert.message}</p>
                  </div>
                  <button className="alert-action">
                    {alert.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-card actions-card">
            <div className="card-header">
              <h3>Quick Actions</h3>
              <Settings className="card-icon" />
            </div>
            <div className="actions-grid">
              <button className="action-btn">
                <Users size={20} />
                <span>Manage Users</span>
              </button>
              <button className="action-btn">
                <BarChart3 size={20} />
                <span>View Analytics</span>
              </button>
              <button className="action-btn">
                <Settings size={20} />
                <span>System Settings</span>
              </button>
              <button className="action-btn">
                <Eye size={20} />
                <span>AI Model Status</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .admin-dashboard {
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .welcome-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .welcome-content h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 8px 0;
        }

        .welcome-content p {
          color: #6b7280;
          margin: 0;
        }

        .admin-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 600;
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

        .stat-icon.users {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        }

        .stat-icon.patients {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .stat-icon.doctors {
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
        }

        .stat-icon.analyses {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }

        .stat-icon.high-risk {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        }

        .stat-icon.system {
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
        }

        .stat-content h3 {
          font-size: 0.9rem;
          color: #6b7280;
          margin: 0 0 4px 0;
          font-weight: 500;
        }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .stat-status {
          font-size: 1.4rem;
          font-weight: 600;
          color: #10b981;
          margin-bottom: 4px;
        }

        .stat-change {
          font-size: 0.8rem;
          color: #10b981;
          font-weight: 500;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
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

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .activity-item {
          display: flex;
          gap: 12px;
          padding: 12px;
          background: #f9fafb;
          border-radius: 8px;
        }

        .activity-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .activity-content {
          flex: 1;
        }

        .activity-message {
          font-size: 0.9rem;
          color: #374151;
          margin-bottom: 4px;
        }

        .activity-time {
          font-size: 0.8rem;
          color: #9ca3af;
        }

        .alerts-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .alert-item {
          padding: 16px;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .alert-item.warning {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .alert-item.info {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .alert-content h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 4px 0;
        }

        .alert-item.warning .alert-content h4 {
          color: #d97706;
        }

        .alert-item.info .alert-content h4 {
          color: #2563eb;
        }

        .alert-content p {
          font-size: 0.9rem;
          color: #6b7280;
          margin: 0;
        }

        .alert-action {
          background: #667eea;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .alert-action:hover {
          background: #5b6ee8;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
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
          .welcome-card {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }

          .actions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
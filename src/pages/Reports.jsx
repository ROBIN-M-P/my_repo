import React, { useState } from 'react';
import { FileText, Download, Calendar, User, Eye, TrendingUp, Filter, Search } from 'lucide-react';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('all');
  const [dateRange, setDateRange] = useState('30');
  const [searchTerm, setSearchTerm] = useState('');

  const reports = [
    {
      id: 1,
      patientName: 'John Smith',
      patientId: 'P001',
      testDate: '2024-01-15',
      testType: 'Diabetic Retinopathy Screening',
      result: 'Moderate NPDR',
      riskLevel: 'Medium',
      confidence: 94,
      doctor: 'Dr. Sarah Johnson'
    },
    {
      id: 2,
      patientName: 'Maria Garcia',
      patientId: 'P002',
      testDate: '2024-01-14',
      testType: 'Glaucoma Detection',
      result: 'Early Glaucoma',
      riskLevel: 'High',
      confidence: 89,
      doctor: 'Dr. Michael Chen'
    },
    {
      id: 3,
      patientName: 'Robert Wilson',
      patientId: 'P003',
      testDate: '2024-01-13',
      testType: 'Macular Degeneration',
      result: 'No AMD Detected',
      riskLevel: 'Low',
      confidence: 97,
      doctor: 'Dr. Emily Davis'
    },
    {
      id: 4,
      patientName: 'Lisa Anderson',
      patientId: 'P004',
      testDate: '2024-01-12',
      testType: 'Comprehensive Screening',
      result: 'Multiple Conditions',
      riskLevel: 'High',
      confidence: 91,
      doctor: 'Dr. Sarah Johnson'
    },
    {
      id: 5,
      patientName: 'David Brown',
      patientId: 'P005',
      testDate: '2024-01-11',
      testType: 'Hypertensive Retinopathy',
      result: 'Grade 2 HR',
      riskLevel: 'Medium',
      confidence: 88,
      doctor: 'Dr. Michael Chen'
    }
  ];

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.testType.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedReport === 'all' || 
                         report.riskLevel.toLowerCase() === selectedReport.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  const getRiskColor = (risk) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const generateReport = (report) => {
    // Simulate report generation
    alert(`Generating detailed report for ${report.patientName}...`);
  };

  const exportAllReports = () => {
    // Simulate export functionality
    alert('Exporting all reports to PDF...');
  };

  return (
    <div className="reports-page">
      <div className="reports-header">
        <div className="header-content">
          <h1>
            <FileText className="icon" />
            Clinical Reports
          </h1>
          <p>Generate and manage AI-powered retinal analysis reports</p>
        </div>
        <button className="export-btn" onClick={exportAllReports}>
          <Download size={20} />
          Export All Reports
        </button>
      </div>

      <div className="reports-controls">
        <div className="search-filter-row">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search patients, IDs, or test types..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-controls">
            <div className="filter-group">
              <Filter size={16} />
              <select 
                value={selectedReport} 
                onChange={(e) => setSelectedReport(e.target.value)}
              >
                <option value="all">All Risk Levels</option>
                <option value="high">High Risk</option>
                <option value="medium">Medium Risk</option>
                <option value="low">Low Risk</option>
              </select>
            </div>
            
            <div className="filter-group">
              <Calendar size={16} />
              <select 
                value={dateRange} 
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 3 months</option>
                <option value="365">Last year</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="reports-stats">
        <div className="stat-card">
          <div className="stat-icon high-risk">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <h3>High Risk Cases</h3>
            <p className="stat-number">2</p>
            <p className="stat-change">+1 this week</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon medium-risk">
            <Eye size={24} />
          </div>
          <div className="stat-content">
            <h3>Total Screenings</h3>
            <p className="stat-number">5</p>
            <p className="stat-change">+3 this week</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon low-risk">
            <User size={24} />
          </div>
          <div className="stat-content">
            <h3>Patients Screened</h3>
            <p className="stat-number">5</p>
            <p className="stat-change">+2 this week</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <FileText size={24} />
          </div>
          <div className="stat-content">
            <h3>Avg. Confidence</h3>
            <p className="stat-number">91.8%</p>
            <p className="stat-change">+2.1% this week</p>
          </div>
        </div>
      </div>

      <div className="reports-table">
        <div className="table-header">
          <h2>Recent Analysis Reports</h2>
          <p>Click on any report to view detailed analysis</p>
        </div>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Test Date</th>
                <th>Test Type</th>
                <th>Result</th>
                <th>Risk Level</th>
                <th>Confidence</th>
                <th>Doctor</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map(report => (
                <tr key={report.id}>
                  <td>
                    <div className="patient-info">
                      <strong>{report.patientName}</strong>
                      <span className="patient-id">{report.patientId}</span>
                    </div>
                  </td>
                  <td>{new Date(report.testDate).toLocaleDateString()}</td>
                  <td>{report.testType}</td>
                  <td>
                    <span className="result-badge">{report.result}</span>
                  </td>
                  <td>
                    <span className={`risk-badge ${getRiskColor(report.riskLevel)}`}>
                      {report.riskLevel}
                    </span>
                  </td>
                  <td>
                    <div className="confidence-bar">
                      <div 
                        className="confidence-fill" 
                        style={{ width: `${report.confidence}%` }}
                      ></div>
                      <span>{report.confidence}%</span>
                    </div>
                  </td>
                  <td>{report.doctor}</td>
                  <td>
                    <button 
                      className="action-btn"
                      onClick={() => generateReport(report)}
                    >
                      <Download size={16} />
                      Generate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .reports-page {
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .reports-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #e5e7eb;
        }

        .header-content h1 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 0.5rem 0;
        }

        .header-content p {
          color: #6b7280;
          font-size: 1.1rem;
          margin: 0;
        }

        .icon {
          color: #3b82f6;
        }

        .export-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #3b82f6;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .export-btn:hover {
          background: #2563eb;
        }

        .reports-controls {
          margin-bottom: 2rem;
        }

        .search-filter-row {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .search-box {
          position: relative;
          flex: 1;
          min-width: 300px;
        }

        .search-box svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }

        .search-box input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
        }

        .search-box input:focus {
          outline: none;
          border-color: #3b82f6;
        }

        .filter-controls {
          display: flex;
          gap: 1rem;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          padding: 0.5rem 1rem;
        }

        .filter-group svg {
          color: #6b7280;
        }

        .filter-group select {
          border: none;
          background: none;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .filter-group select:focus {
          outline: none;
        }

        .reports-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3f4f6;
          color: #6b7280;
        }

        .stat-icon.high-risk {
          background: #fef2f2;
          color: #dc2626;
        }

        .stat-icon.medium-risk {
          background: #fffbeb;
          color: #d97706;
        }

        .stat-icon.low-risk {
          background: #f0fdf4;
          color: #16a34a;
        }

        .stat-content h3 {
          font-size: 0.9rem;
          color: #6b7280;
          margin: 0 0 0.25rem 0;
          font-weight: 500;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 0.25rem 0;
        }

        .stat-change {
          font-size: 0.8rem;
          color: #16a34a;
          margin: 0;
        }

        .reports-table {
          background: white;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          overflow: hidden;
        }

        .table-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .table-header h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 0.25rem 0;
        }

        .table-header p {
          color: #6b7280;
          margin: 0;
        }

        .table-container {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th {
          background: #f9fafb;
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          color: #374151;
          border-bottom: 1px solid #e5e7eb;
        }

        td {
          padding: 1rem;
          border-bottom: 1px solid #f3f4f6;
        }

        tr:hover {
          background: #f9fafb;
        }

        .patient-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .patient-id {
          font-size: 0.8rem;
          color: #6b7280;
        }

        .result-badge {
          background: #f3f4f6;
          color: #374151;
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .risk-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .confidence-bar {
          position: relative;
          background: #f3f4f6;
          height: 20px;
          border-radius: 10px;
          overflow: hidden;
          min-width: 80px;
        }

        .confidence-fill {
          height: 100%;
          background: linear-gradient(90deg, #10b981, #3b82f6);
          transition: width 0.3s ease;
        }

        .confidence-bar span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 0.7rem;
          font-weight: 600;
          color: #1f2937;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #3b82f6;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .action-btn:hover {
          background: #2563eb;
        }

        @media (max-width: 768px) {
          .reports-page {
            padding: 1rem;
          }

          .reports-header {
            flex-direction: column;
            gap: 1rem;
          }

          .search-filter-row {
            flex-direction: column;
            align-items: stretch;
          }

          .search-box {
            min-width: auto;
          }

          .filter-controls {
            justify-content: space-between;
          }

          .reports-stats {
            grid-template-columns: 1fr;
          }

          .table-container {
            font-size: 0.8rem;
          }

          th, td {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Reports;
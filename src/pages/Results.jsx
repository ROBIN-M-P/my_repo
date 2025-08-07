import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Eye, Palette, Target, Download, Trash2, RefreshCw } from 'lucide-react';

const Results = () => {
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedResults = JSON.parse(localStorage.getItem('visionTestResults') || '[]');
    setResults(savedResults.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

  const getTestIcon = (testType) => {
    switch (testType) {
      case 'Color Blindness Test':
        return <Palette className="test-icon" />;
      case 'Visual Acuity Test':
        return <Eye className="test-icon" />;
      case 'Astigmatism Test':
        return <Target className="test-icon" />;
      default:
        return <Eye className="test-icon" />;
    }
  };

  const getStatusColor = (status) => {
    if (status.includes('Normal') || status.includes('Excellent') || status.includes('Good')) {
      return 'success';
    } else if (status.includes('Fair') || status.includes('Mild') || status.includes('Moderate')) {
      return 'warning';
    } else {
      return 'danger';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredResults = results.filter(result => {
    if (filter === 'all') return true;
    return result.testType.toLowerCase().includes(filter);
  });

  const clearAllResults = () => {
    if (window.confirm('Are you sure you want to delete all test results? This action cannot be undone.')) {
      localStorage.removeItem('visionTestResults');
      setResults([]);
    }
  };

  const exportResults = () => {
    const dataStr = JSON.stringify(results, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `vision-test-results-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="results-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Test Results</h1>
          <p className="page-subtitle">
            Review your vision test history and track your eye health over time
          </p>
        </div>

        <div className="results-controls">
          <div className="filter-section">
            <label htmlFor="filter">Filter by test type:</label>
            <select 
              id="filter" 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Tests</option>
              <option value="color">Color Blindness</option>
              <option value="visual">Visual Acuity</option>
              <option value="astigmatism">Astigmatism</option>
            </select>
          </div>

          <div className="action-buttons">
            <button onClick={exportResults} className="btn btn-secondary" disabled={results.length === 0}>
              <Download />
              Export Results
            </button>
            <button onClick={clearAllResults} className="btn btn-danger" disabled={results.length === 0}>
              <Trash2 />
              Clear All
            </button>
          </div>
        </div>

        {filteredResults.length === 0 ? (
          <div className="no-results">
            <div className="no-results-card">
              <div className="no-results-icon">
                <Eye size={64} />
              </div>
              <h3>No Test Results Found</h3>
              <p>
                {results.length === 0 
                  ? "You haven't taken any vision tests yet. Start with a comprehensive screening to track your eye health."
                  : "No results match your current filter. Try selecting a different test type."
                }
              </p>
              <div className="no-results-actions">
                <Link to="/tests" className="btn btn-primary">
                  Take a Vision Test
                </Link>
                {results.length > 0 && (
                  <button onClick={() => setFilter('all')} className="btn btn-secondary">
                    Show All Results
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="results-grid">
            {filteredResults.map((result, index) => (
              <div key={index} className="result-card">
                <div className="result-header">
                  <div className="result-info">
                    {getTestIcon(result.testType)}
                    <div className="result-meta">
                      <h3 className="result-title">{result.testType}</h3>
                      <div className="result-date">
                        <Calendar size={16} />
                        {formatDate(result.date)}
                      </div>
                    </div>
                  </div>
                  <div className={`result-status ${getStatusColor(result.status)}`}>
                    {result.status}
                  </div>
                </div>

                <div className="result-content">
                  <div className="result-details">
                    {result.testType === 'Color Blindness Test' && (
                      <div className="detail-item">
                        <strong>Score:</strong> {result.score}
                      </div>
                    )}
                    {result.testType === 'Visual Acuity Test' && (
                      <>
                        <div className="detail-item">
                          <strong>Left Eye:</strong> {result.leftEye}
                        </div>
                        <div className="detail-item">
                          <strong>Right Eye:</strong> {result.rightEye}
                        </div>
                      </>
                    )}
                    {result.testType === 'Astigmatism Test' && (
                      <>
                        <div className="detail-item">
                          <strong>Both Eyes:</strong> {result.bothEyes}
                        </div>
                        <div className="detail-item">
                          <strong>Left Eye:</strong> {result.leftEye}
                        </div>
                        <div className="detail-item">
                          <strong>Right Eye:</strong> {result.rightEye}
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="result-description">
                    <p>{result.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="results-footer">
          <div className="disclaimer">
            <h4>Important Reminder</h4>
            <p>
              These test results are for screening purposes only and should not replace regular professional eye examinations. 
              If you have concerns about your vision or notice any changes, please consult with a qualified eye care professional.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .results-page {
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .results-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          padding: 20px 30px;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
        }

        .filter-section {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .filter-section label {
          font-weight: 600;
          color: #374151;
        }

        .filter-select {
          padding: 8px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .action-buttons {
          display: flex;
          gap: 12px;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .result-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .result-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          border-color: #e5e7eb;
        }

        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .result-info {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .test-icon {
          width: 40px;
          height: 40px;
          color: #667eea;
          flex-shrink: 0;
        }

        .result-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .result-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .result-date {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #6b7280;
          font-size: 0.9rem;
        }

        .result-status {
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          text-align: center;
          min-width: 100px;
        }

        .result-status.success {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .result-status.warning {
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .result-status.danger {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .result-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .result-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .detail-item {
          color: #374151;
          font-size: 0.95rem;
        }

        .detail-item strong {
          color: #1f2937;
        }

        .result-description {
          background: #f9fafb;
          padding: 16px;
          border-radius: 12px;
          border-left: 4px solid #667eea;
        }

        .result-description p {
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }

        .no-results {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }

        .no-results-card {
          background: white;
          border-radius: 20px;
          padding: 60px 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 500px;
        }

        .no-results-icon {
          color: #9ca3af;
          margin-bottom: 24px;
          display: flex;
          justify-content: center;
        }

        .no-results-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 16px 0;
        }

        .no-results-card p {
          color: #6b7280;
          line-height: 1.6;
          margin: 0 0 32px 0;
        }

        .no-results-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .results-footer {
          margin-top: 60px;
        }

        .disclaimer {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
        }

        .disclaimer h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #d97706;
          margin: 0 0 12px 0;
        }

        .disclaimer p {
          color: #92400e;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .results-controls {
            flex-direction: column;
            gap: 20px;
            padding: 20px;
          }

          .filter-section {
            width: 100%;
            justify-content: center;
          }

          .action-buttons {
            width: 100%;
            justify-content: center;
          }

          .results-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .result-card {
            padding: 24px;
          }

          .result-header {
            flex-direction: column;
            gap: 16px;
          }

          .result-status {
            align-self: flex-start;
          }

          .no-results-card {
            padding: 40px 20px;
          }

          .no-results-actions {
            flex-direction: column;
            align-items: center;
          }

          .disclaimer {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Results;
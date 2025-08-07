import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RotateCcw, Eye } from 'lucide-react';

const AstigmatismTest = () => {
  const navigate = useNavigate();
  const [currentEye, setCurrentEye] = useState('both');
  const [testResults, setTestResults] = useState({});
  const [testComplete, setTestComplete] = useState(false);

  const eyeOptions = [
    { value: 'both', label: 'Both Eyes Open' },
    { value: 'left', label: 'Left Eye Only (cover right)' },
    { value: 'right', label: 'Right Eye Only (cover left)' }
  ];

  const handleResponse = (hasAstigmatism) => {
    setTestResults(prev => ({
      ...prev,
      [currentEye]: hasAstigmatism
    }));

    if (currentEye === 'both') {
      setCurrentEye('left');
    } else if (currentEye === 'left') {
      setCurrentEye('right');
    } else {
      setTestComplete(true);
    }
  };

  const calculateResults = () => {
    const bothEyes = testResults.both;
    const leftEye = testResults.left;
    const rightEye = testResults.right;

    let status = 'Normal';
    let message = 'No signs of astigmatism detected.';
    let color = 'success';

    if (bothEyes || leftEye || rightEye) {
      if (bothEyes && leftEye && rightEye) {
        status = 'Significant Astigmatism';
        message = 'Astigmatism detected in both eyes. Consider consulting an eye care professional.';
        color = 'danger';
      } else if ((bothEyes && leftEye) || (bothEyes && rightEye) || (leftEye && rightEye)) {
        status = 'Moderate Astigmatism';
        message = 'Possible astigmatism detected. An eye examination is recommended.';
        color = 'warning';
      } else {
        status = 'Mild Astigmatism';
        message = 'Minor astigmatism may be present. Monitor and consider professional evaluation.';
        color = 'warning';
      }
    }

    return { status, message, color };
  };

  const restartTest = () => {
    setCurrentEye('both');
    setTestResults({});
    setTestComplete(false);
  };

  const saveResults = () => {
    const results = calculateResults();
    
    const testData = {
      testType: 'Astigmatism Test',
      date: new Date().toISOString(),
      bothEyes: testResults.both ? 'Detected' : 'Normal',
      leftEye: testResults.left ? 'Detected' : 'Normal',
      rightEye: testResults.right ? 'Detected' : 'Normal',
      status: results.status,
      details: results.message
    };
    
    const existingResults = JSON.parse(localStorage.getItem('visionTestResults') || '[]');
    existingResults.push(testData);
    localStorage.setItem('visionTestResults', JSON.stringify(existingResults));
    
    navigate('/results');
  };

  if (testComplete) {
    const results = calculateResults();
    
    return (
      <div className="test-complete">
        <div className="container">
          <div className="results-card">
            <h2 className="results-title">Astigmatism Test Complete</h2>
            <div className={`results-status ${results.color}`}>
              <h3>{results.status}</h3>
              <p>{results.message}</p>
            </div>
            
            <div className="results-details">
              <h4>Test Summary</h4>
              <div className="test-summary">
                <div className="summary-item">
                  <strong>Both Eyes:</strong> {testResults.both ? 'Astigmatism detected' : 'Normal'}
                </div>
                <div className="summary-item">
                  <strong>Left Eye:</strong> {testResults.left ? 'Astigmatism detected' : 'Normal'}
                </div>
                <div className="summary-item">
                  <strong>Right Eye:</strong> {testResults.right ? 'Astigmatism detected' : 'Normal'}
                </div>
              </div>
            </div>
            
            <div className="results-actions">
              <button onClick={restartTest} className="btn btn-secondary">
                <RotateCcw />
                Retake Test
              </button>
              <button onClick={saveResults} className="btn btn-primary">
                Save Results
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getCurrentEyeLabel = () => {
    return eyeOptions.find(option => option.value === currentEye)?.label || '';
  };

  return (
    <div className="astigmatism-test">
      <div className="container">
        <div className="test-header">
          <button onClick={() => navigate('/tests')} className="btn btn-secondary">
            <ArrowLeft />
            Back to Tests
          </button>
          <div className="test-info">
            <div className="current-eye">
              <Eye />
              {getCurrentEyeLabel()}
            </div>
            <div className="test-progress">
              Step {eyeOptions.findIndex(opt => opt.value === currentEye) + 1} of {eyeOptions.length}
            </div>
          </div>
        </div>

        <div className="test-content">
          <div className="test-card">
            <h2 className="test-title">Astigmatism Test</h2>
            <div className="test-instruction">
              <p>
                <strong>{getCurrentEyeLabel()}</strong>
              </p>
              <p>
                Look at the radial dial below. All lines should appear equally dark and sharp. 
                If some lines appear darker, blurrier, or more distinct than others, this may indicate astigmatism.
              </p>
            </div>
            
            <div className="radial-dial-container">
              <div className="radial-dial">
                <svg width="300" height="300" viewBox="0 0 300 300">
                  {Array.from({ length: 12 }, (_, i) => {
                    const angle = (i * 30) * (Math.PI / 180);
                    const x1 = 150 + Math.cos(angle) * 60;
                    const y1 = 150 + Math.sin(angle) * 60;
                    const x2 = 150 + Math.cos(angle) * 130;
                    const y2 = 150 + Math.sin(angle) * 130;
                    
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#1f2937"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    );
                  })}
                  <circle
                    cx="150"
                    cy="150"
                    r="5"
                    fill="#667eea"
                  />
                </svg>
              </div>
            </div>
            
            <div className="question-section">
              <h3>Do some lines appear darker, sharper, or more distinct than others?</h3>
              <div className="response-buttons">
                <button 
                  onClick={() => handleResponse(true)} 
                  className="btn btn-danger response-btn"
                >
                  Yes, some lines look different
                </button>
                <button 
                  onClick={() => handleResponse(false)} 
                  className="btn btn-success response-btn"
                >
                  No, all lines look the same
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .astigmatism-test {
          min-height: 100vh;
          padding: 20px 0 60px 0;
        }

        .test-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          background: white;
          padding: 20px 30px;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .test-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .current-eye {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: #667eea;
          font-size: 1.1rem;
        }

        .test-progress {
          color: #6b7280;
          font-size: 0.9rem;
        }

        .test-content {
          display: flex;
          justify-content: center;
        }

        .test-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 700px;
          width: 100%;
          text-align: center;
        }

        .test-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 20px 0;
        }

        .test-instruction {
          background: rgba(102, 126, 234, 0.1);
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 40px;
        }

        .test-instruction p {
          color: #374151;
          font-size: 1rem;
          margin: 8px 0;
          line-height: 1.6;
        }

        .test-instruction p:first-child {
          font-size: 1.1rem;
          font-weight: 600;
          color: #667eea;
        }

        .radial-dial-container {
          display: flex;
          justify-content: center;
          margin: 40px 0;
        }

        .radial-dial {
          background: white;
          border-radius: 50%;
          padding: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border: 2px solid #f3f4f6;
        }

        .question-section {
          margin-top: 40px;
        }

        .question-section h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 30px 0;
          line-height: 1.4;
        }

        .response-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .response-btn {
          min-width: 200px;
          padding: 16px 24px;
          font-size: 1rem;
        }

        .test-complete {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .results-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
          text-align: center;
        }

        .results-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 30px 0;
        }

        .results-status {
          padding: 20px;
          border-radius: 16px;
          margin-bottom: 30px;
        }

        .results-status.success {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .results-status.success h3 {
          color: #059669;
        }

        .results-status.warning {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .results-status.warning h3 {
          color: #d97706;
        }

        .results-status.danger {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .results-status.danger h3 {
          color: #dc2626;
        }

        .results-status h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 8px 0;
        }

        .results-status p {
          margin: 0;
          font-size: 1.1rem;
        }

        .results-details {
          background: #f9fafb;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 30px;
        }

        .results-details h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 16px 0;
        }

        .test-summary {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .summary-item {
          color: #6b7280;
          font-size: 1rem;
          text-align: left;
        }

        .results-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .test-header {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .test-card {
            padding: 30px 20px;
          }

          .radial-dial svg {
            width: 250px;
            height: 250px;
          }

          .response-buttons {
            flex-direction: column;
            align-items: center;
          }

          .response-btn {
            min-width: auto;
            width: 100%;
            max-width: 300px;
          }

          .results-actions {
            flex-direction: column;
          }

          .summary-item {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default AstigmatismTest;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RotateCcw, Eye } from 'lucide-react';

const ContrastSensitivityTest = () => {
  const navigate = useNavigate();
  const [currentLevel, setCurrentLevel] = useState(0);
  const [testResults, setTestResults] = useState({});
  const [currentEye, setCurrentEye] = useState('both');
  const [testComplete, setTestComplete] = useState(false);

  // Contrast levels from high to low contrast
  const contrastLevels = [
    { level: 1, contrast: '100%', description: 'High Contrast' },
    { level: 2, contrast: '75%', description: 'Good Contrast' },
    { level: 3, contrast: '50%', description: 'Medium Contrast' },
    { level: 4, contrast: '25%', description: 'Low Contrast' },
    { level: 5, contrast: '15%', description: 'Very Low Contrast' },
    { level: 6, contrast: '10%', description: 'Minimal Contrast' },
    { level: 7, contrast: '5%', description: 'Extremely Low Contrast' }
  ];

  const eyeOptions = [
    { value: 'both', label: 'Both Eyes Open' },
    { value: 'left', label: 'Left Eye Only (cover right)' },
    { value: 'right', label: 'Right Eye Only (cover left)' }
  ];

  const handleResponse = (canSee) => {
    setTestResults(prev => ({
      ...prev,
      [currentEye]: {
        ...prev[currentEye],
        [currentLevel]: canSee
      }
    }));

    if (!canSee || currentLevel === contrastLevels.length - 1) {
      // Move to next eye or complete test
      if (currentEye === 'both') {
        setCurrentEye('left');
        setCurrentLevel(0);
      } else if (currentEye === 'left') {
        setCurrentEye('right');
        setCurrentLevel(0);
      } else {
        setTestComplete(true);
      }
    } else {
      setCurrentLevel(prev => prev + 1);
    }
  };

  const calculateResults = () => {
    const getContrastThreshold = (eyeResults) => {
      if (!eyeResults) return 'Poor';
      
      for (let i = contrastLevels.length - 1; i >= 0; i--) {
        if (eyeResults[i] === true) {
          if (i >= 5) return 'Excellent';
          if (i >= 4) return 'Good';
          if (i >= 2) return 'Fair';
          return 'Poor';
        }
      }
      return 'Poor';
    };

    const bothEyes = getContrastThreshold(testResults.both);
    const leftEye = getContrastThreshold(testResults.left);
    const rightEye = getContrastThreshold(testResults.right);

    return { bothEyes, leftEye, rightEye };
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Excellent': return 'success';
      case 'Good': return 'success';
      case 'Fair': return 'warning';
      case 'Poor': return 'danger';
      default: return 'warning';
    }
  };

  const restartTest = () => {
    setCurrentLevel(0);
    setCurrentEye('both');
    setTestResults({});
    setTestComplete(false);
  };

  const saveResults = () => {
    const results = calculateResults();
    
    const testData = {
      testType: 'Contrast Sensitivity Test',
      date: new Date().toISOString(),
      bothEyes: results.bothEyes,
      leftEye: results.leftEye,
      rightEye: results.rightEye,
      status: results.bothEyes,
      details: `Both eyes: ${results.bothEyes}, Left: ${results.leftEye}, Right: ${results.rightEye}`
    };
    
    const existingResults = JSON.parse(localStorage.getItem('visionTestResults') || '[]');
    existingResults.push(testData);
    localStorage.setItem('visionTestResults', JSON.stringify(existingResults));
    
    navigate('/results');
  };

  if (testComplete) {
    const results = calculateResults();
    const overallStatus = results.bothEyes;
    
    return (
      <div className="test-complete">
        <div className="container">
          <div className="results-card">
            <h2 className="results-title">Contrast Sensitivity Test Complete</h2>
            <div className={`results-status ${getStatusColor(overallStatus)}`}>
              <h3>{overallStatus} Contrast Sensitivity</h3>
              <p>Your ability to detect contrast differences</p>
            </div>
            
            <div className="results-details">
              <h4>Detailed Results</h4>
              <div className="eye-results">
                <div className="eye-result">
                  <strong>Both Eyes:</strong> {results.bothEyes}
                </div>
                <div className="eye-result">
                  <strong>Left Eye:</strong> {results.leftEye}
                </div>
                <div className="eye-result">
                  <strong>Right Eye:</strong> {results.rightEye}
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

  const currentContrast = contrastLevels[currentLevel];

  return (
    <div className="contrast-test">
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
              Level {currentLevel + 1} of {contrastLevels.length}
            </div>
          </div>
        </div>

        <div className="test-content">
          <div className="test-card">
            <h2 className="test-title">Contrast Sensitivity Test</h2>
            <div className="test-instruction">
              <p><strong>{getCurrentEyeLabel()}</strong></p>
              <p>
                Look at the pattern below. Can you see the circular pattern or stripes? 
                This tests your ability to detect differences in contrast.
              </p>
            </div>
            
            <div className="contrast-pattern-container">
              <div className="contrast-info">
                <span className="contrast-level">{currentContrast.description}</span>
                <span className="contrast-value">{currentContrast.contrast} Contrast</span>
              </div>
              
              <div className="contrast-pattern">
                <svg width="300" height="300" viewBox="0 0 300 300">
                  <defs>
                    <pattern id="stripes" patternUnits="userSpaceOnUse" width="20" height="20">
                      <rect width="10" height="20" fill="#000" opacity={currentContrast.contrast} />
                      <rect x="10" width="10" height="20" fill="#fff" />
                    </pattern>
                  </defs>
                  <circle
                    cx="150"
                    cy="150"
                    r="120"
                    fill="url(#stripes)"
                    stroke="#ccc"
                    strokeWidth="2"
                  />
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
              <h3>Can you clearly see the striped pattern in the circle?</h3>
              <div className="response-buttons">
                <button 
                  onClick={() => handleResponse(true)} 
                  className="btn btn-success response-btn"
                >
                  Yes, I can see the pattern
                </button>
                <button 
                  onClick={() => handleResponse(false)} 
                  className="btn btn-danger response-btn"
                >
                  No, I cannot see the pattern
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contrast-test {
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

        .contrast-pattern-container {
          margin: 40px 0;
        }

        .contrast-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 12px 20px;
          background: #f9fafb;
          border-radius: 12px;
        }

        .contrast-level {
          font-weight: 600;
          color: #374151;
        }

        .contrast-value {
          font-size: 0.9rem;
          color: #6b7280;
        }

        .contrast-pattern {
          display: flex;
          justify-content: center;
          padding: 20px;
          background: #f9fafb;
          border-radius: 16px;
          border: 2px solid #e5e7eb;
        }

        .question-section {
          margin-top: 40px;
        }

        .question-section h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 30px 0;
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

        .eye-results {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .eye-result {
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

          .contrast-pattern svg {
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

          .eye-result {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ContrastSensitivityTest;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, RotateCcw, Eye } from 'lucide-react';

const VisualAcuityTest = () => {
  const navigate = useNavigate();
  const [currentLine, setCurrentLine] = useState(0);
  const [testResults, setTestResults] = useState({});
  const [currentEye, setCurrentEye] = useState('left'); // 'left' or 'right'
  const [testComplete, setTestComplete] = useState(false);
  const [canSee, setCanSee] = useState(null);

  // Snellen chart lines (simplified)
  const snellenLines = [
    { size: '20/200', letters: ['E'], fontSize: '4rem' },
    { size: '20/100', letters: ['F', 'P'], fontSize: '3rem' },
    { size: '20/70', letters: ['T', 'O', 'Z'], fontSize: '2.5rem' },
    { size: '20/50', letters: ['L', 'P', 'E', 'D'], fontSize: '2rem' },
    { size: '20/40', letters: ['E', 'D', 'F', 'C', 'Z'], fontSize: '1.7rem' },
    { size: '20/30', letters: ['F', 'E', 'L', 'O', 'P', 'Z'], fontSize: '1.4rem' },
    { size: '20/25', letters: ['D', 'E', 'F', 'P', 'O', 'T', 'E'], fontSize: '1.2rem' },
    { size: '20/20', letters: ['E', 'F', 'P', 'T', 'O', 'Z', 'L', 'P'], fontSize: '1rem' }
  ];

  const handleResponse = (response) => {
    const eyeResults = testResults[currentEye] || {};
    eyeResults[currentLine] = response;
    
    setTestResults(prev => ({
      ...prev,
      [currentEye]: eyeResults
    }));

    if (response === 'no' || currentLine === snellenLines.length - 1) {
      // Move to next eye or complete test
      if (currentEye === 'left') {
        setCurrentEye('right');
        setCurrentLine(0);
        setCanSee(null);
      } else {
        setTestComplete(true);
      }
    } else {
      setCurrentLine(prev => prev + 1);
      setCanSee(null);
    }
  };

  const calculateResults = () => {
    const getLastReadableLine = (eyeResults) => {
      for (let i = snellenLines.length - 1; i >= 0; i--) {
        if (eyeResults[i] === 'yes') {
          return snellenLines[i].size;
        }
      }
      return '20/200+';
    };

    const leftEyeResult = getLastReadableLine(testResults.left || {});
    const rightEyeResult = getLastReadableLine(testResults.right || {});

    return {
      leftEye: leftEyeResult,
      rightEye: rightEyeResult,
      overall: leftEyeResult === rightEyeResult ? leftEyeResult : `L: ${leftEyeResult}, R: ${rightEyeResult}`
    };
  };

  const getVisionStatus = (acuity) => {
    if (acuity.includes('20/20') || acuity.includes('20/25')) {
      return { status: 'Excellent', color: 'success' };
    } else if (acuity.includes('20/30') || acuity.includes('20/40')) {
      return { status: 'Good', color: 'success' };
    } else if (acuity.includes('20/50') || acuity.includes('20/70')) {
      return { status: 'Fair', color: 'warning' };
    } else {
      return { status: 'Poor', color: 'danger' };
    }
  };

  const restartTest = () => {
    setCurrentLine(0);
    setCurrentEye('left');
    setTestResults({});
    setCanSee(null);
    setTestComplete(false);
  };

  const saveResults = () => {
    const results = calculateResults();
    const visionStatus = getVisionStatus(results.overall);
    
    const testData = {
      testType: 'Visual Acuity Test',
      date: new Date().toISOString(),
      leftEye: results.leftEye,
      rightEye: results.rightEye,
      overall: results.overall,
      status: visionStatus.status,
      details: `Left eye: ${results.leftEye}, Right eye: ${results.rightEye}`
    };
    
    const existingResults = JSON.parse(localStorage.getItem('visionTestResults') || '[]');
    existingResults.push(testData);
    localStorage.setItem('visionTestResults', JSON.stringify(existingResults));
    
    navigate('/results');
  };

  if (testComplete) {
    const results = calculateResults();
    const visionStatus = getVisionStatus(results.overall);
    
    return (
      <div className="test-complete">
        <div className="container">
          <div className="results-card">
            <h2 className="results-title">Visual Acuity Test Complete</h2>
            <div className={`results-status ${visionStatus.color}`}>
              <h3>{visionStatus.status} Vision</h3>
              <p>Overall acuity: {results.overall}</p>
            </div>
            
            <div className="results-details">
              <h4>Detailed Results</h4>
              <div className="eye-results">
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

  return (
    <div className="visual-acuity-test">
      <div className="container">
        <div className="test-header">
          <button onClick={() => navigate('/tests')} className="btn btn-secondary">
            <ArrowLeft />
            Back to Tests
          </button>
          <div className="test-info">
            <div className="current-eye">
              <Eye />
              Testing: {currentEye === 'left' ? 'Left' : 'Right'} Eye
            </div>
            <div className="current-line">
              Line {currentLine + 1} of {snellenLines.length}
            </div>
          </div>
        </div>

        <div className="test-content">
          <div className="test-card">
            <h2 className="test-title">Visual Acuity Test</h2>
            <div className="eye-instruction">
              <p>
                {currentEye === 'left' ? 'Cover your right eye' : 'Cover your left eye'} and 
                look at the letters below. Sit about 3 feet (1 meter) from your screen.
              </p>
            </div>
            
            <div className="snellen-chart">
              <div className="chart-line">
                <div className="line-size">{snellenLines[currentLine].size}</div>
                <div 
                  className="letters"
                  style={{ fontSize: snellenLines[currentLine].fontSize }}
                >
                  {snellenLines[currentLine].letters.join(' ')}
                </div>
              </div>
            </div>
            
            <div className="question-section">
              <h3>Can you clearly read these letters?</h3>
              <div className="response-buttons">
                <button 
                  onClick={() => handleResponse('yes')} 
                  className="btn btn-success response-btn"
                >
                  Yes, I can read them clearly
                </button>
                <button 
                  onClick={() => handleResponse('no')} 
                  className="btn btn-danger response-btn"
                >
                  No, they are blurry or unclear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .visual-acuity-test {
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

        .current-line {
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

        .eye-instruction {
          background: rgba(102, 126, 234, 0.1);
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 40px;
        }

        .eye-instruction p {
          color: #374151;
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0;
        }

        .snellen-chart {
          background: #f9fafb;
          padding: 60px 40px;
          border-radius: 16px;
          margin: 40px 0;
          border: 2px solid #e5e7eb;
        }

        .chart-line {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .line-size {
          font-size: 1rem;
          font-weight: 600;
          color: #6b7280;
          background: white;
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
        }

        .letters {
          font-family: 'Courier New', monospace;
          font-weight: 700;
          color: #1f2937;
          letter-spacing: 0.2em;
          line-height: 1.2;
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

          .snellen-chart {
            padding: 40px 20px;
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
        }
      `}</style>
    </div>
  );
};

export default VisualAcuityTest;
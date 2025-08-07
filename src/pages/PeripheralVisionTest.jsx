import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RotateCcw, Eye, Target } from 'lucide-react';

const PeripheralVisionTest = () => {
  const navigate = useNavigate();
  const [currentEye, setCurrentEye] = useState('left');
  const [testResults, setTestResults] = useState({});
  const [testComplete, setTestComplete] = useState(false);
  const [currentDot, setCurrentDot] = useState(null);
  const [dotsSeen, setDotsSeen] = useState([]);
  const [testStarted, setTestStarted] = useState(false);
  const [instructions, setInstructions] = useState(true);

  // Peripheral vision test positions (degrees from center)
  const testPositions = [
    { id: 1, x: 150, y: 50, position: 'Top', angle: '0°' },
    { id: 2, x: 250, y: 100, position: 'Top Right', angle: '45°' },
    { id: 3, x: 300, y: 150, position: 'Right', angle: '90°' },
    { id: 4, x: 250, y: 200, position: 'Bottom Right', angle: '135°' },
    { id: 5, x: 150, y: 250, position: 'Bottom', angle: '180°' },
    { id: 6, x: 50, y: 200, position: 'Bottom Left', angle: '225°' },
    { id: 7, x: 0, y: 150, position: 'Left', angle: '270°' },
    { id: 8, x: 50, y: 100, position: 'Top Left', angle: '315°' }
  ];

  const eyeOptions = [
    { value: 'left', label: 'Left Eye (cover right eye)' },
    { value: 'right', label: 'Right Eye (cover left eye)' }
  ];

  useEffect(() => {
    if (testStarted && !testComplete) {
      const timer = setTimeout(() => {
        showRandomDot();
      }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds

      return () => clearTimeout(timer);
    }
  }, [testStarted, currentDot, testComplete]);

  const showRandomDot = () => {
    if (dotsSeen.length >= testPositions.length) {
      // All dots shown for current eye, move to next eye or complete
      if (currentEye === 'left') {
        setCurrentEye('right');
        setDotsSeen([]);
        setCurrentDot(null);
        setTestStarted(false);
        setInstructions(true);
      } else {
        setTestComplete(true);
      }
      return;
    }

    const availableDots = testPositions.filter(pos => !dotsSeen.includes(pos.id));
    const randomDot = availableDots[Math.floor(Math.random() * availableDots.length)];
    setCurrentDot(randomDot);

    // Hide dot after 2 seconds if not clicked
    setTimeout(() => {
      if (currentDot && currentDot.id === randomDot.id) {
        setCurrentDot(null);
        setDotsSeen(prev => [...prev, randomDot.id]);
      }
    }, 2000);
  };

  const handleDotClick = (dotId) => {
    if (currentDot && currentDot.id === dotId) {
      // Correct dot clicked
      setTestResults(prev => ({
        ...prev,
        [currentEye]: {
          ...prev[currentEye],
          [dotId]: true
        }
      }));
      setDotsSeen(prev => [...prev, dotId]);
      setCurrentDot(null);
    }
  };

  const startTest = () => {
    setInstructions(false);
    setTestStarted(true);
    setDotsSeen([]);
    setCurrentDot(null);
  };

  const calculateResults = () => {
    const getPeripheralScore = (eyeResults) => {
      if (!eyeResults) return 'Poor';
      
      const detectedDots = Object.keys(eyeResults).length;
      const totalDots = testPositions.length;
      const percentage = (detectedDots / totalDots) * 100;
      
      if (percentage >= 90) return 'Excellent';
      if (percentage >= 75) return 'Good';
      if (percentage >= 50) return 'Fair';
      return 'Poor';
    };

    const leftEye = getPeripheralScore(testResults.left);
    const rightEye = getPeripheralScore(testResults.right);

    return { leftEye, rightEye };
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
    setCurrentEye('left');
    setTestResults({});
    setDotsSeen([]);
    setCurrentDot(null);
    setTestStarted(false);
    setInstructions(true);
    setTestComplete(false);
  };

  const saveResults = () => {
    const results = calculateResults();
    
    const testData = {
      testType: 'Peripheral Vision Test',
      date: new Date().toISOString(),
      leftEye: results.leftEye,
      rightEye: results.rightEye,
      status: results.leftEye === results.rightEye ? results.leftEye : `L: ${results.leftEye}, R: ${results.rightEye}`,
      details: `Left eye: ${results.leftEye}, Right eye: ${results.rightEye}`
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
            <h2 className="results-title">Peripheral Vision Test Complete</h2>
            <div className={`results-status ${getStatusColor(results.leftEye)}`}>
              <h3>Peripheral Vision Assessment</h3>
              <p>Your side vision detection ability</p>
            </div>
            
            <div className="results-details">
              <h4>Detailed Results</h4>
              <div className="eye-results">
                <div className="eye-result">
                  <strong>Left Eye:</strong> {results.leftEye}
                  <span className="detection-count">
                    ({Object.keys(testResults.left || {}).length}/{testPositions.length} detected)
                  </span>
                </div>
                <div className="eye-result">
                  <strong>Right Eye:</strong> {results.rightEye}
                  <span className="detection-count">
                    ({Object.keys(testResults.right || {}).length}/{testPositions.length} detected)
                  </span>
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
    <div className="peripheral-test">
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
            <div className="test-progress">
              {dotsSeen.length}/{testPositions.length} positions tested
            </div>
          </div>
        </div>

        <div className="test-content">
          <div className="test-card">
            <h2 className="test-title">Peripheral Vision Test</h2>
            
            {instructions ? (
              <div className="instructions-section">
                <div className="test-instruction">
                  <p><strong>{getCurrentEyeLabel()}</strong></p>
                  <p>
                    Focus on the center target and click on dots that appear in your peripheral vision. 
                    Don't move your eyes from the center - use only your side vision to detect the dots.
                  </p>
                </div>
                
                <div className="instruction-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-text">Cover your {currentEye === 'left' ? 'right' : 'left'} eye</div>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-text">Focus on the center target</div>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-text">Click dots you see in your peripheral vision</div>
                  </div>
                </div>
                
                <button onClick={startTest} className="btn btn-primary start-btn">
                  <Target />
                  Start {currentEye === 'left' ? 'Left' : 'Right'} Eye Test
                </button>
              </div>
            ) : (
              <div className="test-area">
                <div className="focus-instruction">
                  <p>Keep your eyes focused on the center target. Click dots that appear around the edges.</p>
                </div>
                
                <div className="peripheral-field">
                  <svg width="350" height="300" viewBox="0 0 350 300">
                    {/* Center fixation target */}
                    <circle
                      cx="175"
                      cy="150"
                      r="8"
                      fill="#667eea"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <text
                      x="175"
                      y="155"
                      textAnchor="middle"
                      fill="white"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      +
                    </text>
                    
                    {/* Test positions */}
                    {testPositions.map((position) => (
                      <g key={position.id}>
                        {/* Background circle for click area */}
                        <circle
                          cx={position.x + 25}
                          cy={position.y}
                          r="15"
                          fill="transparent"
                          stroke="rgba(102, 126, 234, 0.2)"
                          strokeWidth="1"
                          strokeDasharray="2,2"
                        />
                        
                        {/* Actual dot (only visible when currentDot matches) */}
                        {currentDot && currentDot.id === position.id && (
                          <circle
                            cx={position.x + 25}
                            cy={position.y}
                            r="6"
                            fill="#ef4444"
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleDotClick(position.id)}
                          />
                        )}
                        
                        {/* Clicked dots (green) */}
                        {testResults[currentEye] && testResults[currentEye][position.id] && (
                          <circle
                            cx={position.x + 25}
                            cy={position.y}
                            r="4"
                            fill="#10b981"
                          />
                        )}
                      </g>
                    ))}
                  </svg>
                </div>
                
                <div className="test-status">
                  <div className="status-item">
                    <span className="status-label">Dots Detected:</span>
                    <span className="status-value">{Object.keys(testResults[currentEye] || {}).length}</span>
                  </div>
                  <div className="status-item">
                    <span className="status-label">Remaining:</span>
                    <span className="status-value">{testPositions.length - dotsSeen.length}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .peripheral-test {
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
          max-width: 800px;
          width: 100%;
          text-align: center;
        }

        .test-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 30px 0;
        }

        .instructions-section {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .test-instruction {
          background: rgba(102, 126, 234, 0.1);
          padding: 20px;
          border-radius: 12px;
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

        .instruction-steps {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          max-width: 150px;
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .step-text {
          color: #374151;
          font-size: 0.9rem;
          text-align: center;
          line-height: 1.4;
        }

        .start-btn {
          padding: 16px 32px;
          font-size: 1.1rem;
        }

        .test-area {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .focus-instruction {
          background: rgba(239, 68, 68, 0.1);
          padding: 16px;
          border-radius: 12px;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .focus-instruction p {
          color: #dc2626;
          font-weight: 600;
          margin: 0;
        }

        .peripheral-field {
          background: #1f2937;
          border-radius: 16px;
          padding: 20px;
          display: flex;
          justify-content: center;
        }

        .test-status {
          display: flex;
          justify-content: center;
          gap: 40px;
          padding: 16px;
          background: #f9fafb;
          border-radius: 12px;
        }

        .status-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .status-label {
          font-size: 0.9rem;
          color: #6b7280;
        }

        .status-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1f2937;
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
          gap: 12px;
        }

        .eye-result {
          color: #6b7280;
          font-size: 1rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .detection-count {
          font-size: 0.9rem;
          color: #9ca3af;
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

          .instruction-steps {
            flex-direction: column;
            align-items: center;
          }

          .peripheral-field svg {
            width: 300px;
            height: 250px;
          }

          .test-status {
            flex-direction: column;
            gap: 16px;
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

export default PeripheralVisionTest;
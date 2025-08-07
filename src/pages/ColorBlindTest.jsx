import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';

const ColorBlindTest = () => {
  const navigate = useNavigate();
  const [currentPlate, setCurrentPlate] = useState(0);
  const [answers, setAnswers] = useState({});
  const [userInput, setUserInput] = useState('');
  const [testComplete, setTestComplete] = useState(false);

  // Ishihara test plates (simplified version)
  const testPlates = [
    { id: 1, correctAnswer: '12', description: 'Normal vision should see 12' },
    { id: 2, correctAnswer: '8', description: 'Normal vision should see 8' },
    { id: 3, correctAnswer: '29', description: 'Normal vision should see 29' },
    { id: 4, correctAnswer: '5', description: 'Normal vision should see 5' },
    { id: 5, correctAnswer: '3', description: 'Normal vision should see 3' },
    { id: 6, correctAnswer: '15', description: 'Normal vision should see 15' },
    { id: 7, correctAnswer: '74', description: 'Normal vision should see 74' },
    { id: 8, correctAnswer: '6', description: 'Normal vision should see 6' }
  ];

  const handleAnswer = () => {
    if (userInput.trim()) {
      setAnswers(prev => ({
        ...prev,
        [currentPlate]: userInput.trim()
      }));
      setUserInput('');
      
      if (currentPlate < testPlates.length - 1) {
        setCurrentPlate(prev => prev + 1);
      } else {
        setTestComplete(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentPlate > 0) {
      setCurrentPlate(prev => prev - 1);
      setUserInput(answers[currentPlate - 1] || '');
    }
  };

  const calculateResults = () => {
    let correctAnswers = 0;
    testPlates.forEach((plate, index) => {
      if (answers[index] === plate.correctAnswer) {
        correctAnswers++;
      }
    });
    
    const percentage = (correctAnswers / testPlates.length) * 100;
    
    if (percentage >= 80) {
      return {
        status: 'Normal',
        message: 'Your color vision appears to be normal.',
        color: 'success'
      };
    } else if (percentage >= 60) {
      return {
        status: 'Mild Deficiency',
        message: 'You may have a mild color vision deficiency.',
        color: 'warning'
      };
    } else {
      return {
        status: 'Significant Deficiency',
        message: 'You may have a significant color vision deficiency.',
        color: 'danger'
      };
    }
  };

  const restartTest = () => {
    setCurrentPlate(0);
    setAnswers({});
    setUserInput('');
    setTestComplete(false);
  };

  const saveResults = () => {
    const results = calculateResults();
    const testData = {
      testType: 'Color Blindness Test',
      date: new Date().toISOString(),
      score: `${Object.keys(answers).filter(key => answers[key] === testPlates[key].correctAnswer).length}/${testPlates.length}`,
      status: results.status,
      details: results.message
    };
    
    // Save to localStorage
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
            <h2 className="results-title">Color Blindness Test Complete</h2>
            <div className={`results-status ${results.color}`}>
              <h3>{results.status}</h3>
              <p>{results.message}</p>
            </div>
            
            <div className="results-details">
              <h4>Test Summary</h4>
              <p>Correct answers: {Object.keys(answers).filter(key => answers[key] === testPlates[key].correctAnswer).length} out of {testPlates.length}</p>
              <p>Accuracy: {Math.round((Object.keys(answers).filter(key => answers[key] === testPlates[key].correctAnswer).length / testPlates.length) * 100)}%</p>
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
    <div className="color-blind-test">
      <div className="container">
        <div className="test-header">
          <button onClick={() => navigate('/tests')} className="btn btn-secondary">
            <ArrowLeft />
            Back to Tests
          </button>
          <div className="test-progress">
            <span>Question {currentPlate + 1} of {testPlates.length}</span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentPlate + 1) / testPlates.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="test-content">
          <div className="test-card">
            <h2 className="test-title">Color Blindness Test</h2>
            <p className="test-instruction">
              Look at the circle below and enter the number you see. If you don't see a number, enter "0".
            </p>
            
            <div className="plate-container">
              <div className="ishihara-plate">
                <div className={`plate plate-${testPlates[currentPlate].id}`}>
                  <span className="plate-number">{testPlates[currentPlate].correctAnswer}</span>
                </div>
              </div>
            </div>
            
            <div className="answer-section">
              <label htmlFor="answer" className="answer-label">
                What number do you see?
              </label>
              <input
                id="answer"
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="answer-input"
                placeholder="Enter the number"
                maxLength="3"
                onKeyPress={(e) => e.key === 'Enter' && handleAnswer()}
              />
            </div>
            
            <div className="test-actions">
              <button 
                onClick={handlePrevious} 
                className="btn btn-secondary"
                disabled={currentPlate === 0}
              >
                <ArrowLeft />
                Previous
              </button>
              <button 
                onClick={handleAnswer} 
                className="btn btn-primary"
                disabled={!userInput.trim()}
              >
                {currentPlate === testPlates.length - 1 ? 'Finish Test' : 'Next'}
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .color-blind-test {
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

        .test-progress {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .test-progress span {
          font-weight: 600;
          color: #374151;
        }

        .progress-bar {
          width: 200px;
          height: 6px;
          background: #f3f4f6;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
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
          max-width: 600px;
          width: 100%;
          text-align: center;
        }

        .test-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 16px 0;
        }

        .test-instruction {
          color: #6b7280;
          font-size: 1.1rem;
          margin: 0 0 40px 0;
          line-height: 1.6;
        }

        .plate-container {
          margin: 40px 0;
          display: flex;
          justify-content: center;
        }

        .ishihara-plate {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .plate {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .plate-number {
          font-size: 4rem;
          font-weight: 900;
          opacity: 0.7;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        /* Simulated Ishihara plates */
        .plate-1 {
          background: radial-gradient(circle, #ff6b6b 20%, #4ecdc4 20%, #4ecdc4 40%, #ff6b6b 40%, #ff6b6b 60%, #4ecdc4 60%);
        }

        .plate-2 {
          background: radial-gradient(circle, #95e1d3 25%, #f38ba8 25%, #f38ba8 50%, #95e1d3 50%);
        }

        .plate-3 {
          background: radial-gradient(circle, #a8e6cf 30%, #ff8b94 30%, #ff8b94 60%, #a8e6cf 60%);
        }

        .plate-4 {
          background: radial-gradient(circle, #ffd93d 35%, #6bcf7f 35%, #6bcf7f 65%, #ffd93d 65%);
        }

        .plate-5 {
          background: radial-gradient(circle, #74b9ff 25%, #fd79a8 25%, #fd79a8 50%, #74b9ff 50%);
        }

        .plate-6 {
          background: radial-gradient(circle, #55a3ff 30%, #f8b500 30%, #f8b500 60%, #55a3ff 60%);
        }

        .plate-7 {
          background: radial-gradient(circle, #ff7675 20%, #00b894 20%, #00b894 40%, #ff7675 40%);
        }

        .plate-8 {
          background: radial-gradient(circle, #a29bfe 35%, #fd79a8 35%, #fd79a8 65%, #a29bfe 65%);
        }

        .answer-section {
          margin: 40px 0;
        }

        .answer-label {
          display: block;
          font-weight: 600;
          color: #374151;
          margin-bottom: 12px;
          font-size: 1.1rem;
        }

        .answer-input {
          width: 200px;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1.2rem;
          text-align: center;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .answer-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .test-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 40px;
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
          margin: 0 0 12px 0;
        }

        .results-details p {
          color: #6b7280;
          margin: 4px 0;
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

          .progress-bar {
            width: 150px;
          }

          .test-card {
            padding: 30px 20px;
          }

          .ishihara-plate {
            width: 250px;
            height: 250px;
          }

          .plate-number {
            font-size: 3rem;
          }

          .test-actions {
            flex-direction: column;
            align-items: center;
          }

          .results-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default ColorBlindTest;
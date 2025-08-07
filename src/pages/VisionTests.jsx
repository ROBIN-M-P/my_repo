import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Palette, Target, Grid, Clock, ArrowRight } from 'lucide-react';

const VisionTests = () => {
  const tests = [
    {
      id: 'color-blind',
      title: 'Color Blindness Test',
      description: 'Ishihara color perception test to detect color vision deficiencies',
      icon: <Palette className="test-icon" />,
      duration: '3-5 minutes',
      difficulty: 'Easy',
      path: '/test/color-blind'
    },
    {
      id: 'visual-acuity',
      title: 'Visual Acuity Test',
      description: 'Snellen chart test to measure sharpness of vision',
      icon: <Eye className="test-icon" />,
      duration: '5-7 minutes',
      difficulty: 'Medium',
      path: '/test/visual-acuity'
    },
    {
      id: 'astigmatism',
      title: 'Astigmatism Test',
      description: 'Radial dial test to detect astigmatism and irregular cornea shape',
      icon: <Target className="test-icon" />,
      duration: '4-6 minutes',
      difficulty: 'Medium',
      path: '/test/astigmatism'
    },
    {
      id: 'contrast-sensitivity',
      title: 'Contrast Sensitivity Test',
      description: 'Test your ability to detect differences in contrast and brightness',
      icon: <Grid className="test-icon" />,
      duration: '6-8 minutes',
      difficulty: 'Medium',
      path: '/test/contrast-sensitivity'
    },
    {
      id: 'peripheral-vision',
      title: 'Peripheral Vision Test',
      description: 'Assess your side vision and visual field coverage',
      icon: <Eye className="test-icon" />,
      duration: '8-10 minutes',
      difficulty: 'Hard',
      path: '/test/peripheral-vision'
    }
  ];

  return (
    <div className="vision-tests-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Vision Screening Tests</h1>
          <p className="page-subtitle">
            Comprehensive eye health assessment using clinically validated testing methods
          </p>
        </div>

        <div className="tests-grid">
          {tests.map((test) => (
            <div key={test.id} className="test-card">
              <div className="test-header">
                {test.icon}
                <div className="test-meta">
                  <span className="test-duration">
                    <Clock size={16} />
                    {test.duration}
                  </span>
                  <span className={`test-difficulty ${test.difficulty.toLowerCase()}`}>
                    {test.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="test-content">
                <h3 className="test-title">{test.title}</h3>
                <p className="test-description">{test.description}</p>
              </div>
              
              <div className="test-actions">
                <Link to={test.path} className="btn btn-primary test-btn">
                  Start Test
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="instructions-section">
          <div className="card">
            <h2 className="instructions-title">Before You Begin</h2>
            <div className="instructions-grid">
              <div className="instruction-item">
                <div className="instruction-number">1</div>
                <div className="instruction-content">
                  <h4>Prepare Your Environment</h4>
                  <p>Ensure good lighting and sit at arm's length from your screen</p>
                </div>
              </div>
              <div className="instruction-item">
                <div className="instruction-number">2</div>
                <div className="instruction-content">
                  <h4>Remove Glasses/Contacts</h4>
                  <p>Test your natural vision first, then repeat with corrective lenses if needed</p>
                </div>
              </div>
              <div className="instruction-item">
                <div className="instruction-number">3</div>
                <div className="instruction-content">
                  <h4>Follow Instructions</h4>
                  <p>Read each test's specific instructions carefully for accurate results</p>
                </div>
              </div>
              <div className="instruction-item">
                <div className="instruction-number">4</div>
                <div className="instruction-content">
                  <h4>Take Your Time</h4>
                  <p>Don't rush - accurate results are more important than speed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="disclaimer-section">
          <div className="disclaimer-card">
            <h3 className="disclaimer-title">Important Disclaimer</h3>
            <p className="disclaimer-text">
              These tests are for screening purposes only and do not replace professional eye examinations. 
              If you have concerns about your vision or eye health, please consult with a qualified eye care professional. 
              Regular comprehensive eye exams are recommended for maintaining optimal eye health.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vision-tests-page {
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .tests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .test-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .test-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }

        .test-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .test-icon {
          width: 48px;
          height: 48px;
          color: #667eea;
        }

        .test-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
        }

        .test-duration {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #6b7280;
          font-size: 0.9rem;
        }

        .test-difficulty {
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .test-difficulty.easy {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }

        .test-difficulty.medium {
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        }

        .test-difficulty.hard {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }

        .test-content {
          margin-bottom: 24px;
        }

        .test-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 12px 0;
        }

        .test-description {
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        .test-actions {
          display: flex;
          justify-content: center;
        }

        .test-btn {
          width: 100%;
          justify-content: center;
        }

        .instructions-section {
          margin-bottom: 40px;
        }

        .instructions-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 30px 0;
          text-align: center;
        }

        .instructions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .instruction-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .instruction-number {
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
          flex-shrink: 0;
        }

        .instruction-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 8px 0;
        }

        .instruction-content p {
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }

        .disclaimer-section {
          margin-top: 40px;
        }

        .disclaimer-card {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
        }

        .disclaimer-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #d97706;
          margin: 0 0 16px 0;
        }

        .disclaimer-text {
          color: #92400e;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .tests-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .test-card {
            padding: 24px;
          }

          .instructions-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .disclaimer-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default VisionTests;
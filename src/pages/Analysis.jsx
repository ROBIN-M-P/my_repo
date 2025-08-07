import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Eye, AlertTriangle, CheckCircle, Clock, ArrowRight, Download, Share } from 'lucide-react';

const Analysis = () => {
  const navigate = useNavigate();
  const [analysisFiles, setAnalysisFiles] = useState([]);
  const [currentAnalysis, setCurrentAnalysis] = useState(0);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [results, setResults] = useState([]);

  // Mock diseases and their detection probabilities
  const diseases = [
    { name: 'Diabetic Retinopathy', severity: ['None', 'Mild', 'Moderate', 'Severe', 'Proliferative'] },
    { name: 'Glaucoma', severity: ['None', 'Suspect', 'Mild', 'Moderate', 'Severe'] },
    { name: 'Age-related Macular Degeneration', severity: ['None', 'Early', 'Intermediate', 'Advanced'] },
    { name: 'Hypertensive Retinopathy', severity: ['None', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'] },
    { name: 'Retinal Detachment', severity: ['None', 'Partial', 'Complete'] },
    { name: 'Epiretinal Membrane', severity: ['None', 'Mild', 'Moderate', 'Severe'] }
  ];

  useEffect(() => {
    const files = JSON.parse(sessionStorage.getItem('analysisFiles') || '[]');
    if (files.length === 0) {
      navigate('/upload');
      return;
    }
    setAnalysisFiles(files);
    startAnalysis(files);
  }, [navigate]);

  const generateMockResults = (file) => {
    const detectedDiseases = [];
    
    diseases.forEach(disease => {
      const hasDisease = Math.random() > 0.7; // 30% chance of having each disease
      if (hasDisease) {
        const severityIndex = Math.floor(Math.random() * disease.severity.length);
        const confidence = 0.6 + Math.random() * 0.35; // 60-95% confidence
        
        detectedDiseases.push({
          name: disease.name,
          severity: disease.severity[severityIndex],
          confidence: confidence,
          risk: severityIndex === 0 ? 'Low' : severityIndex <= 2 ? 'Medium' : 'High'
        });
      }
    });

    // Ensure at least one result
    if (detectedDiseases.length === 0) {
      detectedDiseases.push({
        name: 'Normal Retina',
        severity: 'Healthy',
        confidence: 0.85 + Math.random() * 0.1,
        risk: 'Low'
      });
    }

    return {
      fileId: file.id,
      fileName: file.name,
      imageUrl: file.preview,
      overallRisk: detectedDiseases.some(d => d.risk === 'High') ? 'High' : 
                   detectedDiseases.some(d => d.risk === 'Medium') ? 'Medium' : 'Low',
      diseases: detectedDiseases,
      analysisTime: new Date().toISOString(),
      recommendations: generateRecommendations(detectedDiseases)
    };
  };

  const generateRecommendations = (diseases) => {
    const recommendations = [];
    
    const highRiskDiseases = diseases.filter(d => d.risk === 'High');
    const mediumRiskDiseases = diseases.filter(d => d.risk === 'Medium');
    
    if (highRiskDiseases.length > 0) {
      recommendations.push('Immediate ophthalmologist consultation recommended');
      recommendations.push('Consider urgent referral for specialized treatment');
    } else if (mediumRiskDiseases.length > 0) {
      recommendations.push('Schedule follow-up examination within 3-6 months');
      recommendations.push('Monitor progression with regular imaging');
    } else {
      recommendations.push('Continue routine annual eye examinations');
      recommendations.push('Maintain healthy lifestyle and diabetes control if applicable');
    }
    
    return recommendations;
  };

  const startAnalysis = async (files) => {
    const analysisResults = [];
    
    for (let i = 0; i < files.length; i++) {
      setCurrentAnalysis(i);
      
      // Simulate AI processing time
      for (let progress = 0; progress <= 100; progress += 10) {
        setAnalysisProgress(progress);
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      const result = generateMockResults(files[i]);
      analysisResults.push(result);
    }
    
    setResults(analysisResults);
    setAnalysisComplete(true);
    
    // Store results for results page
    localStorage.setItem('retinalAnalysisResults', JSON.stringify(analysisResults));
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'High': return '#ef4444';
      case 'Medium': return '#f59e0b';
      case 'Low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 0.8) return '#10b981';
    if (confidence >= 0.6) return '#f59e0b';
    return '#ef4444';
  };

  if (!analysisComplete) {
    return (
      <div className="analysis-page">
        <div className="container">
          <div className="analysis-progress">
            <div className="progress-header">
              <Brain className="analysis-icon" />
              <h1 className="progress-title">AI Analysis in Progress</h1>
              <p className="progress-subtitle">
                Analyzing image {currentAnalysis + 1} of {analysisFiles.length}
              </p>
            </div>
            
            <div className="progress-visual">
              <div className="current-image">
                {analysisFiles[currentAnalysis] && (
                  <img 
                    src={analysisFiles[currentAnalysis].preview} 
                    alt={analysisFiles[currentAnalysis].name}
                  />
                )}
              </div>
              
              <div className="progress-details">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${analysisProgress}%` }}
                  ></div>
                </div>
                <div className="progress-text">{analysisProgress}% Complete</div>
                
                <div className="analysis-steps">
                  <div className="step active">
                    <CheckCircle size={16} />
                    Image preprocessing
                  </div>
                  <div className="step active">
                    <CheckCircle size={16} />
                    Feature extraction
                  </div>
                  <div className="step active">
                    <Brain size={16} />
                    Disease classification
                  </div>
                  <div className="step">
                    <Clock size={16} />
                    Generating report
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="analysis-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Analysis Complete</h1>
          <p className="page-subtitle">
            AI analysis completed for {results.length} image{results.length > 1 ? 's' : ''}
          </p>
        </div>

        <div className="results-overview">
          <div className="overview-stats">
            <div className="stat-card">
              <div className="stat-number">{results.length}</div>
              <div className="stat-label">Images Analyzed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {results.filter(r => r.overallRisk === 'High').length}
              </div>
              <div className="stat-label">High Risk</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {results.filter(r => r.overallRisk === 'Medium').length}
              </div>
              <div className="stat-label">Medium Risk</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {results.filter(r => r.overallRisk === 'Low').length}
              </div>
              <div className="stat-label">Low Risk</div>
            </div>
          </div>
        </div>

        <div className="results-grid">
          {results.map((result, index) => (
            <div key={result.fileId} className="result-card">
              <div className="result-header">
                <div className="image-preview">
                  <img src={result.imageUrl} alt={result.fileName} />
                </div>
                <div className="result-info">
                  <h3 className="result-title">{result.fileName}</h3>
                  <div 
                    className="risk-badge"
                    style={{ backgroundColor: getRiskColor(result.overallRisk) }}
                  >
                    {result.overallRisk} Risk
                  </div>
                </div>
              </div>

              <div className="diseases-detected">
                <h4 className="diseases-title">Detected Conditions</h4>
                <div className="diseases-list">
                  {result.diseases.map((disease, idx) => (
                    <div key={idx} className="disease-item">
                      <div className="disease-info">
                        <div className="disease-name">{disease.name}</div>
                        <div className="disease-severity">{disease.severity}</div>
                      </div>
                      <div className="disease-metrics">
                        <div 
                          className="confidence-score"
                          style={{ color: getConfidenceColor(disease.confidence) }}
                        >
                          {(disease.confidence * 100).toFixed(1)}%
                        </div>
                        <div 
                          className="risk-indicator"
                          style={{ backgroundColor: getRiskColor(disease.risk) }}
                        >
                          {disease.risk}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="recommendations">
                <h4 className="recommendations-title">Recommendations</h4>
                <ul className="recommendations-list">
                  {result.recommendations.map((rec, idx) => (
                    <li key={idx}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="actions-section">
          <div className="actions-card">
            <h3>Next Steps</h3>
            <div className="actions-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/results')}
              >
                <ArrowRight />
                View Detailed Results
              </button>
              <button className="btn btn-secondary">
                <Download />
                Download Report
              </button>
              <button className="btn btn-secondary">
                <Share />
                Share Results
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .analysis-page {
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .analysis-progress {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          text-align: center;
        }

        .progress-header {
          margin-bottom: 60px;
        }

        .analysis-icon {
          width: 80px;
          height: 80px;
          color: white;
          margin-bottom: 20px;
        }

        .progress-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin: 0 0 16px 0;
        }

        .progress-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .progress-visual {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
        }

        .current-image {
          width: 200px;
          height: 200px;
          margin: 0 auto 30px;
          border-radius: 12px;
          overflow: hidden;
          border: 3px solid #e5e7eb;
        }

        .current-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .progress-bar {
          width: 100%;
          height: 12px;
          background: #f3f4f6;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 6px;
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 30px;
        }

        .analysis-steps {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .step {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #9ca3af;
          font-size: 0.95rem;
        }

        .step.active {
          color: #10b981;
        }

        .results-overview {
          margin-bottom: 40px;
        }

        .overview-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .stat-card {
          text-align: center;
          padding: 20px;
          border-radius: 12px;
          background: #f9fafb;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .stat-label {
          color: #6b7280;
          font-weight: 500;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .result-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .result-header {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }

        .image-preview {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .image-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .result-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .result-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .risk-badge {
          padding: 6px 12px;
          border-radius: 20px;
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          align-self: flex-start;
        }

        .diseases-detected {
          margin-bottom: 30px;
        }

        .diseases-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 16px 0;
        }

        .diseases-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .disease-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #f9fafb;
          border-radius: 8px;
        }

        .disease-info {
          flex: 1;
        }

        .disease-name {
          font-weight: 500;
          color: #1f2937;
          font-size: 0.95rem;
        }

        .disease-severity {
          color: #6b7280;
          font-size: 0.85rem;
        }

        .disease-metrics {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .confidence-score {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .risk-indicator {
          padding: 4px 8px;
          border-radius: 12px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .recommendations {
          border-top: 1px solid #e5e7eb;
          padding-top: 20px;
        }

        .recommendations-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 12px 0;
        }

        .recommendations-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .recommendations-list li {
          color: #374151;
          font-size: 0.95rem;
          line-height: 1.5;
          padding-left: 16px;
          position: relative;
        }

        .recommendations-list li::before {
          content: '•';
          color: #667eea;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .actions-section {
          display: flex;
          justify-content: center;
        }

        .actions-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 600px;
          width: 100%;
        }

        .actions-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 24px 0;
        }

        .actions-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .progress-visual {
            padding: 30px 20px;
          }

          .current-image {
            width: 150px;
            height: 150px;
          }

          .overview-stats {
            grid-template-columns: repeat(2, 1fr);
            padding: 20px;
          }

          .results-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .result-card {
            padding: 20px;
          }

          .result-header {
            flex-direction: column;
            gap: 16px;
          }

          .image-preview {
            width: 100%;
            height: 200px;
          }

          .actions-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Analysis;
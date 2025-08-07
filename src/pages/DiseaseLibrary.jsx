import React, { useState } from 'react';
import { Search, Eye, AlertTriangle, Info, BookOpen, ChevronRight } from 'lucide-react';

const DiseaseLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const diseases = [
    {
      id: 1,
      name: 'Diabetic Retinopathy',
      category: 'diabetic',
      severity: 'High Risk',
      prevalence: '28.5% of diabetics',
      description: 'A diabetes complication that affects eyes, caused by damage to blood vessels of the retina.',
      symptoms: ['Blurred vision', 'Floaters', 'Dark areas in vision', 'Difficulty with colors'],
      stages: ['Mild NPDR', 'Moderate NPDR', 'Severe NPDR', 'Proliferative DR'],
      treatment: ['Blood sugar control', 'Laser therapy', 'Anti-VEGF injections', 'Vitrectomy'],
      prevention: ['Regular eye exams', 'Blood sugar management', 'Blood pressure control'],
      aiAccuracy: '96.8%'
    },
    {
      id: 2,
      name: 'Glaucoma',
      category: 'pressure',
      severity: 'High Risk',
      prevalence: '3.54% globally',
      description: 'A group of eye conditions that damage the optic nerve, often due to high eye pressure.',
      symptoms: ['Gradual vision loss', 'Tunnel vision', 'Eye pain', 'Halos around lights'],
      stages: ['Suspect', 'Mild', 'Moderate', 'Severe', 'End-stage'],
      treatment: ['Eye drops', 'Laser therapy', 'Surgery', 'Drainage implants'],
      prevention: ['Regular eye pressure checks', 'Early detection', 'Family history screening'],
      aiAccuracy: '94.2%'
    },
    {
      id: 3,
      name: 'Age-related Macular Degeneration',
      category: 'degenerative',
      severity: 'Medium Risk',
      prevalence: '8.7% over age 55',
      description: 'An eye disease that can blur central vision due to damage to the macula.',
      symptoms: ['Blurred central vision', 'Straight lines appear wavy', 'Dark spots', 'Color changes'],
      stages: ['Early AMD', 'Intermediate AMD', 'Late AMD (Dry)', 'Late AMD (Wet)'],
      treatment: ['Anti-VEGF therapy', 'Photodynamic therapy', 'Vitamins', 'Low vision aids'],
      prevention: ['Healthy diet', 'No smoking', 'UV protection', 'Regular exercise'],
      aiAccuracy: '92.5%'
    },
    {
      id: 4,
      name: 'Hypertensive Retinopathy',
      category: 'vascular',
      severity: 'Medium Risk',
      prevalence: '8-15% of hypertensives',
      description: 'Retinal damage caused by high blood pressure affecting retinal blood vessels.',
      symptoms: ['Blurred vision', 'Headaches', 'Double vision', 'Vision loss'],
      stages: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'],
      treatment: ['Blood pressure control', 'Lifestyle changes', 'Medication', 'Regular monitoring'],
      prevention: ['Blood pressure management', 'Healthy lifestyle', 'Regular checkups'],
      aiAccuracy: '89.7%'
    },
    {
      id: 5,
      name: 'Retinal Detachment',
      category: 'emergency',
      severity: 'Critical',
      prevalence: '1 in 10,000 annually',
      description: 'A serious condition where the retina pulls away from underlying tissue.',
      symptoms: ['Sudden flashes', 'Floaters', 'Shadow in vision', 'Curtain effect'],
      stages: ['Partial', 'Complete', 'Macula-on', 'Macula-off'],
      treatment: ['Emergency surgery', 'Pneumatic retinopexy', 'Scleral buckle', 'Vitrectomy'],
      prevention: ['Protect eyes from injury', 'Regular eye exams', 'Manage risk factors'],
      aiAccuracy: '91.3%'
    },
    {
      id: 6,
      name: 'Epiretinal Membrane',
      category: 'membrane',
      severity: 'Low Risk',
      prevalence: '7% over age 50',
      description: 'A thin sheet of fibrous tissue that can develop on the macula surface.',
      symptoms: ['Blurred vision', 'Distorted vision', 'Double vision', 'Gray area in vision'],
      stages: ['Mild', 'Moderate', 'Severe'],
      treatment: ['Observation', 'Vitrectomy', 'Membrane peeling'],
      prevention: ['Regular monitoring', 'Early detection'],
      aiAccuracy: '88.4%'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Diseases' },
    { value: 'diabetic', label: 'Diabetic' },
    { value: 'pressure', label: 'Pressure-related' },
    { value: 'degenerative', label: 'Degenerative' },
    { value: 'vascular', label: 'Vascular' },
    { value: 'emergency', label: 'Emergency' },
    { value: 'membrane', label: 'Membrane' }
  ];

  const filteredDiseases = diseases.filter(disease => {
    const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         disease.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || disease.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return '#dc2626';
      case 'High Risk': return '#ef4444';
      case 'Medium Risk': return '#f59e0b';
      case 'Low Risk': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <div className="disease-library">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Disease Library</h1>
          <p className="page-subtitle">
            Comprehensive information about retinal diseases detected by our AI system
          </p>
        </div>

        <div className="search-filters">
          <div className="search-section">
            <div className="search-input-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search diseases, symptoms, or treatments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`category-btn ${selectedCategory === category.value ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="diseases-grid">
          {filteredDiseases.map(disease => (
            <div key={disease.id} className="disease-card">
              <div className="disease-header">
                <div className="disease-title-section">
                  <h3 className="disease-name">{disease.name}</h3>
                  <div 
                    className="severity-badge"
                    style={{ backgroundColor: getSeverityColor(disease.severity) }}
                  >
                    {disease.severity}
                  </div>
                </div>
                <div className="disease-stats">
                  <div className="stat-item">
                    <span className="stat-label">Prevalence</span>
                    <span className="stat-value">{disease.prevalence}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">AI Accuracy</span>
                    <span className="stat-value">{disease.aiAccuracy}</span>
                  </div>
                </div>
              </div>

              <div className="disease-description">
                <p>{disease.description}</p>
              </div>

              <div className="disease-details">
                <div className="detail-section">
                  <h4>
                    <AlertTriangle size={16} />
                    Symptoms
                  </h4>
                  <ul>
                    {disease.symptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section">
                  <h4>
                    <Eye size={16} />
                    Stages
                  </h4>
                  <div className="stages-list">
                    {disease.stages.map((stage, index) => (
                      <span key={index} className="stage-tag">
                        {stage}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="detail-section">
                  <h4>
                    <Info size={16} />
                    Treatment Options
                  </h4>
                  <ul>
                    {disease.treatment.map((treatment, index) => (
                      <li key={index}>{treatment}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section">
                  <h4>
                    <BookOpen size={16} />
                    Prevention
                  </h4>
                  <ul>
                    {disease.prevention.map((prevention, index) => (
                      <li key={index}>{prevention}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="disease-footer">
                <button className="learn-more-btn">
                  Learn More
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDiseases.length === 0 && (
          <div className="no-results">
            <div className="no-results-card">
              <Search size={48} />
              <h3>No diseases found</h3>
              <p>Try adjusting your search terms or category filter.</p>
            </div>
          </div>
        )}

        <div className="disclaimer-section">
          <div className="disclaimer-card">
            <h4>Medical Disclaimer</h4>
            <p>
              This information is for educational purposes only and should not replace professional medical advice. 
              Always consult with qualified healthcare professionals for diagnosis and treatment decisions. 
              Our AI system assists in screening but requires professional interpretation.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .disease-library {
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .search-filters {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
        }

        .search-section {
          margin-bottom: 30px;
        }

        .search-input-container {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          width: 20px;
          height: 20px;
        }

        .search-input {
          width: 100%;
          padding: 16px 16px 16px 48px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .category-filters {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .category-btn {
          padding: 8px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 20px;
          background: white;
          color: #6b7280;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .category-btn:hover {
          border-color: #667eea;
          color: #667eea;
        }

        .category-btn.active {
          background: #667eea;
          border-color: #667eea;
          color: white;
        }

        .diseases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .disease-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .disease-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .disease-header {
          margin-bottom: 20px;
        }

        .disease-title-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .disease-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
          flex: 1;
        }

        .severity-badge {
          padding: 6px 12px;
          border-radius: 20px;
          color: white;
          font-weight: 600;
          font-size: 0.85rem;
          margin-left: 16px;
        }

        .disease-stats {
          display: flex;
          gap: 20px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #6b7280;
          font-weight: 500;
        }

        .stat-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: #1f2937;
        }

        .disease-description {
          margin-bottom: 24px;
          padding: 16px;
          background: #f9fafb;
          border-radius: 12px;
        }

        .disease-description p {
          color: #374151;
          line-height: 1.6;
          margin: 0;
        }

        .disease-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 24px;
        }

        .detail-section h4 {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 12px 0;
        }

        .detail-section h4 svg {
          color: #667eea;
        }

        .detail-section ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .detail-section li {
          color: #6b7280;
          font-size: 0.9rem;
          padding-left: 16px;
          position: relative;
        }

        .detail-section li::before {
          content: '•';
          color: #667eea;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .stages-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .stage-tag {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .disease-footer {
          border-top: 1px solid #e5e7eb;
          padding-top: 20px;
          display: flex;
          justify-content: flex-end;
        }

        .learn-more-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #667eea;
          font-weight: 600;
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .learn-more-btn:hover {
          background: rgba(102, 126, 234, 0.1);
        }

        .no-results {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 300px;
        }

        .no-results-card {
          background: white;
          border-radius: 20px;
          padding: 60px 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 400px;
        }

        .no-results-card svg {
          color: #9ca3af;
          margin-bottom: 20px;
        }

        .no-results-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 12px 0;
        }

        .no-results-card p {
          color: #6b7280;
          margin: 0;
        }

        .disclaimer-section {
          margin-top: 60px;
        }

        .disclaimer-card {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
        }

        .disclaimer-card h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #dc2626;
          margin: 0 0 16px 0;
        }

        .disclaimer-card p {
          color: #991b1b;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .search-filters {
            padding: 20px;
          }

          .category-filters {
            gap: 8px;
          }

          .category-btn {
            padding: 6px 12px;
            font-size: 0.9rem;
          }

          .diseases-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .disease-card {
            padding: 20px;
          }

          .disease-title-section {
            flex-direction: column;
            gap: 12px;
          }

          .severity-badge {
            align-self: flex-start;
            margin-left: 0;
          }

          .disease-stats {
            flex-direction: column;
            gap: 12px;
          }

          .no-results-card {
            padding: 40px 20px;
          }

          .disclaimer-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default DiseaseLibrary;
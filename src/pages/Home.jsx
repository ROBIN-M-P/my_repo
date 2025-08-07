import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Upload, Eye, Shield, ArrowRight, CheckCircle, Zap, Users, Award, TrendingUp } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Brain className="feature-icon" />,
      title: 'AI-Powered Analysis',
      description: 'Advanced deep learning models trained on millions of retinal images for accurate disease detection'
    },
    {
      icon: <Eye className="feature-icon" />,
      title: 'Multi-Disease Detection',
      description: 'Simultaneous screening for diabetic retinopathy, glaucoma, macular degeneration, and more'
    },
    {
      icon: <Zap className="feature-icon" />,
      title: 'Instant Results',
      description: 'Get comprehensive analysis results in seconds with detailed confidence scores and recommendations'
    },
    {
      icon: <Shield className="feature-icon" />,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security ensuring patient data privacy and regulatory compliance'
    }
  ];

  const diseases = [
    { name: 'Diabetic Retinopathy', accuracy: '96.8%', color: '#ef4444' },
    { name: 'Glaucoma', accuracy: '94.2%', color: '#f59e0b' },
    { name: 'Macular Degeneration', accuracy: '92.5%', color: '#10b981' },
    { name: 'Hypertensive Retinopathy', accuracy: '89.7%', color: '#667eea' },
    { name: 'Retinal Detachment', accuracy: '91.3%', color: '#8b5cf6' }
  ];

  const stats = [
    { number: '1M+', label: 'Images Analyzed' },
    { number: '95.2%', label: 'Average Accuracy' },
    { number: '500+', label: 'Healthcare Partners' },
    { number: '24/7', label: 'AI Availability' }
  ];

  return (
    <div className="home-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Revolutionary AI for Retinal Disease Detection
            </h1>
            <p className="hero-subtitle">
              Transform ophthalmology with cutting-edge artificial intelligence. 
              Our advanced deep learning system provides instant, accurate diagnosis 
              of retinal diseases from fundus images with clinical-grade precision.
            </p>
            <div className="hero-actions">
              <Link to="/upload" className="btn btn-primary hero-btn">
                <Upload />
                Upload Retinal Image
              </Link>
              <Link to="/diseases" className="btn btn-secondary hero-btn">
                <Eye />
                Disease Library
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">95.2%</span>
                <span className="stat-label">Accuracy</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">&lt;3s</span>
                <span className="stat-label">Analysis Time</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span className="stat-label">Diseases Detected</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="ai-visualization">
              <div className="retina-scan">
                <div className="scan-lines"></div>
                <div className="detection-points">
                  <div className="point point-1"></div>
                  <div className="point point-2"></div>
                  <div className="point point-3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="section-header">
            <h2 className="section-title">Advanced AI Capabilities</h2>
            <p className="section-subtitle">
              Powered by state-of-the-art computer vision and machine learning
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                {feature.icon}
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disease Detection Section */}
        <section className="diseases-section">
          <div className="section-header">
            <h2 className="section-title">Detectable Conditions</h2>
            <p className="section-subtitle">
              Our AI system can identify and classify multiple retinal diseases
            </p>
          </div>
          <div className="diseases-grid">
            {diseases.map((disease, index) => (
              <div key={index} className="disease-card">
                <div className="disease-header">
                  <h4 className="disease-name">{disease.name}</h4>
                  <div className="accuracy-badge" style={{ backgroundColor: disease.color }}>
                    {disease.accuracy}
                  </div>
                </div>
                <div className="accuracy-bar">
                  <div 
                    className="accuracy-fill" 
                    style={{ 
                      width: disease.accuracy, 
                      backgroundColor: disease.color 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Simple, fast, and accurate retinal disease detection in four steps
            </p>
          </div>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Upload Image</h4>
                <p>Upload high-quality fundus or OCT retinal images</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>AI Analysis</h4>
                <p>Our deep learning model analyzes the image for pathologies</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Disease Detection</h4>
                <p>Identify and classify multiple retinal conditions</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Clinical Report</h4>
                <p>Receive detailed analysis with confidence scores</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Transform Retinal Care?</h2>
            <p className="cta-description">
              Join hundreds of healthcare professionals using AI to improve patient outcomes 
              and streamline retinal disease diagnosis.
            </p>
            <div className="cta-actions">
              <Link to="/upload" className="btn btn-primary cta-btn">
                <Upload />
                Start Analysis
              </Link>
              <Link to="/dashboard" className="btn btn-secondary cta-btn">
                <TrendingUp />
                View Dashboard
              </Link>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .home-page {
          min-height: 100vh;
        }

        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          padding: 80px 0;
          min-height: 600px;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: white;
          margin: 0;
          background: linear-gradient(45deg, #fff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          font-weight: 300;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .hero-btn {
          padding: 16px 32px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          margin-top: 20px;
        }

        .hero-stats .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .hero-stats .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: white;
        }

        .hero-stats .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ai-visualization {
          width: 300px;
          height: 300px;
          position: relative;
        }

        .retina-scan {
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.3);
          position: relative;
          overflow: hidden;
          animation: pulse 3s ease-in-out infinite;
        }

        .scan-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 40%, rgba(102,126,234,0.3) 50%, transparent 60%);
          animation: scan 2s linear infinite;
        }

        .detection-points {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .point {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
          animation: blink 1.5s ease-in-out infinite;
        }

        .point-1 {
          top: 30%;
          left: 40%;
          animation-delay: 0s;
        }

        .point-2 {
          top: 60%;
          right: 35%;
          animation-delay: 0.5s;
        }

        .point-3 {
          bottom: 35%;
          left: 30%;
          animation-delay: 1s;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes scan {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .features-section {
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin: 0 0 16px 0;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          font-weight: 300;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .feature-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          color: #667eea;
          margin-bottom: 24px;
        }

        .feature-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 16px 0;
        }

        .feature-description {
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        .diseases-section {
          padding: 80px 0;
        }

        .diseases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .disease-card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .disease-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .disease-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .accuracy-badge {
          padding: 6px 12px;
          border-radius: 20px;
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .accuracy-bar {
          height: 8px;
          background: #f3f4f6;
          border-radius: 4px;
          overflow: hidden;
        }

        .accuracy-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 1s ease;
        }

        .stats-section {
          padding: 60px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 16px;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 8px;
          background: linear-gradient(45deg, #fff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        .how-it-works {
          padding: 80px 0;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .step-item {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .step-content h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 8px 0;
        }

        .step-content p {
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }

        .cta-section {
          padding: 80px 0;
        }

        .cta-card {
          background: white;
          padding: 60px 40px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .cta-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 16px 0;
        }

        .cta-description {
          font-size: 1.2rem;
          color: #6b7280;
          margin: 0 0 32px 0;
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 16px 32px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
            padding: 60px 0;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
            gap: 30px;
          }

          .ai-visualization {
            width: 200px;
            height: 200px;
          }

          .section-title {
            font-size: 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .diseases-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .steps-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .step-item {
            flex-direction: column;
            text-align: center;
          }

          .cta-card {
            padding: 40px 20px;
          }

          .cta-title {
            font-size: 1.8rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
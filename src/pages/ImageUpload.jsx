import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Camera, FileImage, X, CheckCircle, AlertCircle, Eye, Zap } from 'lucide-react';

const ImageUpload = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const validFiles = Array.from(files).filter(file => {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/tiff'];
      return validTypes.includes(file.type) && file.size <= 10 * 1024 * 1024; // 10MB limit
    });

    const newFiles = validFiles.map(file => ({
      id: Date.now() + Math.random(),
      file,
      name: file.name,
      size: file.size,
      preview: URL.createObjectURL(file),
      status: 'ready'
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (id) => {
    setUploadedFiles(prev => {
      const fileToRemove = prev.find(f => f.id === id);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter(f => f.id !== id);
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const startAnalysis = () => {
    if (uploadedFiles.length === 0) return;
    
    setIsProcessing(true);
    
    // Store files in sessionStorage for analysis page
    const filesData = uploadedFiles.map(f => ({
      id: f.id,
      name: f.name,
      size: f.size,
      preview: f.preview
    }));
    
    sessionStorage.setItem('analysisFiles', JSON.stringify(filesData));
    
    // Simulate processing delay
    setTimeout(() => {
      navigate('/analysis');
    }, 1500);
  };

  const imageRequirements = [
    'High-resolution fundus photographs (minimum 1024x1024 pixels)',
    'Clear, well-focused retinal images',
    'Proper illumination without overexposure',
    'Centered optic disc and macula when possible',
    'Supported formats: JPEG, PNG, TIFF',
    'Maximum file size: 10MB per image'
  ];

  return (
    <div className="image-upload-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Upload Retinal Images</h1>
          <p className="page-subtitle">
            Upload high-quality fundus images for AI-powered retinal disease analysis
          </p>
        </div>

        <div className="upload-section">
          <div className="upload-area">
            <div 
              className={`upload-dropzone ${dragActive ? 'active' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="upload-icon">
                <Upload size={48} />
              </div>
              <h3 className="upload-title">
                {dragActive ? 'Drop images here' : 'Upload Retinal Images'}
              </h3>
              <p className="upload-description">
                Drag and drop your images here, or click to browse
              </p>
              <div className="upload-formats">
                <span>Supported: JPEG, PNG, TIFF</span>
                <span>Max size: 10MB</span>
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/jpeg,image/jpg,image/png,image/tiff"
                onChange={handleChange}
                style={{ display: 'none' }}
              />
            </div>

            {uploadedFiles.length > 0 && (
              <div className="uploaded-files">
                <h4 className="files-title">Uploaded Images ({uploadedFiles.length})</h4>
                <div className="files-grid">
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="file-card">
                      <div className="file-preview">
                        <img src={file.preview} alt={file.name} />
                        <button 
                          className="remove-btn"
                          onClick={() => removeFile(file.id)}
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <div className="file-info">
                        <div className="file-name">{file.name}</div>
                        <div className="file-size">{formatFileSize(file.size)}</div>
                        <div className="file-status">
                          <CheckCircle size={16} />
                          Ready for analysis
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {uploadedFiles.length > 0 && (
              <div className="analysis-section">
                <button 
                  className="btn btn-primary analysis-btn"
                  onClick={startAnalysis}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <div className="spinner"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Zap />
                      Start AI Analysis
                    </>
                  )}
                </button>
                <p className="analysis-note">
                  Analysis typically takes 10-30 seconds per image
                </p>
              </div>
            )}
          </div>

          <div className="requirements-section">
            <div className="requirements-card">
              <h3 className="requirements-title">
                <Eye />
                Image Requirements
              </h3>
              <ul className="requirements-list">
                {imageRequirements.map((requirement, index) => (
                  <li key={index} className="requirement-item">
                    <CheckCircle size={16} />
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="tips-card">
              <h3 className="tips-title">
                <Camera />
                Imaging Tips
              </h3>
              <div className="tips-content">
                <div className="tip-item">
                  <h4>Optimal Quality</h4>
                  <p>Use high-resolution fundus cameras with proper calibration</p>
                </div>
                <div className="tip-item">
                  <h4>Patient Positioning</h4>
                  <p>Ensure patient comfort and proper head positioning</p>
                </div>
                <div className="tip-item">
                  <h4>Image Centering</h4>
                  <p>Center the optic disc and include the macula in the field of view</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="disclaimer-section">
          <div className="disclaimer-card">
            <AlertCircle className="disclaimer-icon" />
            <div className="disclaimer-content">
              <h4>Medical Disclaimer</h4>
              <p>
                This AI system is designed to assist healthcare professionals and should not replace 
                clinical judgment. All results should be reviewed by qualified ophthalmologists. 
                This tool is for research and educational purposes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .image-upload-page {
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .upload-section {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .upload-area {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .upload-dropzone {
          background: white;
          border: 3px dashed #d1d5db;
          border-radius: 20px;
          padding: 60px 40px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .upload-dropzone:hover,
        .upload-dropzone.active {
          border-color: #667eea;
          background: rgba(102, 126, 234, 0.05);
        }

        .upload-icon {
          color: #667eea;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }

        .upload-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 12px 0;
        }

        .upload-description {
          color: #6b7280;
          font-size: 1.1rem;
          margin: 0 0 20px 0;
        }

        .upload-formats {
          display: flex;
          gap: 20px;
          justify-content: center;
          font-size: 0.9rem;
          color: #9ca3af;
        }

        .uploaded-files {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .files-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 20px 0;
        }

        .files-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }

        .file-card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .file-card:hover {
          border-color: #667eea;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .file-preview {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
        }

        .file-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .remove-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(239, 68, 68, 0.9);
          color: white;
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .remove-btn:hover {
          background: #dc2626;
          transform: scale(1.1);
        }

        .file-info {
          padding: 12px;
        }

        .file-name {
          font-weight: 500;
          color: #1f2937;
          font-size: 0.9rem;
          margin-bottom: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .file-size {
          color: #6b7280;
          font-size: 0.8rem;
          margin-bottom: 8px;
        }

        .file-status {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #10b981;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .analysis-section {
          background: white;
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .analysis-btn {
          width: 100%;
          padding: 16px 32px;
          font-size: 1.2rem;
          margin-bottom: 16px;
        }

        .analysis-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .analysis-note {
          color: #6b7280;
          font-size: 0.9rem;
          margin: 0;
        }

        .requirements-section {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .requirements-card,
        .tips-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .requirements-title,
        .tips-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.3rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 20px 0;
        }

        .requirements-title svg,
        .tips-title svg {
          color: #667eea;
        }

        .requirements-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .requirement-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #374151;
          line-height: 1.5;
        }

        .requirement-item svg {
          color: #10b981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .tips-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .tip-item h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 6px 0;
        }

        .tip-item p {
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
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .disclaimer-icon {
          color: #d97706;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .disclaimer-content h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #d97706;
          margin: 0 0 12px 0;
        }

        .disclaimer-content p {
          color: #92400e;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .upload-section {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .upload-dropzone {
            padding: 40px 20px;
          }

          .files-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 15px;
          }

          .disclaimer-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageUpload;
import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Shield, Database, Monitor, Save, Eye, Brain, Palette } from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    // User Preferences
    theme: 'light',
    language: 'en',
    notifications: true,
    emailAlerts: true,
    
    // AI Analysis Settings
    confidenceThreshold: 85,
    autoAnalysis: true,
    saveImages: true,
    
    // Privacy Settings
    dataSharing: false,
    analytics: true,
    
    // Display Settings
    highContrast: false,
    fontSize: 'medium',
    animations: true
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const saveSettings = () => {
    localStorage.setItem('retinalAISettings', JSON.stringify(settings));
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">
            Configure your RetinalAI experience and analysis preferences
          </p>
        </div>

        <div className="settings-grid">
          {/* User Preferences */}
          <div className="settings-card">
            <div className="card-header">
              <User className="card-icon" />
              <h3>User Preferences</h3>
            </div>
            <div className="settings-group">
              <div className="setting-item">
                <label htmlFor="theme">Theme</label>
                <select 
                  id="theme"
                  value={settings.theme}
                  onChange={(e) => handleSettingChange('theme', e.target.value)}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
              
              <div className="setting-item">
                <label htmlFor="language">Language</label>
                <select 
                  id="language"
                  value={settings.language}
                  onChange={(e) => handleSettingChange('language', e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="settings-card">
            <div className="card-header">
              <Bell className="card-icon" />
              <h3>Notifications</h3>
            </div>
            <div className="settings-group">
              <div className="setting-item toggle">
                <label htmlFor="notifications">Push Notifications</label>
                <input
                  type="checkbox"
                  id="notifications"
                  checked={settings.notifications}
                  onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                />
              </div>
              
              <div className="setting-item toggle">
                <label htmlFor="emailAlerts">Email Alerts</label>
                <input
                  type="checkbox"
                  id="emailAlerts"
                  checked={settings.emailAlerts}
                  onChange={(e) => handleSettingChange('emailAlerts', e.target.checked)}
                />
              </div>
            </div>
          </div>

          {/* AI Analysis Settings */}
          <div className="settings-card">
            <div className="card-header">
              <Brain className="card-icon" />
              <h3>AI Analysis</h3>
            </div>
            <div className="settings-group">
              <div className="setting-item">
                <label htmlFor="confidenceThreshold">
                  Confidence Threshold: {settings.confidenceThreshold}%
                </label>
                <input
                  type="range"
                  id="confidenceThreshold"
                  min="50"
                  max="99"
                  value={settings.confidenceThreshold}
                  onChange={(e) => handleSettingChange('confidenceThreshold', parseInt(e.target.value))}
                />
              </div>
              
              <div className="setting-item toggle">
                <label htmlFor="autoAnalysis">Auto-start Analysis</label>
                <input
                  type="checkbox"
                  id="autoAnalysis"
                  checked={settings.autoAnalysis}
                  onChange={(e) => handleSettingChange('autoAnalysis', e.target.checked)}
                />
              </div>
              
              <div className="setting-item toggle">
                <label htmlFor="saveImages">Save Analyzed Images</label>
                <input
                  type="checkbox"
                  id="saveImages"
                  checked={settings.saveImages}
                  onChange={(e) => handleSettingChange('saveImages', e.target.checked)}
                />
              </div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="settings-card">
            <div className="card-header">
              <Shield className="card-icon" />
              <h3>Privacy & Security</h3>
            </div>
            <div className="settings-group">
              <div className="setting-item toggle">
                <label htmlFor="dataSharing">Allow Data Sharing for Research</label>
                <input
                  type="checkbox"
                  id="dataSharing"
                  checked={settings.dataSharing}
                  onChange={(e) => handleSettingChange('dataSharing', e.target.checked)}
                />
              </div>
              
              <div className="setting-item toggle">
                <label htmlFor="analytics">Usage Analytics</label>
                <input
                  type="checkbox"
                  id="analytics"
                  checked={settings.analytics}
                  onChange={(e) => handleSettingChange('analytics', e.target.checked)}
                />
              </div>
            </div>
          </div>

          {/* Display Settings */}
          <div className="settings-card">
            <div className="card-header">
              <Monitor className="card-icon" />
              <h3>Display</h3>
            </div>
            <div className="settings-group">
              <div className="setting-item toggle">
                <label htmlFor="highContrast">High Contrast Mode</label>
                <input
                  type="checkbox"
                  id="highContrast"
                  checked={settings.highContrast}
                  onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                />
              </div>
              
              <div className="setting-item">
                <label htmlFor="fontSize">Font Size</label>
                <select 
                  id="fontSize"
                  value={settings.fontSize}
                  onChange={(e) => handleSettingChange('fontSize', e.target.value)}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="extra-large">Extra Large</option>
                </select>
              </div>
              
              <div className="setting-item toggle">
                <label htmlFor="animations">Enable Animations</label>
                <input
                  type="checkbox"
                  id="animations"
                  checked={settings.animations}
                  onChange={(e) => handleSettingChange('animations', e.target.checked)}
                />
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="settings-card">
            <div className="card-header">
              <Database className="card-icon" />
              <h3>Data Management</h3>
            </div>
            <div className="settings-group">
              <div className="setting-item">
                <button className="btn btn-secondary">Export Data</button>
                <p className="setting-description">Download all your analysis data</p>
              </div>
              
              <div className="setting-item">
                <button className="btn btn-danger">Clear All Data</button>
                <p className="setting-description">Permanently delete all stored data</p>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-actions">
          <button onClick={saveSettings} className="btn btn-primary save-btn">
            <Save />
            Save Settings
          </button>
        </div>

        <div className="settings-info">
          <div className="info-card">
            <h4>About RetinalAI Settings</h4>
            <p>
              These settings control how the RetinalAI system behaves and processes your retinal images. 
              Changes to AI analysis settings will affect future analyses. For clinical use, consult with 
              your healthcare provider about appropriate confidence thresholds and analysis parameters.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .settings-page {
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .settings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .settings-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .card-header h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .card-icon {
          width: 24px;
          height: 24px;
          color: #667eea;
        }

        .settings-group {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .setting-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .setting-item.toggle {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .setting-item label {
          font-weight: 500;
          color: #374151;
          font-size: 0.95rem;
        }

        .setting-item select {
          padding: 8px 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 0.95rem;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .setting-item select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .setting-item input[type="range"] {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: #e5e7eb;
          outline: none;
          cursor: pointer;
        }

        .setting-item input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #667eea;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .setting-item input[type="checkbox"] {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }

        .setting-description {
          font-size: 0.85rem;
          color: #6b7280;
          margin: 4px 0 0 0;
        }

        .settings-actions {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
        }

        .save-btn {
          padding: 16px 32px;
          font-size: 1.1rem;
        }

        .settings-info {
          display: flex;
          justify-content: center;
        }

        .info-card {
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 16px;
          padding: 30px;
          max-width: 600px;
          text-align: center;
        }

        .info-card h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #667eea;
          margin: 0 0 16px 0;
        }

        .info-card p {
          color: #4c51bf;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .settings-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .settings-card {
            padding: 20px;
          }

          .setting-item.toggle {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .info-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Settings;
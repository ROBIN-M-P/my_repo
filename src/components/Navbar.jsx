import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Eye, Menu, X, Brain, Upload, BarChart3, Users, BookOpen, FileText, Settings, TestTube, MessageCircle, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAdmin, isDoctor, isPatient } = useAuth();

  // Base navigation items available to all users
  const baseNavItems = [
    { path: '/', label: 'Home', icon: <Eye size={18} /> },
    { path: '/dashboard', label: 'Dashboard', icon: <BarChart3 size={18} /> },
    { path: '/diseases', label: 'Diseases', icon: <BookOpen size={18} /> },
    { path: '/settings', label: 'Settings', icon: <Settings size={18} /> }
  ];

  // Role-specific navigation items
  const getNavItems = () => {
    let items = [...baseNavItems];
    
    // Add role-specific items
    if (isAdmin) {
      items.splice(2, 0, 
        { path: '/upload', label: 'Upload', icon: <Upload size={18} /> },
        { path: '/reports', label: 'Reports', icon: <FileText size={18} /> }
      );
    } else if (isDoctor) {
      items.splice(2, 0,
        { path: '/upload', label: 'Upload', icon: <Upload size={18} /> },
        { path: '/reports', label: 'Reports', icon: <FileText size={18} /> }
      );
    } else if (isPatient) {
      items.splice(2, 0,
        { path: '/tests', label: 'Vision Tests', icon: <TestTube size={18} /> },
        { path: '/consultation', label: 'AI Chat', icon: <MessageCircle size={18} /> }
      );
    }
    
    return items;
  };

  const navItems = getNavItems();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <Brain className="brand-icon" />
          <div className="brand-text">
            <h2 className="brand-title">RetinalAI</h2>
            <span className="brand-subtitle">Disease Detection</span>
          </div>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`navbar-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
        
        <div className="navbar-user">
          <div className="user-info">
            <div className="user-avatar">
              <User size={20} />
            </div>
            <div className="user-details">
              <span className="user-name">{user?.name}</span>
              <span className="user-role">{user?.role}</span>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="logout-btn"
            title="Logout"
          >
            <LogOut size={18} />
          </button>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
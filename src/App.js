import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Monuments from './pages/Monuments';
import Culture from './pages/Culture';
import VirtualTours from './pages/VirtualTours';
import HiddenPlaces from './pages/HiddenPlaces';
import Admin from './pages/Admin';
import Login from './pages/Login';
import CreatorDashboard from './pages/CreatorDashboard';
import GuideDashboard from './pages/GuideDashboard';
import EnthusiastDashboard from './pages/EnthusiastDashboard';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  const getDashboard = () => {
    switch(currentUser?.role) {
      case 'admin': return <Admin currentUser={currentUser} />;
      case 'creator': return <CreatorDashboard currentUser={currentUser} />;
      case 'guide': return <GuideDashboard currentUser={currentUser} />;
      case 'enthusiast': return <EnthusiastDashboard currentUser={currentUser} />;
      default: return <Home />;
    }
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={getDashboard()} />
          <Route path="/dashboard" element={getDashboard()} />
          <Route path="/monuments" element={<Monuments currentUser={currentUser} />} />
          <Route path="/culture" element={<Culture currentUser={currentUser} />} />
          <Route path="/virtual-tours" element={<VirtualTours currentUser={currentUser} />} />
          <Route path="/hidden-places" element={<HiddenPlaces />} />
          <Route path="/admin" element={<Admin currentUser={currentUser} />} />
        </Routes>
        
        {/* Footer */}
        <footer style={{ 
          background: '#333', 
          color: 'white', 
          padding: '3rem 0 2rem', 
          marginTop: '4rem' 
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div>
                <h3 style={{ marginBottom: '1rem', color: '#ff6b35' }}>Indian Heritage Explorer</h3>
                <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                  Discover and explore India's magnificent cultural heritage through interactive virtual experiences.
                </p>
              </div>
              <div>
                <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="/monuments" style={{ color: '#ccc', textDecoration: 'none' }}>Monuments</a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="/culture" style={{ color: '#ccc', textDecoration: 'none' }}>Culture</a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="/virtual-tours" style={{ color: '#ccc', textDecoration: 'none' }}>Virtual Tours</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginBottom: '1rem' }}>Contact</h4>
                <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>Email: info@indianheritage.com</p>
                <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>Phone: +91 12345 67890</p>
                <p style={{ color: '#ccc' }}>Address: New Delhi, India</p>
              </div>
            </div>
            <div style={{ 
              borderTop: '1px solid #555', 
              paddingTop: '2rem', 
              textAlign: 'center', 
              color: '#ccc' 
            }}>
              <p>&copy; 2024 Indian Heritage Explorer. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Header = ({ currentUser, setCurrentUser, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRoleChange = (role) => {
    setCurrentUser({ ...currentUser, role });
    setIsMenuOpen(false);
  };

  return (
    <header style={{ background: '#ff6b35', color: 'white', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
          🏛️ Indian Heritage Explorer
        </Link>
        
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '1.5rem' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/monuments" style={{ color: 'white', textDecoration: 'none' }}>Monuments</Link>
            <Link to="/culture" style={{ color: 'white', textDecoration: 'none' }}>Culture</Link>
            <Link to="/virtual-tours" style={{ color: 'white', textDecoration: 'none' }}>Virtual Tours</Link>
            <Link to="/hidden-places" style={{ color: 'white', textDecoration: 'none' }}>Hidden Places</Link>
            <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
          </div>
          
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <User size={20} />
              {currentUser?.role || 'Guest'}
            </button>
            
            {isMenuOpen && (
              <div style={{ position: 'absolute', top: '100%', right: 0, background: 'white', color: 'black', minWidth: '150px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '4px', marginTop: '0.5rem' }}>
                <div style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #eee', fontSize: '0.9rem', color: '#666' }}>
                  {currentUser?.name}
                </div>
                <button onClick={onLogout} style={{ width: '100%', padding: '0.5rem 1rem', border: 'none', background: 'none', textAlign: 'left', cursor: 'pointer', color: '#f44336' }}>Logout</button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
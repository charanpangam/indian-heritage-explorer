import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [error, setError] = useState('');

  const roles = {
    'admin': { name: 'Admin User' },
    'creator': { name: 'Content Creator' },
    'enthusiast': { name: 'Cultural Enthusiast' },
    'guide': { name: 'Tour Guide' }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (userId === '1234' && password === '5678' && selectedRole) {
      onLogin({ 
        id: userId, 
        role: selectedRole, 
        name: roles[selectedRole].name 
      });
      setError('');
    } else {
      setError('Invalid credentials or role not selected');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '3rem', maxWidth: '450px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏛️</div>
          <h1 style={{ color: '#333', marginBottom: '0.5rem', fontSize: '2rem', fontWeight: 'bold' }}>Heritage Explorer</h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Discover India's Rich Cultural Legacy</p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>Select Your Role</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', background: 'white' }}
              required
            >
              <option value="">Choose your role...</option>
              <option value="admin">Admin</option>
              <option value="creator">Content Creator</option>
              <option value="enthusiast">Cultural Enthusiast</option>
              <option value="guide">Tour Guide</option>
            </select>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>User ID (4 digits)</label>
            <div style={{ position: 'relative' }}>
              <User size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter 4-digit ID"
                maxLength="4"
                style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>Password (4 digits)</label>
            <div style={{ position: 'relative' }}>
              <Lock size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                maxLength="4"
                style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                required
              />
            </div>
          </div>

          {error && (
            <div style={{ background: '#ffebee', color: '#c62828', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem', textAlign: 'center' }}>
              {error}
            </div>
          )}

          <button 
            type="submit"
            style={{ width: '100%', background: '#ff6b35', color: 'white', border: 'none', padding: '1rem', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}
          >
            Login
          </button>
        </form>


      </div>
    </div>
  );
};

export default Login;
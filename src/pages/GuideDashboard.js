import React, { useState } from 'react';
import { MessageCircle, Users, Clock, Star } from 'lucide-react';

const GuideDashboard = ({ currentUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [inputText, setInputText] = useState('');
  const [activeTours, setActiveTours] = useState([
    { id: 1, monument: 'Taj Mahal', participants: 15, startTime: '10:00 AM' },
    { id: 2, monument: 'Gateway of India', participants: 8, startTime: '2:00 PM' }
  ]);

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          Tour Guide Dashboard
        </h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Welcome, {currentUser?.name}!</p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#4CAF50', marginBottom: '0.5rem' }}>24</h3>
            <p style={{ color: '#666' }}>Tours Today</p>
          </div>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#ff6b35', marginBottom: '0.5rem' }}>156</h3>
            <p style={{ color: '#666' }}>Total Participants</p>
          </div>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#2196F3', marginBottom: '0.5rem' }}>4.8</h3>
            <p style={{ color: '#666' }}>Average Rating</p>
          </div>
        </div>

        {/* Active Tours */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '2rem', color: '#333' }}>Active Tours</h2>
          {activeTours.map(tour => (
            <div key={tour.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>{tour.monument}</h3>
                <div style={{ display: 'flex', gap: '1rem', color: '#666', fontSize: '0.9rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Users size={14} />
                    {tour.participants} participants
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={14} />
                    Started at {tour.startTime}
                  </span>
                </div>
              </div>
              <button onClick={() => { setModalType('Join Chat'); setShowModal(true); }} style={{ background: '#4CAF50', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageCircle size={16} />
                Join Chat
              </button>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>Start New Tour</h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>Begin a new virtual tour session</p>
            <button onClick={() => { setModalType('Start New Tour'); setShowModal(true); }} style={{ width: '100%', background: '#ff6b35', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '8px', cursor: 'pointer' }}>
              Start Tour
            </button>
          </div>

          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>View Feedback</h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>Check ratings and reviews from participants</p>
            <button style={{ width: '100%', background: '#2196F3', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '8px', cursor: 'pointer' }}>
              View Reviews
            </button>
          </div>
        </div>

        {/* Universal Modal */}
        {showModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <div style={{ background: 'white', borderRadius: '12px', maxWidth: '500px', width: '100%', padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#333' }}>{modalType}</h3>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={`Enter details for ${modalType.toLowerCase()}...`}
                style={{ width: '100%', minHeight: '120px', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '1rem' }}
              />
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => { alert(`${modalType} completed successfully!\nDetails: ${inputText}`); setShowModal(false); setInputText(''); }} style={{ flex: 1, background: '#4CAF50', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '8px', cursor: 'pointer' }}>Submit</button>
                <button onClick={() => { setShowModal(false); setInputText(''); }} style={{ flex: 1, background: '#666', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '8px', cursor: 'pointer' }}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuideDashboard;
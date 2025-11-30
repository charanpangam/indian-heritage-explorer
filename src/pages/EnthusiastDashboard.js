import React, { useState } from 'react';
import { BookOpen, Eye, MessageSquare, Award } from 'lucide-react';

const EnthusiastDashboard = ({ currentUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [inputText, setInputText] = useState('');
  const [recentActivity] = useState([
    { type: 'tour', title: 'Completed Taj Mahal Virtual Tour', time: '2 hours ago' },
    { type: 'discussion', title: 'Posted in Classical Dance discussion', time: '1 day ago' },
    { type: 'quiz', title: 'Scored 3/3 in Culture Quiz', time: '2 days ago' }
  ]);

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          Cultural Enthusiast Dashboard
        </h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Welcome back, {currentUser?.name}!</p>

        {/* Progress Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#4CAF50', marginBottom: '0.5rem' }}>8</h3>
            <p style={{ color: '#666' }}>Tours Completed</p>
          </div>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#ff6b35', marginBottom: '0.5rem' }}>15</h3>
            <p style={{ color: '#666' }}>Articles Read</p>
          </div>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#2196F3', marginBottom: '0.5rem' }}>5</h3>
            <p style={{ color: '#666' }}>Discussions Joined</p>
          </div>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#9C27B0', marginBottom: '0.5rem' }}>12</h3>
            <p style={{ color: '#666' }}>Quiz Points</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          {/* Quick Actions */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '2rem', color: '#333' }}>Explore More</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
                <Eye size={32} style={{ color: '#4CAF50', marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>Virtual Tours</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>Explore monuments virtually</p>
                <button onClick={() => { setModalType('Start Virtual Tour'); setShowModal(true); }} style={{ background: '#4CAF50', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>
                  Start Tour
                </button>
              </div>

              <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
                <BookOpen size={32} style={{ color: '#ff6b35', marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>Learn Culture</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>Discover traditions</p>
                <button onClick={() => { setModalType('Explore Culture'); setShowModal(true); }} style={{ background: '#ff6b35', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>
                  Explore
                </button>
              </div>

              <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
                <MessageSquare size={32} style={{ color: '#2196F3', marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>Discussions</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>Join conversations</p>
                <button onClick={() => { setModalType('Join Discussion'); setShowModal(true); }} style={{ background: '#2196F3', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>
                  Join Chat
                </button>
              </div>

              <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
                <Award size={32} style={{ color: '#9C27B0', marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>Take Quiz</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>Test your knowledge</p>
                <button style={{ background: '#9C27B0', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>
                  Start Quiz
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '2rem', color: '#333' }}>Recent Activity</h2>
            <div style={{ space: '1rem' }}>
              {recentActivity.map((activity, index) => (
                <div key={index} style={{ padding: '1rem', borderLeft: '4px solid #4CAF50', background: '#f8f9fa', marginBottom: '1rem', borderRadius: '0 8px 8px 0' }}>
                  <p style={{ color: '#333', marginBottom: '0.25rem', fontSize: '0.9rem' }}>{activity.title}</p>
                  <p style={{ color: '#666', fontSize: '0.8rem' }}>{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginTop: '2rem' }}>
          <h2 style={{ marginBottom: '2rem', color: '#333' }}>Your Achievements</h2>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem' }}>🏆</div>
              <div>
                <h4 style={{ color: '#333', marginBottom: '0.25rem' }}>Culture Explorer</h4>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Completed 5+ virtual tours</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem' }}>📚</div>
              <div>
                <h4 style={{ color: '#333', marginBottom: '0.25rem' }}>Knowledge Seeker</h4>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Read 10+ cultural articles</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem' }}>💬</div>
              <div>
                <h4 style={{ color: '#333', marginBottom: '0.25rem' }}>Community Member</h4>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Active in discussions</p>
              </div>
            </div>
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
                placeholder={`Enter your ${modalType.toLowerCase()} details...`}
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

export default EnthusiastDashboard;
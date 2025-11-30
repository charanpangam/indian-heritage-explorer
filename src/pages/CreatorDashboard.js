import React, { useState } from 'react';
import { Plus, Edit, FileText, Video, Users } from 'lucide-react';

const CreatorDashboard = ({ currentUser }) => {
  const [activeTab, setActiveTab] = useState('content');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [inputText, setInputText] = useState('');

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          Content Creator Dashboard
        </h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Welcome, {currentUser?.name}!</p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#4CAF50', marginBottom: '0.5rem' }}>12</h3>
            <p style={{ color: '#666' }}>Articles Created</p>
          </div>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#ff6b35', marginBottom: '0.5rem' }}>8</h3>
            <p style={{ color: '#666' }}>Videos Uploaded</p>
          </div>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#2196F3', marginBottom: '0.5rem' }}>1.2K</h3>
            <p style={{ color: '#666' }}>Total Views</p>
          </div>
        </div>

        {/* Content Management */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ color: '#333' }}>Content Management</h2>
            <button onClick={() => { setModalType('Create New Content'); setShowModal(true); }} style={{ background: '#4CAF50', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Plus size={16} />
              Create New Content
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <FileText size={20} style={{ color: '#4CAF50' }} />
                <h3 style={{ color: '#333' }}>Cultural Articles</h3>
              </div>
              <p style={{ color: '#666', marginBottom: '1rem' }}>Create and manage educational articles about Indian culture</p>
              <button onClick={() => { setModalType('Manage Articles'); setShowModal(true); }} style={{ background: '#4CAF50', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>
                Manage Articles
              </button>
            </div>

            <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Video size={20} style={{ color: '#ff6b35' }} />
                <h3 style={{ color: '#333' }}>Video Content</h3>
              </div>
              <p style={{ color: '#666', marginBottom: '1rem' }}>Upload and edit educational videos and virtual tours</p>
              <button onClick={() => { setModalType('Upload Video'); setShowModal(true); }} style={{ background: '#ff6b35', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>
                Upload Video
              </button>
            </div>

            <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Users size={20} style={{ color: '#2196F3' }} />
                <h3 style={{ color: '#333' }}>Interactive Features</h3>
              </div>
              <p style={{ color: '#666', marginBottom: '1rem' }}>Create quizzes, polls, and interactive learning modules</p>
              <button style={{ background: '#2196F3', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>
                Create Interactive
              </button>
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

export default CreatorDashboard;
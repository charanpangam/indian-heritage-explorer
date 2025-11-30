import React, { useState } from 'react';
import { monuments, culturalTopics, users } from '../data/monuments';
import { Plus, Edit, Trash2, Users, FileText, Eye, MessageSquare } from 'lucide-react';

const Admin = ({ currentUser }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [inputText, setInputText] = useState('');
  const [newMonument, setNewMonument] = useState({
    name: '',
    location: '',
    period: '',
    description: '',
    category: '',
    significance: '',
    image: '',
    virtualTour: false
  });

  if (currentUser?.role !== 'admin') {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa' }}>
        <div style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#333', marginBottom: '1rem' }}>Access Denied</h2>
          <p style={{ color: '#666' }}>You need admin privileges to access this page.</p>
        </div>
      </div>
    );
  }

  const handleAddMonument = () => {
    // In a real app, this would make an API call
    console.log('Adding monument:', newMonument);
    setShowAddForm(false);
    setNewMonument({
      name: '',
      location: '',
      period: '',
      description: '',
      category: '',
      significance: '',
      image: '',
      virtualTour: false
    });
  };

  const stats = {
    totalMonuments: monuments.length,
    totalUsers: users.length,
    totalTours: monuments.filter(m => m.virtualTour).length,
    totalTopics: culturalTopics.length
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333' }}>
          Admin Dashboard
        </h1>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #ddd' }}>
          {[
            { id: 'overview', label: 'Overview', icon: <Eye size={16} /> },
            { id: 'monuments', label: 'Monuments', icon: <FileText size={16} /> },
            { id: 'users', label: 'Users', icon: <Users size={16} /> },
            { id: 'content', label: 'Content', icon: <MessageSquare size={16} /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? '#ff6b35' : 'transparent',
                color: activeTab === tab.id ? 'white' : '#666',
                border: 'none',
                padding: '1rem 1.5rem',
                borderRadius: '8px 8px 0 0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem'
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#ff6b35', marginBottom: '0.5rem' }}>{stats.totalMonuments}</h3>
                <p style={{ color: '#666' }}>Total Monuments</p>
              </div>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#4CAF50', marginBottom: '0.5rem' }}>{stats.totalUsers}</h3>
                <p style={{ color: '#666' }}>Registered Users</p>
              </div>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#2196F3', marginBottom: '0.5rem' }}>{stats.totalTours}</h3>
                <p style={{ color: '#666' }}>Virtual Tours</p>
              </div>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#9C27B0', marginBottom: '0.5rem' }}>{stats.totalTopics}</h3>
                <p style={{ color: '#666' }}>Cultural Topics</p>
              </div>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '1.5rem', color: '#333' }}>Recent Activity</h3>
              <div style={{ space: '1rem' }}>
                <div style={{ padding: '1rem', borderLeft: '4px solid #4CAF50', background: '#f8f9fa', marginBottom: '1rem' }}>
                  <p><strong>New user registered:</strong> Cultural Explorer joined 2 hours ago</p>
                </div>
                <div style={{ padding: '1rem', borderLeft: '4px solid #ff6b35', background: '#f8f9fa', marginBottom: '1rem' }}>
                  <p><strong>Content updated:</strong> Taj Mahal description was modified</p>
                </div>
                <div style={{ padding: '1rem', borderLeft: '4px solid #2196F3', background: '#f8f9fa' }}>
                  <p><strong>Virtual tour completed:</strong> 15 users completed Red Fort tour today</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Monuments Tab */}
        {activeTab === 'monuments' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 style={{ color: '#333' }}>Manage Monuments</h2>
              <button 
                onClick={() => { setModalType('Add Monument'); setShowModal(true); }}
                style={{ 
                  background: '#4CAF50', 
                  color: 'white', 
                  border: 'none', 
                  padding: '0.75rem 1.5rem', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Plus size={16} />
                Add Monument
              </button>
            </div>

            <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: '#f8f9fa' }}>
                  <tr>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Location</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Category</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Virtual Tour</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {monuments.map(monument => (
                    <tr key={monument.id}>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>{monument.name}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>{monument.location}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>{monument.category}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                        <span style={{ 
                          background: monument.virtualTour ? '#4CAF50' : '#f44336', 
                          color: 'white', 
                          padding: '0.25rem 0.75rem', 
                          borderRadius: '12px', 
                          fontSize: '0.8rem' 
                        }}>
                          {monument.virtualTour ? 'Available' : 'Not Available'}
                        </span>
                      </td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button onClick={() => { setModalType('Edit Monument'); setShowModal(true); }} style={{ background: '#2196F3', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px', cursor: 'pointer' }}>
                            <Edit size={14} />
                          </button>
                          <button onClick={() => { setModalType('Delete Monument'); setShowModal(true); }} style={{ background: '#f44336', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px', cursor: 'pointer' }}>
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div>
            <h2 style={{ marginBottom: '2rem', color: '#333' }}>User Management</h2>
            <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: '#f8f9fa' }}>
                  <tr>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Email</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Role</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Status</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>{user.name}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>{user.email}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                        <span style={{ 
                          background: user.role === 'admin' ? '#ff6b35' : '#4CAF50', 
                          color: 'white', 
                          padding: '0.25rem 0.75rem', 
                          borderRadius: '12px', 
                          fontSize: '0.8rem',
                          textTransform: 'capitalize'
                        }}>
                          {user.role}
                        </span>
                      </td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                        <span style={{ color: '#4CAF50' }}>Active</span>
                      </td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button style={{ background: '#2196F3', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px', cursor: 'pointer' }}>
                            <Edit size={14} />
                          </button>
                          {user.role !== 'admin' && (
                            <button style={{ background: '#f44336', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px', cursor: 'pointer' }}>
                              <Trash2 size={14} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Content Tab */}
        {activeTab === 'content' && (
          <div>
            <h2 style={{ marginBottom: '2rem', color: '#333' }}>Content Management</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {culturalTopics.map(topic => (
                <div key={topic.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ marginBottom: '1rem', color: '#333' }}>{topic.title}</h3>
                  <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{topic.description}</p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ 
                      flex: 1, 
                      background: '#2196F3', 
                      color: 'white', 
                      border: 'none', 
                      padding: '0.5rem', 
                      borderRadius: '4px', 
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.25rem'
                    }}>
                      <Edit size={14} />
                      Edit
                    </button>
                    <button style={{ 
                      background: '#f44336', 
                      color: 'white', 
                      border: 'none', 
                      padding: '0.5rem', 
                      borderRadius: '4px', 
                      cursor: 'pointer' 
                    }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Monument Modal */}
      {showAddForm && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'rgba(0,0,0,0.8)', 
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{ 
            background: 'white', 
            borderRadius: '12px', 
            maxWidth: '600px', 
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            padding: '2rem'
          }}>
            <h3 style={{ marginBottom: '2rem', color: '#333' }}>Add New Monument</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <input
                type="text"
                placeholder="Monument Name"
                value={newMonument.name}
                onChange={(e) => setNewMonument({...newMonument, name: e.target.value})}
                style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
              />
              <input
                type="text"
                placeholder="Location"
                value={newMonument.location}
                onChange={(e) => setNewMonument({...newMonument, location: e.target.value})}
                style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
              />
              <input
                type="text"
                placeholder="Period"
                value={newMonument.period}
                onChange={(e) => setNewMonument({...newMonument, period: e.target.value})}
                style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
              />
              <textarea
                placeholder="Description"
                value={newMonument.description}
                onChange={(e) => setNewMonument({...newMonument, description: e.target.value})}
                style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', minHeight: '100px' }}
              />
              <input
                type="text"
                placeholder="Category"
                value={newMonument.category}
                onChange={(e) => setNewMonument({...newMonument, category: e.target.value})}
                style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newMonument.image}
                onChange={(e) => setNewMonument({...newMonument, image: e.target.value})}
                style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
              />
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="checkbox"
                  checked={newMonument.virtualTour}
                  onChange={(e) => setNewMonument({...newMonument, virtualTour: e.target.checked})}
                />
                Virtual Tour Available
              </label>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button 
                onClick={handleAddMonument}
                style={{ 
                  flex: 1,
                  background: '#4CAF50', 
                  color: 'white', 
                  border: 'none', 
                  padding: '0.75rem', 
                  borderRadius: '8px', 
                  cursor: 'pointer' 
                }}
              >
                Add Monument
              </button>
              <button 
                onClick={() => setShowAddForm(false)}
                style={{ 
                  flex: 1,
                  background: '#666', 
                  color: 'white', 
                  border: 'none', 
                  padding: '0.75rem', 
                  borderRadius: '8px', 
                  cursor: 'pointer' 
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

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
  );
};

export default Admin;
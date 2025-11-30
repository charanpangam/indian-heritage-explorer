import React, { useState } from 'react';
import { monuments } from '../data/monuments';
import VirtualTour from '../components/VirtualTour';
import { Play, Clock, Users, Star } from 'lucide-react';

const VirtualTours = ({ currentUser }) => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [showTour, setShowTour] = useState(false);

  const availableTours = monuments.filter(m => m.virtualTour);

  const featuredTours = [
    {
      id: 'golden-triangle',
      title: 'Golden Triangle Tour',
      description: 'Explore Delhi, Agra, and Jaipur in one comprehensive virtual journey',
      duration: '45 minutes',
      monuments: ['Taj Mahal', 'Red Fort', 'Hawa Mahal'],
      rating: 4.8,
      participants: 1250,
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800'
    },
    {
      id: 'mughal-heritage',
      title: 'Mughal Heritage Trail',
      description: 'Journey through the magnificent Mughal architectural legacy',
      duration: '35 minutes',
      monuments: ['Taj Mahal', 'Red Fort'],
      rating: 4.9,
      participants: 980,
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800'
    }
  ];

  const handleStartTour = (monument) => {
    setSelectedTour(monument);
    setShowTour(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333', textAlign: 'center' }}>
          Virtual Tours
        </h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Experience India's magnificent heritage from anywhere in the world
        </p>

        {/* Featured Tours */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>Featured Tours</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '2rem' 
          }}>
            {featuredTours.map(tour => (
              <div 
                key={tour.id}
                style={{ 
                  background: 'white', 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ position: 'relative' }}>
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                  />
                  <div style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    left: '1rem', 
                    background: 'rgba(0,0,0,0.7)', 
                    color: 'white', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '20px',
                    fontSize: '0.9rem'
                  }}>
                    Featured
                  </div>
                </div>
                
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ marginBottom: '1rem', color: '#333', fontSize: '1.3rem' }}>{tour.title}</h3>
                  <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>{tour.description}</p>
                  
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={16} />
                      {tour.duration}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Users size={16} />
                      {tour.participants}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Star size={16} />
                      {tour.rating}
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Includes:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {tour.monuments.map(monument => (
                        <span 
                          key={monument}
                          style={{ 
                            background: '#f0f0f0', 
                            padding: '0.25rem 0.75rem', 
                            borderRadius: '15px', 
                            fontSize: '0.8rem',
                            color: '#333'
                          }}
                        >
                          {monument}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleStartTour(availableTours[0])} // Start with first available monument
                    style={{ 
                      width: '100%',
                      background: '#4CAF50', 
                      color: 'white', 
                      border: 'none', 
                      padding: '1rem', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      fontWeight: 'bold'
                    }}
                  >
                    <Play size={20} />
                    Start Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Individual Monument Tours */}
        <section>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>Individual Monument Tours</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {availableTours.map(monument => (
              <div 
                key={monument.id}
                style={{ 
                  background: 'white', 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img 
                  src={monument.image} 
                  alt={monument.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>{monument.name}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{monument.location}</p>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                    {monument.description.substring(0, 120)}...
                  </p>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.8rem' }}>
                    <span style={{ background: '#e3f2fd', color: '#1976d2', padding: '0.25rem 0.5rem', borderRadius: '12px' }}>
                      15-20 min
                    </span>
                    <span style={{ background: '#f3e5f5', color: '#7b1fa2', padding: '0.25rem 0.5rem', borderRadius: '12px' }}>
                      Interactive
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => handleStartTour(monument)}
                    style={{ 
                      width: '100%',
                      background: '#ff6b35', 
                      color: 'white', 
                      border: 'none', 
                      padding: '0.75rem', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <Play size={16} />
                    Start Virtual Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tour Guide Features */}
        {currentUser?.role === 'guide' && (
          <section style={{ marginTop: '4rem', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>Tour Guide Dashboard</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', color: '#4CAF50', marginBottom: '0.5rem' }}>24</h3>
                <p style={{ color: '#666' }}>Active Tours Today</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', color: '#ff6b35', marginBottom: '0.5rem' }}>156</h3>
                <p style={{ color: '#666' }}>Total Participants</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', color: '#2196F3', marginBottom: '0.5rem' }}>4.8</h3>
                <p style={{ color: '#666' }}>Average Rating</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', color: '#9C27B0', marginBottom: '0.5rem' }}>12</h3>
                <p style={{ color: '#666' }}>Questions Answered</p>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Virtual Tour Component */}
      {showTour && selectedTour && (
        <VirtualTour 
          monument={selectedTour} 
          onClose={() => setShowTour(false)}
          currentUser={currentUser}
        />
      )}
    </div>
  );
};

export default VirtualTours;
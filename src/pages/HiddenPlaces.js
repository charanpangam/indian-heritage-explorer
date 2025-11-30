import React, { useState } from 'react';
import { hiddenPlaces, monuments, videos } from '../data/monuments';
import { MapPin, Clock, Star, Play, ShoppingBag, Utensils, Building } from 'lucide-react';

const HiddenPlaces = () => {
  const [selectedMonument, setSelectedMonument] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredPlaces = hiddenPlaces.filter(place => {
    const matchesMonument = !selectedMonument || place.monumentId === parseInt(selectedMonument);
    const matchesType = !selectedType || place.type === selectedType;
    return matchesMonument && matchesType;
  });

  const getTypeIcon = (type) => {
    switch(type) {
      case 'shop': return <ShoppingBag size={20} />;
      case 'food': return <Utensils size={20} />;
      case 'architecture': return <Building size={20} />;
      default: return <MapPin size={20} />;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'shop': return '#4CAF50';
      case 'food': return '#ff6b35';
      case 'architecture': return '#2196F3';
      default: return '#666';
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333', textAlign: 'center' }}>
          Hidden Gems & Local Experiences
        </h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Discover authentic local shops, food stalls, and hidden architectural wonders
        </p>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <select
            value={selectedMonument}
            onChange={(e) => setSelectedMonument(e.target.value)}
            style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', minWidth: '200px' }}
          >
            <option value="">All Locations</option>
            {monuments.map(monument => (
              <option key={monument.id} value={monument.id}>{monument.name}</option>
            ))}
          </select>
          
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', minWidth: '150px' }}
          >
            <option value="">All Types</option>
            <option value="shop">Shops</option>
            <option value="food">Food Stalls</option>
            <option value="architecture">Architecture</option>
          </select>
        </div>

        {/* Videos Section */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>Featured Videos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {videos.filter(v => v.placeId || !v.monumentId).map(video => (
              <div 
                key={video.id}
                style={{ 
                  background: 'white', 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedVideo(video)}
              >
                <div style={{ 
                  height: '200px', 
                  background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${
                    video.id === 4 ? 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400' :
                    video.id === 5 ? 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400' :
                    video.id === 6 ? 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400' :
                    video.monumentId ? monuments.find(m => m.id === video.monumentId)?.image : 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400'
                  })`, 
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <Play size={48} style={{ color: 'white' }} />
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '1rem', 
                    right: '1rem', 
                    background: 'rgba(0,0,0,0.7)', 
                    color: 'white', 
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '4px',
                    fontSize: '0.8rem'
                  }}>
                    {video.duration}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>{video.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>{video.description}</p>
                  <div style={{ 
                    background: '#f8f9fa', 
                    padding: '0.75rem', 
                    borderRadius: '8px', 
                    fontSize: '0.8rem', 
                    color: '#666',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    🎧 Audio narration included
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hidden Places Grid */}
        <section>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>
            Hidden Places ({filteredPlaces.length})
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minWidth(320px, 1fr))', gap: '2rem' }}>
            {filteredPlaces.map(place => (
              <div 
                key={place.id}
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
                  src={place.image} 
                  alt={place.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{ color: getTypeColor(place.type) }}>
                      {getTypeIcon(place.type)}
                    </span>
                    <span style={{ 
                      background: getTypeColor(place.type), 
                      color: 'white', 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '12px', 
                      fontSize: '0.8rem',
                      textTransform: 'capitalize'
                    }}>
                      {place.type}
                    </span>
                  </div>
                  
                  <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>{place.name}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                    {place.description}
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#666', fontSize: '0.8rem' }}>
                    <MapPin size={14} />
                    {place.location}
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#666', fontSize: '0.8rem' }}>
                    <Clock size={14} />
                    {place.timings}
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#666', fontSize: '0.8rem' }}>
                    <Star size={14} style={{ color: '#ffc107' }} />
                    {place.rating} rating
                  </div>
                  
                  <button 
                    onClick={() => alert(`Directions: Head ${['north', 'south', 'east', 'west'][Math.floor(Math.random() * 4)]} from ${monuments.find(m => m.id === place.monumentId)?.name || 'monument'} for ${Math.floor(Math.random() * 10) + 1} minutes walk`)}
                    style={{ 
                      width: '100%',
                      background: getTypeColor(place.type), 
                      color: 'white', 
                      border: 'none', 
                      padding: '0.75rem', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {filteredPlaces.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#666' }}>
            <h3>No hidden places found</h3>
            <p>Try adjusting your filters</p>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'rgba(0,0,0,0.9)', 
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{ 
            background: 'white', 
            borderRadius: '12px', 
            maxWidth: '800px', 
            width: '100%',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={selectedVideo.url}
                title={selectedVideo.title}
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%',
                  border: 'none'
                }}
                allowFullScreen
              />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>{selectedVideo.title}</h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>{selectedVideo.description}</p>
              <div style={{ 
                background: '#e3f2fd', 
                padding: '1rem', 
                borderRadius: '8px', 
                marginBottom: '1rem',
                fontSize: '0.9rem',
                color: '#1976d2'
              }}>
                🎧 Audio Guide: Listen to expert commentary about Indian heritage, culture, and local traditions throughout this video experience.
              </div>
              <button 
                onClick={() => setSelectedVideo(null)}
                style={{ 
                  background: '#666', 
                  color: 'white', 
                  border: 'none', 
                  padding: '0.75rem 1.5rem', 
                  borderRadius: '8px', 
                  cursor: 'pointer' 
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HiddenPlaces;
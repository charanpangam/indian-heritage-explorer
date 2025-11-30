import React, { useState } from 'react';
import { monuments } from '../data/monuments';
import MonumentCard from '../components/MonumentCard';
import VirtualTour from '../components/VirtualTour';
import { Search, Filter, X } from 'lucide-react';

const Monuments = ({ currentUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMonument, setSelectedMonument] = useState(null);
  const [showTour, setShowTour] = useState(false);
  const [tourMonument, setTourMonument] = useState(null);

  const categories = [...new Set(monuments.map(m => m.category))];
  
  const filteredMonuments = monuments.filter(monument => {
    const matchesSearch = monument.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         monument.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || monument.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleViewDetails = (monument) => {
    setSelectedMonument(monument);
  };

  const handleStartTour = (monument) => {
    setTourMonument(monument);
    setShowTour(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333', textAlign: 'center' }}>
          Historical Monuments of India
        </h1>

        {/* Search and Filter */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem', 
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <div style={{ position: 'relative', flex: '1', minWidth: '250px' }}>
            <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
            <input
              type="text"
              placeholder="Search monuments or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px 12px 12px 40px', 
                border: '1px solid #ddd', 
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ 
              padding: '12px', 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              fontSize: '1rem',
              minWidth: '200px'
            }}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          Showing {filteredMonuments.length} of {monuments.length} monuments
        </p>

        {/* Monuments Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {filteredMonuments.map(monument => (
            <MonumentCard
              key={monument.id}
              monument={monument}
              onViewDetails={handleViewDetails}
              onStartTour={handleStartTour}
            />
          ))}
        </div>

        {filteredMonuments.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#666' }}>
            <h3>No monuments found</h3>
            <p>Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>

      {/* Monument Details Modal */}
      {selectedMonument && (
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
            maxWidth: '800px', 
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto'
          }}>
            <div style={{ position: 'relative' }}>
              <img 
                src={selectedMonument.image} 
                alt={selectedMonument.name}
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
              />
              <button 
                onClick={() => setSelectedMonument(null)}
                style={{ 
                  position: 'absolute', 
                  top: '1rem', 
                  right: '1rem', 
                  background: 'rgba(0,0,0,0.7)', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '50%', 
                  width: '40px', 
                  height: '40px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <h2 style={{ marginBottom: '1rem', color: '#333' }}>{selectedMonument.name}</h2>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ background: '#ff6b35', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                  {selectedMonument.category}
                </span>
              </div>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                <strong>Location:</strong> {selectedMonument.location}
              </p>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                <strong>Period:</strong> {selectedMonument.period}
              </p>
              <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {selectedMonument.description}
              </p>
              <p style={{ color: '#666', marginBottom: '2rem', fontStyle: 'italic' }}>
                <strong>Significance:</strong> {selectedMonument.significance}
              </p>
              
              {selectedMonument.virtualTour && (
                <button 
                  onClick={() => {
                    setSelectedMonument(null);
                    handleStartTour(selectedMonument);
                  }}
                  style={{ 
                    background: '#4CAF50', 
                    color: 'white', 
                    border: 'none', 
                    padding: '1rem 2rem', 
                    borderRadius: '8px', 
                    cursor: 'pointer',
                    fontSize: '1rem',
                    width: '100%'
                  }}
                >
                  Start Virtual Tour
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Virtual Tour */}
      {showTour && tourMonument && (
        <VirtualTour 
          monument={tourMonument} 
          onClose={() => setShowTour(false)}
          currentUser={currentUser}
        />
      )}
    </div>
  );
};

export default Monuments;
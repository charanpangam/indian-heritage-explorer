import React from 'react';
import { MapPin, Calendar, Eye } from 'lucide-react';

const MonumentCard = ({ monument, onViewDetails, onStartTour }) => {
  return (
    <div style={{ 
      background: 'white', 
      borderRadius: '8px', 
      overflow: 'hidden', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
      transition: 'transform 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
    >
      <img 
        src={monument.image} 
        alt={monument.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '1rem' }}>
        <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>{monument.name}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
          <MapPin size={16} />
          {monument.location}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
          <Calendar size={16} />
          {monument.period}
        </div>
        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.4' }}>
          {monument.description.substring(0, 100)}...
        </p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            onClick={() => onViewDetails(monument)}
            style={{ 
              flex: 1, 
              padding: '0.5rem', 
              background: '#ff6b35', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            View Details
          </button>
          {monument.virtualTour && (
            <button 
              onClick={() => onStartTour(monument)}
              style={{ 
                flex: 1, 
                padding: '0.5rem', 
                background: '#4CAF50', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.25rem'
              }}
            >
              <Eye size={16} />
              Virtual Tour
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonumentCard;
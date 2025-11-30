import React, { useState } from 'react';
import { X, Play, Pause, RotateCcw, ZoomIn, MessageCircle } from 'lucide-react';

const VirtualTour = ({ monument, onClose, currentUser }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentView, setCurrentView] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const tourViews = [
    { 
      name: 'Exterior View', 
      description: 'Marvel at the magnificent exterior architecture',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800',
      audio: 'Welcome to the majestic exterior of this historic monument. Notice the intricate architectural details...'
    },
    { 
      name: 'Main Entrance', 
      description: 'Step through the grand entrance gates',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
      audio: 'As you enter through these ancient gates, imagine the countless visitors who have walked this path...'
    },
    { 
      name: 'Interior Hall', 
      description: 'Explore the intricate interior designs',
      image: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=800',
      audio: 'The interior showcases masterful craftsmanship with detailed carvings and artistic elements...'
    },
    { 
      name: 'Historical Gallery', 
      description: 'Learn about the monument\'s rich history',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      audio: 'This monument has witnessed centuries of history, from ancient times to the present day...'
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { 
        user: currentUser?.role || 'Guest', 
        message: newMessage, 
        timestamp: new Date().toLocaleTimeString() 
      }]);
      setNewMessage('');
      
      // Simulate guide response
      if (currentUser?.role !== 'guide') {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            user: 'Tour Guide',
            message: `Great question! The ${monument.name} has fascinating details about ${newMessage.toLowerCase()}. Let me explain more...`,
            timestamp: new Date().toLocaleTimeString()
          }]);
        }, 1000);
      }
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      background: 'rgba(0,0,0,0.9)', 
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1rem', 
        background: 'rgba(0,0,0,0.8)', 
        color: 'white' 
      }}>
        <h2>Virtual Tour: {monument.name}</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button 
            onClick={() => setShowChat(!showChat)}
            style={{ background: '#4CAF50', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <MessageCircle size={16} />
            Chat with Guide
          </button>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Main Tour Area */}
        <div style={{ flex: showChat ? 2 : 1, display: 'flex', flexDirection: 'column' }}>
          {/* Tour View */}
          <div style={{ 
            flex: 1, 
            background: `url(${tourViews[currentView].image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
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
              🎥 360° Experience
            </div>
            
            {/* Audio Controls */}
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              background: 'rgba(0,0,0,0.7)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              maxWidth: '300px'
            }}>
              🔊 {tourViews[currentView].audio}
            </div>
            <div style={{ 
              background: 'rgba(0,0,0,0.7)', 
              color: 'white', 
              padding: '2rem', 
              borderRadius: '8px', 
              textAlign: 'center',
              maxWidth: '500px'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>{tourViews[currentView].name}</h3>
              <p style={{ marginBottom: '2rem' }}>{tourViews[currentView].description}</p>
              
              {/* Tour Controls */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{ background: '#ff6b35', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  {isPlaying ? 'Pause' : 'Play'} Tour
                </button>
                <button 
                  onClick={() => setCurrentView(0)}
                  style={{ background: '#666', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <RotateCcw size={16} />
                  Restart
                </button>
              </div>
              
              {/* View Navigation */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                {tourViews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentView(index)}
                    style={{ 
                      width: '12px', 
                      height: '12px', 
                      borderRadius: '50%', 
                      border: 'none', 
                      background: currentView === index ? '#ff6b35' : '#666',
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Tour Progress */}
          <div style={{ background: 'rgba(0,0,0,0.8)', color: 'white', padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>View {currentView + 1} of {tourViews.length}</span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  onClick={() => setCurrentView(Math.max(0, currentView - 1))}
                  disabled={currentView === 0}
                  style={{ background: currentView === 0 ? '#666' : '#ff6b35', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: currentView === 0 ? 'not-allowed' : 'pointer' }}
                >
                  Previous
                </button>
                <button 
                  onClick={() => setCurrentView(Math.min(tourViews.length - 1, currentView + 1))}
                  disabled={currentView === tourViews.length - 1}
                  style={{ background: currentView === tourViews.length - 1 ? '#666' : '#ff6b35', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: currentView === tourViews.length - 1 ? 'not-allowed' : 'pointer' }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Panel */}
        {showChat && (
          <div style={{ width: '300px', background: 'white', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '1rem', borderBottom: '1px solid #eee', background: '#f5f5f5' }}>
              <h4>Tour Guide Chat</h4>
            </div>
            
            <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', maxHeight: '400px' }}>
              {messages.length === 0 ? (
                <p style={{ color: '#666', textAlign: 'center' }}>Ask the tour guide any questions about {monument.name}!</p>
              ) : (
                messages.map((msg, index) => (
                  <div key={index} style={{ marginBottom: '1rem', padding: '0.5rem', background: msg.user === 'Tour Guide' ? '#e3f2fd' : '#f5f5f5', borderRadius: '4px' }}>
                    <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.25rem' }}>
                      {msg.user} - {msg.timestamp}
                    </div>
                    <div>{msg.message}</div>
                  </div>
                ))
              )}
            </div>
            
            <div style={{ padding: '1rem', borderTop: '1px solid #eee' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask a question..."
                  style={{ flex: 1, padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
                <button 
                  onClick={handleSendMessage}
                  style={{ background: '#ff6b35', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualTour;
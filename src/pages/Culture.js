import React, { useState } from 'react';
import { culturalTopics } from '../data/monuments';
import { BookOpen, Users, Calendar, Music, Palette, Utensils } from 'lucide-react';

const Culture = ({ currentUser }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showDiscussion, setShowDiscussion] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showMuseum, setShowMuseum] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const quizQuestions = [
    {
      question: "Which classical dance form originated in Tamil Nadu?",
      options: ["Bharatanatyam", "Kathak", "Odissi", "Kuchipudi"],
      correct: "Bharatanatyam"
    },
    {
      question: "What is the festival of lights called in India?",
      options: ["Holi", "Diwali", "Eid", "Christmas"],
      correct: "Diwali"
    },
    {
      question: "Which spice is known as the 'Queen of Spices'?",
      options: ["Turmeric", "Cardamom", "Cinnamon", "Black Pepper"],
      correct: "Cardamom"
    }
  ];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setQuizCompleted(false);
    setShowQuiz(false);
  };
  const [discussions, setDiscussions] = useState([
    { id: 1, title: "Significance of Diwali celebrations", author: "Cultural Explorer", replies: 12, time: "2 hours ago" },
    { id: 2, title: "Regional variations in classical dance", author: "Dance Enthusiast", replies: 8, time: "5 hours ago" },
    { id: 3, title: "Traditional cooking methods", author: "Food Lover", replies: 15, time: "1 day ago" }
  ]);

  const culturalCategories = [
    { icon: <Music size={32} />, title: "Arts & Music", description: "Classical and folk traditions", count: 25 },
    { icon: <Palette size={32} />, title: "Crafts & Textiles", description: "Traditional handicrafts", count: 18 },
    { icon: <Utensils size={32} />, title: "Cuisine", description: "Regional food traditions", count: 30 },
    { icon: <Calendar size={32} />, title: "Festivals", description: "Celebrations across India", count: 22 },
    { icon: <BookOpen size={32} />, title: "Literature", description: "Ancient texts and poetry", count: 15 },
    { icon: <Users size={32} />, title: "Social Customs", description: "Traditions and rituals", count: 20 }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333', textAlign: 'center' }}>
          Indian Culture & Heritage
        </h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Explore the rich tapestry of Indian culture, traditions, and customs
        </p>

        {/* Cultural Categories */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>Cultural Categories</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {culturalCategories.map((category, index) => (
              <div 
                key={index}
                style={{ 
                  background: 'white', 
                  padding: '1.5rem', 
                  borderRadius: '12px', 
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ color: '#ff6b35', marginBottom: '1rem' }}>
                  {category.icon}
                </div>
                <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>{category.title}</h3>
                <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem' }}>{category.description}</p>
                <span style={{ color: '#ff6b35', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  {category.count} topics
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Topics */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>Featured Topics</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {culturalTopics.map(topic => (
              <div 
                key={topic.id}
                style={{ 
                  background: 'white', 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedTopic(topic)}
              >
                <img 
                  src={topic.image} 
                  alt={topic.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ marginBottom: '1rem', color: '#333' }}>{topic.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Discussions */}
        {currentUser?.role === 'enthusiast' && (
          <section style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2rem', color: '#333' }}>Community Discussions</h2>
              <button 
                onClick={() => setShowDiscussion(true)}
                style={{ 
                  background: '#ff6b35', 
                  color: 'white', 
                  border: 'none', 
                  padding: '0.75rem 1.5rem', 
                  borderRadius: '8px', 
                  cursor: 'pointer' 
                }}
              >
                Start Discussion
              </button>
            </div>
            
            <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              {discussions.map(discussion => (
                <div 
                  key={discussion.id}
                  style={{ 
                    padding: '1.5rem', 
                    borderBottom: '1px solid #eee',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                >
                  <h4 style={{ marginBottom: '0.5rem', color: '#333' }}>{discussion.title}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#666', fontSize: '0.9rem' }}>
                    <span>by {discussion.author}</span>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Interactive Learning */}
        <section>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>Interactive Learning</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
              color: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Cultural Quiz</h3>
              <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>Test your knowledge of Indian culture</p>
              <button 
                onClick={() => setShowQuiz(true)}
                style={{ 
                  background: 'white', 
                  color: '#667eea', 
                  border: 'none', 
                  padding: '0.75rem 1.5rem', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Start Quiz
              </button>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
              color: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Virtual Museum</h3>
              <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>Explore artifacts and exhibits</p>
              <button 
                onClick={() => setShowMuseum(true)}
                style={{ 
                  background: 'white', 
                  color: '#f5576c', 
                  border: 'none', 
                  padding: '0.75rem 1.5rem', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Visit Museum
              </button>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', 
              color: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Language Corner</h3>
              <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>Learn basic phrases in Indian languages</p>
              <button style={{ 
                background: 'white', 
                color: '#4facfe', 
                border: 'none', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '8px', 
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
                Start Learning
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Topic Detail Modal */}
      {selectedTopic && (
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
            maxHeight: '80vh',
            overflow: 'auto'
          }}>
            <div style={{ position: 'relative' }}>
              <img 
                src={selectedTopic.image} 
                alt={selectedTopic.title}
                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
              />
              <button 
                onClick={() => setSelectedTopic(null)}
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
                  cursor: 'pointer'
                }}
              >
                ×
              </button>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <h2 style={{ marginBottom: '1rem', color: '#333' }}>{selectedTopic.title}</h2>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '2rem' }}>
                {selectedTopic.content || selectedTopic.description}
              </p>
              <p style={{ color: '#333', lineHeight: '1.8' }}>
                This is a detailed exploration of {selectedTopic.title.toLowerCase()}. Indian culture is incredibly diverse and rich, 
                with each region contributing its unique traditions, customs, and practices. Understanding these cultural elements 
                helps us appreciate the depth and complexity of Indian civilization that has evolved over thousands of years.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Discussion Modal */}
      {showDiscussion && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ background: 'white', borderRadius: '12px', maxWidth: '500px', width: '100%', padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>Start New Discussion</h3>
            <textarea
              value={newDiscussion}
              onChange={(e) => setNewDiscussion(e.target.value)}
              placeholder="What would you like to discuss about Indian culture?"
              style={{ width: '100%', minHeight: '120px', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '1rem' }}
            />
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={() => { setShowDiscussion(false); setNewDiscussion(''); }} style={{ flex: 1, background: '#4CAF50', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '8px', cursor: 'pointer' }}>Post Discussion</button>
              <button onClick={() => setShowDiscussion(false)} style={{ flex: 1, background: '#666', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '8px', cursor: 'pointer' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Quiz Modal */}
      {showQuiz && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ background: 'white', borderRadius: '12px', maxWidth: '600px', width: '100%', padding: '2rem' }}>
            {!quizCompleted ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <h3 style={{ color: '#333' }}>Indian Culture Quiz</h3>
                  <span style={{ background: '#f0f0f0', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1.5rem', color: '#333', fontSize: '1.1rem' }}>
                    {quizQuestions[currentQuestion].question}
                  </h4>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {quizQuestions[currentQuestion].options.map(option => (
                      <button 
                        key={option} 
                        onClick={() => handleAnswerSelect(option)}
                        style={{ 
                          padding: '1rem', 
                          border: selectedAnswer === option ? '2px solid #4CAF50' : '1px solid #ddd', 
                          borderRadius: '8px', 
                          cursor: 'pointer', 
                          textAlign: 'left',
                          background: selectedAnswer === option ? '#f0f8f0' : 'white',
                          transition: 'all 0.2s'
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button 
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswer}
                    style={{ 
                      flex: 1,
                      background: selectedAnswer ? '#4CAF50' : '#ccc', 
                      color: 'white', 
                      border: 'none', 
                      padding: '0.75rem 1.5rem', 
                      borderRadius: '8px', 
                      cursor: selectedAnswer ? 'pointer' : 'not-allowed' 
                    }}
                  >
                    {currentQuestion + 1 === quizQuestions.length ? 'Finish Quiz' : 'Next Question'}
                  </button>
                  <button 
                    onClick={() => setShowQuiz(false)} 
                    style={{ background: '#666', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer' }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 style={{ marginBottom: '2rem', color: '#333', textAlign: 'center' }}>Quiz Completed!</h3>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    color: score >= 2 ? '#4CAF50' : score >= 1 ? '#ff9800' : '#f44336',
                    marginBottom: '1rem'
                  }}>
                    {score >= 2 ? '🎉' : score >= 1 ? '👍' : '📚'}
                  </div>
                  <h4 style={{ marginBottom: '1rem', color: '#333' }}>
                    Your Score: {score} out of {quizQuestions.length}
                  </h4>
                  <p style={{ color: '#666' }}>
                    {score >= 2 ? 'Excellent! You know Indian culture well!' : 
                     score >= 1 ? 'Good job! Keep learning about Indian culture.' : 
                     'Keep exploring to learn more about Indian heritage!'}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button 
                    onClick={resetQuiz}
                    style={{ flex: 1, background: '#4CAF50', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer' }}
                  >
                    Take Quiz Again
                  </button>
                  <button 
                    onClick={() => setShowQuiz(false)} 
                    style={{ background: '#666', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer' }}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Museum Modal */}
      {showMuseum && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ background: 'white', borderRadius: '12px', maxWidth: '800px', width: '100%', padding: '2rem' }}>
            <h3 style={{ marginBottom: '2rem', color: '#333' }}>Virtual Museum Gallery</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {[
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
                'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=300',
                'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=300',
                'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300'
              ].map((img, index) => (
                <div key={index} style={{ borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={img} alt={`Artifact ${index + 1}`} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <div style={{ padding: '0.5rem', background: '#f5f5f5' }}>
                    <p style={{ fontSize: '0.9rem', color: '#333' }}>Ancient Artifact {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setShowMuseum(false)} style={{ background: '#666', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer' }}>Close Museum</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Culture;
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, BookOpen, Eye } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <MapPin size={48} />,
      title: "Explore Monuments",
      description: "Discover India's magnificent historical monuments and architectural wonders",
      link: "/monuments"
    },
    {
      icon: <BookOpen size={48} />,
      title: "Learn Culture",
      description: "Dive deep into India's rich cultural heritage, traditions, and customs",
      link: "/culture"
    },
    {
      icon: <Eye size={48} />,
      title: "Virtual Tours",
      description: "Experience immersive virtual tours of famous Indian landmarks",
      link: "/virtual-tours"
    },
    {
      icon: <Users size={48} />,
      title: "Community",
      description: "Connect with fellow culture enthusiasts and expert guides",
      link: "/community"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=1200)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 1rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            Discover India's Rich Heritage
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            Explore magnificent monuments, immerse yourself in vibrant culture, and embark on virtual journeys through India's most treasured historical sites.
          </p>
          <Link 
            to="/monuments"
            style={{ 
              background: '#ff6b35', 
              color: 'white', 
              padding: '1rem 2rem', 
              textDecoration: 'none', 
              borderRadius: '8px', 
              fontSize: '1.1rem',
              display: 'inline-block',
              transition: 'background 0.3s'
            }}
          >
            Start Exploring
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: '#333' }}>
            Explore Indian Heritage
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            {features.map((feature, index) => (
              <Link 
                key={index}
                to={feature.link}
                style={{ 
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div style={{ 
                  background: 'white', 
                  padding: '2rem', 
                  borderRadius: '12px', 
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                }}
                >
                  <div style={{ color: '#ff6b35', marginBottom: '1rem' }}>
                    {feature.icon}
                  </div>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem', color: '#333' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '4rem 0', background: '#ff6b35', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <h3 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>40+</h3>
              <p style={{ fontSize: '1.1rem' }}>UNESCO World Heritage Sites</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>28</h3>
              <p style={{ fontSize: '1.1rem' }}>States & Union Territories</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>1000+</h3>
              <p style={{ fontSize: '1.1rem' }}>Historical Monuments</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>5000+</h3>
              <p style={{ fontSize: '1.1rem' }}>Years of History</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
            Ready to Begin Your Journey?
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
            Join thousands of culture enthusiasts in exploring India's magnificent heritage. Start your virtual journey today!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/virtual-tours"
              style={{ 
                background: '#4CAF50', 
                color: 'white', 
                padding: '1rem 2rem', 
                textDecoration: 'none', 
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Eye size={20} />
              Start Virtual Tour
            </Link>
            <Link 
              to="/hidden-places"
              style={{ 
                background: 'transparent', 
                color: '#ff6b35', 
                padding: '1rem 2rem', 
                textDecoration: 'none', 
                borderRadius: '8px',
                border: '2px solid #ff6b35',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Users size={20} />
              Hidden Places
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
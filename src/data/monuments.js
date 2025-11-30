export const monuments = [
  {
    id: 1,
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    period: "1632-1653",
    description: "A white marble mausoleum built by Mughal emperor Shah Jahan for his wife Mumtaz Mahal.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
    category: "Mughal Architecture",
    significance: "UNESCO World Heritage Site and one of the New Seven Wonders of the World",
    virtualTour: true
  },
  {
    id: 2,
    name: "Gateway of India",
    location: "Mumbai",
    period: "1911-1924",
    description: "An arch monument built during the British Raj in Mumbai, India.",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800",
    category: "Colonial Architecture",
    significance: "Iconic symbol of Mumbai and major tourist attraction",
    virtualTour: true
  },
  {
    id: 3,
    name: "Qutub Minar",
    location: "Delhi",
    period: "1192-1220",
    description: "A 73-meter tall tower of victory built by Qutb-ud-din Aibak.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
    category: "Indo-Islamic Architecture",
    significance: "UNESCO World Heritage Site and tallest brick minaret in the world",
    virtualTour: false
  },
  {
    id: 4,
    name: "Hawa Mahal",
    location: "Jaipur, Rajasthan",
    period: "1799",
    description: "Palace of Winds with 953 small windows designed for royal ladies to observe street festivals.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
    category: "Rajput Architecture",
    significance: "Iconic symbol of Jaipur's rich architectural heritage",
    virtualTour: true
  }
];

export const culturalTopics = [
  {
    id: 1,
    title: "Classical Dance Forms",
    description: "Explore India's eight classical dance forms including Bharatanatyam, Kathak, and Odissi.",
    image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400",
    content: "Indian classical dance is a rich tradition with eight recognized forms..."
  },
  {
    id: 2,
    title: "Festivals of India",
    description: "Discover the vibrant festivals celebrated across different regions of India.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400",
    content: "India celebrates numerous festivals throughout the year..."
  },
  {
    id: 3,
    title: "Traditional Cuisine",
    description: "Learn about India's diverse culinary traditions and regional specialties.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    content: "Indian cuisine varies significantly across different regions..."
  }
];

export const hiddenPlaces = [
  {
    id: 1,
    monumentId: 1, // Taj Mahal
    name: "Panchhi Petha Store",
    type: "shop",
    description: "Famous for authentic Agra petha sweets since 1950",
    location: "Near Taj Mahal East Gate",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    rating: 4.5,
    timings: "9 AM - 9 PM"
  },
  {
    id: 2,
    monumentId: 1,
    name: "Mughal Darbar Restaurant",
    type: "food",
    description: "Traditional Mughlai cuisine with view of Taj Mahal",
    location: "Taj Ganj Area",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    rating: 4.3,
    timings: "11 AM - 11 PM"
  },
  {
    id: 3,
    monumentId: 2, // Red Fort
    name: "Chandni Chowk Spice Market",
    type: "shop",
    description: "Asia's largest spice market with 400-year history",
    location: "Old Delhi, Near Red Fort",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400",
    rating: 4.7,
    timings: "10 AM - 8 PM"
  },
  {
    id: 4,
    monumentId: 2,
    name: "Karim's Restaurant",
    type: "food",
    description: "Legendary Mughlai restaurant since 1913",
    location: "Jama Masjid, Old Delhi",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
    rating: 4.6,
    timings: "12 PM - 12 AM"
  },
  {
    id: 5,
    monumentId: 4, // Hawa Mahal
    name: "Johari Bazaar",
    type: "shop",
    description: "Traditional jewelry market with precious gems",
    location: "Pink City, Jaipur",
    image: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400",
    rating: 4.4,
    timings: "10 AM - 9 PM"
  },
  {
    id: 6,
    monumentId: 4,
    name: "Lassiwala",
    type: "food",
    description: "Famous lassi shop serving since 1944",
    location: "MI Road, Jaipur",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
    rating: 4.8,
    timings: "8 AM - 11 PM"
  },
  {
    id: 7,
    monumentId: 1,
    name: "Itimad-ud-Daulah Tomb",
    type: "architecture",
    description: "Baby Taj - exquisite marble inlay work",
    location: "Left Bank of Yamuna, Agra",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400",
    rating: 4.2,
    timings: "6 AM - 6 PM"
  },
  {
    id: 8,
    monumentId: 2,
    name: "Haveli Architecture",
    type: "architecture",
    description: "Traditional Delhi havelis with intricate carvings",
    location: "Chandni Chowk Area",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400",
    rating: 4.0,
    timings: "Always accessible"
  }
];

export const videos = [
  {
    id: 1,
    title: "Taj Mahal Virtual Tour",
    monumentId: 1,
    url: "https://www.youtube.com/embed/MM0UzYmINxE",
    duration: "15:30",
    description: "Experience the magical sunrise at Taj Mahal"
  },
  {
    id: 2,
    title: "Gateway of India Tour",
    monumentId: 2,
    url: "https://www.youtube.com/embed/6stlCkUDG_s",
    duration: "22:45",
    description: "Complete history of Gateway of India"
  },
  {
    id: 3,
    title: "Qutub Minar Virtual Tour",
    monumentId: 3,
    url: "https://www.youtube.com/embed/74IIpmegELs",
    duration: "12:20",
    description: "Ancient tower of victory in Delhi"
  },
  {
    id: 7,
    title: "Hawa Mahal Virtual Tour",
    monumentId: 4,
    url: "https://www.youtube.com/embed/jSlrNR2hAqc",
    duration: "10:15",
    description: "Palace of Winds architectural marvel"
  },
  {
    id: 4,
    title: "Indian Culture Overview",
    monumentId: null,
    url: "https://www.youtube.com/embed/SeTjQHzLci0",
    duration: "18:15",
    description: "Journey through India's diverse culture"
  },
  {
    id: 5,
    title: "Agra Food Tour",
    placeId: 1,
    url: "https://www.youtube.com/embed/rf4NnDpy03k",
    duration: "10:45",
    description: "Best food spots near Taj Mahal"
  },
  {
    id: 6,
    title: "Delhi Street Food",
    placeId: 3,
    url: "https://www.youtube.com/embed/onbS-HxyRTQ",
    duration: "8:30",
    description: "Chandni Chowk food adventure"
  }
];

export const users = [
  { id: 1, name: "Admin User", role: "admin", email: "admin@heritage.com" },
  { id: 2, name: "Cultural Explorer", role: "enthusiast", email: "explorer@heritage.com" },
  { id: 3, name: "Content Creator", role: "creator", email: "creator@heritage.com" },
  { id: 4, name: "Tour Guide", role: "guide", email: "guide@heritage.com" }
];
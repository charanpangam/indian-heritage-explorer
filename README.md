# Indian Heritage Explorer

A comprehensive React web application that teaches users about Indian culture, historical sites, and famous monuments through interactive features, virtual tours, and detailed information.

## Features

### 🏛️ Monument Exploration
- Browse historical monuments with detailed information
- Search and filter by location, category, and period
- High-quality images and comprehensive descriptions
- UNESCO World Heritage Site information

### 🎭 Cultural Learning
- Explore Indian arts, music, dance, and traditions
- Interactive cultural categories and topics
- Community discussions for cultural enthusiasts
- Educational content about festivals, cuisine, and customs

### 🌐 Virtual Tours
- Immersive virtual tours of famous monuments
- Interactive navigation through different views
- Real-time chat with tour guides
- Featured tour packages (Golden Triangle, Mughal Heritage)

### 👥 Role-Based Access
- **Admin**: Manage content, users, and monitor platform activity
- **Cultural Enthusiast**: Explore content, participate in discussions, join virtual tours
- **Content Creator**: Develop and update educational content, create interactive features
- **Tour Guide**: Provide insights during virtual tours, answer user queries

### 🛠️ Admin Dashboard
- User management and role assignment
- Content management for monuments and cultural topics
- Analytics and activity monitoring
- Add/edit/delete functionality for all content

## Technology Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Inline CSS with responsive design
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd indian-heritage-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with role switching
│   ├── MonumentCard.js    # Monument display card component
│   └── VirtualTour.js     # Virtual tour interface
├── pages/
│   ├── Home.js           # Landing page with features overview
│   ├── Monuments.js      # Monument browsing and details
│   ├── Culture.js        # Cultural content and discussions
│   ├── VirtualTours.js   # Virtual tour selection and management
│   └── Admin.js          # Admin dashboard and management
├── data/
│   └── monuments.js      # Sample data for monuments, culture, and users
├── App.js               # Main application component with routing
└── index.js             # Application entry point
```

## Key Components

### Header Component
- Responsive navigation menu
- Role-based menu items
- User role switching functionality
- Sticky header design

### Monument Card
- Monument information display
- Interactive hover effects
- Virtual tour availability indicator
- Quick action buttons

### Virtual Tour
- Full-screen immersive experience
- Multiple view navigation
- Real-time chat with guides
- Tour progress tracking

### Admin Dashboard
- Comprehensive statistics overview
- User and content management
- Recent activity monitoring
- CRUD operations for all content

## User Roles & Permissions

### Admin
- Full access to all features
- User management capabilities
- Content creation and editing
- Platform analytics and monitoring

### Cultural Enthusiast
- Browse all monuments and cultural content
- Participate in virtual tours
- Join community discussions
- Access interactive learning features

### Content Creator
- Create and update educational content
- Manage cultural topics and articles
- Develop interactive features
- Collaborate with other creators

### Tour Guide
- Conduct virtual tours
- Provide real-time assistance during tours
- Answer user questions via chat
- Access tour analytics and feedback

## Sample Data

The application includes sample data for:
- 4 famous Indian monuments (Taj Mahal, Red Fort, Qutub Minar, Hawa Mahal)
- 3 cultural topics (Classical Dance, Festivals, Cuisine)
- 4 user roles with different permissions

## Features in Detail

### Search & Filter
- Text search across monument names and locations
- Category-based filtering
- Real-time results update
- Results count display

### Virtual Tours
- Interactive 360-degree views
- Guided tour narration
- Chat functionality with guides
- Progress tracking and navigation controls

### Community Features
- Discussion forums for cultural topics
- User-generated content
- Expert insights and guidance
- Social interaction features

### Responsive Design
- Mobile-friendly interface
- Tablet and desktop optimization
- Touch-friendly navigation
- Adaptive layouts

## Future Enhancements

- Integration with real 360° photography
- Multi-language support
- Offline tour downloads
- AR/VR compatibility
- Social sharing features
- Advanced search with AI
- Personalized recommendations
- Integration with tourism APIs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact:
- Email: info@indianheritage.com
- Phone: +91 12345 67890

---

**Indian Heritage Explorer** - Preserving and sharing India's magnificent cultural legacy through technology.
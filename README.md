# CareerForge Pro - AI-Powered Career Development Platform

A comprehensive career development platform built with Next.js, TypeScript, and Tailwind CSS, featuring AI-powered learning paths, skill assessments, and career tools.

## 🚀 Features

### Core Features
- **AI-Powered Learning Paths** - Personalized learning recommendations based on career goals
- **Skill Assessment Engine** - Comprehensive skill evaluation and gap analysis
- **Resume Optimization** - ATS-compatible resume builder with AI suggestions
- **Career Analytics** - Detailed insights into career progress and development
- **Community & Networking** - Connect with professionals and mentors
- **Goal Setting & Tracking** - Set and monitor career development goals

### New Features Added
- **Continue Learning Section** - Enhanced learning page with current module tracking
- **Leadership Development Course** - Comprehensive leadership skills curriculum
- **Career Calendar** - Interactive calendar for managing career events and deadlines
- **Notifications System** - Centralized notification management
- **Recent Activity Tracking** - Timeline view of career development activities
- **Upcoming Events** - Discover and register for career development events
- **Achievement Calendar** - Track milestones and celebrate accomplishments
- **Enhanced Dashboard** - Improved overview with quick access to all features

## 📱 Pages

### Main Pages
- `/` - Landing page with feature overview
- `/dashboard` - Main dashboard with progress overview
- `/learning` - Learning hub with continue learning section
- `/skills` - Skill assessment and badge management
- `/assessment` - Career assessment tools
- `/job-tools` - Resume builder and job search tools
- `/community` - Professional networking and discussions
- `/analytics` - Career development analytics and reports
- `/profile` - User profile and settings

### New Pages Added
- `/learning/leadership` - Leadership development course
- `/calendar` - Career development calendar view
- `/notifications` - Notification management center
- `/activity` - Recent activity timeline
- `/events` - Upcoming events and workshops
- `/achievements` - Achievement tracking and calendar
- `/goals/new` - Goal setting and management

### Learning Courses
- `/learning/data-science` - Data science mastery course
- `/learning/courses/[courseId]` - Individual course pages
- `/learning/continue` - Continue learning interface

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Shadcn/ui component library
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **Deployment**: Vercel (recommended)

## 🎨 Design Features

- **Dark/Light Theme** - Toggle between themes with persistent state
- **Glass Morphism** - Modern UI with backdrop blur effects
- **Responsive Design** - Mobile-first approach with tablet and desktop optimization
- **Smooth Animations** - Framer Motion animations for enhanced UX
- **Gradient Accents** - Beautiful gradient color schemes throughout
- **Indian Rupee Pricing** - All prices displayed in ₹ (rupees)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project setup

### Installation

1. Clone the repository:
   ```bash
git clone <repository-url>
cd project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure Firebase:
- Create a Firebase project
- Add your Firebase config to `.env.local`
- Enable Authentication and Firestore

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
project/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── analytics/         # Analytics dashboard
│   ├── assessment/        # Assessment tools
│   ├── calendar/          # Career calendar
│   ├── community/         # Community features
│   ├── dashboard/         # Main dashboard
│   ├── events/            # Upcoming events
│   ├── goals/             # Goal management
│   ├── job-tools/         # Career tools
│   ├── learning/          # Learning platform
│   ├── notifications/     # Notification center
│   ├── profile/           # User profile
│   ├── skills/            # Skills management
│   └── activity/          # Recent activity
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   ├── job-tools/        # Job tools components
│   └── layout/           # Layout components
├── contexts/             # React contexts
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Extended color palette
- Custom animations
- Responsive breakpoints
- Dark mode support

## 🎯 Key Features Implementation

### Continue Learning
- Current module tracking
- Progress visualization
- Quick action buttons
- Course statistics

### Leadership Development
- Comprehensive curriculum
- Progress tracking
- Interactive modules
- Achievement system

### Career Calendar
- Monthly view navigation
- Event management
- Priority-based organization
- Quick actions

### Notifications
- Type-based categorization
- Priority levels
- Read/unread status
- Filtering and search

### Activity Tracking
- Timeline visualization
- Impact assessment
- Category organization
- Progress metrics

### Events Management
- Event discovery
- Registration system
- Category filtering
- Search functionality

### Achievement System
- Badge collection
- Progress tracking
- Milestone celebration
- Leaderboard integration

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Shadcn/ui for the component library
- Framer Motion for animations
- Tailwind CSS for styling
- Next.js team for the framework
- Firebase for backend services

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**CareerForge Pro** - Empowering your career journey with AI-powered insights and tools.

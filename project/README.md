# 🚀 CareerForge Pro - AI-Powered Career Development Platform

A modern, responsive web application built with Next.js 13, featuring AI-powered career assessments, personalized learning paths, and professional development tools with beautiful liquid glass morphism effects.

## ✨ Features

### 🎯 Core Functionality
- **AI-Powered Career Assessment** - Comprehensive skill evaluation and career guidance
- **Personalized Learning Paths** - Customized courses based on your career goals
- **Skill Gap Analysis** - Identify areas for improvement and growth
- **Progress Tracking** - Monitor your learning journey with detailed analytics
- **Goal Setting & Management** - Set and track career objectives
- **Community & Networking** - Connect with professionals and mentors

### 🎨 Modern UI/UX
- **Liquid Glass Morphism** - Beautiful backdrop blur effects and transparency
- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Smooth Animations** - Framer Motion powered interactions
- **Gradient Design** - Modern color schemes and visual hierarchy

### 🔐 Authentication & Security
- **Protected Routes** - Middleware-based authentication
- **User Management** - Secure login, registration, and profile management
- **Session Handling** - Cookie-based authentication tokens
- **Route Protection** - Automatic redirects for unauthenticated users

## 🛠️ Tech Stack

### Frontend
- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives

### Backend & Services
- **Firebase** - Authentication and backend services
- **Next.js API Routes** - Server-side functionality
- **Middleware** - Route protection and authentication

### Development Tools
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project (optional for demo mode)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vaibhav14102006/carrer-ai.git
   cd carrer-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
careerforge-pro/
├── app/                    # Next.js 13 App Router
│   ├── analytics/         # Analytics dashboard
│   ├── assessment/        # Career assessment tools
│   ├── auth/             # Authentication pages
│   ├── community/         # Community features
│   ├── dashboard/         # Main dashboard
│   ├── goals/            # Goal setting and tracking
│   ├── job-tools/        # Resume and job tools
│   ├── learning/         # Learning platform
│   ├── skills/           # Skills development
│   └── layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   ├── layout/           # Layout components
│   └── ui/               # UI component library
├── contexts/             # React contexts
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── middleware.ts         # Next.js middleware
└── public/               # Static assets
```

## 🎨 Component Library

### Glass Morphism Components
- `GlassCard` - Versatile glass effect container
- `GlassButton` - Interactive glass buttons
- `GlassInput` - Styled form inputs
- `GlassBadge` - Glass effect badges

### UI Components
- Responsive navigation
- Interactive charts and graphs
- Form components
- Modal dialogs
- Progress indicators

## 🔐 Authentication Flow

1. **Public Routes** - Landing page, sign in/up
2. **Protected Routes** - Dashboard, learning, skills, etc.
3. **Middleware Protection** - Automatic redirects
4. **Token Management** - Secure cookie-based auth

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Tablet Support** - Responsive layouts for tablets
- **Desktop Experience** - Enhanced features for larger screens
- **Touch Friendly** - Optimized touch interactions

## 🎯 Key Features Implementation

### Learning Platform
- Course catalog with detailed pages
- Progress tracking and analytics
- Interactive learning paths
- Module-based content structure

### Career Assessment
- Multi-dimensional skill evaluation
- Personalized recommendations
- Progress visualization
- Goal-oriented development plans

### Dashboard Analytics
- Real-time progress tracking
- Skill development charts
- Career health metrics
- Achievement badges

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- **Netlify** - Static site hosting
- **AWS Amplify** - Full-stack hosting
- **DigitalOcean** - VPS deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS approach
- **Framer Motion** - For smooth animations
- **Radix UI** - For accessible components
- **Firebase** - For backend services

## 📞 Support

- **Issues** - Report bugs and feature requests
- **Discussions** - Ask questions and share ideas
- **Email** - Contact the development team

## 🔮 Future Roadmap

- [ ] AI-powered career recommendations
- [ ] Advanced analytics and insights
- [ ] Mobile app development
- [ ] Integration with job platforms
- [ ] Advanced assessment algorithms
- [ ] Community features enhancement
- [ ] Multi-language support
- [ ] Advanced reporting tools

---

**Built with ❤️ by the CareerForge Pro Team**

Transform your career with AI-powered guidance and beautiful, modern design.

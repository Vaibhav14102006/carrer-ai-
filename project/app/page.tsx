'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { 
  Brain, 
  Target, 
  FileText, 
  Users, 
  BarChart3, 
  Zap,
  Star,
  TrendingUp,
  Shield,
  Globe
} from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();

  const features = [
    {
      icon: Brain,
      title: "AI Career Assessment",
      description: "Discover your perfect career path with advanced personality and skills analysis",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Personalized learning paths with real-time progress tracking and AI coaching",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: FileText,
      title: "ATS Resume Optimizer",
      description: "Optimize your resume for applicant tracking systems with AI-powered insights",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Users,
      title: "Community & Mentorship",
      description: "Connect with peers and industry experts for guidance and networking",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: BarChart3,
      title: "Career Analytics",
      description: "Track your career health and get AI-powered growth recommendations",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Real-time Market Intelligence",
      description: "Stay ahead with live job market trends and salary forecasts",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const handleStartAssessment = () => {
    router.push('/assessment');
  };

  const handleWatchDemo = () => {
    router.push('/dashboard');
  };

  const handleGetStarted = () => {
    router.push('/auth/signup');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-600/90"></div>
        <div className="relative container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              🚀 AI-Powered Career Intelligence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Career with{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                AI Guidance
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Discover your perfect career path, develop essential skills, and accelerate your professional growth with personalized AI coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                onClick={handleStartAssessment}
              >
                Start Free Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg backdrop-blur-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={handleWatchDemo}
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Career Success
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive tools and AI insights to guide your professional journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
                    <CardContent className="p-6 relative">
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 dark:to-gray-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100K+', label: 'Career Assessments', color: 'text-blue-600' },
              { number: '95%', label: 'Success Rate', color: 'text-emerald-600' },
              { number: '50+', label: 'Industries Covered', color: 'text-orange-600' },
              { number: '24/7', label: 'AI Support', color: 'text-purple-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-200`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of professionals who have accelerated their careers with AI-powered insights.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-12 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              onClick={handleGetStarted}
            >
              Get Started Free
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
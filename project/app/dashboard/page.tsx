'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { SkillRadarChart } from '@/components/dashboard/SkillRadarChart';
import { ProgressChart } from '@/components/dashboard/ProgressChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Target, 
  FileText, 
  TrendingUp, 
  Calendar,
  Bell,
  Users,
  Award,
  Play,
  Clock,
  Star,
  Zap
} from 'lucide-react';

function DashboardContent() {
  const { user } = useAuth();
  const router = useRouter();
  const [showCalendar, setShowCalendar] = useState(false);

  const stats = [
    {
      title: 'Career Health Score',
      value: '82%',
      description: 'Above industry average',
      icon: TrendingUp,
      trend: { value: 5, isPositive: true },
      color: 'from-blue-500 to-teal-500'
    },
    {
      title: 'Skills Completed',
      value: '12',
      description: 'This month',
      icon: Target,
      trend: { value: 15, isPositive: true },
      color: 'from-emerald-500 to-green-500'
    },
    {
      title: 'ATS Resume Score',
      value: '78%',
      description: 'Needs optimization',
      icon: FileText,
      trend: { value: -2, isPositive: false },
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Network Connections',
      value: '145',
      description: 'Active contacts',
      icon: Users,
      trend: { value: 8, isPositive: true },
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const quickActions = [
    { title: 'Take Assessment', description: 'Update your career profile', href: '/assessment', icon: Brain, color: 'from-blue-500 to-purple-500' },
    { title: 'Skill Gap Analysis', description: 'Identify improvement areas', href: '/skills', icon: Target, color: 'from-emerald-500 to-teal-500' },
    { title: 'Optimize Resume', description: 'Improve ATS compatibility', href: '/job-tools', icon: FileText, color: 'from-orange-500 to-red-500' },
    { title: 'Find Mentors', description: 'Connect with experts', href: '/community', icon: Users, color: 'from-purple-500 to-pink-500' }
  ];

  const recentActivities = [
    { type: 'assessment', text: 'Completed Career Interest Survey', time: '2 hours ago', icon: Brain, color: 'from-blue-500 to-purple-500' },
    { type: 'skill', text: 'Earned Python Programming Badge', time: '1 day ago', icon: Target, color: 'from-emerald-500 to-teal-500' },
    { type: 'resume', text: 'Updated resume optimization', time: '3 days ago', icon: FileText, color: 'from-orange-500 to-red-500' },
    { type: 'network', text: 'Connected with 3 new professionals', time: '5 days ago', icon: Users, color: 'from-purple-500 to-pink-500' }
  ];

  const upcomingEvents = [
    { title: 'Python Course Deadline', date: 'Dec 20, 2024', type: 'Course', priority: 'High' },
    { title: 'Career Assessment', date: 'Dec 25, 2024', type: 'Assessment', priority: 'Medium' },
    { title: 'Networking Event', date: 'Dec 28, 2024', type: 'Event', priority: 'Low' }
  ];

  const handleViewCalendar = () => {
    setShowCalendar(true);
  };

  const handleCloseCalendar = () => {
    setShowCalendar(false);
  };

  const handleSetNewGoals = () => {
    router.push('/goals/new');
  };

  const handleScheduleAssessment = () => {
    router.push('/assessment/schedule');
  };

  const handleBookMentoring = () => {
    router.push('/mentoring/book');
  };

  const handleViewActivityDetails = (activity: any) => {
    if (activity.type === 'assessment') {
      router.push('/assessment/history');
    } else if (activity.type === 'skill') {
      router.push('/skills/badges');
    } else if (activity.type === 'resume') {
      router.push('/job-tools/resume-history');
    } else if (activity.type === 'network') {
      router.push('/community/connections');
    }
  };

  const handleViewEventDetails = (event: any) => {
    if (event.type === 'Course') {
      router.push('/learning/courses');
    } else if (event.type === 'Assessment') {
      router.push('/assessment/schedule');
    } else if (event.type === 'Event') {
      router.push('/community/events');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user?.displayName || 'Professional'}! 👋
          </h1>
          <p className="text-muted-foreground mt-2">
            Here's your career development progress and recommendations.
          </p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          <Bell className="w-4 h-4 mr-2" />
          Notifications
        </Button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} index={index} />
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
          <CardTitle className="text-indigo-900 dark:text-indigo-100">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group"
                >
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-start space-y-2 hover:shadow-md transition-all duration-300 border-0 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                    asChild
                  >
                    <a href={action.href}>
                      <div className={`w-8 h-8 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900 dark:text-white">{action.title}</div>
                        <div className="text-xs text-muted-foreground">{action.description}</div>
                      </div>
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SkillRadarChart />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ProgressChart />
        </motion.div>
      </div>

      {/* Recent Activity & Calendar */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <CardTitle className="flex items-center space-x-2 text-green-900 dark:text-green-100">
              <Calendar className="w-5 h-5" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    onClick={() => handleViewActivityDetails(activity)}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.text}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {activity.type}
                    </Badge>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20">
            <CardTitle className="flex items-center space-x-2 text-orange-900 dark:text-orange-100">
              <Clock className="w-5 h-5" />
              <span>Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: -5 }}
                  onClick={() => handleViewEventDetails(event)}
                >
                  <div className="flex-1">
                    <div className="font-medium text-sm text-gray-900 dark:text-white">{event.title}</div>
                    <div className="text-xs text-muted-foreground">{event.date}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                    <Badge 
                      variant={event.priority === 'High' ? 'destructive' : event.priority === 'Medium' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {event.priority}
                    </Badge>
                  </div>
                </motion.div>
              ))}
              <Button 
                variant="outline" 
                className="w-full hover:bg-orange-50 hover:border-orange-300 transition-colors"
                onClick={handleViewCalendar}
              >
                <Calendar className="w-4 h-4 mr-2" />
                View Full Calendar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                📅 Career Development Calendar
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCloseCalendar}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                ✕
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white text-lg">December 2024</h4>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-blue-900 dark:text-blue-100">{event.title}</div>
                          <div className="text-sm text-blue-700 dark:text-blue-300">{event.date}</div>
                        </div>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Quick Actions</h4>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white"
                    onClick={handleSetNewGoals}
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Set New Goals
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleScheduleAssessment}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Assessment
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleBookMentoring}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Book Mentoring Session
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
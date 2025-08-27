'use client';

import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
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
  Award
} from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Career Health Score',
      value: '82%',
      description: 'Above industry average',
      icon: TrendingUp,
      trend: { value: 5, isPositive: true }
    },
    {
      title: 'Skills Completed',
      value: '12',
      description: 'This month',
      icon: Target,
      trend: { value: 15, isPositive: true }
    },
    {
      title: 'ATS Resume Score',
      value: '78%',
      description: 'Needs optimization',
      icon: FileText,
      trend: { value: -2, isPositive: false }
    },
    {
      title: 'Network Connections',
      value: '145',
      description: 'Active contacts',
      icon: Users,
      trend: { value: 8, isPositive: true }
    }
  ];

  const quickActions = [
    { title: 'Take Assessment', description: 'Update your career profile', href: '/assessment', icon: Brain, color: 'bg-blue-500' },
    { title: 'Skill Gap Analysis', description: 'Identify improvement areas', href: '/skills', icon: Target, color: 'bg-teal-500' },
    { title: 'Optimize Resume', description: 'Improve ATS compatibility', href: '/job-tools', icon: FileText, color: 'bg-orange-500' },
    { title: 'Find Mentors', description: 'Connect with experts', href: '/community', icon: Users, color: 'bg-purple-500' }
  ];

  const recentActivities = [
    { type: 'assessment', text: 'Completed Career Interest Survey', time: '2 hours ago' },
    { type: 'skill', text: 'Earned Python Programming Badge', time: '1 day ago' },
    { type: 'resume', text: 'Updated resume optimization', time: '3 days ago' },
    { type: 'network', text: 'Connected with 3 new professionals', time: '5 days ago' }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, {user?.displayName || 'Professional'}! 👋
          </h1>
          <p className="text-muted-foreground mt-2">
            Here's your career development progress and recommendations.
          </p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-teal-500">
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
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-start space-y-2 hover:shadow-md transition-shadow"
                    asChild
                  >
                    <a href={action.href}>
                      <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">{action.title}</div>
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
        <SkillRadarChart />
        <ProgressChart />
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Recent Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.text}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {activity.type}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
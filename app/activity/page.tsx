'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain,
  Target,
  FileText,
  Users,
  BookOpen,
  Award,
  Clock,
  TrendingUp,
  Star,
  Calendar,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function ActivityPage() {
  const activities = [
    {
      id: 1,
      type: 'assessment',
      title: 'Completed Career Interest Survey',
      description: 'You completed the comprehensive career interest assessment and received personalized recommendations.',
      time: '2 hours ago',
      icon: Brain,
      color: 'from-blue-500 to-purple-500',
      category: 'Assessment',
      impact: 'High',
      details: {
        score: '85%',
        recommendations: 5,
        nextSteps: 'Review recommendations and set new goals'
      }
    },
    {
      id: 2,
      type: 'skill',
      title: 'Earned Python Programming Badge',
      description: 'Congratulations! You have successfully completed the Python programming course and earned the advanced badge.',
      time: '1 day ago',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
      category: 'Skill Achievement',
      impact: 'High',
      details: {
        score: '92%',
        modules: 8,
        nextSteps: 'Continue with advanced Python concepts'
      }
    },
    {
      id: 3,
      type: 'resume',
      title: 'Updated resume optimization',
      description: 'Your resume has been optimized for ATS compatibility with improved keywords and formatting.',
      time: '3 days ago',
      icon: FileText,
      color: 'from-orange-500 to-red-500',
      category: 'Career Tools',
      impact: 'Medium',
      details: {
        score: '78%',
        improvements: 12,
        nextSteps: 'Apply to 5 new positions'
      }
    },
    {
      id: 4,
      type: 'network',
      title: 'Connected with 3 new professionals',
      description: 'You expanded your professional network by connecting with industry experts in your field.',
      time: '5 days ago',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      category: 'Networking',
      impact: 'Medium',
      details: {
        connections: 3,
        industries: ['Tech', 'Finance', 'Consulting'],
        nextSteps: 'Schedule informational interviews'
      }
    },
    {
      id: 5,
      type: 'learning',
      title: 'Completed Leadership Module 3',
      description: 'Successfully finished the strategic thinking module in your leadership development course.',
      time: '1 week ago',
      icon: BookOpen,
      color: 'from-indigo-500 to-blue-500',
      category: 'Learning',
      impact: 'Medium',
      details: {
        progress: '60%',
        modules: 3,
        nextSteps: 'Continue with conflict resolution module'
      }
    },
    {
      id: 6,
      type: 'achievement',
      title: 'Reached Monthly Learning Goal',
      description: 'You achieved your monthly goal of completing 5 learning modules. Great progress!',
      time: '1 week ago',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      category: 'Achievement',
      impact: 'High',
      details: {
        goal: '5 modules',
        completed: 5,
        nextSteps: 'Set new monthly learning goals'
      }
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'assessment': return <Brain className="w-6 h-6" />;
      case 'skill': return <Target className="w-6 h-6" />;
      case 'resume': return <FileText className="w-6 h-6" />;
      case 'network': return <Users className="w-6 h-6" />;
      case 'learning': return <BookOpen className="w-6 h-6" />;
      case 'achievement': return <Award className="w-6 h-6" />;
      default: return <Clock className="w-6 h-6" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-green-500 text-white';
      case 'Medium': return 'bg-yellow-500 text-white';
      case 'Low': return 'bg-gray-500 text-white';
      default: return 'bg-blue-500 text-white';
    }
  };

  const getTimeAgo = (time: string) => {
    return time;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-black dark:to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Recent Activity
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
                Track your career development progress and achievements
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Badge variant="outline" className="px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30">
                  {activities.length} Activities
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30">
                  This Month
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Activity Timeline */}
            <div className="space-y-6">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline Line */}
                    {index < activities.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
                    )}
                    
                    <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          {/* Activity Icon */}
                          <div className={`w-12 h-12 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                            <Icon />
                          </div>
                          
                          {/* Activity Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                  {activity.title}
                                </h3>
                                <Badge className={`text-xs ${getImpactColor(activity.impact)}`}>
                                  {activity.impact}
                                </Badge>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className="text-xs">
                                  {activity.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{getTimeAgo(activity.time)}</span>
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-muted-foreground mb-4">{activity.description}</p>
                            
                            {/* Activity Details */}
                            <div className="bg-white/30 dark:bg-gray-800/30 rounded-lg p-3 mb-4">
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {Object.entries(activity.details).map(([key, value]) => (
                                  <div key={key} className="text-center">
                                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                                      {typeof value === 'number' ? value : value}
                                    </div>
                                    <div className="text-xs text-muted-foreground capitalize">
                                      {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300">
                                  <CheckCircle className="w-4 h-4 mr-1" />
                                  Mark Complete
                                </Button>
                                <Button variant="outline" size="sm" className="hover:bg-green-50 hover:border-green-300">
                                  <Star className="w-4 h-4 mr-1" />
                                  Add to Favorites
                                </Button>
                              </div>
                              <Button variant="outline" size="sm" className="hover:bg-purple-50 hover:border-purple-300">
                                <ArrowRight className="w-4 h-4 mr-1" />
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Activity Summary */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Activity Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{activities.length}</div>
                    <div className="text-sm text-muted-foreground">Total Activities</div>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {activities.filter(a => a.impact === 'High').length}
                    </div>
                    <div className="text-sm text-muted-foreground">High Impact</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Learning</span>
                    <span className="font-medium">{activities.filter(a => a.category.includes('Learning')).length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Career</span>
                    <span className="font-medium">{activities.filter(a => a.category.includes('Career')).length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Networking</span>
                    <span className="font-medium">{activities.filter(a => a.category.includes('Networking')).length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Calendar
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="w-4 h-4 mr-2" />
                  Set New Goals
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Progress
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  View Badges
                </Button>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activities
                    .filter(a => a.type === 'achievement' || a.type === 'skill')
                    .slice(0, 3)
                    .map((achievement) => (
                      <div
                        key={achievement.id}
                        className="flex items-center space-x-3 p-2 bg-white/30 dark:bg-gray-800/30 rounded-lg"
                      >
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${achievement.color}`}></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {achievement.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {achievement.time}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

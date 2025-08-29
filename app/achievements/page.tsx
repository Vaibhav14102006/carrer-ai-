'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy,
  Star,
  Target,
  Calendar,
  TrendingUp,
  Award,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  Brain,
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function AchievementsPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const achievements = [
    {
      id: 1,
      title: 'Python Programming Master',
      description: 'Completed advanced Python programming course with distinction',
      date: new Date(2024, 11, 15),
      type: 'Course Completion',
      category: 'Learning',
      difficulty: 'Advanced',
      points: 500,
      badge: '🏆',
      color: 'from-emerald-500 to-teal-500',
      progress: 100,
      requirements: [
        'Complete 8 modules',
        'Score 90%+ on assessments',
        'Submit final project',
        'Pass code review'
      ]
    },
    {
      id: 2,
      title: 'Leadership Excellence',
      description: 'Demonstrated exceptional leadership skills in team projects',
      date: new Date(2024, 11, 10),
      type: 'Skill Achievement',
      category: 'Soft Skills',
      difficulty: 'Intermediate',
      points: 300,
      badge: '⭐',
      color: 'from-blue-500 to-purple-500',
      progress: 100,
      requirements: [
        'Lead 3 team projects',
        'Receive positive feedback',
        'Complete leadership assessment',
        'Mentor junior members'
      ]
    },
    {
      id: 3,
      title: 'Network Builder',
      description: 'Successfully connected with 50+ industry professionals',
      date: new Date(2024, 11, 5),
      type: 'Milestone',
      category: 'Networking',
      difficulty: 'Beginner',
      points: 200,
      badge: '🌟',
      color: 'from-orange-500 to-red-500',
      progress: 100,
      requirements: [
        'Connect with 50+ professionals',
        'Attend 5 networking events',
        'Maintain active connections',
        'Share industry insights'
      ]
    },
    {
      id: 4,
      title: 'Resume Optimizer',
      description: 'Achieved 90% ATS compatibility score',
      date: new Date(2024, 10, 28),
      type: 'Tool Mastery',
      category: 'Career Tools',
      difficulty: 'Intermediate',
      points: 250,
      badge: '📄',
      color: 'from-purple-500 to-pink-500',
      progress: 90,
      requirements: [
        'Optimize resume for ATS',
        'Score 85%+ on compatibility',
        'Apply to 10+ positions',
        'Receive interview calls'
      ]
    },
    {
      id: 5,
      title: 'Data Science Enthusiast',
      description: 'Completed foundational data science modules',
      date: new Date(2024, 10, 20),
      type: 'Learning Path',
      category: 'Learning',
      difficulty: 'Beginner',
      points: 150,
      badge: '📊',
      color: 'from-indigo-500 to-blue-500',
      progress: 75,
      requirements: [
        'Complete 5 modules',
        'Score 80%+ on quizzes',
        'Submit 3 assignments',
        'Participate in discussions'
      ]
    }
  ];

  const upcomingAchievements = [
    {
      id: 6,
      title: 'Full Stack Developer',
      description: 'Master both frontend and backend development',
      targetDate: new Date(2025, 1, 15),
      type: 'Career Goal',
      category: 'Learning',
      difficulty: 'Advanced',
      points: 800,
      badge: '💻',
      color: 'from-yellow-500 to-orange-500',
      progress: 45,
      requirements: [
        'Complete frontend course',
        'Complete backend course',
        'Build full-stack project',
        'Deploy to production'
      ]
    },
    {
      id: 7,
      title: 'Industry Expert',
      description: 'Establish thought leadership in your field',
      targetDate: new Date(2025, 3, 1),
      type: 'Recognition',
      category: 'Career',
      difficulty: 'Expert',
      points: 1000,
      badge: '👑',
      color: 'from-red-500 to-pink-500',
      progress: 20,
      requirements: [
        'Publish 10 articles',
        'Speak at 3 conferences',
        'Mentor 20+ professionals',
        'Receive industry recognition'
      ]
    }
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const getAchievementsForDate = (date: Date) => {
    return achievements.filter(achievement => 
      achievement.date.getDate() === date.getDate() &&
      achievement.date.getMonth() === date.getMonth() &&
      achievement.date.getFullYear() === date.getFullYear()
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-orange-500';
      case 'Expert': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const days = getDaysInMonth(currentMonth);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const totalPoints = achievements.reduce((sum, achievement) => sum + achievement.points, 0);
  const completedAchievements = achievements.length;
  const upcomingCount = upcomingAchievements.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-black dark:to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Achievement Calendar
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
                Track your career milestones and celebrate your accomplishments
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Badge variant="outline" className="px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30">
                  {totalPoints} Points
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30">
                  {completedAchievements} Achievements
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30">
                  {upcomingCount} Upcoming
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Achievement Calendar */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevMonth}
                      className="hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextMonth}
                      className="hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
                      {day}
                    </div>
                  ))}
                  
                  {days.map((day, index) => {
                    const dayAchievements = day ? getAchievementsForDate(day) : [];
                    const isToday = day && day.toDateString() === new Date().toDateString();
                    
                    return (
                      <div
                        key={index}
                        className={`min-h-[80px] p-2 border border-gray-200 dark:border-gray-700 transition-all duration-200 ${
                          isToday ? 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-300' : ''
                        } hover:bg-gray-50 dark:hover:bg-gray-800`}
                      >
                        {day && (
                          <>
                            <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                              {day.getDate()}
                            </div>
                            <div className="space-y-1">
                              {dayAchievements.slice(0, 2).map((achievement) => (
                                <div
                                  key={achievement.id}
                                  className="text-xs p-1 rounded bg-gradient-to-r from-yellow-500 to-orange-500 text-white truncate"
                                  title={achievement.title}
                                >
                                  {achievement.badge} {achievement.title}
                                </div>
                              ))}
                              {dayAchievements.length > 2 && (
                                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                  +{dayAchievements.length - 2} more
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white/30 dark:bg-gray-800/30"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center text-2xl`}>
                          {achievement.badge}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 dark:text-white">{achievement.title}</h4>
                            <Badge className={`text-xs ${getDifficultyColor(achievement.difficulty)}`}>
                              {achievement.difficulty}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{achievement.date.toLocaleDateString()}</span>
                            <span>{achievement.points} points</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Achievements */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Upcoming Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAchievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white/30 dark:bg-gray-800/30"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center text-2xl`}>
                          {achievement.badge}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 dark:text-white">{achievement.title}</h4>
                            <Badge className={`text-xs ${getDifficultyColor(achievement.difficulty)}`}>
                              {achievement.difficulty}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                          <div className="space-y-2 mb-3">
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-medium">{achievement.progress}%</span>
                            </div>
                            <Progress value={achievement.progress} className="h-2" />
                          </div>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Target: {achievement.targetDate.toLocaleDateString()}</span>
                            <span>{achievement.points} points</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievement Stats */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Achievement Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">{totalPoints}</div>
                    <div className="text-sm text-muted-foreground">Total Points</div>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{completedAchievements}</div>
                    <div className="text-sm text-muted-foreground">Completed</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Learning</span>
                    <span className="font-medium">{achievements.filter(a => a.category === 'Learning').length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Career</span>
                    <span className="font-medium">{achievements.filter(a => a.category === 'Career').length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Networking</span>
                    <span className="font-medium">{achievements.filter(a => a.category === 'Networking').length}</span>
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
                  <Target className="w-4 h-4 mr-2" />
                  Set New Goals
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Progress
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  View All Badges
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Share Achievements
                </Button>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'You', points: totalPoints, rank: 1, color: 'from-yellow-500 to-orange-500' },
                    { name: 'John Doe', points: 1200, rank: 2, color: 'from-gray-400 to-gray-500' },
                    { name: 'Jane Smith', points: 950, rank: 3, color: 'from-orange-400 to-red-400' }
                  ].map((user, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 bg-white/30 dark:bg-gray-800/30 rounded-lg">
                      <div className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                        {user.rank}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.points} points</p>
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

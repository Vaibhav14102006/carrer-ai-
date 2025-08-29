'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { SkillRadarChart } from '@/components/dashboard/SkillRadarChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  TrendingUp, 
  BookOpen, 
  Award, 
  Clock,
  ExternalLink,
  Play,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';

function SkillsContent() {
  const router = useRouter();
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [showLearningPath, setShowLearningPath] = useState(false);

  const skillGaps = [
    { skill: 'Machine Learning', current: 45, target: 80, priority: 'High', courses: 3, color: 'from-purple-500 to-pink-500' },
    { skill: 'Data Visualization', current: 60, target: 85, priority: 'Medium', courses: 2, color: 'from-blue-500 to-teal-500' },
    { skill: 'Cloud Computing', current: 30, target: 75, priority: 'High', courses: 4, color: 'from-orange-500 to-red-500' },
    { skill: 'Project Management', current: 65, target: 90, priority: 'Medium', courses: 2, color: 'from-emerald-500 to-green-500' }
  ];

  const learningPaths = [
    {
      title: 'Data Science Mastery',
      progress: 65,
      totalCourses: 8,
      completedCourses: 5,
      estimatedTime: '6 weeks',
      level: 'Intermediate',
      color: 'from-blue-500 to-purple-500',
      courses: [
        { name: 'Python Fundamentals', completed: true, duration: '2 weeks' },
        { name: 'Data Analysis with Pandas', completed: true, duration: '2 weeks' },
        { name: 'Machine Learning Basics', completed: true, duration: '3 weeks' },
        { name: 'Advanced ML Algorithms', completed: false, duration: '4 weeks' },
        { name: 'Deep Learning', completed: false, duration: '5 weeks' }
      ]
    },
    {
      title: 'Leadership Development',
      progress: 40,
      totalCourses: 6,
      completedCourses: 2,
      estimatedTime: '4 weeks',
      level: 'Beginner',
      color: 'from-emerald-500 to-teal-500',
      courses: [
        { name: 'Communication Skills', completed: true, duration: '1 week' },
        { name: 'Team Management', completed: true, duration: '2 weeks' },
        { name: 'Strategic Thinking', completed: false, duration: '2 weeks' },
        { name: 'Conflict Resolution', completed: false, duration: '1 week' }
      ]
    }
  ];

  const badges = [
    { name: 'Python Programming', earned: true, date: '2024-01-15', icon: Star, color: 'from-yellow-400 to-orange-500' },
    { name: 'SQL Expert', earned: true, date: '2024-01-10', icon: Award, color: 'from-blue-400 to-purple-500' },
    { name: 'Data Analysis', earned: true, date: '2024-01-08', icon: TrendingUp, color: 'from-green-400 to-emerald-500' },
    { name: 'Machine Learning', earned: false, progress: 75, icon: Zap, color: 'from-purple-400 to-pink-500' },
    { name: 'Cloud Architect', earned: false, progress: 30, icon: Target, color: 'from-indigo-400 to-blue-500' }
  ];

  const handleStartLearning = (skill: string) => {
    setSelectedSkill(skill);
    setShowLearningPath(true);
  };

  const handleCloseLearningPath = () => {
    setShowLearningPath(false);
    setSelectedSkill(null);
  };

  const handleContinueLearning = (pathTitle: string) => {
    // Navigate to the specific learning path page
    if (pathTitle === 'Data Science Mastery') {
      router.push('/learning/data-science');
    } else if (pathTitle === 'Leadership Development') {
      router.push('/learning/leadership');
    } else {
      router.push('/learning');
    }
  };

  const handleViewBadgeDetails = (_badgeName: string) => {
    // view-only; do nothing on click
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold">Skill Development Hub</h1>
        <p className="text-xl text-muted-foreground">
          Identify gaps, track progress, and accelerate your professional growth
        </p>
      </motion.div>

      {/* Skill Radar Chart */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SkillRadarChart />
        </div>
        
        <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20">
            <CardTitle className="flex items-center space-x-2 text-blue-900 dark:text-blue-100">
              <Target className="w-5 h-5" />
              <span>Skill Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">73%</div>
              <div className="text-sm text-muted-foreground">Overall Skill Score</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-green-600 font-medium">Strengths: 4</span>
                <span className="text-orange-600 font-medium">Gaps: 3</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-600 font-medium">In Progress: 2</span>
                <span className="text-purple-600 font-medium">Target: 6</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skill Gap Analysis */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
          <CardTitle className="flex items-center space-x-2 text-orange-900 dark:text-orange-100">
            <TrendingUp className="w-5 h-5" />
            <span>Skill Gap Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {skillGaps.map((gap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border rounded-lg p-4 space-y-3 hover:shadow-md transition-shadow bg-white dark:bg-gray-900"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{gap.skill}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge variant={gap.priority === 'High' ? 'destructive' : 'secondary'}>
                      {gap.priority} Priority
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {gap.courses} courses available
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Current: {gap.current}%</span>
                    <span className="text-muted-foreground">Target: {gap.target}%</span>
                  </div>
                  <Progress value={gap.current} className="h-2" />
                </div>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="hover:bg-orange-50 hover:border-orange-300 transition-colors"
                  onClick={() => handleStartLearning(gap.skill)}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Start Learning
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Paths */}
      <div className="grid md:grid-cols-2 gap-6">
        {learningPaths.map((path, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
              <CardHeader className={`bg-gradient-to-r ${path.color} bg-opacity-10 dark:bg-opacity-20`}>
                <CardTitle className="text-lg text-gray-900 dark:text-white">{path.title}</CardTitle>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{path.estimatedTime}</span>
                  <Badge variant="outline">{path.level}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{path.completedCourses}/{path.totalCourses} courses</span>
                  </div>
                  <Progress value={path.progress} className="h-2" />
                </div>
                <Button 
                  className={`w-full bg-gradient-to-r ${path.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
                  onClick={() => handleContinueLearning(path.title)}
                >
                  Continue Learning
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Badges & Achievements */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
          <CardTitle className="flex items-center space-x-2 text-orange-900 dark:text-orange-100">
            <Award className="w-5 h-5" />
            <span>Badges & Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 rounded-lg text-center space-y-2 cursor-pointer transition-all duration-200 ${
                    badge.earned 
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800 shadow-lg' 
                      : 'bg-muted/50 border-muted hover:bg-muted/70'
                  } border`}
                  onClick={() => handleViewBadgeDetails(badge.name)}
                >
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center shadow-lg ${
                    badge.earned ? `bg-gradient-to-br ${badge.color}` : 'bg-muted text-muted-foreground'
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-gray-900 dark:text-white">{badge.name}</div>
                    {badge.earned ? (
                      <div className="text-xs text-muted-foreground">{badge.date}</div>
                    ) : (
                      <div className="text-xs text-muted-foreground">{badge.progress}% complete</div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Learning Path Modal */}
      {showLearningPath && selectedSkill && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Learning Path: {selectedSkill}
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCloseLearningPath}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                ✕
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  🎯 Recommended Learning Path
                </h4>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Based on your current skill level and career goals, here's a personalized learning path for {selectedSkill}.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Course Modules</h4>
                {[
                  { name: 'Fundamentals', duration: '2 weeks', difficulty: 'Beginner' },
                  { name: 'Intermediate Concepts', duration: '3 weeks', difficulty: 'Intermediate' },
                  { name: 'Advanced Applications', duration: '4 weeks', difficulty: 'Advanced' },
                  { name: 'Real-world Projects', duration: '2 weeks', difficulty: 'Expert' }
                ].map((module, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{module.name}</div>
                        <div className="text-sm text-muted-foreground">{module.duration}</div>
                      </div>
                    </div>
                    <Badge variant="outline">{module.difficulty}</Badge>
                  </div>
                ))}
              </div>

              <div className="flex space-x-3 pt-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white"
                  onClick={() => {
                    router.push(`/learning/${selectedSkill.toLowerCase().replace(/\s+/g, '-')}`);
                    handleCloseLearningPath();
                  }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Learning
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleCloseLearningPath}
                  className="flex-1"
                >
                  Save for Later
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <ProtectedRoute>
      <SkillsContent />
    </ProtectedRoute>
  );
}
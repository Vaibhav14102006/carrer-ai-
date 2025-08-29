'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Play, 
  Clock, 
  Award, 
  Users, 
  Target,
  TrendingUp,
  Star,
  Zap,
  Brain,
  CheckCircle,
  Video,
  FileText,
  Code,
  Database
} from 'lucide-react';
import Link from 'next/link';

export default function LearningPage() {
  const learningPaths = [
    {
      title: 'Data Science Mastery',
      description: 'Complete data science journey from fundamentals to advanced ML',
      progress: 65,
      totalCourses: 8,
      completedCourses: 5,
      estimatedTime: '6 weeks',
      level: 'Intermediate',
      color: 'from-blue-500 to-purple-500',
      category: 'Technology',
      rating: 4.8,
      students: 1247,
      courseId: 'data-science'
    },
    {
      title: 'Leadership Development',
      description: 'Build essential leadership and management skills',
      progress: 40,
      totalCourses: 6,
      completedCourses: 2,
      estimatedTime: '4 weeks',
      level: 'Beginner',
      color: 'from-emerald-500 to-teal-500',
      category: 'Soft Skills',
      rating: 4.6,
      students: 892,
      courseId: 'leadership'
    },
    {
      title: 'Digital Marketing',
      description: 'Master modern digital marketing strategies and tools',
      progress: 25,
      totalCourses: 7,
      completedCourses: 2,
      estimatedTime: '5 weeks',
      level: 'Beginner',
      color: 'from-orange-500 to-red-500',
      category: 'Marketing',
      rating: 4.7,
      students: 1563,
      courseId: 'digital-marketing'
    },
    {
      title: 'Web Development',
      description: 'Learn full-stack web development with modern technologies',
      progress: 80,
      totalCourses: 10,
      completedCourses: 8,
      estimatedTime: '8 weeks',
      level: 'Advanced',
      color: 'from-purple-500 to-pink-500',
      category: 'Technology',
      rating: 4.9,
      students: 2103,
      courseId: 'web-development'
    }
  ];

  const categories = ['All', 'Technology', 'Soft Skills', 'Marketing', 'Business', 'Design'];

  const currentModule = {
    title: 'Advanced ML Algorithms',
    description: 'Deep dive into advanced machine learning techniques',
    progress: 45,
    color: 'from-orange-500 to-red-500'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-black dark:to-black">
      {/* Hero Section with Glass Morphism */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Learning Hub
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
                Master new skills with AI-powered personalized learning paths
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30 text-gray-800 dark:text-gray-200 hover:bg-white/30 transition-all duration-300"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Continue Learning Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Continue Learning
          </h2>
          <p className="text-xl text-muted-foreground">
            Pick up where you left off in your learning journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Current Module</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${currentModule.color} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{currentModule.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{currentModule.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{currentModule.progress}%</span>
                    </div>
                    <Progress value={currentModule.progress} className="h-2" />
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Stats */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Course Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">65%</div>
                    <div className="text-sm text-muted-foreground">Complete</div>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">3/8</div>
                    <div className="text-sm text-muted-foreground">Modules</div>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">45</div>
                    <div className="text-sm text-muted-foreground">Lessons</div>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">2.5</div>
                    <div className="text-sm text-muted-foreground">Weeks Left</div>
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
                  <Video className="w-4 h-4 mr-2" />
                  Watch Latest Video
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resources
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Code className="w-4 h-4 mr-2" />
                  Practice Exercises
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Database className="w-4 h-4 mr-2" />
                  Access Datasets
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Learning Paths Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Your Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            Personalized learning paths designed for your career goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {learningPaths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${path.color}`}></div>
                <CardHeader className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {path.title}
                      </CardTitle>
                      <p className="text-muted-foreground mb-3">{path.description}</p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${path.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="outline" className="backdrop-blur-sm bg-white/20">
                      {path.level}
                    </Badge>
                    <Badge variant="outline" className="backdrop-blur-sm bg-white/20">
                      {path.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{path.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{path.completedCourses}/{path.totalCourses} courses</span>
                    </div>
                    <Progress value={path.progress} className="h-2" />
                  </div>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{path.estimatedTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{path.students} students</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${path.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm`}
                    asChild
                  >
                    <Link href={`/learning/courses/${path.courseId}`}>
                      <Play className="w-4 h-4 mr-2" />
                      Continue Learning
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Courses
            </h3>
            <p className="text-lg text-muted-foreground">
              Trending courses recommended for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'AI Fundamentals', instructor: 'Dr. Sarah Chen', rating: 4.9, students: 2341, price: '₹7,999', courseId: 'ai-fundamentals' },
              { title: 'Business Strategy', instructor: 'Prof. Michael Brown', rating: 4.8, students: 1892, price: '₹12,499', courseId: 'business-strategy' },
              { title: 'UX Design Mastery', instructor: 'Lisa Rodriguez', rating: 4.7, students: 1654, price: '₹10,799', courseId: 'ux-design' }
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{course.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">by {course.instructor}</p>
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{course.students} students</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600 mb-4">{course.price}</div>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white" asChild>
                        <Link href={`/learning/courses/${course.courseId}`}>
                          Enroll Now
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

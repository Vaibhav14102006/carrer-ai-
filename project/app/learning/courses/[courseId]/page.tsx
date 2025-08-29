'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  CheckCircle,
  Video,
  FileText,
  Code,
  Database,
  Brain,
  BarChart3,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.courseId as string;

  // Course data based on courseId
  const courseData = {
    'data-science': {
      title: 'Data Science Mastery',
      description: 'Complete data science journey from fundamentals to advanced ML',
      progress: 65,
      totalModules: 8,
      completedModules: 5,
      estimatedTime: '6 weeks',
      level: 'Intermediate',
      color: 'from-blue-500 to-purple-500',
      category: 'Technology',
      rating: 4.8,
      students: 1247,
      instructor: 'Dr. Sarah Chen',
      modules: [
        { title: 'Python Fundamentals', completed: true, duration: '2 weeks', lessons: 12, color: 'from-green-500 to-emerald-500' },
        { title: 'Data Analysis with Pandas', completed: true, duration: '2 weeks', lessons: 15, color: 'from-blue-500 to-cyan-500' },
        { title: 'Machine Learning Basics', completed: true, duration: '3 weeks', lessons: 18, color: 'from-purple-500 to-pink-500' },
        { title: 'Advanced ML Algorithms', completed: false, duration: '4 weeks', lessons: 20, color: 'from-orange-500 to-red-500' },
        { title: 'Deep Learning', completed: false, duration: '5 weeks', lessons: 25, color: 'from-indigo-500 to-purple-500' }
      ]
    },
    'leadership': {
      title: 'Leadership Development',
      description: 'Build essential leadership and management skills',
      progress: 40,
      totalModules: 6,
      completedModules: 2,
      estimatedTime: '4 weeks',
      level: 'Beginner',
      color: 'from-emerald-500 to-teal-500',
      category: 'Soft Skills',
      rating: 4.6,
      students: 892,
      instructor: 'Prof. Michael Brown',
      modules: [
        { title: 'Communication Skills', completed: true, duration: '1 week', lessons: 8, color: 'from-green-500 to-emerald-500' },
        { title: 'Team Management', completed: true, duration: '2 weeks', lessons: 12, color: 'from-blue-500 to-cyan-500' },
        { title: 'Strategic Thinking', completed: false, duration: '2 weeks', lessons: 15, color: 'from-purple-500 to-pink-500' },
        { title: 'Conflict Resolution', completed: false, duration: '1 week', lessons: 10, color: 'from-orange-500 to-red-500' }
      ]
    },
    'digital-marketing': {
      title: 'Digital Marketing',
      description: 'Master modern digital marketing strategies and tools',
      progress: 25,
      totalModules: 7,
      completedModules: 2,
      estimatedTime: '5 weeks',
      level: 'Beginner',
      color: 'from-orange-500 to-red-500',
      category: 'Marketing',
      rating: 4.7,
      students: 1563,
      instructor: 'Lisa Rodriguez',
      modules: [
        { title: 'Marketing Fundamentals', completed: true, duration: '1 week', lessons: 10, color: 'from-green-500 to-emerald-500' },
        { title: 'Social Media Marketing', completed: true, duration: '2 weeks', lessons: 14, color: 'from-blue-500 to-cyan-500' },
        { title: 'Content Marketing', completed: false, duration: '2 weeks', lessons: 16, color: 'from-purple-500 to-pink-500' },
        { title: 'SEO & Analytics', completed: false, duration: '2 weeks', lessons: 18, color: 'from-orange-500 to-red-500' }
      ]
    }
  };

  const course = courseData[courseId as keyof typeof courseData] || courseData['data-science'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
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
              <div className="flex justify-center mb-6">
                <Link href="/learning" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Learning Hub</span>
                </Link>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {course.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
                {course.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Badge variant="outline" className="px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30">
                  {course.level} Level
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30">
                  {course.estimatedTime} • {course.totalModules} modules
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30">
                  ⭐ {course.rating} ({course.students} students)
                </Badge>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{ width: `${course.progress}%` }}></div>
              </div>
              <p className="text-sm text-muted-foreground">{course.progress}% Complete</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-blue-500 to-purple-500">
                <TabsTrigger value="overview" className="text-white data-[state=active]:bg-white/20">Overview</TabsTrigger>
                <TabsTrigger value="curriculum" className="text-white data-[state=active]:bg-white/20">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor" className="text-white data-[state=active]:bg-white/20">Instructor</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">About This Course</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {course.description} This comprehensive course is designed to take you from beginner to advanced level, 
                      providing hands-on experience and real-world projects to build your portfolio.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">What you'll learn:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Industry-standard tools and technologies</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Real-world project experience</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Professional certification</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Career guidance and support</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Requirements:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Basic computer skills</li>
                          <li>• High school mathematics</li>
                          <li>• No prior experience required</li>
                          <li>• Dedication to learn</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-6">
                <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Course Curriculum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {course.modules.map((module, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className={`p-4 rounded-lg border transition-all duration-300 ${
                            module.completed 
                              ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800' 
                              : 'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                module.completed 
                                  ? 'bg-green-500 text-white' 
                                  : `bg-gradient-to-br ${module.color} text-white`
                              }`}>
                                {module.completed ? (
                                  <CheckCircle className="w-5 h-5" />
                                ) : (
                                  <span className="text-sm font-medium">{index + 1}</span>
                                )}
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">{module.title}</h4>
                                <p className="text-sm text-muted-foreground">{module.lessons} lessons</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-muted-foreground">{module.duration}</div>
                              <Badge variant="outline">{module.completed ? 'Completed' : 'In Progress'}</Badge>
                            </div>
                          </div>
                          {!module.completed && (
                            <Button 
                              size="sm" 
                              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                            >
                              <Play className="w-4 h-4 mr-2" />
                              Start Module
                            </Button>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor" className="space-y-6">
                <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Meet Your Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {course.instructor.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{course.instructor}</h4>
                        <p className="text-muted-foreground mb-3">
                          Expert instructor with years of industry experience and a passion for teaching. 
                          Dedicated to helping students achieve their career goals.
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>⭐ 4.9 Instructor Rating</span>
                          <span>📚 15+ Courses</span>
                          <span>👥 50,000+ Students</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Module */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Current Module</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  {course.modules.filter(m => !m.completed).length > 0 ? (
                    <>
                      <div className={`w-16 h-16 bg-gradient-to-br ${course.modules.filter(m => !m.completed)[0].color} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {course.modules.filter(m => !m.completed)[0].title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {course.modules.filter(m => !m.completed)[0].duration} • {course.modules.filter(m => !m.completed)[0].lessons} lessons
                      </p>
                    </>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Course Completed!</h4>
                      <p className="text-sm text-muted-foreground">Congratulations on finishing the course!</p>
                    </div>
                  )}
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  {course.modules.filter(m => !m.completed).length > 0 ? 'Continue Learning' : 'View Certificate'}
                </Button>
              </CardContent>
            </Card>

            {/* Course Stats */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Course Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{course.progress}%</div>
                    <div className="text-sm text-muted-foreground">Complete</div>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{course.completedModules}/{course.totalModules}</div>
                    <div className="text-sm text-muted-foreground">Modules</div>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{course.modules.reduce((acc, m) => acc + m.lessons, 0)}</div>
                    <div className="text-sm text-muted-foreground">Lessons</div>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{course.estimatedTime}</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
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
                  Access Materials
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
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
  BarChart3
} from 'lucide-react';

export default function DataSciencePage() {
  const modules = [
    {
      title: 'Python Fundamentals',
      description: 'Master Python basics, data types, and control structures',
      duration: '2 weeks',
      lessons: 12,
      completed: true,
      progress: 100,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Data Analysis with Pandas',
      description: 'Learn data manipulation and analysis with Pandas library',
      duration: '2 weeks',
      lessons: 15,
      completed: true,
      progress: 100,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Machine Learning Basics',
      description: 'Introduction to ML algorithms and concepts',
      duration: '3 weeks',
      lessons: 18,
      completed: true,
      progress: 100,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Advanced ML Algorithms',
      description: 'Deep dive into advanced machine learning techniques',
      duration: '4 weeks',
      lessons: 20,
      completed: false,
      progress: 45,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Deep Learning',
      description: 'Neural networks and deep learning frameworks',
      duration: '5 weeks',
      lessons: 25,
      completed: false,
      progress: 0,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const currentModule = modules[3]; // Advanced ML Algorithms

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-neutral-950 dark:to-black">
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
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Data Science Mastery
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
                Complete data science journey from fundamentals to advanced ML
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Badge variant="outline" className="px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30">
                  Intermediate Level
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30">
                  6 weeks • 8 courses
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30">
                  ⭐ 4.8 (1,247 students)
                </Badge>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-sm text-muted-foreground">65% Complete</p>
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
                      Master the fundamentals of data science and machine learning with this comprehensive course. 
                      From Python basics to advanced neural networks, you'll learn everything needed to become a 
                      proficient data scientist.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">What you'll learn:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Python programming fundamentals</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Data manipulation with Pandas</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Machine learning algorithms</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Deep learning with TensorFlow</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Requirements:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Basic computer skills</li>
                          <li>• High school mathematics</li>
                          <li>• No programming experience required</li>
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
                      {modules.map((module, index) => (
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
                                <p className="text-sm text-muted-foreground">{module.description}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-muted-foreground">{module.duration}</div>
                              <div className="text-sm text-muted-foreground">{module.lessons} lessons</div>
                            </div>
                          </div>
                          {!module.completed && (
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="font-medium">{module.progress}%</span>
                              </div>
                              <Progress value={module.progress} className="h-2" />
                            </div>
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
                        <span className="text-2xl font-bold text-white">DC</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Dr. Data Scientist</h4>
                        <p className="text-muted-foreground mb-3">
                          Senior Data Scientist with 10+ years of experience in machine learning and AI. 
                          PhD in Computer Science from MIT, worked at Google and Facebook.
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>⭐ 4.9 Instructor Rating</span>
                          <span>📚 15 Courses</span>
                          <span>👥 45,678 Students</span>
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
    </div>
  );
}

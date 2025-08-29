'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Award, 
  CheckCircle, 
  Star, 
  TrendingUp,
  ArrowLeft,
  BookOpen,
  Play,
  Target,
  Users
} from 'lucide-react';
import Link from 'next/link';

export default function PythonBadgePage() {
  const badgeData = {
    name: 'Python Programming Badge',
    description: 'Master the fundamentals of Python programming language',
    level: 'Intermediate',
    earnedDate: 'Dec 19, 2024',
    progress: 100,
    skills: [
      'Python Syntax & Data Types',
      'Control Structures & Loops',
      'Functions & Modules',
      'Object-Oriented Programming',
      'File Handling & I/O',
      'Error Handling & Debugging',
      'Basic Data Structures',
      'Working with Libraries'
    ],
    projects: [
      { name: 'Calculator App', difficulty: 'Easy', completed: true },
      { name: 'Data Analysis Tool', difficulty: 'Medium', completed: true },
      { name: 'Web Scraper', difficulty: 'Medium', completed: true },
      { name: 'API Integration', difficulty: 'Hard', completed: false }
    ],
    nextSteps: [
      'Advanced Python Concepts',
      'Data Science with Python',
      'Web Development (Django/Flask)',
      'Machine Learning Fundamentals'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-gray-900 dark:to-black">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <Link href="/skills" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Skills</span>
            </Link>
          </div>
          
          {/* Badge Display */}
          <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
            <Code className="w-16 h-16 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            {badgeData.name}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge variant="outline" className="px-4 py-2 text-lg bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-600">
              {badgeData.level} Level
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-lg bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-600">
              🎯 {badgeData.progress}% Complete
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-lg bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-600">
              🏆 Earned {badgeData.earnedDate}
            </Badge>
          </div>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {badgeData.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Skills Acquired */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                  Skills Acquired
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {badgeData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 dark:bg-black/20">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-900 dark:text-white">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Projects Completed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Target className="w-6 h-6 mr-2 text-blue-500" />
                  Projects Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {badgeData.projects.map((project, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/10 dark:bg-black/20">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{project.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {project.difficulty}
                        </Badge>
                      </div>
                      {project.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <Card className="backdrop-blur-xl bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-700/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-purple-500" />
                Next Steps in Your Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {badgeData.nextSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 rounded-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">{step}</h4>
                    <Button size="sm" variant="outline" className="w-full border-white/30 dark:border-gray-600">
                      <Play className="w-4 h-4 mr-2" />
                      Start Learning
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-4"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
              <BookOpen className="w-5 h-5 mr-2" />
              Continue Learning
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 dark:border-gray-600">
              <Users className="w-5 h-5 mr-2" />
              Share Achievement
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 dark:border-gray-600">
              <Star className="w-5 h-5 mr-2" />
              View All Badges
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

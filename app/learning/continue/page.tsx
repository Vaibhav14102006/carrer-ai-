'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Play, Target, BookOpen, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContinueLearningPage() {
  const currentModule = {
    title: 'Advanced ML Algorithms',
    description: 'Deep dive into ensemble methods, SVMs, and optimization',
    progress: 45,
    duration: '4 weeks',
    lessons: 20,
    color: 'from-orange-500 to-red-500'
  };

  const recommended = [
    { title: 'Model Evaluation & Tuning', duration: '1h 20m', color: 'from-blue-500 to-indigo-500' },
    { title: 'Feature Engineering Best Practices', duration: '55m', color: 'from-emerald-500 to-teal-500' },
    { title: 'Hands-on: XGBoost', duration: '1h 40m', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-neutral-950 dark:to-black">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Continue Learning</h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">Pick up right where you left off and keep your momentum.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Current Module</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${currentModule.color} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{currentModule.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{currentModule.description}</p>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-2">
                    <Badge variant="outline">{currentModule.duration}</Badge>
                    <Badge variant="outline">{currentModule.lessons} lessons</Badge>
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{currentModule.progress}%</span>
                    </div>
                    <Progress value={currentModule.progress} className="h-2" />
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white" asChild>
                  <Link href="/learning/courses/data-science">
                    <Play className="w-4 h-4 mr-2" />
                    Resume Module
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Recommended Next</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {recommended.map((rec, index) => (
                    <motion.div key={rec.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="p-4 rounded-lg border bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700">
                      <div className={`w-12 h-12 bg-gradient-to-br ${rec.color} rounded-lg flex items-center justify-center mb-3`}>
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white mb-1">{rec.title}</div>
                      <div className="text-sm text-muted-foreground">{rec.duration}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/calendar">View Calendar</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/goals/new">Set New Goal</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/notifications">View Notifications</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}



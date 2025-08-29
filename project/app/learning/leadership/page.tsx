'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Users, Target, Star, CheckCircle, Briefcase } from 'lucide-react';

export default function LeadershipDevelopmentPage() {
  const modules = [
    { title: 'Foundations of Leadership', description: 'Core principles and styles', duration: '1 week', lessons: 8, completed: true, progress: 100, color: 'from-emerald-500 to-teal-500' },
    { title: 'Communication & Influence', description: 'Persuasion, storytelling, feedback', duration: '2 weeks', lessons: 12, completed: false, progress: 40, color: 'from-blue-500 to-indigo-500' },
    { title: 'Team Management', description: 'Hiring, delegation, motivation', duration: '2 weeks', lessons: 10, completed: false, progress: 0, color: 'from-purple-500 to-pink-500' },
    { title: 'Strategic Thinking', description: 'Vision, OKRs, prioritization', duration: '2 weeks', lessons: 10, completed: false, progress: 0, color: 'from-orange-500 to-red-500' }
  ];

  const currentModule = modules[1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-neutral-950 dark:to-black">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Leadership Development</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">Build essential leadership and management skills</p>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="text-sm text-muted-foreground">40% Complete</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Course Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {modules.map((module, index) => (
                    <motion.div
                      key={module.title}
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
                            module.completed ? 'bg-emerald-500 text-white' : `bg-gradient-to-br ${module.color} text-white`
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
          </div>

          <div className="space-y-6">
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
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                  Continue Learning
                </Button>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Course Stats</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">40%</div>
                  <div className="text-sm text-muted-foreground">Complete</div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1/4</div>
                  <div className="text-sm text-muted-foreground">Modules</div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">8</div>
                  <div className="text-sm text-muted-foreground">Lessons</div>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">3</div>
                  <div className="text-sm text-muted-foreground">Weeks Left</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}



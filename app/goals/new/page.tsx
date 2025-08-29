'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Calendar, 
  TrendingUp, 
  Star,
  Zap,
  Brain,
  Users,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function NewGoalsPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTimeframe, setSelectedTimeframe] = useState('');
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Complete Python Course',
      description: 'Finish the advanced Python programming course',
      category: 'Learning',
      timeframe: '3 months',
      priority: 'High',
      progress: 0,
      completed: false
    }
  ]);

  const categories = [
    { name: 'Learning', icon: Brain, color: 'from-blue-500 to-purple-500' },
    { name: 'Career', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { name: 'Networking', icon: Users, color: 'from-orange-500 to-red-500' },
    { name: 'Skills', icon: Award, color: 'from-purple-500 to-pink-500' }
  ];

  const timeframes = ['1 month', '3 months', '6 months', '1 year'];

  const priorities = ['Low', 'Medium', 'High', 'Critical'];

  const addGoal = () => {
    const newGoal = {
      id: goals.length + 1,
      title: '',
      description: '',
      category: selectedCategory || 'Learning',
      timeframe: selectedTimeframe || '3 months',
      priority: 'Medium',
      progress: 0,
      completed: false
    };
    setGoals([...goals, newGoal]);
  };

  const updateGoal = (id: number, field: string, value: string) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, [field]: value } : goal
    ));
  };

  const removeGoal = (id: number) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const saveGoals = () => {
    // Here you would typically save to a database
    alert('Goals saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Hero Section with Glass Morphism */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Set New Goals
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
                Define your career objectives and create actionable plans
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Goals Form */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Goal Templates */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Quick Goal Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: 'Learn New Skill', description: 'Master a new technical skill', category: 'Learning' },
                    { title: 'Career Promotion', description: 'Get promoted to next level', category: 'Career' },
                    { title: 'Network Growth', description: 'Connect with 50+ professionals', category: 'Networking' },
                    { title: 'Certification', description: 'Earn industry certification', category: 'Skills' }
                  ].map((template, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => {
                        const newGoal = {
                          id: goals.length + 1,
                          title: template.title,
                          description: template.description,
                          category: template.category,
                          timeframe: '3 months',
                          priority: 'Medium',
                          progress: 0,
                          completed: false
                        };
                        setGoals([...goals, newGoal]);
                      }}
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{template.title}</h4>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                      <Badge variant="outline" className="mt-2">{template.category}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Goals List */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Your Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {goals.map((goal, index) => (
                    <motion.div
                      key={goal.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white/50 dark:bg-gray-800/50"
                    >
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Goal Title
                          </label>
                          <Input
                            value={goal.title}
                            onChange={(e) => updateGoal(goal.id, 'title', e.target.value)}
                            placeholder="Enter your goal title"
                            className="backdrop-blur-sm bg-white/50 dark:bg-gray-700/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Category
                          </label>
                          <Select value={goal.category} onValueChange={(value) => updateGoal(goal.id, 'category', value)}>
                            <SelectTrigger className="backdrop-blur-sm bg-white/50 dark:bg-gray-700/50">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((cat) => (
                                <SelectItem key={cat.name} value={cat.name}>
                                  {cat.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Description
                        </label>
                        <Textarea
                          value={goal.description}
                          onChange={(e) => updateGoal(goal.id, 'description', e.target.value)}
                          placeholder="Describe your goal in detail"
                          className="backdrop-blur-sm bg-white/50 dark:bg-gray-700/50"
                          rows={3}
                        />
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Timeframe
                          </label>
                          <Select value={goal.timeframe} onValueChange={(value) => updateGoal(goal.id, 'timeframe', value)}>
                            <SelectTrigger className="backdrop-blur-sm bg-white/50 dark:bg-gray-700/50">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {timeframes.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Priority
                          </label>
                          <Select value={goal.priority} onValueChange={(value) => updateGoal(goal.id, 'priority', value)}>
                            <SelectTrigger className="backdrop-blur-sm bg-white/50 dark:bg-gray-700/50">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {priorities.map((priority) => (
                                <SelectItem key={priority} value={priority}>
                                  {priority}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-end">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeGoal(goal.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button
                    onClick={addGoal}
                    variant="outline"
                    className="w-full border-dashed border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Add New Goal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Goal Statistics */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Goal Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{goals.length}</div>
                    <div className="text-sm text-muted-foreground">Total Goals</div>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {goals.filter(g => g.completed).length}
                    </div>
                    <div className="text-sm text-muted-foreground">Completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category, index) => {
                    const count = goals.filter(g => g.category === category.name).length;
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{category.name}</span>
                        </div>
                        <Badge variant="outline">{count}</Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Save Button */}
            <Button
              onClick={saveGoals}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Save All Goals
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

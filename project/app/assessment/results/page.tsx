'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Award, 
  CheckCircle,
  ArrowLeft,
  BarChart3,
  Lightbulb,
  Users,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';

export default function AssessmentResultsPage() {
  const results = {
    overallScore: 87,
    topInterests: [
      { name: 'Technology & Innovation', score: 92, color: 'from-blue-500 to-purple-500' },
      { name: 'Problem Solving', score: 89, color: 'from-green-500 to-emerald-500' },
      { name: 'Creative Design', score: 85, color: 'from-pink-500 to-rose-500' },
      { name: 'Leadership', score: 82, color: 'from-orange-500 to-red-500' },
      { name: 'Analytical Thinking', score: 78, color: 'from-indigo-500 to-blue-500' }
    ],
    recommendedCareers: [
      { title: 'Data Scientist', match: 95, description: 'Analyze complex data to drive business decisions' },
      { title: 'UX Designer', match: 88, description: 'Create user-centered digital experiences' },
      { title: 'Product Manager', match: 85, description: 'Lead product development and strategy' },
      { title: 'Software Engineer', match: 82, description: 'Build innovative software solutions' },
      { title: 'Business Analyst', match: 78, description: 'Bridge business needs with technical solutions' }
    ],
    skillsGap: [
      { skill: 'Machine Learning', current: 65, target: 90, priority: 'High' },
      { skill: 'User Research', current: 70, target: 85, priority: 'Medium' },
      { skill: 'Project Management', current: 75, target: 90, priority: 'High' },
      { skill: 'Data Visualization', current: 80, target: 95, priority: 'Medium' }
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
            <Link href="/dashboard" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl mx-auto mb-6 flex items-center justify-center">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Career Interest Survey Results
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Discover your career path based on your interests and strengths
          </p>
          
          {/* Overall Score */}
          <div className="backdrop-blur-xl bg-white/20 dark:bg-black/30 rounded-3xl p-8 border border-white/30 dark:border-gray-700/30 shadow-2xl max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Overall Score</h2>
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{results.overallScore}%</span>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Excellent! You have a strong foundation for multiple career paths.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Interests */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-blue-500" />
                  Top Interest Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.topInterests.map((interest, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">{interest.name}</span>
                      <Badge variant="outline" className="bg-white/20 dark:bg-black/30">
                        {interest.score}%
                      </Badge>
                    </div>
                    <Progress value={interest.score} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Gap Analysis */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Target className="w-6 h-6 mr-2 text-green-500" />
                  Skills Development Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.skillsGap.map((skill, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-600">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">{skill.skill}</span>
                      <Badge variant={skill.priority === 'High' ? 'destructive' : 'secondary'}>
                        {skill.priority} Priority
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Current: {skill.current}%</span>
                        <span>Target: {skill.target}%</span>
                      </div>
                      <Progress value={skill.current} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recommended Careers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Card className="backdrop-blur-xl bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-700/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Award className="w-6 h-6 mr-2 text-yellow-500" />
                Recommended Career Paths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.recommendedCareers.map((career, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-6 rounded-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{career.title}</h3>
                      <Badge className="bg-green-500 hover:bg-green-600">
                        {career.match}% Match
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{career.description}</p>
                    <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                      Explore Career
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
          className="mt-12 text-center space-y-4"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              <BookOpen className="w-5 h-5 mr-2" />
              Start Learning Path
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 dark:border-gray-600">
              <Users className="w-5 h-5 mr-2" />
              Connect with Mentors
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 dark:border-gray-600">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Detailed Report
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

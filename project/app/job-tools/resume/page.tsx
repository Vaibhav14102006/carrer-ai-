'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Star,
  ArrowLeft,
  Download,
  Upload,
  Edit3,
  Eye,
  Share2,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ResumeOptimizationPage() {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const optimizationData = {
    currentScore: 72,
    targetScore: 90,
    improvements: [
      { category: 'Keywords Match', current: 65, target: 90, priority: 'High' },
      { category: 'Action Verbs', current: 80, target: 95, priority: 'Medium' },
      { category: 'Quantifiable Results', current: 70, target: 90, priority: 'High' },
      { category: 'Format & Structure', current: 85, target: 95, priority: 'Low' }
    ],
    suggestions: [
      'Add more industry-specific keywords',
      'Include quantifiable achievements with numbers',
      'Use stronger action verbs',
      'Improve bullet point formatting',
      'Add relevant certifications'
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
            <Link href="/job-tools" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Job Tools</span>
            </Link>
          </div>
          
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl mx-auto mb-6 flex items-center justify-center">
            <FileText className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Resume Optimization
          </h1>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Optimize your resume to match job descriptions and increase your chances of getting interviews
          </p>
        </motion.div>

        {/* Current Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="backdrop-blur-xl bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-700/30 shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Current Resume Score</h2>
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{optimizationData.currentScore}%</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Current Score</span>
                    <span>Target: {optimizationData.targetScore}%</span>
                  </div>
                  <Progress value={optimizationData.currentScore} className="h-3" />
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Your resume needs optimization to reach the target score of {optimizationData.targetScore}%
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Resume Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Upload className="w-6 h-6 mr-2 text-blue-500" />
                  Upload Your Resume
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">Resume Text</label>
                  <Textarea
                    placeholder="Paste your resume content here..."
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    className="min-h-[200px] bg-white/10 dark:bg-black/20 border-white/30 dark:border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">Job Description</label>
                  <Textarea
                    placeholder="Paste the job description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="min-h-[150px] bg-white/10 dark:bg-black/20 border-white/30 dark:border-gray-600"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  <Zap className="w-4 h-4 mr-2" />
                  Analyze & Optimize
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Optimization Areas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Target className="w-6 h-6 mr-2 text-green-500" />
                  Optimization Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {optimizationData.improvements.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-600">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">{item.category}</span>
                      <Badge variant={item.priority === 'High' ? 'destructive' : item.priority === 'Medium' ? 'secondary' : 'outline'}>
                        {item.priority} Priority
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Current: {item.current}%</span>
                        <span>Target: {item.target}%</span>
                      </div>
                      <Progress value={item.current} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <Card className="backdrop-blur-xl bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-700/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-yellow-500" />
                Optimization Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {optimizationData.suggestions.map((suggestion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 rounded-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-900 dark:text-white">{suggestion}</span>
                    </div>
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
          transition={{ delay: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              <Download className="w-5 h-5 mr-2" />
              Download Optimized Resume
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 dark:border-gray-600">
              <Eye className="w-5 h-5 mr-2" />
              Preview Resume
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 dark:border-gray-600">
              <Share2 className="w-5 h-5 mr-2" />
              Share Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

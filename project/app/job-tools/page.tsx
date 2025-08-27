'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ResumeOptimizer } from '@/components/job-tools/ResumeOptimizer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  PenTool, 
  Search, 
  Video, 
  TrendingUp,
  ExternalLink
} from 'lucide-react';

export default function JobTools() {
  const [activeTab, setActiveTab] = useState('resume');

  const tools = [
    {
      id: 'resume',
      title: 'Resume Optimizer',
      description: 'ATS-compatible resume analysis and optimization',
      icon: FileText,
      status: 'active'
    },
    {
      id: 'cover-letter',
      title: 'Cover Letter Writer',
      description: 'AI-powered personalized cover letters',
      icon: PenTool,
      status: 'coming-soon'
    },
    {
      id: 'job-search',
      title: 'Smart Job Matching',
      description: 'Find relevant opportunities across platforms',
      icon: Search,
      status: 'coming-soon'
    },
    {
      id: 'interview',
      title: 'Interview Prep',
      description: 'AI interview simulation and feedback',
      icon: Video,
      status: 'coming-soon'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Job Tools Suite</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive tools to optimize your job search and application process
        </p>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <TabsTrigger 
                key={tool.id} 
                value={tool.id}
                disabled={tool.status === 'coming-soon'}
                className="flex items-center space-x-2"
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{tool.title}</span>
                {tool.status === 'coming-soon' && (
                  <Badge variant="secondary" className="ml-1 text-xs">Soon</Badge>
                )}
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value="resume" className="space-y-6">
          <ResumeOptimizer />
        </TabsContent>

        <TabsContent value="cover-letter" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PenTool className="w-5 h-5" />
                <span>AI Cover Letter Writer</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center py-12">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto flex items-center justify-center">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Coming Soon</h3>
                <p className="text-muted-foreground">
                  AI-powered cover letter generation tailored to specific job postings and your profile.
                </p>
                <Button variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Join Waitlist
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="job-search" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Smart Job Matching</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center py-12">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto flex items-center justify-center">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Coming Soon</h3>
                <p className="text-muted-foreground">
                  AI-powered job matching across multiple platforms with personalized recommendations.
                </p>
                <Button variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Video className="w-5 h-5" />
                <span>Interview Preparation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center py-12">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto flex items-center justify-center">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Coming Soon</h3>
                <p className="text-muted-foreground">
                  AI-powered mock interviews with real-time feedback and improvement suggestions.
                </p>
                <Button variant="outline">
                  <Video className="w-4 h-4 mr-2" />
                  Request Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Briefcase } from 'lucide-react';

export default function SmartMatchingPage() {
  const matches = [
    { title: 'Senior Data Analyst', company: 'TechCorp', match: 88 },
    { title: 'ML Engineer', company: 'AI Labs', match: 82 },
    { title: 'Business Analyst', company: 'FinEdge', match: 76 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-neutral-950 dark:to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Smart 3D Matching</h1>
          <p className="text-muted-foreground mt-2">AI-powered matching across profile, jobs, and skills</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((job) => (
            <Card key={job.title} className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-lg text-gray-900 dark:text-white">{job.title}</CardTitle>
                <Badge>{job.match}% Match</Badge>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">{job.company}</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}



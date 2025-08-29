'use client';

import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { CheckCircle, BookOpen } from 'lucide-react';

export default function SkillDetailPage() {
  const params = useParams();
  const router = useRouter();
  const skill = decodeURIComponent(String(params?.skill || 'skill'));

  const modules = [
    { title: 'Fundamentals', duration: '2 weeks', progress: 100, completed: true },
    { title: 'Intermediate Concepts', duration: '3 weeks', progress: 40, completed: false },
    { title: 'Advanced Applications', duration: '4 weeks', progress: 0, completed: false },
    { title: 'Real-world Projects', duration: '2 weeks', progress: 0, completed: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-neutral-950 dark:to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{skill}</h1>
          <p className="text-muted-foreground mt-2">Deep dive into {skill} with curated modules</p>
        </div>

        <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">Course Modules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {modules.map((m) => (
              <div key={m.title} className="p-4 rounded-lg border bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-gray-900 dark:text-white">{m.title}</div>
                  <div className="text-sm text-muted-foreground">{m.duration}</div>
                </div>
                {m.completed ? (
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-1" /> Completed
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{m.progress}%</span>
                    </div>
                    <Progress value={m.progress} className="h-2" />
                  </div>
                )}
              </div>
            ))}
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Start Learning
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}



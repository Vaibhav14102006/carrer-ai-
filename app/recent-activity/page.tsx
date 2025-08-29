'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, FileText, Users, Sparkles } from 'lucide-react';

const activities = [
  { title: 'Completed Career Interest Survey', time: '2 hours ago', category: 'assessment', icon: FileText },
  { title: 'Earned Python Programming Badge', time: '1 day ago', category: 'skill', icon: Award },
  { title: 'Updated resume optimization', time: '3 days ago', category: 'resume', icon: FileText },
  { title: 'Connected with 3 new professionals', time: '5 days ago', category: 'network', icon: Users }
];

const categoryToColor: Record<string, string> = {
  assessment: 'from-blue-500 to-indigo-500',
  skill: 'from-emerald-500 to-teal-500',
  resume: 'from-orange-500 to-red-500',
  network: 'from-purple-500 to-pink-500'
};

export default function RecentActivityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-neutral-950 dark:to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Recent Activity</h1>
          <p className="text-muted-foreground mt-2">A snapshot of your latest progress</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map(({ title, time, category, icon: Icon }) => (
            <Card key={title} className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${categoryToColor[category]} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">{title}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <Badge variant="outline" className="capitalize">{category}</Badge>
                <div className="text-sm text-muted-foreground">{time}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}



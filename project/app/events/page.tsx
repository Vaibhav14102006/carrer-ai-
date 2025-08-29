'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays } from 'lucide-react';

const events = [
  { title: 'Python Course Deadline', date: 'Dec 20, 2024', type: 'Course', priority: 'High' },
  { title: 'Career Assessment', date: 'Dec 25, 2024', type: 'Assessment', priority: 'Medium' },
  { title: 'Networking Event', date: 'Dec 28, 2024', type: 'Event', priority: 'Low' }
];

const priorityToColor: Record<string, string> = {
  High: 'from-red-500 to-orange-500',
  Medium: 'from-yellow-500 to-amber-500',
  Low: 'from-emerald-500 to-teal-500'
};

export default function UpcomingEventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-neutral-950 dark:to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Upcoming Events</h1>
          <p className="text-muted-foreground mt-2">Stay ahead with key dates</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev) => (
            <Card key={ev.title} className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${priorityToColor[ev.priority]} rounded-lg flex items-center justify-center`}>
                  <CalendarDays className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">{ev.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <Badge variant="outline">{ev.date}</Badge>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{ev.type}</Badge>
                  <Badge variant="outline">{ev.priority}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}



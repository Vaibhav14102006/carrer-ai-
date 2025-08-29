'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

const events = [
  { title: 'Python Course Deadline', date: 'Dec 20, 2024', type: 'Course', priority: 'High', location: 'Online' },
  { title: 'Career Assessment', date: 'Dec 25, 2024', type: 'Assessment', priority: 'Medium', location: 'Portal' },
  { title: 'Networking Event', date: 'Dec 28, 2024', type: 'Event', priority: 'Low', location: 'Delhi NCR' }
];

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-neutral-950 dark:to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievement Calendar</h1>
          <p className="text-muted-foreground mt-2">Track deadlines, events, and milestones</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev) => (
            <Card key={ev.title} className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-white">{ev.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4" />
                  <span>{ev.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{ev.type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{ev.location}</span>
                </div>
                <div>
                  <Badge variant="outline">Priority: {ev.priority}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}



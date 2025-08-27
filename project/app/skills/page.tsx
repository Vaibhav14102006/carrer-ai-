'use client';

import { motion } from 'framer-motion';
import { SkillRadarChart } from '@/components/dashboard/SkillRadarChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  TrendingUp, 
  BookOpen, 
  Award, 
  Clock,
  ExternalLink
} from 'lucide-react';

export default function Skills() {
  const skillGaps = [
    { skill: 'Machine Learning', current: 45, target: 80, priority: 'High', courses: 3 },
    { skill: 'Data Visualization', current: 60, target: 85, priority: 'Medium', courses: 2 },
    { skill: 'Cloud Computing', current: 30, target: 75, priority: 'High', courses: 4 },
    { skill: 'Project Management', current: 65, target: 90, priority: 'Medium', courses: 2 }
  ];

  const learningPaths = [
    {
      title: 'Data Science Mastery',
      progress: 65,
      totalCourses: 8,
      completedCourses: 5,
      estimatedTime: '6 weeks',
      level: 'Intermediate'
    },
    {
      title: 'Leadership Development',
      progress: 40,
      totalCourses: 6,
      completedCourses: 2,
      estimatedTime: '4 weeks',
      level: 'Beginner'
    }
  ];

  const badges = [
    { name: 'Python Programming', earned: true, date: '2024-01-15' },
    { name: 'SQL Expert', earned: true, date: '2024-01-10' },
    { name: 'Data Analysis', earned: true, date: '2024-01-08' },
    { name: 'Machine Learning', earned: false, progress: 75 },
    { name: 'Cloud Architect', earned: false, progress: 30 }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Skill Development Hub</h1>
        <p className="text-xl text-muted-foreground">
          Identify gaps, track progress, and accelerate your professional growth
        </p>
      </motion.div>

      {/* Skill Radar Chart */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SkillRadarChart />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Skill Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 rounded-lg">
              <div className="text-2xl font-bold text-primary">73%</div>
              <div className="text-sm text-muted-foreground">Overall Skill Score</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Strengths: 4</span>
                <span>Gaps: 3</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>In Progress: 2</span>
                <span>Target: 6</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skill Gap Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Skill Gap Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {skillGaps.map((gap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border rounded-lg p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{gap.skill}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge variant={gap.priority === 'High' ? 'destructive' : 'secondary'}>
                      {gap.priority} Priority
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {gap.courses} courses available
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current: {gap.current}%</span>
                    <span>Target: {gap.target}%</span>
                  </div>
                  <Progress value={gap.current} className="h-2" />
                </div>
                <Button size="sm" variant="outline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Start Learning
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Paths */}
      <div className="grid md:grid-cols-2 gap-6">
        {learningPaths.map((path, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{path.title}</CardTitle>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{path.estimatedTime}</span>
                <Badge variant="outline">{path.level}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{path.completedCourses}/{path.totalCourses} courses</span>
                </div>
                <Progress value={path.progress} />
              </div>
              <Button className="w-full">
                Continue Learning
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Badges & Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span>Badges & Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-4 rounded-lg text-center space-y-2 ${
                  badge.earned 
                    ? 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800' 
                    : 'bg-muted/50 border-muted'
                } border`}
              >
                <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
                  badge.earned ? 'bg-yellow-500 text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-sm">{badge.name}</div>
                  {badge.earned ? (
                    <div className="text-xs text-muted-foreground">{badge.date}</div>
                  ) : (
                    <div className="text-xs text-muted-foreground">{badge.progress}% complete</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
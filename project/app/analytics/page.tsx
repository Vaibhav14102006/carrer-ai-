'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Award,
  Target,
  Clock,
  DollarSign,
  Users,
  Download
} from 'lucide-react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart } from 'recharts';

export default function Analytics() {
  const careerHealthData = [
    { month: 'Jul', score: 65, skills: 12, network: 45 },
    { month: 'Aug', score: 68, skills: 15, network: 52 },
    { month: 'Sep', score: 72, skills: 18, network: 58 },
    { month: 'Oct', score: 75, skills: 22, network: 65 },
    { month: 'Nov', score: 78, skills: 25, network: 72 },
    { month: 'Dec', score: 82, skills: 28, network: 78 },
  ];

  const skillProgressData = [
    { skill: 'Python', progress: 85, target: 90 },
    { skill: 'Machine Learning', progress: 65, target: 85 },
    { skill: 'Data Visualization', progress: 78, target: 90 },
    { skill: 'SQL', progress: 92, target: 95 },
    { skill: 'Communication', progress: 70, target: 85 },
    { skill: 'Leadership', progress: 55, target: 80 }
  ];

  const achievements = [
    { title: 'Python Expert', date: '2024-12-15', type: 'Skill Badge' },
    { title: 'Resume Optimizer', date: '2024-12-10', type: 'Tool Usage' },
    { title: 'Community Contributor', date: '2024-12-05', type: 'Social' },
    { title: '30-Day Streak', date: '2024-12-01', type: 'Consistency' }
  ];

  const careerMetrics = [
    {
      title: 'Job Market Fit',
      value: '87%',
      change: '+5%',
      description: 'Based on current skills and market demand',
      icon: Target
    },
    {
      title: 'Salary Forecast',
      value: '$95K',
      change: '+12%',
      description: 'Projected salary in 12 months',
      icon: DollarSign
    },
    {
      title: 'Network Growth',
      value: '145',
      change: '+23',
      description: 'Professional connections this month',
      icon: Users
    },
    {
      title: 'Learning Hours',
      value: '42h',
      change: '+8h',
      description: 'Time invested this month',
      icon: Clock
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Analytics & Reports</h1>
        <p className="text-xl text-muted-foreground">
          Track your career progress and get AI-powered insights
        </p>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Career Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Icon className="w-5 h-5 text-primary" />
                        <Badge variant="outline" className="text-green-600">
                          {metric.change}
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold mb-1">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.title}</div>
                      <div className="text-xs text-muted-foreground mt-2">{metric.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Career Health Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Career Health Trend</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={careerHealthData}>
                  <XAxis dataKey="month" />
                  <YAxis domain={[60, 90]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#0ea5e9" 
                    strokeWidth={3}
                    name="Career Health"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="skills" 
                    stroke="#f97316" 
                    strokeWidth={2}
                    name="Skills Count"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="network" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    name="Network Size"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Skill Progress Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skillProgressData.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.skill}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">
                          {skill.progress}% / {skill.target}%
                        </span>
                        <Badge variant={skill.progress >= skill.target ? 'default' : 'secondary'}>
                          {skill.progress >= skill.target ? 'Complete' : 'In Progress'}
                        </Badge>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress value={skill.progress} className="h-3" />
                      <div 
                        className="absolute top-0 h-3 w-1 bg-orange-500 rounded-full"
                        style={{ left: `${skill.target}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skill Development Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={skillProgressData}>
                  <XAxis dataKey="skill" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="progress" fill="#0ea5e9" name="Current Level" />
                  <Bar dataKey="target" fill="#f97316" name="Target Level" opacity={0.3} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{achievement.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {achievement.type} • {achievement.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievement Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">28</div>
                    <div className="text-sm text-muted-foreground">Total Badges</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">15</div>
                    <div className="text-sm text-muted-foreground">Day Streak</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">Level 7</div>
                    <div className="text-sm text-muted-foreground">Career XP</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">92%</div>
                    <div className="text-sm text-muted-foreground">Completion</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Report</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">+8%</div>
                  <div className="text-sm text-muted-foreground">Career Health Improvement</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Skills Practiced</span>
                    <span className="text-sm font-medium">6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Learning Hours</span>
                    <span className="text-sm font-medium">12.5h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Assessments Taken</span>
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Network Connections</span>
                    <span className="text-sm font-medium">+8</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Complete Python Course</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Network with 10 Professionals</span>
                      <span className="text-sm text-muted-foreground">60%</span>
                    </div>
                    <Progress value={60} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Update Resume</span>
                      <span className="text-sm text-muted-foreground">100%</span>
                    </div>
                    <Progress value={100} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Practice Interview Skills</span>
                      <span className="text-sm text-muted-foreground">40%</span>
                    </div>
                    <Progress value={40} />
                  </div>
                </div>
                <Button className="w-full">
                  <Target className="w-4 h-4 mr-2" />
                  Set New Goals
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>AI Insights & Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    🎯 Focus Area Recommendation
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Based on market trends, prioritize Machine Learning skills. The demand has increased 35% in your target industry.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    📈 Career Opportunity
                  </h4>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Your profile matches 87% with Senior Data Analyst positions. Consider applying to roles at tech companies.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                    🔗 Networking Suggestion
                  </h4>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    Connect with professionals in Data Science. Your network growth is 23% below optimal for your career stage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Skill Development Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={skillProgressData} layout="horizontal">
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="skill" type="category" width={120} />
                  <Tooltip />
                  <Bar dataKey="progress" fill="#0ea5e9" name="Current Level" />
                  <Bar dataKey="target" fill="#f97316" name="Target Level" opacity={0.3} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{achievement.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {achievement.type} • {achievement.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievement Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Calendar className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-semibold mb-2">Achievement Timeline</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    View your accomplishments over time
                  </p>
                  <Button variant="outline">
                    View Full Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Weekly Report</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive weekly progress summary
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Monthly Report</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Detailed monthly career health analysis
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Career Roadmap</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  AI-generated personalized career roadmap
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Generate
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
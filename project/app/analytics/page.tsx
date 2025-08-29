'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
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
  Download,
  FileText,
  Star,
  Zap
} from 'lucide-react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart } from 'recharts';

export default function Analytics() {
  const [isGenerating, setIsGenerating] = useState(false);

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
    { title: 'Python Expert', date: '2024-12-15', type: 'Skill Badge', icon: Star, color: 'from-yellow-400 to-orange-500' },
    { title: 'Resume Optimizer', date: '2024-12-10', type: 'Tool Usage', icon: FileText, color: 'from-blue-400 to-purple-500' },
    { title: 'Community Contributor', date: '2024-12-05', type: 'Social', icon: Users, color: 'from-green-400 to-emerald-500' },
    { title: '30-Day Streak', date: '2024-12-01', type: 'Consistency', icon: Zap, color: 'from-purple-400 to-pink-500' }
  ];

  const careerMetrics = [
    {
      title: 'Job Market Fit',
      value: '87%',
      change: '+5%',
      description: 'Based on current skills and market demand',
      icon: Target,
      color: 'from-blue-500 to-teal-500'
    },
    {
      title: 'Salary Forecast',
      value: '$95K',
      change: '+12%',
      description: 'Projected salary in 12 months',
      icon: DollarSign,
      color: 'from-emerald-500 to-green-500'
    },
    {
      title: 'Network Growth',
      value: '145',
      change: '+23',
      description: 'Professional connections this month',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Learning Hours',
      value: '42h',
      change: '+8h',
      description: 'Time invested this month',
      icon: Clock,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const handleDownloadReport = (type: string) => {
    // Simulate report generation and download
    setIsGenerating(true);
    
    setTimeout(() => {
      const element = document.createElement('a');
      const file = new Blob([`${type} Report Content\n\nGenerated on: ${new Date().toLocaleDateString()}\nCareer Health Score: 82%\nSkills Completed: 12\nNetwork Connections: 145`], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `${type.toLowerCase()}_report_${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setIsGenerating(false);
    }, 2000);
  };

  const handleGenerateRoadmap = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const element = document.createElement('a');
      const roadmap = `Career Roadmap\n\nPhase 1 (Months 1-3):\n- Complete Python Advanced Course\n- Build 2 ML projects\n- Network with 15 professionals\n\nPhase 2 (Months 4-6):\n- Learn Cloud Computing\n- Get ML certification\n- Apply to 20 positions\n\nPhase 3 (Months 7-12):\n- Lead team projects\n- Mentor junior developers\n- Target senior positions`;
      const file = new Blob([roadmap], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `career_roadmap_${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setIsGenerating(false);
    }, 3000);
  };

  const handleViewCalendar = () => {
    // Open calendar view modal or navigate to calendar page
    alert('Calendar view will be implemented here. This would show your achievement timeline and scheduled activities.');
  };

  const handleSetNewGoals = () => {
    // Open goal setting modal
    alert('Goal setting will be implemented here. This would allow you to set new career and skill development goals.');
  };

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
        <TabsList className="grid w-full grid-cols-4 bg-gradient-to-r from-blue-500 to-teal-500">
          <TabsTrigger value="overview" className="text-white data-[state=active]:bg-white/20">Overview</TabsTrigger>
          <TabsTrigger value="skills" className="text-white data-[state=active]:bg-white/20">Skills</TabsTrigger>
          <TabsTrigger value="achievements" className="text-white data-[state=active]:bg-white/20">Achievements</TabsTrigger>
          <TabsTrigger value="reports" className="text-white data-[state=active]:bg-white/20">Reports</TabsTrigger>
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
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-10 h-10 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center shadow-lg`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                          {metric.change}
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">{metric.value}</div>
                      <div className="text-sm text-muted-foreground font-medium">{metric.title}</div>
                      <div className="text-xs text-muted-foreground mt-2">{metric.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Career Health Chart */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20">
              <CardTitle className="flex items-center space-x-2 text-blue-900 dark:text-blue-100">
                <TrendingUp className="w-5 h-5" />
                <span>Career Health Trend</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
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
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20">
              <CardTitle className="text-emerald-900 dark:text-emerald-100">Skill Progress Tracking</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {skillProgressData.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">{skill.skill}</span>
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
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardTitle className="text-blue-900 dark:text-blue-100">Skill Development Chart</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
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
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
                <CardTitle className="flex items-center space-x-2 text-orange-900 dark:text-orange-100">
                  <Award className="w-5 h-5" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className={`w-10 h-10 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center shadow-lg`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 dark:text-white">{achievement.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {achievement.type} • {achievement.date}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                <CardTitle className="text-purple-900 dark:text-purple-100">Achievement Calendar</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Achievement Timeline</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    View your accomplishments over time
                  </p>
                  <Button 
                    variant="outline" 
                    className="hover:bg-purple-50 hover:border-purple-300 transition-colors"
                    onClick={handleViewCalendar}
                  >
                    View Full Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20">
                  <CardTitle className="text-lg text-blue-900 dark:text-blue-100">Weekly Report</CardTitle>
                </CardHeader>
                <CardContent className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive weekly progress summary
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-blue-50 hover:border-blue-300 transition-colors"
                    onClick={() => handleDownloadReport('Weekly')}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mr-2"></div>
                        Generating...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20">
                  <CardTitle className="text-lg text-orange-900 dark:text-orange-100">Monthly Report</CardTitle>
                </CardHeader>
                <CardContent className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detailed monthly career health analysis
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-orange-50 hover:border-orange-300 transition-colors"
                    onClick={() => handleDownloadReport('Monthly')}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mr-2"></div>
                        Generating...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                  <CardTitle className="text-lg text-purple-900 dark:text-purple-100">Career Roadmap</CardTitle>
                </CardHeader>
                <CardContent className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    AI-generated personalized career roadmap
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-purple-50 hover:border-purple-300 transition-colors"
                    onClick={handleGenerateRoadmap}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mr-2"></div>
                        Generating...
                      </>
                    ) : (
                      <>
                        <Target className="w-4 h-4 mr-2" />
                        Generate
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardTitle className="text-green-900 dark:text-green-100">Monthly Goals</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Complete Python Course</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Network with 10 Professionals</span>
                      <span className="text-sm text-muted-foreground">60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Update Resume</span>
                      <span className="text-sm text-muted-foreground">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Practice Interview Skills</span>
                      <span className="text-sm text-muted-foreground">40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  onClick={handleSetNewGoals}
                >
                  <Target className="w-4 h-4 mr-2" />
                  Set New Goals
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardTitle className="text-blue-900 dark:text-blue-100">AI Insights & Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <motion.div 
                  className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow"
                  whileHover={{ x: 5 }}
                >
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    🎯 Focus Area Recommendation
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Based on market trends, prioritize Machine Learning skills. The demand has increased 35% in your target industry.
                  </p>
                </motion.div>
                <motion.div 
                  className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500 hover:shadow-md transition-shadow"
                  whileHover={{ x: 5 }}
                >
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    📈 Career Opportunity
                  </h4>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Your profile matches 87% with Senior Data Analyst positions. Consider applying to roles at tech companies.
                  </p>
                </motion.div>
                <motion.div 
                  className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-shadow"
                  whileHover={{ x: 5 }}
                >
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                    🔗 Networking Suggestion
                  </h4>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    Connect with professionals in Data Science. Your network growth is 23% below optimal for your career stage.
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
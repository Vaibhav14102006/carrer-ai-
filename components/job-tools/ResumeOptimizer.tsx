'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Download, FileText, CheckCircle, AlertCircle, Edit, BarChart2, Briefcase, Code, Zap, Award, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ResumeOptimizer = () => {
  const [resumeText, setResumeText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [fileName, setFileName] = useState<string>('');
  const [activeTab, setActiveTab] = useState('input');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setFileName(file.name);
    
    // Read file content
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setResumeText(content || '');
    };
    reader.readAsText(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const analyzeResume = async () => {
    if (!resumeText.trim()) {
      alert('Please enter or upload your resume text first');
      return;
    }
    
    setAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setResults({
        atsScore: 78,
        matchingJobs: [
          { title: 'Senior Frontend Developer', company: 'TechCorp', match: 85 },
          { title: 'UI/UX Engineer', company: 'DesignHub', match: 78 },
          { title: 'Full Stack Developer', company: 'WebSolutions', match: 72 }
        ],
        algorithmInfo: {
          name: 'AI-Powered Resume Matching Algorithm',
          description: 'Our proprietary algorithm uses natural language processing and machine learning to analyze your resume against job requirements.',
          steps: [
            'Keyword extraction and semantic analysis',
            'Skills and experience mapping',
            'Industry-specific terminology recognition',
            'Quantifiable achievements evaluation'
          ]
        },
        suggestions: [
          { type: 'keyword', text: 'Add more industry-specific keywords like "machine learning", "data analysis"' },
          { type: 'format', text: 'Use bullet points for better ATS parsing' },
          { type: 'content', text: 'Quantify achievements with specific numbers and percentages' }
        ],
        strengths: [
          'Good use of action verbs',
          'Clear contact information',
          'Relevant work experience'
        ],
        weaknesses: [
          'Missing key technical skills',
          'Needs more quantifiable achievements',
          'Could improve formatting consistency'
        ]
      });
      setAnalyzing(false);
      setActiveTab('results');
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card className="backdrop-blur-lg bg-white/30 dark:bg-black/30 border border-white/20 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-blue-500" />
            <span>Resume ATS Optimizer</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger 
                value="input" 
                className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-teal-500/20"
              >
                <Edit className="w-4 h-4 text-purple-500" />
                <span>Input</span>
              </TabsTrigger>
              <TabsTrigger 
                value="results" 
                disabled={!results}
                className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-teal-500/20"
              >
                <BarChart2 className="w-4 h-4 text-teal-500" />
                <span>Analysis</span>
              </TabsTrigger>
              <TabsTrigger 
                value="jobs" 
                disabled={!results}
                className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-teal-500/20"
              >
                <Briefcase className="w-4 h-4 text-indigo-500" />
                <span>Matching Jobs</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="input" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileUpload} 
                    accept=".pdf,.doc,.docx,.txt" 
                    className="hidden" 
                  />
                  <Button 
                    variant="outline" 
                    className="h-20 border-dashed w-full transition-all duration-300 hover:scale-105 hover:bg-white/40 dark:hover:bg-gray-800/40 backdrop-blur-sm"
                    onClick={handleUploadClick}
                  >
                    <div className="text-center">
                      <Upload className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                      <span>{fileName ? fileName : 'Upload Resume'}</span>
                    </div>
                  </Button>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Or paste resume text:</label>
                  <Textarea
                    placeholder="Paste your resume content here..."
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    rows={8}
                    className="backdrop-blur-sm bg-white/10 dark:bg-black/10 border-white/20 dark:border-gray-800/50 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                  />
                </div>
              </div>
              
              <Button 
                onClick={analyzeResume} 
                disabled={!resumeText.trim() || analyzing}
                className="w-full transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 shadow-md hover:shadow-lg"
              >
                {analyzing ? 'Analyzing...' : 'Analyze Resume'}
              </Button>
            </TabsContent>
            
            <TabsContent value="results" className="space-y-6">
              {results && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <Card className="backdrop-blur-lg bg-white/30 dark:bg-black/30 border border-white/20 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <BarChart2 className="w-5 h-5 text-teal-500" />
                        <span>ATS Compatibility Score</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                          <Progress 
                            value={results.atsScore} 
                            className="h-3 bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-1000 ease-in-out" 
                          />
                        </div>
                        <Badge 
                          variant={results.atsScore >= 80 ? "default" : "secondary"}
                          className="text-lg px-3 py-1 backdrop-blur-sm bg-white/20 dark:bg-black/20 border border-white/10 dark:border-gray-800/30 shadow-sm"
                        >
                          {results.atsScore}%
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {results.atsScore >= 80 
                          ? "Great! Your resume is well-optimized for ATS systems."
                          : "Your resume needs optimization to pass through ATS filters."
                        }
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="backdrop-blur-lg bg-white/30 dark:bg-black/30 border border-white/20 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Code className="w-5 h-5 text-indigo-500" />
                        <span>Algorithm Information</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-indigo-50/50 dark:bg-indigo-950/30 rounded-lg backdrop-blur-sm border border-indigo-100/50 dark:border-indigo-900/30">
                          <h3 className="font-semibold text-lg mb-2 flex items-center">
                            <Zap className="w-5 h-5 mr-2 text-indigo-600" />
                            {results.algorithmInfo.name}
                          </h3>
                          <p className="text-sm mb-4">{results.algorithmInfo.description}</p>
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm">Algorithm Steps:</h4>
                            <ul className="space-y-1">
                              {results.algorithmInfo.steps.map((step: string, index: number) => (
                                <li key={index} className="flex items-start space-x-2 text-sm">
                                  <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-xs">{index + 1}</span>
                                  </div>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="backdrop-blur-lg bg-white/30 dark:bg-black/30 border border-white/20 dark:border-gray-800/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-102">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span>Strengths</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {results.strengths.map((strength: string, index: number) => (
                            <li key={index} className="flex items-start space-x-2 p-2 hover:bg-white/10 dark:hover:bg-gray-800/20 rounded-md transition-all duration-200">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                              <span className="text-sm">{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="backdrop-blur-lg bg-white/30 dark:bg-black/30 border border-white/20 dark:border-gray-800/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-102">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <AlertCircle className="w-5 h-5 text-orange-600" />
                          <span>Suggestions</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {results.suggestions.map((suggestion: any, index: number) => (
                            <div 
                              key={index} 
                              className="p-3 bg-orange-50/70 dark:bg-orange-950/30 rounded-lg backdrop-blur-sm border border-orange-100/50 dark:border-orange-900/30 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
                            >
                              <Badge variant="outline" className="mb-2 backdrop-blur-sm bg-white/20 dark:bg-black/20 border border-orange-200/50 dark:border-orange-800/30">
                                {suggestion.type}
                              </Badge>
                              <p className="text-sm">{suggestion.text}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )}
            </TabsContent>
            
            <TabsContent value="jobs" className="space-y-6">
              {results && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <Card className="backdrop-blur-lg bg-white/30 dark:bg-black/30 border border-white/20 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Briefcase className="w-5 h-5 text-indigo-500" />
                        <span>Matching Jobs</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {results.matchingJobs.map((job: any, index: number) => (
                          <div 
                            key={index} 
                            className="p-4 bg-white/40 dark:bg-gray-800/40 rounded-lg backdrop-blur-sm border border-white/30 dark:border-gray-700/50 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold text-lg">{job.title}</h3>
                                <p className="text-sm text-muted-foreground">{job.company}</p>
                              </div>
                              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
                                {job.match}% Match
                              </Badge>
                            </div>
                            <div className="mt-3 flex items-center space-x-2">
                              <div className="flex-1 h-2 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500" 
                                  style={{ width: `${job.match}%` }}
                                ></div>
                              </div>
                              <span className="text-xs font-medium">{job.match}%</span>
                            </div>
                            <div className="mt-3 flex justify-end">
                              <Button size="sm" variant="outline" className="text-xs">
                                <Target className="w-3 h-3 mr-1 text-indigo-500" />
                                Optimize for this job
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center space-x-4">
                    <Button 
                      variant="outline" 
                      className="transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-white/20 dark:border-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-800/20"
                    >
                      <Download className="w-4 h-4 mr-2 text-blue-500" />
                      Download Job Matches
                    </Button>
                    <Button 
                      className="transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 shadow-md hover:shadow-lg"
                    >
                      <Award className="w-4 h-4 mr-2 text-white" />
                      Apply to All
                    </Button>
                  </div>
                </motion.div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
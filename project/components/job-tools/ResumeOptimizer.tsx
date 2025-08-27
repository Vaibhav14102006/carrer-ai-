'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Upload, Download, FileText, CheckCircle, AlertCircle } from 'lucide-react';

export const ResumeOptimizer = () => {
  const [resumeText, setResumeText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const analyzeResume = async () => {
    setAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setResults({
        atsScore: 78,
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
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Resume ATS Optimizer</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Button variant="outline" className="h-20 border-dashed">
              <div className="text-center">
                <Upload className="w-6 h-6 mx-auto mb-2" />
                <span>Upload Resume</span>
              </div>
            </Button>
            <div className="space-y-2">
              <label className="text-sm font-medium">Or paste resume text:</label>
              <Textarea
                placeholder="Paste your resume content here..."
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                rows={8}
              />
            </div>
          </div>
          
          <Button 
            onClick={analyzeResume} 
            disabled={!resumeText.trim() || analyzing}
            className="w-full"
          >
            {analyzing ? 'Analyzing...' : 'Analyze Resume'}
          </Button>
        </CardContent>
      </Card>

      {results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>ATS Compatibility Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <Progress value={results.atsScore} className="h-3" />
                </div>
                <Badge 
                  variant={results.atsScore >= 80 ? "default" : "secondary"}
                  className="text-lg px-3 py-1"
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

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Strengths</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {results.strengths.map((strength: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-sm">{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  <span>Suggestions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {results.suggestions.map((suggestion: any, index: number) => (
                    <div key={index} className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        {suggestion.type}
                      </Badge>
                      <p className="text-sm">{suggestion.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center space-x-4">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Optimized Resume
            </Button>
            <Button>Apply Suggestions</Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
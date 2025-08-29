'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { PenTool } from 'lucide-react';
import { useState } from 'react';

export default function CoverLetterWriterPage() {
  const [jobDesc, setJobDesc] = useState('');
  const [generated, setGenerated] = useState('');

  const handleGenerate = () => {
    setGenerated(`Dear Hiring Manager,\n\nI am excited to apply for this role. With strong experience in the required skills and a track record of delivering results, I am confident I can contribute meaningfully.\n\nSincerely,\nYour Name`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-neutral-950 dark:to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <PenTool className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Cover Letter Writer</h1>
          <p className="text-muted-foreground mt-2">Generate tailored cover letters from job descriptions</p>
        </div>

        <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">Paste Job Description</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea rows={8} value={jobDesc} onChange={(e) => setJobDesc(e.target.value)} placeholder="Paste job description here..." />
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white" onClick={handleGenerate}>Generate Cover Letter</Button>
            {generated && (
              <Textarea rows={10} value={generated} readOnly className="bg-white/60 dark:bg-gray-800/60" />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}



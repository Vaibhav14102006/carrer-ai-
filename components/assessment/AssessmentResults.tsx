'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Brain, Target, TrendingUp, Users } from 'lucide-react';

interface AssessmentResultsProps {
  personalityType: string;
  traits: { name: string; score: number }[];
  careerMatches: { title: string; match: number; description: string }[];
  onContinue: () => void;
}

export const AssessmentResults = ({
  personalityType,
  traits,
  careerMatches,
  onContinue
}: AssessmentResultsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto space-y-6"
    >
      <Card className="text-center">
        <CardHeader>
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Your Career DNA Profile</CardTitle>
          <p className="text-muted-foreground">
            Based on your responses, here's your personalized career insight
          </p>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {personalityType}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Personality Traits</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {traits.map((trait, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{trait.name}</span>
                  <span className="text-sm text-muted-foreground">{trait.score}%</span>
                </div>
                <Progress value={trait.score} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Top Career Matches</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {careerMatches.map((career, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold">{career.title}</h4>
                  <Badge variant="outline">{career.match}% match</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{career.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button onClick={onContinue} size="lg" className="px-8">
          Continue to Dashboard
        </Button>
      </div>
    </motion.div>
  );
};
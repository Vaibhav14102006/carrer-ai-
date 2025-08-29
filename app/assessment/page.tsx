'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuestionCard } from '@/components/assessment/QuestionCard';
import { AssessmentResults } from '@/components/assessment/AssessmentResults';

const questions = [
  {
    question: "When working on a team project, you prefer to:",
    options: [
      "Lead the discussion and delegate tasks",
      "Contribute ideas but let others take charge",
      "Focus on your assigned tasks quietly",
      "Facilitate collaboration between team members"
    ]
  },
  {
    question: "In your ideal work environment, you would:",
    options: [
      "Work independently with minimal supervision",
      "Collaborate closely with colleagues daily",
      "Balance solo work with team interactions",
      "Lead and mentor other team members"
    ]
  },
  {
    question: "When facing a complex problem, your first instinct is to:",
    options: [
      "Break it down into logical steps",
      "Brainstorm creative solutions",
      "Research similar problems and solutions",
      "Discuss it with others to get different perspectives"
    ]
  },
  {
    question: "You feel most energized when:",
    options: [
      "Achieving ambitious goals",
      "Helping others succeed",
      "Learning new skills or concepts",
      "Creating something innovative"
    ]
  },
  {
    question: "Your approach to career development is:",
    options: [
      "Systematic with clear milestones",
      "Flexible and opportunity-driven",
      "Focused on deep expertise",
      "Balanced across multiple interests"
    ]
  }
];

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Assessment complete, show results
      setShowResults(true);
    }
  };

  const mockResults = {
    personalityType: "Strategic Innovator (INTJ-T)",
    traits: [
      { name: "Analytical Thinking", score: 85 },
      { name: "Independence", score: 92 },
      { name: "Strategic Planning", score: 78 },
      { name: "Innovation Drive", score: 88 },
      { name: "Leadership Potential", score: 75 }
    ],
    careerMatches: [
      {
        title: "Data Scientist",
        match: 94,
        description: "Combine analytical skills with innovation to extract insights from complex data"
      },
      {
        title: "Product Manager",
        match: 87,
        description: "Lead strategic product development and cross-functional teams"
      },
      {
        title: "Software Architect",
        match: 82,
        description: "Design and oversee complex software systems and technical strategy"
      }
    ]
  };

  const handleContinue = () => {
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950 dark:to-teal-950 py-12">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          {!showResults ? (
            <QuestionCard
              key={currentQuestion}
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              currentQuestion={currentQuestion + 1}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
            />
          ) : (
            <AssessmentResults
              personalityType={mockResults.personalityType}
              traits={mockResults.traits}
              careerMatches={mockResults.careerMatches}
              onContinue={handleContinue}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
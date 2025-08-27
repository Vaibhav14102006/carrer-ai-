'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Mail, 
  Lock, 
  User, 
  GraduationCap,
  Briefcase,
  Target,
  X
} from 'lucide-react';

interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: string[];
  currentRole: string;
  educationLevel: string;
  industries: string[];
  careerGoals: string[];
  yearsExperience: string;
  skills: string[];
  linkedinUrl: string;
  learningStyle: string[];
  agreeToTerms: boolean;
  marketingOptIn: boolean;
}

export default function SignUp() {
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: [],
    currentRole: '',
    educationLevel: '',
    industries: [],
    careerGoals: [],
    yearsExperience: '',
    skills: [],
    linkedinUrl: '',
    learningStyle: [],
    agreeToTerms: false,
    marketingOptIn: false
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signUpWithEmail, signInWithGoogle } = useAuth();

  const userTypes = [
    'Student',
    'Job Seeker',
    'Career Switcher',
    'Working Professional',
    'Entrepreneur',
    'Freelancer'
  ];

  const educationLevels = [
    'High School',
    'Associate Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD/Doctorate',
    'Bootcamp/Certifications',
    'Self-Taught'
  ];

  const industryOptions = [
    'Technology',
    'Healthcare',
    'Finance',
    'Marketing',
    'Education',
    'Engineering',
    'Design',
    'Sales',
    'Consulting',
    'Manufacturing',
    'Media',
    'Non-Profit'
  ];

  const careerGoalOptions = [
    'Get a job',
    'Change careers',
    'Upskill/reskill',
    'Build a portfolio',
    'Earn more',
    'Start a business',
    'Get promoted',
    'Work remotely'
  ];

  const learningStyleOptions = [
    'Video tutorials',
    'Reading/Articles',
    'Hands-on projects',
    '1:1 Coaching',
    'Group learning',
    'Interactive courses'
  ];

  const handleMultiSelect = (field: keyof SignupFormData, value: string) => {
    const currentValues = formData[field] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    setFormData(prev => ({ ...prev, [field]: newValues }));
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    setError('');

    try {
      await signInWithGoogle();
      window.location.href = '/assessment';
    } catch (err: any) {
      setError(err.message || 'Failed to sign up with Google');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.agreeToTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await signUpWithEmail(formData.email, formData.password);
      // In a real app, you'd save the profile data to Firestore here
      window.location.href = '/assessment';
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        setError('Please fill in all required fields');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
    }
    setError('');
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setError('');
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950 dark:to-teal-950 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl"
      >
        <Card>
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">Join CareerAI</CardTitle>
              <CardDescription>
                Create your account and start your AI-powered career journey
              </CardDescription>
            </div>
            <div className="flex items-center justify-center space-x-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-2 rounded-full transition-colors ${
                    step <= currentStep ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <Button
                  onClick={handleGoogleSignUp}
                  disabled={loading}
                  variant="outline"
                  className="w-full"
                >
                  {loading ? (
                    <LoadingSpinner size="sm" className="mr-2" />
                  ) : (
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  )}
                  Continue with Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password *</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Create password"
                          value={formData.password}
                          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password *</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Button onClick={nextStep} className="w-full">
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold mb-2">Tell us about yourself</h3>
                  <p className="text-sm text-muted-foreground">
                    This helps our AI provide personalized career guidance
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>What best describes you? *</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {userTypes.map((type) => (
                        <Button
                          key={type}
                          variant={formData.userType.includes(type) ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleMultiSelect('userType', type)}
                          className="justify-start"
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentRole">Current Role/Title</Label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="currentRole"
                          placeholder="e.g., Software Engineer"
                          value={formData.currentRole}
                          onChange={(e) => setFormData(prev => ({ ...prev, currentRole: e.target.value }))}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Education Level</Label>
                      <Select
                        value={formData.educationLevel}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, educationLevel: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          {educationLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Years of Experience</Label>
                    <Select
                      value={formData.yearsExperience}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, yearsExperience: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="11-15">11-15 years</SelectItem>
                        <SelectItem value="15+">15+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" onClick={prevStep} className="flex-1">
                      Back
                    </Button>
                    <Button onClick={nextStep} className="flex-1">
                      Continue
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold mb-2">Your career preferences</h3>
                  <p className="text-sm text-muted-foreground">
                    Help us tailor recommendations to your goals
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Industries of Interest</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {industryOptions.map((industry) => (
                        <Button
                          key={industry}
                          variant={formData.industries.includes(industry) ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleMultiSelect('industries', industry)}
                          className="text-xs"
                        >
                          {industry}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Career Goals (select all that apply)</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {careerGoalOptions.map((goal) => (
                        <Button
                          key={goal}
                          variant={formData.careerGoals.includes(goal) ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleMultiSelect('careerGoals', goal)}
                          className="justify-start text-sm"
                        >
                          <Target className="w-3 h-3 mr-2" />
                          {goal}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Learning Style</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {learningStyleOptions.map((style) => (
                        <Button
                          key={style}
                          variant={formData.learningStyle.includes(style) ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleMultiSelect('learningStyle', style)}
                          className="justify-start text-sm"
                        >
                          {style}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedinUrl">LinkedIn Profile (Optional)</Label>
                    <Input
                      id="linkedinUrl"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={formData.linkedinUrl}
                      onChange={(e) => setFormData(prev => ({ ...prev, linkedinUrl: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-4 pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                        }
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{' '}
                        <a href="/terms" className="text-primary hover:underline">
                          Terms & Conditions
                        </a>{' '}
                        and{' '}
                        <a href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="marketing"
                        checked={formData.marketingOptIn}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, marketingOptIn: checked as boolean }))
                        }
                      />
                      <Label htmlFor="marketing" className="text-sm">
                        Send me career tips, industry insights, and product updates
                      </Label>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" onClick={prevStep} className="flex-1">
                      Back
                    </Button>
                    <Button 
                      onClick={handleSubmit} 
                      disabled={loading || !formData.agreeToTerms}
                      className="flex-1"
                    >
                      {loading ? <LoadingSpinner size="sm" className="mr-2" /> : null}
                      Create Account
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <a href="/auth/signin" className="text-primary hover:underline font-medium">
                Sign in
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
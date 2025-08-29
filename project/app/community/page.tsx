'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageCircle, 
  Users, 
  Calendar, 
  Star,
  Send,
  Video,
  BookOpen,
  Award,
  TrendingUp
} from 'lucide-react';

export default function Community() {
  const [chatMessage, setChatMessage] = useState('');
  const [aiChatHistory, setAiChatHistory] = useState([
    {
      type: 'ai',
      message: "Hello! I'm your AI career mentor. How can I help you today?",
      timestamp: new Date()
    }
  ]);

  const mentors = [
    {
      name: 'Sarah Chen',
      role: 'Senior Data Scientist',
      company: 'Google',
      rating: 4.9,
      sessions: 127,
      expertise: ['Machine Learning', 'Career Transition', 'Leadership'],
      price: '₹150/hour',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Marcus Johnson',
      role: 'Product Manager',
      company: 'Microsoft',
      rating: 4.8,
      sessions: 89,
      expertise: ['Product Strategy', 'Team Management', 'Agile'],
      price: '₹120/hour',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Design Director',
      company: 'Airbnb',
      rating: 5.0,
      sessions: 156,
      expertise: ['Design Systems', 'User Research', 'Career Growth'],
      price: '₹180/hour',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const peerGroups = [
    {
      name: 'Data Science Career Switchers',
      members: 1247,
      activity: 'Very Active',
      description: 'Support group for professionals transitioning into data science',
      tags: ['Data Science', 'Career Change', 'Python']
    },
    {
      name: 'Product Management Network',
      members: 892,
      activity: 'Active',
      description: 'Connect with PMs across different industries and experience levels',
      tags: ['Product Management', 'Strategy', 'Leadership']
    },
    {
      name: 'Remote Work Professionals',
      members: 2156,
      activity: 'Very Active',
      description: 'Tips and networking for remote and hybrid work success',
      tags: ['Remote Work', 'Productivity', 'Work-Life Balance']
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI in Career Development Webinar',
      date: 'Jan 25, 2025',
      time: '2:00 PM EST',
      attendees: 234,
      type: 'Webinar'
    },
    {
      title: 'Resume Review Workshop',
      date: 'Jan 27, 2025',
      time: '6:00 PM EST',
      attendees: 89,
      type: 'Workshop'
    },
    {
      title: 'Tech Industry Networking',
      date: 'Jan 30, 2025',
      time: '7:00 PM EST',
      attendees: 156,
      type: 'Networking'
    }
  ];

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;

    const newMessage = {
      type: 'user',
      message: chatMessage,
      timestamp: new Date()
    };

    setAiChatHistory(prev => [...prev, newMessage]);
    setChatMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: 'ai',
        message: "That's a great question! Based on your profile, I'd recommend focusing on developing your technical skills while building your professional network. Would you like specific suggestions for your career path?",
        timestamp: new Date()
      };
      setAiChatHistory(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Community & Mentorship</h1>
        <p className="text-xl text-muted-foreground">
          Connect, learn, and grow with peers and industry experts
        </p>
      </motion.div>

      <Tabs defaultValue="ai-mentor" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="ai-mentor">AI Mentor</TabsTrigger>
          <TabsTrigger value="expert-mentors">Expert Mentors</TabsTrigger>
          <TabsTrigger value="peer-groups">Peer Groups</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="ai-mentor" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>AI Career Mentor</span>
                <Badge variant="secondary">24/7 Available</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-96 border rounded-lg p-4 overflow-y-auto bg-muted/20">
                  <div className="space-y-4">
                    {aiChatHistory.map((chat, index) => (
                      <div
                        key={index}
                        className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            chat.type === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-background border'
                          }`}
                        >
                          <p className="text-sm">{chat.message}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {chat.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask your AI mentor anything..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expert-mentors" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={mentor.image} alt={mentor.name} />
                        <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{mentor.name}</h3>
                        <p className="text-sm text-muted-foreground">{mentor.role}</p>
                        <p className="text-sm text-muted-foreground">{mentor.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{mentor.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {mentor.sessions} sessions
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {mentor.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-primary">{mentor.price}</span>
                      <Button size="sm">
                        <Video className="w-4 h-4 mr-2" />
                        Book Session
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="peer-groups" className="space-y-6">
          <div className="space-y-4">
            {peerGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{group.name}</h3>
                          <Badge variant={group.activity === 'Very Active' ? 'default' : 'secondary'}>
                            {group.activity}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{group.description}</p>
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span className="text-sm">{group.members.toLocaleString()} members</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {group.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button>Join Group</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{event.title}</h3>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <span>{event.time}</span>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{event.attendees} attending</span>
                          </div>
                        </div>
                      </div>
                      <Button>
                        <Calendar className="w-4 h-4 mr-2" />
                        Register
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
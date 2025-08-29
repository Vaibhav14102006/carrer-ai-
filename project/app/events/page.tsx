'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  BookOpen,
  Brain,
  Target,
  Star,
  Plus,
  Filter,
  Search,
  ChevronRight,
  ExternalLink,
  Bell
} from 'lucide-react';

export default function EventsPage() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

const events = [
    {
      id: 1,
      title: 'Python Course Deadline',
      date: 'Dec 20, 2024',
      time: '11:59 PM',
      type: 'Course',
      priority: 'High',
      location: 'Online',
      description: 'Final deadline for Python programming course project submission. Complete all assignments and final project.',
      category: 'Learning',
      attendees: 45,
      instructor: 'Dr. Sarah Chen',
      price: '₹7,999',
      status: 'upcoming',
      tags: ['Python', 'Programming', 'Deadline']
    },
    {
      id: 2,
      title: 'Career Assessment',
      date: 'Dec 25, 2024',
      time: '2:00 PM',
      type: 'Assessment',
      priority: 'Medium',
      location: 'Portal',
      description: 'Quarterly career development assessment to track progress and receive personalized recommendations.',
      category: 'Career',
      attendees: 120,
      duration: '2 hours',
      price: 'Free',
      status: 'upcoming',
      tags: ['Assessment', 'Career', 'Development']
    },
    {
      id: 3,
      title: 'Networking Event',
      date: 'Dec 28, 2024',
      time: '6:00 PM',
      type: 'Event',
      priority: 'Low',
      location: 'Tech Hub, Delhi NCR',
      description: 'Industry networking meetup for tech professionals. Connect with peers and industry leaders.',
      category: 'Networking',
      attendees: 85,
      duration: '3 hours',
      price: '₹1,499',
      status: 'upcoming',
      tags: ['Networking', 'Tech', 'Industry']
    },
    {
      id: 4,
      title: 'Resume Review Session',
      date: 'Jan 5, 2025',
      time: '10:00 AM',
      type: 'Mentoring',
      priority: 'Medium',
      location: 'Online',
      description: 'One-on-one resume review session with certified career coach. Get personalized feedback and optimization tips.',
      category: 'Career',
      attendees: 1,
      duration: '1 hour',
      price: '₹2,999',
      status: 'upcoming',
      tags: ['Resume', 'Career', 'Mentoring']
    },
    {
      id: 5,
      title: 'Leadership Workshop',
      date: 'Jan 10, 2025',
      time: '9:00 AM',
      type: 'Workshop',
      priority: 'High',
      location: 'Business Center, Mumbai',
      description: 'Advanced leadership skills workshop covering strategic thinking, team management, and decision making.',
      category: 'Learning',
      attendees: 30,
      duration: '8 hours',
      price: '₹15,999',
      status: 'upcoming',
      tags: ['Leadership', 'Workshop', 'Management']
    },
    {
      id: 6,
      title: 'AI Fundamentals Course',
      date: 'Jan 15, 2025',
      time: '7:00 PM',
      type: 'Course',
      priority: 'Medium',
      location: 'Online',
      description: 'Comprehensive AI fundamentals course covering machine learning, neural networks, and practical applications.',
      category: 'Learning',
      attendees: 200,
      duration: '12 weeks',
      price: '₹24,999',
      status: 'upcoming',
      tags: ['AI', 'Machine Learning', 'Technology']
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500 text-white';
      case 'Medium': return 'bg-yellow-500 text-white';
      case 'Low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Course': return <BookOpen className="w-5 h-5" />;
      case 'Assessment': return <Brain className="w-5 h-5" />;
      case 'Event': return <Users className="w-5 h-5" />;
      case 'Mentoring': return <Target className="w-5 h-5" />;
      case 'Workshop': return <Calendar className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Course': return 'text-blue-600 bg-blue-50 dark:bg-blue-950/20';
      case 'Assessment': return 'text-purple-600 bg-purple-50 dark:bg-purple-950/20';
      case 'Event': return 'text-green-600 bg-green-50 dark:bg-green-950/20';
      case 'Mentoring': return 'text-orange-600 bg-orange-50 dark:bg-orange-950/20';
      case 'Workshop': return 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/20';
      default: return 'text-gray-600 bg-gray-50 dark:bg-gray-950/20';
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesFilter = filter === 'all' || event.category.toLowerCase() === filter.toLowerCase();
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const categories = ['All', 'Learning', 'Career', 'Networking'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-black dark:to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Upcoming Events
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
                Discover and join career development events, courses, and workshops
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className={`px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30 cursor-pointer transition-all duration-300 ${
                      filter === category ? 'bg-white/40 border-white/50' : ''
                    }`}
                    onClick={() => setFilter(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Events Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Filters and Search */}
        <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add New Event
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <CardHeader className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white`}>
                        {getTypeIcon(event.type)}
                      </div>
                      <Badge className={`text-xs ${getTypeColor(event.type)}`}>
                        {event.type}
                      </Badge>
                    </div>
                    <Badge className={`text-xs ${getPriorityColor(event.priority)}`}>
                      {event.priority}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    {event.attendees && (
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-600">
                      {event.price}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">4.8</span>
                    </div>
        </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                </div>
              </CardHeader>

                <CardContent className="p-6 pt-0">
                  <div className="flex items-center space-x-3">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                    >
                      <Bell className="w-4 h-4 mr-2" />
                      Register Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
            <CardContent className="p-12 text-center">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No events found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}



'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Bell,
  CheckCircle,
  AlertCircle,
  Info,
  Settings,
  Trash2,
  Filter,
  Search,
  Clock,
  Star,
  Target,
  Users,
  BookOpen,
  Brain,
  Calendar
} from 'lucide-react';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Python Course Deadline Reminder',
      message: 'Your Python programming course deadline is approaching. Complete the final project by Dec 20, 2024.',
      type: 'reminder',
      priority: 'high',
      category: 'Learning',
      timestamp: '2 hours ago',
      read: false,
      icon: BookOpen
    },
    {
      id: 2,
      title: 'Career Assessment Available',
      message: 'New career assessment is now available. Take it to track your progress and get personalized recommendations.',
      type: 'info',
      priority: 'medium',
      category: 'Career',
      timestamp: '1 day ago',
      read: false,
      icon: Brain
    },
    {
      id: 3,
      title: 'New Connection Request',
      message: 'John Doe wants to connect with you. Accept to expand your professional network.',
      type: 'social',
      priority: 'low',
      category: 'Networking',
      timestamp: '2 days ago',
      read: true,
      icon: Users
    },
    {
      id: 4,
      title: 'Goal Achievement Unlocked',
      message: 'Congratulations! You have completed 5 learning modules this month. New badge unlocked!',
      type: 'achievement',
      priority: 'medium',
      category: 'Skills',
      timestamp: '3 days ago',
      read: true,
      icon: Target
    },
    {
      id: 5,
      title: 'Resume Optimization Complete',
      message: 'Your resume has been optimized for ATS compatibility. Score improved from 65% to 78%.',
      type: 'success',
      priority: 'medium',
      category: 'Career',
      timestamp: '1 week ago',
      read: true,
      icon: CheckCircle
    },
    {
      id: 6,
      title: 'Upcoming Networking Event',
      message: 'Tech industry networking event in Delhi NCR on Dec 28, 2024. Register now to secure your spot.',
      type: 'event',
      priority: 'low',
      category: 'Networking',
      timestamp: '1 week ago',
      read: true,
      icon: Users
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'reminder': return <Clock className="w-4 h-4" />;
      case 'info': return <Info className="w-4 h-4" />;
      case 'social': return <Users className="w-4 h-4" />;
      case 'achievement': return <Star className="w-4 h-4" />;
      case 'success': return <CheckCircle className="w-4 h-4" />;
      case 'event': return <Calendar className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'reminder': return 'text-orange-600 bg-orange-50 dark:bg-orange-950/20';
      case 'info': return 'text-blue-600 bg-blue-50 dark:bg-blue-950/20';
      case 'social': return 'text-purple-600 bg-purple-50 dark:bg-purple-950/20';
      case 'achievement': return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-950/20';
      case 'success': return 'text-green-600 bg-green-50 dark:bg-green-950/20';
      case 'event': return 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/20';
      default: return 'text-gray-600 bg-gray-50 dark:bg-gray-950/20';
    }
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = filter === 'all' || notification.type === filter;
    const matchesSearch = notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

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
                <Bell className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Notifications
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
                Stay updated with your career development progress and important events
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Badge variant="outline" className="px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30">
                  {unreadCount} Unread
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-lg backdrop-blur-sm bg-white/20 border-white/30">
                  {notifications.length} Total
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters and Actions */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search notifications..."
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
                      <option value="all">All Types</option>
                      <option value="reminder">Reminders</option>
                      <option value="info">Information</option>
                      <option value="social">Social</option>
                      <option value="achievement">Achievements</option>
                      <option value="success">Success</option>
                      <option value="event">Events</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      onClick={markAllAsRead}
                      className="hover:bg-green-50 hover:border-green-300"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Mark All Read
                    </Button>
                    <Button
                      variant="outline"
                      className="hover:bg-blue-50 hover:border-blue-300"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications List */}
            <div className="space-y-4">
              {filteredNotifications.map((notification, index) => {
                const Icon = notification.icon;
  return (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl rounded-lg transition-all duration-300 ${
                      !notification.read ? 'ring-2 ring-blue-500/50' : ''
                    }`}
                  >
                    <Card className="border-0 bg-transparent">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getTypeColor(notification.type)}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <h3 className={`text-lg font-semibold ${!notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                                  {notification.title}
                                </h3>
                                {!notification.read && (
                                  <div className={`w-2 h-2 rounded-full ${getPriorityColor(notification.priority)}`}></div>
                                )}
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className="text-xs">
                                  {notification.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground">{notification.timestamp}</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-3">{notification.message}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Badge className={`text-xs ${getTypeColor(notification.type)}`}>
                                  {notification.type}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {notification.priority}
                                </Badge>
                              </div>
                              <div className="flex items-center space-x-2">
                                {!notification.read && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => markAsRead(notification.id)}
                                    className="hover:bg-green-50 hover:border-green-300"
                                  >
                                    <CheckCircle className="w-4 h-4 mr-1" />
                                    Mark Read
                                  </Button>
                                )}
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => deleteNotification(notification.id)}
                                  className="hover:bg-red-50 hover:border-red-300 text-red-600"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
          </div>

            {filteredNotifications.length === 0 && (
              <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
                <CardContent className="p-12 text-center">
                  <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No notifications found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
                </CardContent>
              </Card>
            )}
        </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notification Stats */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Notification Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{unreadCount}</div>
                    <div className="text-sm text-muted-foreground">Unread</div>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{notifications.length - unreadCount}</div>
                    <div className="text-sm text-muted-foreground">Read</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Learning</span>
                    <span className="font-medium">{notifications.filter(n => n.category === 'Learning').length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Career</span>
                    <span className="font-medium">{notifications.filter(n => n.category === 'Career').length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Networking</span>
                    <span className="font-medium">{notifications.filter(n => n.category === 'Networking').length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notification Preferences */}
            <Card className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-white/30 dark:border-gray-700/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Email Notifications</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Push Notifications</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">SMS Notifications</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Weekly Digest</span>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}



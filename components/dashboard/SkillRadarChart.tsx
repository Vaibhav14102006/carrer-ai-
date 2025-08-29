'use client';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { skill: 'Technical', current: 80, target: 95 },
  { skill: 'Communication', current: 65, target: 85 },
  { skill: 'Leadership', current: 70, target: 90 },
  { skill: 'Problem Solving', current: 85, target: 95 },
  { skill: 'Creativity', current: 60, target: 80 },
  { skill: 'Teamwork', current: 75, target: 90 },
];

export const SkillRadarChart = () => {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <CardTitle className="text-lg font-semibold text-purple-900 dark:text-purple-100">Skill Assessment</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={data}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis 
              dataKey="skill" 
              tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]} 
              tick={{ fill: '#6b7280', fontSize: 10 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Radar
              name="Current"
              dataKey="current"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.2}
              strokeWidth={3}
            />
            <Radar
              name="Target"
              dataKey="target"
              stroke="#ec4899"
              fill="#ec4899"
              fillOpacity={0.1}
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </RadarChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center space-x-8 mt-6">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>
            <span className="text-sm text-muted-foreground font-medium">Current Level</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-pink-500 rounded-full shadow-lg"></div>
            <span className="text-sm text-muted-foreground font-medium">Target Level</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
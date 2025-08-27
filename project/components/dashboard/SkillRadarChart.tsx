'use client';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
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
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Skill Assessment</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" />
            <PolarRadiusAxis angle={90} domain={[0, 100]} />
            <Radar
              name="Current"
              dataKey="current"
              stroke="#0ea5e9"
              fill="#0ea5e9"
              fillOpacity={0.1}
              strokeWidth={2}
            />
            <Radar
              name="Target"
              dataKey="target"
              stroke="#f97316"
              fill="#f97316"
              fillOpacity={0.1}
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </RadarChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Current Level</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Target Level</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
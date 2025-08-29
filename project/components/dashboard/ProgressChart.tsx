'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { month: 'Jan', score: 65 },
  { month: 'Feb', score: 68 },
  { month: 'Mar', score: 72 },
  { month: 'Apr', score: 75 },
  { month: 'May', score: 78 },
  { month: 'Jun', score: 82 },
];

export const ProgressChart = () => {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20">
        <CardTitle className="text-lg font-semibold text-blue-900 dark:text-blue-100">Career Health Progress</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis 
              domain={[60, 90]} 
              tick={{ fill: '#6b7280', fontSize: 10 }}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke="#0ea5e9" 
              strokeWidth={4}
              dot={{ fill: '#0ea5e9', strokeWidth: 3, r: 6, stroke: '#ffffff' }}
              activeDot={{ r: 8, stroke: '#0ea5e9', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/20 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">
              Steady improvement trend
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
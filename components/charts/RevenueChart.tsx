'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { year: '2025', revenue: 300 },
  { year: '2026', revenue: 450 },
  { year: '2027', revenue: 700 },
  { year: '2028', revenue: 1000 },
  { year: '2029', revenue: 1400 },
];

export default function RevenueChart() {
  return (
    <div className="w-full h-96 bg-white p-8 rounded-sm border border-[var(--french-navy)]/10">
      <h3 className="text-3xl font-light mb-8 text-[var(--french-navy)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
        매출 성장 추이
      </h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis 
            dataKey="year" 
            stroke="#1a1a2e"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
          />
          <YAxis 
            stroke="#1a1a2e"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
            label={{ value: '백만원', angle: -90, position: 'insideLeft', style: { fontFamily: 'Inter, sans-serif' } }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #d4af37',
              borderRadius: '4px',
              fontFamily: 'Inter, sans-serif'
            }}
            formatter={(value: number) => [`${value}백만원`, '매출액']}
          />
          <Legend 
            wrapperStyle={{ fontFamily: 'Inter, sans-serif' }}
            formatter={() => '매출액 (백만원)'}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#d4af37" 
            strokeWidth={3}
            dot={{ fill: '#d4af37', r: 6 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function Growth() {
  const t = useTranslations('growth');

  const years = ['year1', 'year2', 'year3'];
  
  const colors = [
    { bg: 'from-rose-100 to-pink-100', border: 'border-rose-300', text: 'text-rose-700' },
    { bg: 'from-blue-100 to-indigo-100', border: 'border-blue-300', text: 'text-blue-700' },
    { bg: 'from-amber-100 to-orange-100', border: 'border-amber-300', text: 'text-amber-700' },
  ];

  const revenueData = [
    { year: '2025', revenue: 300, label: '300M' },
    { year: '2026', revenue: 450, label: '450M' },
    { year: '2027', revenue: 700, label: '700M' },
    { year: '2028', revenue: 1000, label: '1,000M' },
    { year: '2029', revenue: 1400, label: '1,400M' },
  ];

  const barColors = ['#D4AF37', '#C9A961', '#BFA38B', '#B59DB5', '#AB97DF'];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-[var(--french-navy)] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {t('title')}
          </h2>
          <p className="text-lg text-[var(--french-gray)]">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {years.map((year, index) => (
            <div 
              key={year}
              className={`p-8 rounded-2xl bg-gradient-to-br ${colors[index].bg} border-2 ${colors[index].border} hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-6">
                <div className={`inline-block px-6 py-3 bg-white rounded-full ${colors[index].text} font-bold text-lg mb-3`}>
                  {t(`${year}.period`)}
                </div>
                <div className="text-4xl font-bold text-[var(--french-navy)] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {t(`${year}.revenue`)}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[var(--french-navy)] mb-4 text-center">
                {t(`${year}.goal`)}
              </h3>

              <div className="space-y-3">
                {(t.raw(`${year}.actions`) as string[]).map((action, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white/60 p-3 rounded-lg">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full ${colors[index].bg} flex items-center justify-center ${colors[index].text} font-bold text-sm`}>
                      {i + 1}
                    </span>
                    <span className="text-[var(--french-gray)] text-sm flex-1">
                      {action}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Chart */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border-2 border-[var(--french-gold)]/30 shadow-lg">
            <h3 className="text-3xl font-light text-[var(--french-navy)] mb-8 text-center" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {t('chartTitle')}
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5D5C3" />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: '#2C3E50', fontSize: 14 }}
                  axisLine={{ stroke: '#D4AF37' }}
                />
                <YAxis 
                  tick={{ fill: '#2C3E50', fontSize: 14 }}
                  axisLine={{ stroke: '#D4AF37' }}
                  label={{ value: '백만원', angle: -90, position: 'insideLeft', style: { fill: '#2C3E50' } }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#FFF8F0', 
                    border: '2px solid #D4AF37',
                    borderRadius: '8px',
                    fontFamily: 'Cormorant Garamond, serif'
                  }}
                  formatter={(value: number) => [`${value} 백만원`, '매출액']}
                />
                <Bar dataKey="revenue" radius={[8, 8, 0, 0]}>
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={barColors[index]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

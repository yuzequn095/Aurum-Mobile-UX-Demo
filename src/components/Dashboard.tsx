import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { TrendingUp, ArrowUp, ArrowDown, Sparkles, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Portfolio Performance Card */}
      <section className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 relative overflow-hidden group">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-display font-semibold mb-1">Portfolio Performance</h2>
            <p className="text-[10px] text-[#666666] uppercase tracking-[0.15em] font-bold">H1 Growth Metrics</p>
          </div>
          <div className="flex bg-[#F5F5F5] rounded-full p-1 text-[10px] font-bold">
            {['1M', '3M', '6M', '1Y'].map((period) => (
              <button
                key={period}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  period === '6M' 
                    ? 'bg-white shadow-sm text-[#D4AF37]' 
                    : 'text-[#666666] hover:text-[#1A1A1A]'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-4xl font-light tracking-tight mb-2">$2,450,000.00</h3>
          <div className="inline-flex items-center space-x-1.5 bg-[#22C55E]/10 text-[#22C55E] px-2.5 py-1 rounded-lg text-xs font-bold">
            <TrendingUp size={14} />
            <span>+12.5% ($272,200)</span>
          </div>
        </div>

        <div className="h-[180px] w-full -mx-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={PORTFOLIO_DATA}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                hide 
              />
              <YAxis hide domain={['dataMin - 100000', 'dataMax + 100000']} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#D4AF37" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorValue)" 
              />
              <Area 
                type="monotone" 
                dataKey="benchmark" 
                stroke="#E5E5E5" 
                strokeWidth={2}
                strokeDasharray="5 5"
                fill="transparent"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-between text-[10px] text-[#666666] uppercase tracking-widest font-bold border-t border-black/5 pt-4 mt-4">
          <span>JAN 24</span>
          <span>MAR 24</span>
          <span>MAY 24</span>
          <span>JUL 24</span>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 gap-4">
        {[
          { label: 'Total Assets', value: '$2.45M', change: '+1.2%', up: true },
          { label: 'Monthly Cash', value: '$32.5K', change: '+5.0%', up: true },
          { label: 'Liabilities', value: '$12.5K', change: '-2.0%', up: false },
          { label: 'Net Worth Change', value: '$2.43M', change: '+1.5%', up: true },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-3xl p-5 shadow-sm border border-black/5 flex flex-col justify-between h-32">
            <p className="text-[10px] text-[#666666] uppercase tracking-widest font-bold">{stat.label}</p>
            <div>
              <p className="text-2xl font-light tracking-tight mb-1">{stat.value}</p>
              <p className={`text-[10px] font-bold flex items-center ${stat.up ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
                {stat.up ? <ArrowUp size={10} className="mr-0.5" /> : <ArrowDown size={10} className="mr-0.5" />}
                {stat.change}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* AI Executive Brief */}
      <section className="bg-white rounded-3xl p-6 shadow-sm border border-black/5">
        <div className="flex items-start mb-4">
          <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mr-4 shrink-0">
            <Sparkles size={18} className="text-[#D4AF37]" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold mb-1">AI Executive Brief</h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Your technology sector holdings have experienced a robust <strong className="text-[#1A1A1A] font-semibold">14% growth</strong> this quarter. Opportunity to optimize tax-loss harvesting...
            </p>
          </div>
        </div>
        <button className="w-full py-3.5 mt-2 flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest border border-black/5 rounded-2xl hover:bg-[#F5F5F5] transition-colors group">
          <span>View Full Brief</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </section>
    </div>
  );
}

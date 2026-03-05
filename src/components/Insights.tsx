import React from 'react';
import { 
  Download, 
  Share2, 
  TrendingUp, 
  Network, 
  BookOpen,
  ArrowRight
} from 'lucide-react';

export default function Insights() {
  return (
    <div className="space-y-8">
      {/* Overview Header */}
      <section>
        <p className="text-[10px] font-bold tracking-widest text-[#666666] uppercase mb-1">Executive Summary</p>
        <h1 className="text-3xl font-display font-semibold text-[#1A1A1A] mb-3">October 2023 Overview</h1>
        <p className="text-sm text-[#666666] mb-6 leading-relaxed font-medium">
          A comprehensive strategic audit of private capital flows and portfolio performance for the current fiscal period.
        </p>
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white border border-black/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors shadow-sm">
            <Download size={14} className="text-[#D4AF37]" />
            Export PDF
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white border border-black/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors shadow-sm">
            <Share2 size={14} className="text-[#D4AF37]" />
            Share Report
          </button>
        </div>
      </section>

      {/* Financial Health Score */}
      <section className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm text-center">
        <h2 className="text-xl font-display font-semibold mb-1">Financial Health Score</h2>
        <p className="text-[10px] tracking-widest text-[#666666] uppercase font-bold mb-8">Calculated Performance Benchmark</p>
        
        <div className="relative w-36 h-36 mx-auto mb-8">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle 
              className="text-[#F5F5F5]" 
              cx="50" cy="50" r="45" 
              fill="none" stroke="currentColor" strokeWidth="4" 
            />
            <circle 
              className="text-[#D4AF37]" 
              cx="50" cy="50" r="45" 
              fill="none" stroke="currentColor" strokeWidth="4" 
              strokeDasharray="283"
              strokeDashoffset="22"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-display font-bold text-[#D4AF37]">92</span>
            <span className="text-[10px] font-bold tracking-widest text-[#666666] uppercase mt-1">Excellent</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] text-xs font-bold mb-3">
          <TrendingUp size={16} />
          +3 pts from last month
        </div>
        <p className="text-xs text-[#666666] leading-relaxed font-medium px-4">
          Your asset allocation and debt-to-income ratio improved by 4.2% since the previous audit.
        </p>
      </section>

      {/* Optimized Flow Journey */}
      <section className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-8 border-b border-black/5 pb-4">
          <Network size={20} className="text-[#D4AF37]" />
          <h2 className="text-lg font-display font-semibold">Optimized Flow Journey</h2>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <span className="text-[9px] font-bold tracking-widest text-[#666666] uppercase mb-1 block">Total Income</span>
            <div className="text-3xl font-display font-semibold text-[#1A1A1A]">$45,000.00</div>
          </div>

          <div className="relative w-full max-w-[240px] aspect-[4/5]">
            <svg className="w-full h-full" viewBox="0 0 200 250">
              <path d="M 100 0 L 100 40" fill="none" stroke="#D4AF37" strokeWidth="2" />
              <path d="M 100 40 Q 100 80 40 100" fill="none" stroke="#E5E5E5" strokeWidth="1.5" />
              <circle cx="40" cy="100" fill="#666666" r="3" />
              <path d="M 100 40 Q 100 80 160 100" fill="none" stroke="#D4AF37" strokeWidth="2" />
              <circle cx="160" cy="100" fill="#D4AF37" r="3" />
              
              <foreignObject x="0" y="115" width="80" height="60">
                <div className="text-center">
                  <p className="text-[8px] font-bold text-[#666666] uppercase leading-tight mb-1">Managed<br/>Expenses</p>
                  <p className="text-xs font-bold text-[#1A1A1A]">$28,450</p>
                </div>
              </foreignObject>
              
              <foreignObject x="120" y="115" width="80" height="60">
                <div className="text-center">
                  <p className="text-[8px] font-bold text-[#D4AF37] uppercase leading-tight mb-1">Strategic<br/>Allocations</p>
                  <p className="text-xs font-bold text-[#1A1A1A]">$12,500</p>
                </div>
              </foreignObject>

              <path d="M 40 160 Q 40 200 100 210" fill="none" stroke="#E5E5E5" strokeDasharray="4" strokeWidth="1" />
              <path d="M 160 160 Q 160 200 100 210" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
              <path d="M 100 210 L 100 230" fill="none" stroke="#D4AF37" strokeWidth="2" />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center">
              <span className="text-[9px] font-bold tracking-widest text-[#D4AF37] uppercase mb-0.5">Net Balance</span>
              <div className="text-2xl font-display font-semibold text-[#1A1A1A]">$4,050.00</div>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-8 border-t border-black/5 pt-6 mt-4">
            <div className="flex flex-col">
              <span className="text-[9px] text-[#666666] uppercase font-bold tracking-widest mb-1">Burn Rate</span>
              <span className="text-sm font-bold">63.2%</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[9px] text-[#666666] uppercase font-bold tracking-widest mb-1">Retention</span>
              <span className="text-sm font-bold text-[#D4AF37]">36.8%</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Dossier */}
      <section className="bg-white border border-black/5 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-8 border-b border-black/5 pb-4">
          <BookOpen size={20} className="text-[#D4AF37]" />
          <h2 className="text-lg font-display font-semibold">AI Dossier</h2>
        </div>

        <div className="space-y-8">
          <div className="relative pl-5 border-l-2 border-[#D4AF37]/20">
            <h3 className="text-sm font-display font-bold mb-2">Capital Efficiency</h3>
            <p className="text-[13px] text-[#666666] italic leading-relaxed font-medium">
              "Your current liquidity reserve of $94,000 is 15% above target. Recommending a shift toward high-yield debt instruments to combat inflationary drag on stagnant cash."
            </p>
          </div>
          <div className="relative pl-5 border-l-2 border-[#D4AF37]/20">
            <h3 className="text-sm font-display font-bold mb-2">Fiscal Optimization</h3>
            <p className="text-[13px] text-[#666666] italic leading-relaxed font-medium">
              "A tax-loss harvesting window has opened within your technology-weighted sub-portfolio. Executing this strategy before year-end could yield a projected tax credit of $3,200."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

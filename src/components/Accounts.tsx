import React from 'react';
import { Search, Calendar, Sparkles } from 'lucide-react';
import { TRANSACTIONS } from '../constants';
import { cn } from '../utils';

export default function Transactions() {
  return (
    <div className="space-y-6">
      {/* Search & Filter Header */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex space-x-4">
          <button className="text-[#666666] hover:text-[#D4AF37] transition-colors">
            <Search size={20} />
          </button>
          <button className="text-[#666666] hover:text-[#D4AF37] transition-colors">
            <Calendar size={20} />
          </button>
        </div>
      </div>

      <div className="flex border-b border-black/5 mb-6">
        {['All History', 'Expenses', 'Revenue'].map((tab) => (
          <button
            key={tab}
            className={cn(
              "px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-all relative",
              tab === 'All History' 
                ? "text-[#D4AF37]" 
                : "text-[#666666] hover:text-[#1A1A1A]"
            )}
          >
            {tab}
            {tab === 'All History' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]" />
            )}
          </button>
        ))}
      </div>

      {/* Transaction List */}
      <div className="space-y-1">
        {TRANSACTIONS.map((tx) => (
          <div 
            key={tx.id} 
            className="flex items-center justify-between py-4 border-b border-black/5 last:border-0 group cursor-pointer hover:bg-black/[0.02] -mx-6 px-6 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className={cn(
                "w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold border transition-all group-hover:scale-105",
                tx.type === 'revenue' 
                  ? "bg-white border-black/5 text-[#666666]" 
                  : tx.title === 'Elite Transport'
                    ? "bg-[#1A1A1A] border-[#1A1A1A] text-white"
                    : "bg-white border-black/5 text-[#666666]"
              )}>
                <span className={cn(
                  tx.initials.length > 2 ? "text-[10px]" : "text-xs",
                  tx.subcategory === 'Groceries' || tx.subcategory === 'Dining' ? "font-display italic" : ""
                )}>
                  {tx.initials}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#1A1A1A]">{tx.title}</h3>
                <div className="flex items-center mt-1 space-x-2">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-[#666666]">{tx.category}</span>
                  <span className="w-1 h-1 rounded-full bg-black/10" />
                  <span className="text-[11px] text-[#666666] font-display italic">{tx.subcategory}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className={cn(
                "text-sm font-bold",
                tx.type === 'revenue' ? "text-[#D4AF37]" : "text-[#1A1A1A]"
              )}>
                {tx.type === 'revenue' ? '+' : '-'}${Math.abs(tx.amount).toLocaleString()}
              </p>
              <p className="text-[10px] text-[#666666] mt-1 font-medium">{tx.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button Placeholder Space */}
      <div className="h-24" />

      {/* AI Audit Prepared Badge */}
      <div className="flex flex-col items-center space-y-4">
        <button className="w-full bg-[#D4AF37] text-white py-4 rounded-2xl font-bold tracking-[0.2em] text-xs uppercase shadow-lg shadow-[#D4AF37]/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
          Record Transaction
        </button>
        <div className="flex items-center text-[10px] text-[#666666] tracking-[0.15em] uppercase font-bold opacity-60">
          <Sparkles size={14} className="mr-2 text-[#D4AF37]" />
          <span>AI Audit Prepared</span>
        </div>
      </div>
    </div>
  );
}

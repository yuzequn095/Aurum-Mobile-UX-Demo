import React from 'react';
import { 
  LayoutGrid, 
  Wallet, 
  ReceiptText, 
  Lightbulb, 
  Plus,
  Bell,
  Calendar
} from 'lucide-react';
import { cn } from '../utils';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Layout({ children, activeTab, onTabChange }: LayoutProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: LayoutGrid },
    { id: 'portfolio', label: 'Portfolio', icon: Wallet },
    { id: 'log', label: 'Log', icon: ReceiptText },
    { id: 'insights', label: 'Insights', icon: Lightbulb },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-sans selection:bg-[#D4AF37]/20">
      {/* Header */}
      <header className="pt-12 pb-6 px-6 flex justify-between items-start sticky top-0 bg-[#FAFAFA]/80 backdrop-blur-md z-50">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-1">
            Wealth Intelligence Suite
          </p>
          <h1 className="text-3xl font-display font-medium text-[#1A1A1A]">
            {activeTab === 'home' && 'Morning, Alexander'}
            {activeTab === 'portfolio' && 'Accounts Hub'}
            {activeTab === 'log' && 'Transaction Hub'}
            {activeTab === 'insights' && 'AI Insights'}
          </h1>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center space-x-2 text-[#666666] text-[11px] mb-3 font-medium tracking-wide">
            <Calendar size={12} className="text-[#D4AF37]" />
            <span>OCT 24, 2024</span>
          </div>
          <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center relative border border-black/5 hover:scale-105 transition-transform">
            <Bell size={18} className="text-[#1A1A1A]" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#D4AF37] rounded-full border-2 border-white"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-32">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-black/5 px-6 py-4 pb-8 flex justify-between items-center z-50">
        {tabs.slice(0, 2).map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex flex-col items-center space-y-1 transition-colors",
              activeTab === tab.id ? "text-[#D4AF37]" : "text-[#666666] hover:text-[#1A1A1A]"
            )}
          >
            <tab.icon size={22} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
          </button>
        ))}

        <button className="w-14 h-14 bg-[#D4AF37] text-white rounded-full shadow-lg shadow-[#D4AF37]/30 flex items-center justify-center -mt-10 hover:scale-110 active:scale-95 transition-all">
          <Plus size={28} />
        </button>

        {tabs.slice(2).map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex flex-col items-center space-y-1 transition-colors",
              activeTab === tab.id ? "text-[#D4AF37]" : "text-[#666666] hover:text-[#1A1A1A]"
            )}
          >
            <tab.icon size={22} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

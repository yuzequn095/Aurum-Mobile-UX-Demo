export interface Transaction {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  amount: number;
  date: string;
  type: 'revenue' | 'expense';
  initials: string;
}

export interface Account {
  id: string;
  institution: string;
  name: string;
  balance: number;
  lastFour: string;
  type: 'checking' | 'savings' | 'brokerage' | 'ira' | 'crypto';
}

export interface PortfolioData {
  date: string;
  value: number;
  benchmark: number;
}

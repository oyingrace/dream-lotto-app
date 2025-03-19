'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';
import Header from '../components/header';
import { Navigation } from '../components/navigation';
import RecentTransactions from '../components/recentTransactions';

const TransactionsPage = () => {
  const router = useRouter();

  // Sample transaction data
  const transactions = [
    { type: 'Deposit', date: 'Feb 18, 2025', amount: '500.00', isPositive: true },
    { type: 'Lottery Ticket Purchase', date: 'Feb 17, 2025', amount: '200.00', isPositive: false },
    { type: 'Winning Payout', date: 'Feb 16, 2025', amount: '1000.00', isPositive: true },
    { type: 'Withdrawal', date: 'Feb 15, 2025', amount: '8000.00', isPositive: false },
    { type: 'Bonus', date: 'Feb 14, 2025', amount: '1500.00', isPositive: true },
    { type: 'Ticket Purchase', date: 'Feb 13, 2025', amount: '500.00', isPositive: false },
    { type: 'Deposit', date: 'Feb 18, 2025', amount: '500.00', isPositive: true },
    { type: 'Lottery Ticket Purchase', date: 'Feb 17, 2025', amount: '200.00', isPositive: false },
    { type: 'Winning Payout', date: 'Feb 16, 2025', amount: '1000.00', isPositive: true },
    { type: 'Withdrawal', date: 'Feb 15, 2025', amount: '8000.00', isPositive: false },
    { type: 'Bonus', date: 'Feb 14, 2025', amount: '1500.00', isPositive: true },
    { type: 'Ticket Purchase', date: 'Feb 13, 2025', amount: '500.00', isPositive: false }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-dark-bg-primary">
      <Header />

      {/* Back Button */}
      <div className="relative flex items-center p-4">
  <button 
    onClick={() => router.push('/wallet')} 
    className="text-xl text-gray-700 absolute left-4 hover:text-dream-blue dark:hover:text-dream-yellow transition"
  >
    <IoArrowBack />
  </button>
  <h1 className="text-2xl font-bold mx-auto">All Transactions</h1>
       </div>


      <div className="flex-1 overflow-y-auto pb-20 px-4">
        <RecentTransactions transactions={transactions} />
      </div>

      <div className="sticky bottom-0 w-full">
        <Navigation activePage="transactions" />
      </div>
    </div>
  );
};

export default TransactionsPage;

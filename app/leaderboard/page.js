// pages/leaderboard.js
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/header';
import { Navigation } from '../components/navigation';

// Mock data for leaderboard
const leaderboardData = [
  { id: 1, name: 'Oluwaseun A.', wins: 12, totalWinnings: 1240000, },
  { id: 2, name: 'Chioma E.', wins: 8, totalWinnings: 980000,  },
  { id: 3, name: 'Adekunle T.', wins: 7, totalWinnings: 750000,  },
  { id: 4, name: 'Ngozi O.', wins: 6, totalWinnings: 620000,  },
  { id: 5, name: 'Emeka D.', wins: 5, totalWinnings: 510000, },
  { id: 6, name: 'Tunde F.', wins: 5, totalWinnings: 480000,  },
  { id: 7, name: 'Bisi K.', wins: 4, totalWinnings: 370000, avatar: '/images/profile-pic.jpg' },
  { id: 8, name: 'Wale M.', wins: 4, totalWinnings: 320000, avatar: '/images/profile-pic.jpg' },
  { id: 9, name: 'Funmi B.', wins: 3, totalWinnings: 280000, avatar: '/images/profile-pic.jpg' },
  { id: 10, name: 'Chidi N.', wins: 3, totalWinnings: 250000, avatar: '/images/profile-pic.jpg' },
];

export default function LeaderboardPage() {
  const [filterType, setFilterType] = useState('winnings'); // Default to winnings

  // Format currency with Naira symbol
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount).replace('NGN', '₦');
  };

  // Sort leaderboard data based on filter type
  const sortedData = [...leaderboardData].sort((a, b) => {
    if (filterType === 'winnings') {
      return b.totalWinnings - a.totalWinnings;
    } else {
      return b.wins - a.wins;
    }
  });

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-bg-primary">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow p-4">
        {/* Leaderboard Title */}
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-dark-text-primary">Dream Lotto Champions</h1>
          <p className="text-gray-500 dark:text-dark-text-secondary text-sm">See who&apos;s winning big this month</p>
        </div>

        {/* Top 3 Winners */}
        <div className="flex justify-center items-end gap-8 mb-6">
          {/* 2nd place */}
          <div className="flex flex-col items-center order-1 pt-4">
            <div className="text-3xl mb-2">🥈</div>
            <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-dark-bg-secondary mb-2 flex items-center justify-center text-xl font-bold dark:text-dark-text-primary">
              {sortedData[1]?.name.charAt(0)}
            </div>
            <p className="font-semibold text-center dark:text-dark-text-primary">{sortedData[1]?.name}</p>
            <p className="text-sm text-gray-500 dark:text-dark-text-secondary text-center">{sortedData[1]?.wins} wins</p>
            <p className="font-bold text-green-600 dark:text-green-400 text-center">{formatAmount(sortedData[1]?.totalWinnings)}</p>
          </div>

          {/* 1st place */}
          <div className="flex flex-col items-center order-2 pt-0">
            <div className="text-4xl mb-2">🥇</div>
            <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-dark-bg-secondary mb-2 flex items-center justify-center text-2xl font-bold dark:text-dark-text-primary">
              {sortedData[0]?.name.charAt(0)}
            </div>
            <p className="font-semibold text-center dark:text-dark-text-primary">{sortedData[0]?.name}</p>
            <p className="text-sm text-gray-500 dark:text-dark-text-secondary text-center">{sortedData[0]?.wins} wins</p>
            <p className="font-bold text-green-600 dark:text-green-400 text-center">{formatAmount(sortedData[0]?.totalWinnings)}</p>
          </div>

          {/* 3rd place */}
          <div className="flex flex-col items-center order-3 pt-8">
            <div className="text-3xl mb-2">🥉</div>
            <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-dark-bg-secondary mb-2 flex items-center justify-center text-xl font-bold dark:text-dark-text-primary">
              {sortedData[2]?.name.charAt(0)}
            </div>
            <p className="font-semibold text-center dark:text-dark-text-primary">{sortedData[2]?.name}</p>
            <p className="text-sm text-gray-500 dark:text-dark-text-secondary text-center">{sortedData[2]?.wins} wins</p>
            <p className="font-bold text-green-600 dark:text-green-400 text-center">{formatAmount(sortedData[2]?.totalWinnings)}</p>
          </div>
        </div>

        {/* Remaining Leaderboard */}
        <div className="bg-white dark:bg-dark-bg-secondary rounded-lg overflow-hidden shadow-sm mb-16"> {/* Added mb-16 to prevent overlap with nav */}
          <div className="p-3 bg-gray-50 dark:bg-dark-bg-secondary border-b dark:border-gray-700">
            <h3 className="font-semibold dark:text-dark-text-primary">Leaderboard Rankings</h3>
          </div>
          <div className="divide-y dark:divide-gray-700">
            {sortedData.slice(3).map((user, index) => (
              <div key={user.id} className="flex items-center p-3">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-gray-500 dark:text-dark-text-secondary">
                  {index + 4}
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-bg-primary mr-3 flex items-center justify-center dark:text-dark-text-primary">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-medium dark:text-dark-text-primary">{user.name}</p>
                  <p className="text-xs text-gray-500 dark:text-dark-text-secondary">{user.wins} wins</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600 dark:text-green-400">{formatAmount(user.totalWinnings)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    
    </div>
  );
}

// File: app/rewards/page.jsx
"use client";

import { useState, useEffect } from 'react';
import Header from '../components/header';
import { Navigation } from '../components/navigation';
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";


export default function RewardsPage() {
  const [friendsReferred, setFriendsReferred] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [referralCode, setReferralCode] = useState('');

  const router = useRouter();
  
  useEffect(() => {
    // In a real app, you would fetch this data from your API
    // This is just mock data for demonstration
    setFriendsReferred(12);
    setTotalEarnings(9500);
    setReferralCode('DREAM' + Math.random().toString(36).substring(2, 8).toUpperCase());
  }, []);

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    alert('Referral code copied to clipboard!');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-dark-bg-primary">
      <Header />
      
      <main className="flex-grow pb-20"> {/* Add padding to prevent content from being hidden by the nav */}
        <section className="px-4 py-6">
          <div className="flex items-center justify-center relative mb-6">
            <button 
              onClick={() => router.push('/home')} 
              className="absolute left-0 p-2 text-gray-700 dark:text-dark-text-primary hover:text-dream-yellow transition"
              aria-label="Go back to home"
            >
              <IoArrowBack size={24} />
            </button>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-dark-text-primary">Rewards & Referrals</h1>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow p-4">
              <p className="text-sm text-gray-500 dark:text-dark-text-secondary">Friends Referred</p>
              <p className="text-3xl font-bold text-dream-blue">{friendsReferred}</p>
            </div>
            <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow p-4">
              <p className="text-sm text-gray-500 dark:text-dark-text-secondary">Total Earnings</p>
              <p className="text-3xl font-bold text-dream-yellow-dark dark:text-green-500">₦{totalEarnings}</p>
            </div>
          </div>
          
          {/* Referral Card */}
          <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow p-5 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-dark-text-primary mb-2">Your Referral Code</h2>
            <div className="flex items-center bg-gray-100 dark:bg-dark-bg-primary rounded p-3 mb-4">
              <span className="flex-grow font-mono font-medium text-gray-700 dark:text-dark-text-primary">{referralCode}</span>
              <button 
                onClick={copyReferralCode}
                className="ml-2 px-3 py-1 bg-dream-blue text-white rounded text-sm hover:bg-dream-blue-dark transition"
              >
                Copy
              </button>
            </div>
            <button className="w-full py-3 bg-dream-yellow hover:bg-dream-yellow-subtlelight text-gray-800 dark:text-gray-900 font-medium rounded-lg transition mb-2">
              Share with Friends
            </button>
            <p className="text-sm text-gray-500 dark:text-dark-text-secondary text-center">Earn 5% on each friend's purchase!</p>
          </div>
          
          {/* How It Works */}
          <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow p-5">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-dark-text-primary mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-dream-blue rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-dark-text-primary">Share Your Code</h3>
                  <p className="text-sm text-gray-600 dark:text-dark-text-secondary">Send your referral code to friends who might enjoy playing the lottery.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-dream-blue rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-dark-text-primary">Friends Sign Up</h3>
                  <p className="text-sm text-gray-600 dark:text-dark-text-secondary">When they create an account using your code, they're added to your referrals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-dream-blue rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-dark-text-primary">Earn Rewards</h3>
                  <p className="text-sm text-gray-600 dark:text-dark-text-secondary">You earn 5% commission on every lottery purchase they make.</p>
                </div>
              </div>
              
              {/* Commented section preserved as in original */}
              {/*  <div className="flex items-start">
                <div className="flex-shrink-0 bg-dream-blue rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Withdraw Anytime</h3>
                  <p className="text-sm text-gray-600">Cash out your earnings once you reach the minimum threshold of $10.</p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      
      <Navigation />
    </div>
  );
}
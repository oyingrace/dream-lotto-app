// File: app/home/page.js
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '../components/navigation';
import Header from "../components/header";
import QuickActions from '../components/quickactions'; 
import LatestResults from '../components/latestresults';
import RecentWinners from '../components/recentWinners';
import { useRouter } from 'next/navigation';
import LottoCard from '../components/LottoCard';

const LatestResultsData = [
  { title: "Premier 2-Sure", date: "Feb 16, 2025", numbers: [90, 4], winner: "Ade Johnson", amount: "550,000" },
  { title: "Direct Banker", date: "Feb 10, 2025", numbers: [16], winner: "Bola Lateef", amount: "920,000" },
];


export default function DashboardPage() {
  const router = useRouter();
  return (
    
    <div className="flex flex-col min-h-screen dark:bg-dark-bg-primary">
      <Header />

      {/* Main Content */}
      <div className="flex-grow p-4">

        <LottoCard/>
        <QuickActions />
        <RecentWinners />


        {/* Game Selection */}
<div className="mb-6">
  <div className="flex justify-between items-center mb-3">
    <h3 className="font-semibold text-gray-800 dark:text-dark-text-primary">Choose Your Dream Lotto Game</h3>
    <Link href="/games" className="text-sm text-dream-blue dark:text-dream-yellow transition-colors duration-200">View All</Link>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="border dark:border-dark-bg-secondary rounded-lg overflow-hidden bg-white dark:bg-dark-bg-primary transition-colors duration-200">
      <div className="h-24 relative">
        <Image src="/images/premier2sure.png" alt="Premier 2-sure" fill className="object-cover" />
      </div>
      <div className="p-3">
        <h4 className="font-semibold mb-1 text-gray-800 dark:text-dark-text-primary">Nap 2</h4>
        <p className="text-xs text-gray-600 dark:text-dark-text-secondary mb-2">Pick 2 numbers, If they are drawn you win ₦240 X your ticket cost</p>
        <button 
          onClick={() => router.push('/games')}
          className="w-full bg-dream-yellow hover:bg-dream-yellow-dark dark:bg-dream-yellow-subtlelight dark:hover:bg-dream-yellow text-white py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
        >
          Play Now
        </button>
      </div>
    </div>
    <div className="border dark:border-dark-bg-secondary rounded-lg overflow-hidden bg-white dark:bg-dark-bg-primary transition-colors duration-200">
      <div className="h-24 relative">
        <Image src="/images/nap3.png" alt="Nap3" fill className="object-cover" />
      </div>
      <div className="p-3">
        <h4 className="font-semibold mb-1 text-gray-800 dark:text-dark-text-primary">Nap3</h4>
        <p className="text-xs text-gray-600 dark:text-dark-text-secondary mb-2">Pick 3 numbers, and if they are drawn you win ₦2,100 X your ticket cost</p>
        <button
          onClick={() => router.push('/games')}
          className="w-full bg-dream-yellow hover:bg-dream-yellow-dark dark:bg-dream-yellow-subtlelight dark:hover:bg-dream-yellow text-white py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
        >
          Play Now
        </button>
      </div>
    </div>
  </div>
</div>

        {/* Latest Results */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Latest Results</h3>
          <Link href="/results" className="text-sm text-blue-600 dark:text-dream-yellow">View All</Link>
        </div>
        
        <LatestResults results={LatestResultsData} />
       
      </div>

      {/* Navigation */}
      <Navigation activePage="home" />
    </div>
  );
}

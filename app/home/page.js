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

const LatestResultsData = [
  { title: "Premier 2-Sure", date: "Feb 16, 2025", numbers: [90, 4], winner: "Ade Johnson", amount: "550,000" },
  { title: "Direct Banker", date: "Feb 10, 2025", numbers: [16], winner: "Bola Lateef", amount: "920,000" },
];


export default function DashboardPage() {
  const router = useRouter();
  return (
    
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow p-4">
        {/* Prize Banner */}
        <div className="rounded-lg overflow-hidden mb-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#000000] opacity-50"></div>
          <div className="relative p-4 z-10">
            <h2 className="text-white text-3xl font-bold mb-1">₦1,000,000</h2>
            <p className="text-white text-sm mb-4">Next draw in 1h 30min</p>
            <Link href="/games">
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold">
                Play Now
              </button>
            </Link>
          </div>
          <div className="absolute inset-0 -z-10">
            <Image src="/images/lotto-balls-bg.png" alt="Lotto balls" fill className="object-cover" />
          </div>
        </div>

        {/* Quick Actions */}
        <QuickActions />

        <RecentWinners />

        {/* Game Selection */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Choose Your Dream Lotto Game</h3>
            <Link href="/games" className="text-sm text-blue-600">View All</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded-lg overflow-hidden">
              <div className="h-24 relative">
                <Image src="/images/lotto-balls-colorful.jpg" alt="Premier 2-sure" fill className="object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-semibold mb-1">Premier 2-sure</h4>
                <p className="text-xs text-gray-600 mb-2">Pick 2 numbers, match both to win big!</p>
                <button 
                 onClick={() => router.push('/games')}
                className="w-full bg-yellow-500 text-white py-2 rounded-lg text-sm font-semibold">Play Now</button>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="h-24 relative">
                <Image src="/images/nap3.png" alt="Nap3" fill className="object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-semibold mb-1">Nap3</h4>
                <p className="text-xs text-gray-600 mb-2">Pick 3 numbers, match all to win big!</p>
                <button
                onClick={() => router.push('/games')}
                className="w-full bg-yellow-500 text-white py-2 rounded-lg text-sm font-semibold">Play Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Results */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Latest Results</h3>
          <Link href="/results" className="text-sm text-blue-600">View All</Link>
        </div>
        <LatestResults results={LatestResultsData} />
      </div>

      {/* Navigation */}
      <Navigation activePage="home" />
    </div>
  );
}

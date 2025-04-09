'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/header';
import { Navigation } from '../components/navigation';
import RecentGames from '../components/recentgames';

export default function GameSelectionPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const games = [
    { 
      id: "nap-2", 
      name: "Nap 2", 
      description: "Pick 2 numbers, If they are drawn you win ₦240 X your ticket cost", 
      image: "/images/premier2sure.png",
      category: "nap" 
    },
    { 
      id: "perm-2", 
      name: "Perm 2", 
      description: "Perm games are exciting but more complex so please read our guide on this", 
      image: "/images/premier2sure.png",
      category: "perm",
      hasGuide: true
    },
    { 
      id: "nap-3", 
      name: "Nap 3", 
      description: "Pick 3 numbers, and if they are drawn you win ₦2,100 X your ticket cost", 
      image: "/images/nap3.png",
      category: "nap" 
    },
    { 
      id: "perm-3", 
      name: "Perm 3", 
      description: "Perm games are exciting but more complex so please read our guide on this", 
      image: "/images/nap3.png",
      category: "perm",
      hasGuide: true
    },
    { 
      id: "nap-4", 
      name: "Nap 4", 
      description: "Pick 4 numbers and if they are drawn, you win ₦6,000 X your ticket cost", 
      image: "/images/nap4.png",
      category: "nap" 
    },
    { 
      id: "perm-4", 
      name: "Perm 4", 
      description: "Perm games are exciting but more complex so please read our guide on this", 
      image: "/images/nap4.png",
      category: "perm",
      hasGuide: true
    },
    { 
      id: "nap-5", 
      name: "Nap 5", 
      description: "Pick 5 numbers and if they are drawn, you win ₦44,000 X your ticket cost", 
      image: "/images/nap4.png",
      category: "nap" 
    },
    { 
      id: "perm-5", 
      name: "Perm 5", 
      description: "Perm games are exciting but more complex so please read our guide on this", 
      image: "/images/nap4.png",
      category: "perm",
      hasGuide: true
    },
    { 
      id: "direct-banker", 
      name: "Direct Banker", 
      description: "Pick one number and if it is drawn you win ₦960 X your single stake amount", 
      image: "/images/directbanker.png",
      category: "banker" 
    },
    { 
      id: "against", 
      name: "Against", 
      description: "Permutations of numbers against each other.(Num winnings lines) X (Stake amount Per line) X 240 = Winnings", 
      image: "/images/directbanker.png",
      category: "against",
      hasGuide: true
    },
  ];
  
  const categories = [
    { id: 'all', name: 'All Games' },
    { id: 'perm', name: 'Perm' },
    { id: 'nap', name: 'Nap' },
    { id: 'banker', name: 'Banker' },
    { id: 'against', name: 'Against' }
  ];
  
  const filteredGames = activeCategory === 'all' 
    ? games 
    : games.filter(game => game.category === activeCategory);
  
  const recentGamesData = [
    {
      name: "Premier 2-Sure",
      won: true,
      amount: "550,000",
      numbers: [90, 4],
      date: "Feb 16, 2025",
    },
    {
      name: "Direct Banker",
      won: false,
      numbers: [16],
      date: "Feb 10, 2025",
    },
  ];

  // Function to handle clicks on the guide button
  const handleGuideClick = (e) => {
    e.preventDefault();
    // Navigate to guide page
    window.location.href = '/guides/game-rules';
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-dark-bg-primary">
      <Header />
      
      <div className="flex-grow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold dark:text-dark-text-primary">Select a Game</h2>
          <Link href="/games" className="text-sm text-dream-yellow dark:text-dream-yellow-subtlelight font-medium">
            Game Guides
          </Link>
        </div>
        
        {/* Game Categories */}
        <div className="mb-4 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-dream-yellow text-black font-medium'
                    : 'bg-gray-100 dark:bg-dark-bg-secondary text-gray-700 dark:text-dark-text-secondary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Category-specific guide banner */}
        {activeCategory === 'perm' && (
          <div className="mb-4 p-3 bg-yellow-50 dark:bg-gray-800 rounded-lg border border-dream-yellow dark:border-dream-yellow-subtlelight">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-700 dark:text-dark-text-secondary">Perm games allow more number combinations and complex bets.</p>
              <Link href="/games" className="px-3 py-1 text-xs bg-dream-yellow text-black rounded-full font-medium">
                Read Perm Guide
              </Link>
            </div>
          </div>
        )}
        
        {activeCategory === 'against' && (
          <div className="mb-4 p-3 bg-yellow-50 dark:bg-gray-800 rounded-lg border border-dream-yellow dark:border-dream-yellow-subtlelight">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-700 dark:text-dark-text-secondary">Against games involve permutations of numbers playing against each other.</p>
              <Link href="/games" className="px-3 py-1 text-xs bg-dream-yellow text-black rounded-full font-medium">
                Read Against Guide
              </Link>
            </div>
          </div>
        )}
        
        {/* Games Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {filteredGames.map((game) => (
            <div key={game.id} className="block">
              <div className="border-2 border-dream-yellow dark:border-dream-yellow-subtlelight rounded-lg overflow-hidden p-2 cursor-pointer bg-white dark:bg-dark-bg-primary hover:bg-gray-50 dark:hover:bg-dark-bg-secondary transition-colors duration-200 h-full flex flex-col">
                <Link href={`/games/${game.id}`} className="block">
                  <div className="h-20 relative mx-auto rounded-md overflow-hidden mb-2 w-full">
                    <Image src={game.image} alt={game.name} fill className="object-contain rounded-md" />
                  </div>
                  <div className="p-2 flex-grow flex flex-col">
                    <h4 className="font-semibold text-gray-800 dark:text-dark-text-primary text-sm">{game.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-dark-text-secondary mt-1">{game.description}</p>
                  </div>
                </Link>
                {/* {game.hasGuide && (
                  <div className="px-2 pb-1 mt-1">
                    <Link href={`/guides/${game.category}-games`} className="text-xs text-dream-yellow dark:text-dream-yellow-subtlelight font-medium inline-block">
                      Read game guide →
                    </Link>
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state when no games in category */}
        {filteredGames.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-dark-text-secondary">No games available in this category.</p>
          </div>
        )}
        
        <RecentGames games={recentGamesData} />
      </div>
      
      <Navigation activePage="play" />
    </div>
  );
}
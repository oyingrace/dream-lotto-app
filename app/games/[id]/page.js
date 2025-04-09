'use client';

import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/header';
import BetConfirmationModal from '@/app/components/BetConfirmationModal';

export default function GameDetailPage({ params }) {
  const { id } = params;
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [betAmount, setBetAmount] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  
  useEffect(() => {
    // Fetch game data based on ID
    const fetchGame = async () => {
      try {
        // Use the game data from the GameSelectionPage
        const games = [
          { 
            id: "nap-2", 
            name: "Nap 2", 
            description: "Pick 2 numbers, If they are drawn you win ₦240 X your ticket cost", 
            image: "/images/premier2sure.png",
             
          },
          { 
            id: "perm-2", 
            name: "Perm 2", 
            description: "Perm games are exciting but more complex so please read our guide on this", 
            image: "/images/premier2sure.png",
             
          },
          { 
            id: "nap-3", 
            name: "Nap 3", 
            description: "Pick 3 numbers, and if they are drawn you win ₦2,100 X your ticket cost", 
            image: "/images/nap3.png",
             
          },
          { 
            id: "perm-3", 
            name: "Perm 3", 
            description: "Perm games are exciting but more complex so please read our guide on this", 
            image: "/images/nap3.png",
            
          },
          { 
            id: "nap-4", 
            name: "Nap 4", 
            description: "Pick 4 numbers and if they are drawn, you win ₦6,000 X your ticket cost", 
            image: "/images/nap4.png",
            
          },
          { 
            id: "perm-4", 
            name: "Perm 4", 
            description: "Perm games are exciting but more complex so please read our guide on this", 
            image: "/images/nap4.png",
            
          },
          { 
            id: "nap-5", 
            name: "Nap 5", 
            description: "Pick 5 numbers and if they are drawn, you win ₦44,000 X your ticket cost", 
            image: "/images/nap4.png",
             
          },
          { 
            id: "perm-5", 
            name: "Perm 5", 
            description: "Perm games are exciting but more complex so please read our guide on this", 
            image: "/images/nap4.png",
           
          },
          { 
            id: "direct-banker", 
            name: "Direct Banker", 
            description: "Pick one number and if it is drawn you win ₦960 X your single stake amount", 
            image: "/images/directbanker.png",
            
          },
          { 
            id: "against", 
            name: "Against", 
            description: "Permutations of numbers against each other.(Num winnings lines) X (Stake amount Per line) X 240 = Winnings", 
            image: "/images/directbanker.png",
             
          },
        ];
        
        // Find the game with the matching ID
        const foundGame = games.find(game => game.id === id);
        
        if (foundGame) {
          setGame(foundGame);
        } else {
          console.error("Game not found");
        }
      } catch (error) {
        console.error("Error fetching game:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  const maxNumbersMap = { 'Perm 2': 2,'Nap 2': 2, 'Nap 3': 3, 'Perm 3': 3, 'Nap 4': 4,'Perm 4': 4, 'Perm 5': 5, 'Direct Banker': 1, 'Against': 1 };
  const maxNumbers = maxNumbersMap[game?.name] || 5;

  const toggleNumber = (num) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num));
    } else if (selectedNumbers.length < maxNumbers) {
      setSelectedNumbers([...selectedNumbers, num]);
    }
  };

  const handleAmountSelect = (amount) => {
    setBetAmount(amount);
  };

  const handleCustomAmount = (e) => {
    const amount = parseInt(e.target.value, 10);
    if (!isNaN(amount)) {
      setBetAmount(amount);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center dark:bg-dark-bg-primary">
        <p className="text-xl dark:text-dark-text-primary">Loading game...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen dark:bg-dark-bg-primary">
      <Header />
      
      <div className="flex-grow overflow-y-auto pb-16">
        {/* Header with Back Button */}
        <div className="flex items-center p-4 border-b dark:border-dark-bg-secondary">
          <Link href="/games">
            <div className="cursor-pointer">
              <IoArrowBack className="text-2xl dark:text-dark-text-primary" />
            </div>
          </Link>
        </div>
  
        {/* Game Content */}
        <div className="p-4 dark:bg-dark-bg-primary">
          {/* Game Image */}
          <div className="mb-4 flex justify-center">
            <Image 
              src={game.image}
              alt={game.name}
              width={128}
              height={128} 
              className="object-contain" 
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-4 dark:text-dark-text-primary">{game.name}</h2>
          <p className="text-sm text-gray-600 dark:text-dark-text-secondary text-center mb-6">{game.description}</p>
  
          {/* Number Selection - Reduced size of circles */}
          <div className="bg-white dark:bg-dark-bg-secondary rounded-lg p-4 mb-6 shadow dark:shadow-none">
            <h3 className="font-semibold mb-3 dark:text-dark-text-primary">Select Your Numbers</h3>
            <div className="grid grid-cols-6 gap-1 max-h-48 overflow-y-auto">
              {Array.from({ length: 90 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  className={`w-full aspect-square rounded-full border flex items-center justify-center text-sm ${
                    selectedNumbers.includes(num)
                      ? "bg-dream-blue text-white border-dream-blue dark:bg-dream-blue-dark dark:border-dream-blue-dark"
                      : "border-gray-300 dark:border-dream-yellow hover:bg-blue-100 dark:hover:bg-dark-bg-primary hover:border-blue-500 dark:text-dark-text-primary"
                  }`}
                  onClick={() => toggleNumber(num)}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
  
          {/* Selected Numbers */}
          {selectedNumbers.length > 0 && (
            <div className="bg-white dark:bg-dark-bg-secondary rounded-lg p-4 mb-6 shadow dark:shadow-none">
              <h3 className="font-semibold mb-3 dark:text-dark-text-primary">Selected Numbers</h3>
              <div className="flex gap-2 flex-wrap">
                {selectedNumbers.map((num) => (
                  <span key={num} className="bg-dream-blue dark:bg-dream-blue-dark text-white px-3 py-1 rounded-full">{num}</span>
                ))}
              </div>
            </div>
          )}
  
          {/* Betting Options */}
          <div className="bg-white dark:bg-dark-bg-secondary rounded-lg p-4 mb-6 shadow dark:shadow-none">
            <h3 className="font-semibold mb-3 dark:text-dark-text-primary">Betting Amount</h3>
            <div className="flex justify-between gap-2 mb-4">
              {[100, 200, 500, 1000].map((amount) => (
                <button 
                  key={amount} 
                  className={`flex-1 py-2 border rounded text-center ${
                    betAmount === amount 
                      ? "bg-dream-blue text-white border-dream-blue dark:bg-dream-blue-dark dark:border-dream-blue-dark"
                      : "border-gray-300 dark:border-dream-yellow dark:text-dark-text-primary dark:hover:bg-dark-bg-primary"
                  }`}
                  onClick={() => handleAmountSelect(amount)}
                >
                  ₦{amount}
                </button>
              ))}
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-600 dark:text-dark-text-secondary mb-1">Custom Amount</label>
              <input 
                type="text" 
                placeholder="Enter amount" 
                className="w-full p-2 border border-gray-300 dark:border-dark-bg-primary dark:bg-dark-bg-primary dark:text-dark-text-primary rounded" 
                onChange={handleCustomAmount}
              />
            </div>
          </div>
  
          {/* Game Rules - Using mb-2 instead of mb-6 to reduce space */}
          <div className="bg-white dark:bg-dark-bg-secondary rounded-lg p-4 mb-2 shadow dark:shadow-none">
            <h3 className="font-semibold mb-3 dark:text-dark-text-primary">Game Rules</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-dark-text-secondary">
              <li>Bets cannot be cancelled once placed.</li>
              <li>You must select exactly {maxNumbers} numbers.</li>
              <li>Minimum bet amount is ₦100.</li>
              <li>Maximum bet amount is ₦1,000,000.</li>
            </ul>
          </div> 
        </div>
      </div>
  
      {/* Footer with Place Bet Button */}
      <div className="p-4 border-t dark:border-dark-bg-secondary bg-white dark:bg-dark-bg-primary sticky bottom-0">
  <button 
    className={`w-full py-3 rounded-lg font-semibold text-lg text-white ${
      selectedNumbers.length === maxNumbers 
        ? "bg-dream-yellow dark:bg-dream-yellow-subtlelight"
        : "bg-gray-300 dark:bg-gray-700"
    }`}
    disabled={selectedNumbers.length !== maxNumbers}
    onClick={() => setShowConfirmModal(true)}
  >
    Place Bet
  </button>
</div>

      
      {/* Bet Confirmation Modal */}
      <BetConfirmationModal 
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={() => {
          setShowConfirmModal(false);
        }}
      />
    </div>
  );
}
// File: app/games/[gameId]/page.js
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '../../components/navigation';

export default function GameDetailPage({ params }) {
  // This would be fetched from an API in a real app
  const gameData = {
    'premier-2-sure': {
      name: 'Premier 2-Sure',
      description: 'Pick 2 numbers between 1-90, win when both numbers are drawn',
      jackpot: 'N500,000',
      odds: '1 in 4,005',
      price: 'N200',
      balls: [
        { number: 13, color: 'bg-gray-200 text-black' },
        { number: 38, color: 'bg-yellow-400 text-black' }
      ]
    },
    'nap-3': {
      name: 'Nap 3',
      description: 'Pick 3 numbers between 1-90, win when all three are drawn',
      jackpot: 'N1,000,000',
      odds: '1 in 11,748',
      price: 'N500',
      balls: [
        { number: 1, color: 'bg-blue-500 text-white' },
        { number: 17, color: 'bg-purple-500 text-white' },
        { number: 41, color: 'bg-blue-300 text-white' }
      ]
    },
    'nap-4': {
      name: 'Nap 4',
      description: 'Pick 4 numbers between 1-90, win big when all numbers match',
      jackpot: 'N2,000,000',
      odds: '1 in 87,380',
      price: 'N1,000',
      balls: [
        { number: 3, color: 'bg-green-500 text-white' },
        { number: 7, color: 'bg-blue-500 text-white' },
        { number: 9, color: 'bg-red-500 text-white' },
        { number: 8, color: 'bg-yellow-500 text-white' }
      ]
    },
    'direct-banker': {
      name: 'Direct Banker',
      description: 'Pick 1 number between 1-90, place a high bet to win big',
      jackpot: 'N200,000',
      odds: '1 in 90',
      price: 'N100+',
      balls: [
        { number: 3, color: 'bg-gray-200 text-black' }
      ]
    }
  };

  const game = gameData[params.gameId] || gameData['premier-2-sure'];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="flex items-center">
          <Link href="/games" className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </Link>
          <h1 className="text-xl font-bold">{game.name}</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow p-4">
        {/* Game Ball Examples */}
        <div className="flex justify-center gap-2 mb-6 py-4">
          {game.balls.map((ball, index) => (
            <div 
              key={index} 
              className={`w-16 h-16 rounded-full ${ball.color} flex items-center justify-center text-2xl font-bold`}
            >
              {ball.number}
            </div>
          ))}
        </div>

        {/* Game Info */}
        <div className="bg-white rounded-lg p-4 mb-6 shadow">
          <p className="text-gray-700 mb-4">{game.description}</p>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-gray-500 text-sm">Jackpot</div>
              <div className="font-bold text-green-600">{game.jackpot}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-500 text-sm">Odds</div>
              <div className="font-bold">{game.odds}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-500 text-sm">Price</div>
              <div className="font-bold">{game.price}</div>
            </div>
          </div>
        </div>

        {/* Number Selection */}
        <div className="bg-white rounded-lg p-4 mb-6 shadow">
          <h3 className="font-semibold mb-3">Select Your Numbers</h3>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <button 
                key={num} 
                className="w-full aspect-square rounded-full border border-gray-300 flex items-center justify-center text-lg hover:bg-blue-100 hover:border-blue-500"
              >
                {num}
              </button>
            ))}
          </div>
          <div className="mt-2 text-right">
            <button className="text-blue-600 text-sm">See more numbers</button>
          </div>
        </div>

        {/* Betting Options */}
        <div className="bg-white rounded-lg p-4 mb-6 shadow">
          <h3 className="font-semibold mb-3">Betting Amount</h3>
          <div className="flex justify-between gap-2 mb-4">
            <button className="flex-1 py-2 border border-gray-300 rounded text-center">N100</button>
            <button className="flex-1 py-2 border border-gray-300 rounded text-center">N200</button>
            <button className="flex-1 py-2 border border-gray-300 rounded text-center">N500</button>
            <button className="flex-1 py-2 border border-gray-300 rounded text-center">N1000</button>
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Custom Amount</label>
            <input 
              type="number" 
              placeholder="Enter amount" 
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Play Button */}
        <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold text-lg mb-4">
          Place Bet
        </button>
      </div>

      {/* Navigation */}
      <Navigation activePage="play" />
    </div>
  );
}
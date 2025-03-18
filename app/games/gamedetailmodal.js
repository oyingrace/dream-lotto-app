import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';

export default function GameDetailModal({ game, onClose }) {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const maxNumbersMap = { 'Premier 2-Sure': 2, 'Nap 3': 3, 'Nap 4': 4, 'Direct Banker': 1 };
  const maxNumbers = maxNumbersMap[game.name] || 4;

  const toggleNumber = (num) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num));
    } else if (selectedNumbers.length < maxNumbers) {
      setSelectedNumbers([...selectedNumbers, num]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md h-[85vh] flex flex-col overflow-hidden">
        {/* Header with Close Button */}
        <div className="flex items-center justify-between p-4 border-b">
          <button onClick={onClose}>
            <IoArrowBack className="text-2xl" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-4 pb-16">
          {/* Game Image */}
          <div className="mb-4 flex justify-center">
            <Image src={game.image} alt={game.name} className="w-32 h-32 object-contain" />
          </div>
          <h2 className="text-xl font-bold text-center mb-4">{game.name}</h2>
          <p className="text-sm text-gray-600 text-center mb-6">{game.description}</p>

          {/* Number Selection */}
          <div className="bg-white rounded-lg p-4 mb-6 shadow">
            <h3 className="font-semibold mb-3">Select Your Numbers</h3>
            <div className="grid grid-cols-5 gap-2 max-h-48 overflow-y-auto">
              {Array.from({ length: 100 }, (_, i) => i + 0).map((num) => (
                <button
                  key={num}
                  className={`w-full aspect-square rounded-full border flex items-center justify-center text-lg ${
                    selectedNumbers.includes(num)
                      ? "bg-blue-500 text-white border-blue-500"
                      : "border-gray-300 hover:bg-blue-100 hover:border-blue-500"
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
            <div className="bg-white rounded-lg p-4 mb-6 shadow">
              <h3 className="font-semibold mb-3">Selected Numbers</h3>
              <div className="flex gap-2 flex-wrap">
                {selectedNumbers.map((num) => (
                  <span key={num} className="bg-blue-500 text-white px-3 py-1 rounded-full">{num}</span>
                ))}
              </div>
            </div>
          )}

          {/* Betting Options */}
          <div className="bg-white rounded-lg p-4 mb-6 shadow">
            <h3 className="font-semibold mb-3">Betting Amount</h3>
            <div className="flex justify-between gap-2 mb-4">
              {[100, 200, 500, 1000].map((amount) => (
                <button key={amount} className="flex-1 py-2 border border-gray-300 rounded text-center">
                  ₦{amount}
                </button>
              ))}
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">Custom Amount</label>
              <input type="text" placeholder="Enter amount" className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </div>

          {/* Game Rules */}
          <div className="bg-white rounded-lg p-4 mb-6 shadow">
            <h3 className="font-semibold mb-3">Game Rules</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Bets cannot be cancelled once placed.</li>
              <li>You must select exactly {maxNumbers} numbers.</li>
              <li>Minimum bet amount is ₦100.</li>
              <li>Maximum bet amount is ₦6,000.</li>
            </ul>
          </div>
        </div>

        {/* Footer with Place Bet Button */}
        <div className="p-4 border-t bg-white sticky bottom-0">
        <Link href="/home">
          <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold text-lg">
            Place Bet
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

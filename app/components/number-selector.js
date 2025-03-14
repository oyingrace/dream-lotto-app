// File: app/components/number-selector.js
'use client';
import { useState } from 'react';

export function NumberSelector({ maxSelections, range = 90 }) {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const toggleNumber = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(num => num !== number));
    } else {
      if (selectedNumbers.length < maxSelections) {
        setSelectedNumbers([...selectedNumbers, number]);
      }
    }
  };

  const isSelected = (number) => selectedNumbers.includes(number);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Select {maxSelections} Numbers</h3>
        <span className="text-sm text-gray-500">
          {selectedNumbers.length}/{maxSelections} selected
        </span>
      </div>
      
      <div className="grid grid-cols-5 gap-2 mb-4">
        {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => toggleNumber(num)}
            className={`w-full aspect-square rounded-full flex items-center justify-center text-lg ${
              isSelected(num)
                ? "bg-blue-500 text-white"
                : "border border-gray-300 hover:bg-blue-100"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
      
      <div className="mb-2">
        <button className="text-blue-600 text-sm">
          Show more numbers (31-90)
        </button>
      </div>
      
      <div className="mt-4">
        <button 
          className="px-4 py-2 bg-gray-200 rounded-lg text-sm mr-2"
          onClick={() => setSelectedNumbers([])}
        >
          Clear All
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm">
          Quick Pick
        </button>
      </div>
    </div>
  );
}
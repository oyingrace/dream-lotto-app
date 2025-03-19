"use client";

export default function LatestResults({ results }) {
  return (
    <div className="mb-16">
      {results.map((result, index) => (
        <div key={index} className="border dark:border-dark-bg-secondary rounded-lg p-4 mb-3 bg-white dark:bg-dark-bg-secondary transition-colors duration-200">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-800 dark:text-dark-text-primary">{result.title}</span>
            <span className="text-sm text-gray-500 dark:text-dark-text-secondary">{result.date}</span>
          </div>
          <div className="flex gap-2 mb-2">
            {result.numbers.map((num, idx) => (
              <div 
                key={idx} 
                className="w-8 h-8 rounded-full bg-dream-blue dark:bg-dream-blue-light text-white flex items-center justify-center text-sm font-bold transition-colors duration-200"
              >
                {num}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-green-500 dark:text-green-400">Winner</div>
              <div className="font-medium text-gray-800 dark:text-dark-text-primary">{result.winner}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 dark:text-dark-text-secondary">Amount</div>
              <div className="font-medium text-gray-800 dark:text-dark-text-primary">₦{result.amount}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

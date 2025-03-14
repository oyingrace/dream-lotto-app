"use client";

export default function LatestResults({ results }) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-3">Latest Results</h3>

      {results.map((result, index) => (
        <div key={index} className="border rounded-lg p-4 mb-3 bg-white">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">{result.title}</span>
            <span className="text-sm text-gray-500">{result.date}</span>
          </div>
          <div className="flex gap-2 mb-2">
            {result.numbers.map((num, idx) => (
              <div key={idx} className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                {num}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-green-500">Winner</div>
              <div className="font-medium">{result.winner}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Amount</div>
              <div className="font-medium">₦{result.amount}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

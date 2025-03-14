"use client";

export default function RecentGames({ games }) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-3">Recent Games</h3>

      {games.map((game, index) => (
        <div key={index} className="border rounded-lg p-4 mb-3 bg-white">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">{game.name}</span>
            <span className={`font-semibold ${game.won ? "text-green-500" : "text-red-500"}`}>
              {game.won ? `Won ₦${game.amount}` : "No Win"}
            </span>
          </div>
          <div className="flex gap-2 mb-2">
            {game.numbers.map((num, idx) => (
              <div key={idx} className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                {num}
              </div>
            ))}
          </div>
          <div className="text-sm text-gray-500">Played on {game.date}</div>
        </div>
      ))}
    </div>
  );
}

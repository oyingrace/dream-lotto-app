"use client";

export default function RecentGames({ games }) {
  return (
    <div className="mb-16">
      <h3 className="font-semibold mb-3 dark:text-dark-text-primary">Recent Games</h3>

      {games.map((game, index) => (
        <div key={index} className="border rounded-lg p-4 mb-3 bg-white dark:bg-dark-bg-secondary dark:border-dark-bg-secondary">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium dark:text-dark-text-primary">{game.name}</span>
            <span className={`font-semibold ${game.won ? "text-green-500" : "text-red-500"}`}>
              {game.won ? `Won ₦${game.amount}` : "No Win"}
            </span>
          </div>
          <div className="flex gap-2 mb-2">
            {game.numbers.map((num, idx) => (
              <div key={idx} className="w-8 h-8 rounded-full bg-blue-500 dark:bg-dream-blue-dark text-white flex items-center justify-center text-sm font-bold">
                {num}
              </div>
            ))}
          </div>
          <div className="text-sm text-gray-500 dark:text-dark-text-secondary">Played on {game.date}</div>
        </div>
      ))}
    </div>
  );
}

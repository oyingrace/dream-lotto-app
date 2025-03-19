// File: app/games/page.js
"use client";
import { useState } from "react";
import Image from "next/image";
import { Navigation } from "../components/navigation";
import Header from "../components/header";
import GameDetailModal from "./gamedetailmodal";
import RecentGames from "../components/recentgames";


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

const games = [
  { id: "premier-2-sure", name: "Premier 2-Sure", description: "Pick 2 numbers, match both to win big!", image: "/images/premier2sure.png" },
  { id: "nap-3", name: "Nap 3", description: "Pick 3 numbers, match all to win big!", image: "/images/nap3.png" },
  { id: "nap-4", name: "Nap 4", description: "Pick 4 numbers for higher stakes!", image: "/images/nap4.png" },
  { id: "direct-banker", name: "Direct Banker", description: "Pick one number, bet high, win big!", image: "/images/directbanker.png" },
];

export default function GameSelectionPage() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="flex flex-col min-h-screen dark:bg-dark-bg-primary">
      <Header />

      <div className="flex-grow p-4">
        <h2 className="text-xl font-bold mb-4 text-center">Select a Game</h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
  {games.map((game) => (
    <div
      key={game.id}
      className="border-2 border-dream-yellow dark:border-dream-yellow-subtlelight rounded-lg overflow-hidden p-2 cursor-pointer bg-white dark:bg-dark-bg-primary hover:bg-gray-50 dark:hover:bg-dark-bg-secondary transition-colors duration-200"
      onClick={() => setSelectedGame(game)}
    >
      <div className="h-24 relative mx-auto rounded-md overflow-hidden">
        <Image src={game.image} alt={game.name} fill className="object-contain rounded-md" />
      </div>
      <div className="p-3">
        <h4 className="font-semibold mb-1 text-gray-800 dark:text-dark-text-primary">{game.name}</h4>
        <p className="text-xs text-gray-600 dark:text-dark-text-secondary mb-2">{game.description}</p>
      </div>
    </div>
  ))}
</div>

        <RecentGames games={recentGamesData} />
      </div>

      {/* Show Modal if a Game is Selected */}
      {selectedGame && (
        <GameDetailModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}

      <Navigation activePage="play" />
    </div>
  );
}

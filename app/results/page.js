"use client";

import React, { useState } from 'react';
import LatestResults from "../components/latestresults";
import { Navigation } from '../components/navigation';
import Header from '../components/header';
import { FaChevronDown } from 'react-icons/fa';

const LatestResultsData = [
  {
     id: 1,
     title: "Nap 4",
     type: "Nap 4", 
     date: "Feb 20,2025", 
     numbers: [54, 6, 72, 40], 
     winner: "Ade Johnson", 
     amount: "700,000" 
    },
  { 
    id: 2, 
    title: "Premier 2 Sure",
    type: "Premier 2 Sure", 
    date: "Feb 19,2025", 
    numbers: [7, 89], 
    winner: "Usman Aliyu", 
    amount: "900,000" 
  },
  { 
    id: 3, 
    title: "Direct Banker",
    type: "Direct Banker", 
    date: "Feb 18,2025", 
    numbers: [12], 
    winner: "John Chike", 
    amount: "400,000" 
  },
  { 
    id: 4, 
    title: "Nap 3",
    type: "Nap 3", 
    date: "Feb 17,2025", 
    numbers: [39, 9, 60], 
    winner: "Amao John", 
    amount: "360,000" 
  },
  { 
    id: 5, 
    title: "Nap 4",
    type: "Nap 4", 
    date: "Feb 20,2025", 
    numbers: [54, 6, 72, 40], 
    winner: "Ade Johnson", 
    amount: "700,000" 
  },
  { 
    id: 6, 
    title: "Premier 2 Sure",
    type: "Premier 2 Sure", 
    date: "Feb 19,2025", 
    numbers: [7, 89], 
    winner: "Usman Aliyu", 
    amount: "900,000" 
  },
];

const ResultsPage = () => {
  const [selectedGame, setSelectedGame] = useState("All Games");

  const filteredResults = selectedGame === "All Games"
    ? LatestResultsData
    : LatestResultsData.filter(game => game.type === selectedGame);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-dark-bg-primary">
      {/* Header */}
      <Header />

      {/* Page Title */}
      <div className="flex justify-center px-4 py-3">
        <h1 className="text-xl font-bold">Latest Results</h1>
      </div>

     
      {/* Filters */}
<div className="flex justify-between p-4">
  <div className="relative w-1/2 mr-2">
    <select
      className="w-full bg-gray-100 dark:bg-dark-bg-secondary dark:text-dark-text-primary rounded-md px-4 py-2 appearance-none"
      value={selectedGame}
      onChange={(e) => setSelectedGame(e.target.value)}
    >
      <option>All Games</option>
      <option>Nap 3</option>
      <option>Nap 4</option>
      <option>Direct Banker</option>
      <option>Premier 2 Sure</option>
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <FaChevronDown className="text-gray-400 dark:text-dark-text-secondary text-xs" />
    </div>
  </div>
  <div className="relative w-1/2 ml-2">
    <select className="w-full bg-gray-100 dark:bg-dark-bg-secondary dark:text-dark-text-primary rounded-md px-4 py-2 appearance-none">
      <option>Feb</option>
      <option>Jan</option>
      <option>Mar</option>
      <option>Apr</option>
      <option>May</option>
      <option>Jun</option>
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <FaChevronDown className="text-gray-400 dark:text-dark-text-secondary text-xs" />
    </div>
  </div>
</div>

      {/* Results */}
      <div className="flex-1 p-4">
        <LatestResults results={filteredResults} />
      </div>

      {/* Navigation */}
      <Navigation activePage="results" />
    </div>
  );
};

export default ResultsPage;

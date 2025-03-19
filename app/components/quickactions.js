"use client";

import Link from "next/link";
import { FaBolt, FaTrophy, FaGift } from "react-icons/fa6";
import { FaMedal } from 'react-icons/fa';

const quickActions = [
  { icon: FaBolt, label: "Quick Play", href: "/games" },
  { icon: FaMedal, label: "LeaderBoard", href: "/leaderboard" },
  { icon: FaTrophy, label: "Results", href: "/results" },
  { icon: FaGift, label: "Rewards", href: "/rewards" },
];

const QuickActions = () => {
  return (
    <div className="grid grid-cols-4 gap-2 mb-6">
      {quickActions.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="bg-gray-100 dark:bg-dark-bg-primary p-3 rounded-lg flex flex-col items-center transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-opacity-80"
        >
          <div className="w-12 h-12 flex items-center justify-center mb-1 bg-yellow-500 bg-opacity-10 dark:bg-dream-yellow-dark dark:bg-opacity-20 rounded-lg">
            <item.icon size={20} className="text-dream-yellow dark:text-dream-yellow-subtlelight" />
          </div>
          <span className="text-xs text-gray-800 dark:text-dark-text-primary">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default QuickActions;
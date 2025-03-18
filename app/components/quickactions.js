"use client";

import Link from "next/link";
import { FaBolt, FaHashtag, FaTrophy, FaGift } from "react-icons/fa6";
import { FaMedal } from 'react-icons/fa';

const quickActions = [
  { icon: FaBolt, label: "Quick Play", href: "/games" },
  { icon: FaMedal, label: "LeaderBoard", href: "/leaderboard" },
  { icon: FaTrophy, label: "Results", href: "/results" },
  { icon: FaGift, label: "Rewards", href: "/games" },
];

const QuickActions = () => {
  return (
    <div className="grid grid-cols-4 gap-2 mb-6">
      {quickActions.map((item, index) => (
        <Link
          key={index}
          /* href={`/${item.label.toLowerCase().replace(" ", "-")}` */
          href={item.href}
          className="bg-gray-100 p-3 rounded-lg flex flex-col items-center"
        >
          <div className="w-12 h-12 flex items-center justify-center mb-1 bg-yellow-500 bg-opacity-10 rounded-lg">
            <item.icon size={20} className="text-yellow-500" />
          </div>
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default QuickActions;

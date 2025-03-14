// File: app/components/navigation.js
import Link from 'next/link';
import { FaHome, FaPlayCircle, FaRegChartBar, FaWallet, FaUser } from 'react-icons/fa';

export function Navigation({ activePage }) {
  const navItems = [
    { name: "Home", href: "/home", icon: <FaHome size={20} /> },
    { name: "Play", href: "/games", icon: <FaPlayCircle size={20} /> },
    { name: "Results", href: "/games", icon: <FaRegChartBar size={20} /> },
    { name: "Wallet", href: "/games", icon: <FaWallet size={20} /> },
    { name: "Profile", href: "/games", icon: <FaUser size={20} /> }
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-2 shadow-lg">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`flex flex-col items-center p-2 ${
            activePage === item.name.toLowerCase() ? "text-yellow-500" : "text-gray-500"
          }`}
        >
          {item.icon}
          <span className="text-xs mt-1">{item.name}</span>
        </Link>
      ))}
    </div>
  );
}

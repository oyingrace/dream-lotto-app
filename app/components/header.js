"use client";

import Image from "next/image";
import { FiBell } from "react-icons/fi"; // Feather Icons
import { FaWallet } from "react-icons/fa6"; // FontAwesome6 Wallet Icon

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <Image 
          src="/images/dream-lotto-logo.png" 
          alt="Dream Lotto" 
          width={50} 
          height={40} 
        />
      </div>
      <div className="flex items-center gap-4">
        {/* Wallet Balance */}
        <div className="flex items-center bg-gray-200 rounded-full px-3 py-2">
          <FaWallet size={18} className="text-yellow-500" />
          <span className="ml-2 text-black font-semibold">₦2,500.00</span>
        </div>
        {/* Notifications */}
        <button>
          <FiBell size={24} className="text-gray-700" />
        </button>
      </div>
    </header>
  );
};

export default Header;

"use client";

// Import these at the top of your file
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaWallet, FaHeadset } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { useRouter } from "next/navigation";

// In your component
const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const hasUnreadNotifications = true; 
  
  // Check if we're on the wallet page
  const isWalletPage = pathname === '/wallet';
  const isResultsPage = pathname === '/results';

  const openLiveChat = () => {
    // Implement  live chat functionality here
    // This could be opening a chat modal or redirecting to a support page
    router.push('/support');
    // Or if using a chat widget:
    // window.openChatWidget();
  };

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
        {/* Wallet Balance - only show when NOT on wallet page */}
        {!isWalletPage && !isResultsPage &&(
          <div className="flex items-center bg-gray-200 rounded-full px-3 py-2">
            <FaWallet size={18} className="text-yellow-500" />
            <span className="ml-2 text-black font-semibold">₦2,500.00</span>
          </div>
        )}

        {/* Live Support */}
        <button
          /* onClick={openLiveChat} */
          className="relative text-dream-blue"
          aria-label="Live Support"
        >
          <FaHeadset size={24} />
        </button>

        {/* Notifications */}
        <button
          onClick={() => router.push('/notifications')}
          className="relative"
        >
          <FiBell size={24} className="text-gray-700" />
          {hasUnreadNotifications && (
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
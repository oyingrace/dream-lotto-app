// File: app/page.js
import Image from 'next/image';
import Link from 'next/link';
import { IoTicketOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center px-4 py-12 h-screen bg-white dark:bg-dark-bg-primary">
      <div className="flex flex-col items-center mb-16 mt-8">
        <div className="relative w-40 h-40">
          <Image 
            src="/images/dream-lotto-logo.png" 
            alt="Dream Lotto Logo" 
            fill 
            className="object-contain"
          />
        </div>
        <h1 className="mt-6 text-center">
          <span className="text-blue-600 dark:text-dream-blue-light font-bold text-2xl">Making millionaires, </span>
          <span className="text-yellow-500 dark:text-dream-yellow-light font-bold text-2xl">one</span>
          <br />
          <span className="text-blue-600 dark:text-dream-blue-light font-bold text-2xl">dream at a </span>
          <span className="text-green-500 dark:text-green-400 font-bold text-2xl">time</span>
        </h1>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image 
            src="/images/profile-pic.jpg" 
            alt="Profile" 
            width={48} 
            height={48} 
          />
        </div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-dark-text-primary">Welcome, Ahmed!</h2>
      </div>

      <div className="w-full max-w-xs space-y-4">
        <Link href="/auth/signin" className="btn-primary dark:bg-dream-blue dark:hover:bg-dream-blue-dark dark:text-white flex items-center justify-center gap-2 py-3 px-6 rounded-lg w-full font-medium transition-colors">
          <IoTicketOutline size={24} />
          Play Now
        </Link>
        
        <Link href="/home" className="btn-secondary dark:bg-dark-bg-secondary dark:hover:bg-gray-700 dark:text-dark-text-primary dark:border-gray-700 flex items-center justify-center gap-2 py-3 px-6 rounded-lg w-full font-medium transition-colors">
          <IoHelpCircleOutline size={24} />
          How to Play
        </Link>
      </div>
    </div>
  );
}
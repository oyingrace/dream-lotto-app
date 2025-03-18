// File: app/page.js
import Image from 'next/image';
import Link from 'next/link';
import { IoTicketOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center px-4 py-12 h-screen">
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
          <span className="text-blue-600 font-bold text-2xl">Making millionaires, </span>
          <span className="text-yellow-500 font-bold text-2xl">one</span>
          <br />
          <span className="text-blue-600 font-bold text-2xl">dream at a </span>
          <span className="text-green-500 font-bold text-2xl">time</span>
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
        <h2 className="text-xl font-bold">Welcome, Ahmed!</h2>
      </div>

      <div className="w-full max-w-xs space-y-4">
  <Link href="/auth/signin" className="btn-primary">
    <IoTicketOutline size={24} />
    Play Now
  </Link>
  
  <Link href="/home" className="btn-secondary">
    <IoHelpCircleOutline size={24} />
    How to Play
  </Link>
</div>
    </div>
  );
}
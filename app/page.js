// File: app/page.js
import Image from 'next/image';
import Link from 'next/link';

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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Play Now
        </Link>
        
        <Link href="/home" className="btn-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          How to Play
        </Link>
      </div>
    </div>
  );
}
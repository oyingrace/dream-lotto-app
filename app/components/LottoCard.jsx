import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const LottoCard = ({ 
  initialGameIndex = 0,
  images = [
    "/images/lotto-balls-bg.png",
    "/images/lotto-balls-bg2.png",
    "/images/lotto-balls-bg3.png",
  ],
}) => {
  // Game rotation configuration
  const games = [
    { title: "Premier MK - 12:30", id: "premier-mk" },
    { title: "Nap 2 - 14:30", id: "nap-2" },
    { title: "Nap 3 - 16:30", id: "nap-3" },
    { title: "Perm 3 - 18:30", id: "perm-3" },
    { title: "Direct Banker - 20:30", id: "direct-banker" }
  ];

  const [currentGameIndex, setCurrentGameIndex] = useState(initialGameIndex);
  const [timeRemaining, setTimeRemaining] = useState({ hours: 2, minutes: 0, seconds: 0 });
  const [countdownEnd, setCountdownEnd] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slidesRef = useRef(null);
  const interval = 3000; // 3 seconds per slide
  
  // Set initial countdown end time
  useEffect(() => {
    startNewCountdown();
  }, []);
  
  // Function to start a new 2-hour countdown
  const startNewCountdown = () => {
    const now = new Date();
    const end = new Date(now.getTime() + 2 * 60 * 60 * 1000); // 2 hours from now
    setCountdownEnd(end);
    
    // For demo/testing - use shorter time (10 seconds)
    /*  const end = new Date(now.getTime() + 10 * 1000);
     setCountdownEnd(end); */
  };
  
  // Move to next game
  const rotateToNextGame = () => {
    setCurrentGameIndex((prevIndex) => (prevIndex + 1) % games.length);
    startNewCountdown();
  };

  // Handle countdown timer
  useEffect(() => {
    if (!countdownEnd) return;
    
    const updateTimer = () => {
      const now = new Date();
      const diff = Math.max(0, countdownEnd - now) / 1000; // difference in seconds
      
      if (diff <= 0) {
        setTimeRemaining({ hours: 0, minutes: 0, seconds: 0 });
        rotateToNextGame();
        return;
      }
      
      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = Math.floor(diff % 60);
      
      setTimeRemaining({ hours, minutes, seconds });
    };
    
    // Initial update
    updateTimer();
    
    // Set interval for updates
    const timerInterval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(timerInterval);
  }, [countdownEnd]);

  // Handle image slider (disabled by default)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length]);

  // Format time with leading zeros
  const formatTime = (value) => {
    return value.toString().padStart(2, '0');
  };

  // Current game data
  const currentGame = games[currentGameIndex];

  return (
    <div className="rounded-lg overflow-hidden mb-4 relative">
      {/* Content overlay */}
      <div className="relative p-4 z-10">
        <h2 className="text-white text-2xl font-bold mb-1">{currentGame.title}</h2>
        <p className="text-white text-sm mb-4">
          Closes in {formatTime(timeRemaining.hours)}:{formatTime(timeRemaining.minutes)}:{formatTime(timeRemaining.seconds)}
        </p>
        <Link href="/games">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold">
            Play Now
          </button>
        </Link>
      </div>

      {/* Static background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src={images[0]} 
          alt="Lotto background" 
          fill
          className="object-cover"
        />
      </div>

      {/* Uncomment the following and comment out the above to re-enable image slider */}
      {/* 
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          ref={slidesRef}
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ 
            width: `${images.length * 100}%`, 
            transform: `translateX(-${currentSlide * (100 / images.length)}%)` 
          }}
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative h-full"
              style={{ width: `${100 / images.length}%` }}
            >
              <Image 
                src={image} 
                alt={`Lotto slide ${index + 1}`} 
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? "bg-yellow-500" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      */}
    </div>
  );
};

export default LottoCard;
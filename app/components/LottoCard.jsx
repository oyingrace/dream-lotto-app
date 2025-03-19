import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const LottoCard = ({ 
  prize = "₦1,000,000", 
  timeRemaining = "1h 30min",
  images = [
    "/images/lotto-balls-bg.png",
    "/images/lotto-balls-bg2.png",
    "/images/lotto-balls-bg3.png",
  ]
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef(null);
  const interval = 1500; // 1 second per slide

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <div className="rounded-lg overflow-hidden mb-4 relative">
      {/* Content overlay */}
      <div className="relative p-4 z-10">
        <h2 className="text-white text-3xl font-bold mb-1">{prize}</h2>
        <p className="text-white text-sm mb-4">Next draw in {timeRemaining}</p>
        <Link href="/games">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold">
            Play Now
          </button>
        </Link>
      </div>

      {/* Image slider */}
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

      {/* Dots pagination - Centered */}
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
    </div>
  );
};

export default LottoCard;
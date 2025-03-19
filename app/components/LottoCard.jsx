import Link from "next/link";
import Image from "next/image";

const LottoCard = ({ prize = "₦1,000,000", timeRemaining = "1h 30min" }) => {
  return (
    <div className="rounded-lg overflow-hidden mb-4 relative">
      <div className="relative p-4 z-10">
        <h2 className="text-white text-3xl font-bold mb-1">{prize}</h2>
        <p className="text-white text-sm mb-4">Next draw in {timeRemaining}</p>
        <Link href="/games">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold">
            Play Now
          </button>
        </Link>
      </div>
      <div className="absolute inset-0 z-0">
        <Image src="/images/lotto-balls-bg.png" alt="Lotto balls" fill 
        className="object-cover" />
      </div>
    </div>
  );
};

export default LottoCard;

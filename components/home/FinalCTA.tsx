'use client';

import Image from 'next/image';
import Link from 'next/link';

const SCATTERED_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400",
    className: "top-[5%] left-[2%] md:top-[10%] md:left-[5%] lg:top-[15%] lg:left-[10%] -rotate-12 w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48",
    alt: "Engineer working"
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
    className: "top-[10%] right-[2%] md:top-[15%] md:right-[5%] lg:top-[20%] lg:right-[12%] rotate-12 w-16 h-16 md:w-28 md:h-28 lg:w-40 lg:h-40",
    alt: "Plant manager"
  },
  {
    src: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=400",
    className: "bottom-[15%] left-[2%] md:bottom-[20%] md:left-[5%] lg:bottom-[20%] lg:left-[5%] rotate-6 w-16 h-20 md:w-24 md:h-32 lg:w-36 lg:h-48",
    alt: "Water facility"
  },
  {
    src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400",
    className: "top-[45%] right-[1%] md:top-[45%] md:right-[2%] -rotate-6 w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 hidden sm:block",
    alt: "Industrial pipes"
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
    className: "bottom-[10%] right-[5%] md:bottom-[15%] md:right-[10%] lg:bottom-[15%] lg:right-[15%] rotate-12 w-20 h-20 md:w-28 md:h-28 lg:w-44 lg:h-44",
    alt: "Team collaboration"
  }
];

export const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/30 to-white min-h-[70vh] md:min-h-[80vh] flex items-center justify-center py-24 md:py-32 px-4">
      {/* Scattered Floating Images */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {SCATTERED_IMAGES.map((img, idx) => (
          <div 
            key={idx} 
            className={`absolute rounded-3xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] bg-white p-2 ${img.className}`}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image 
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full mt-10 md:mt-0">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
          Why settle for <br className="md:hidden" />
          <span className="font-serif italic bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pr-2">
            yesterday&apos;s
          </span> 
          <br className="hidden md:block" />
          water systems?
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          Build a treatment plant that&apos;s forever efficient, a system where you confidently meet compliance.
        </p>
        
        {/* Input Box */}
        <div className="mx-auto max-w-2xl bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-2 flex items-center border border-gray-100 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <input 
            type="email"
            className="flex-1 bg-transparent border-none outline-none px-6 py-4 text-lg text-gray-700 placeholder-gray-400 w-full" 
            placeholder="Enter your work email" 
          />
          
          <button className="relative group cursor-pointer rounded-full p-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition-transform shrink-0">
            <div className="bg-white rounded-full px-8 py-3 md:py-4 h-full w-full flex items-center justify-center">
              <span className="font-bold text-primary">Get Quote</span>
            </div>
          </button>
        </div>
        
        {/* Secondary Link */}
        <div className="mt-10">
          <Link 
            href="/contact/amc-inquiry" 
            className="text-gray-500 font-medium underline underline-offset-4 hover:text-primary transition-colors text-sm md:text-base"
          >
            Already have a system? Request AMC
          </Link>
        </div>
      </div>
    </section>
  );
};

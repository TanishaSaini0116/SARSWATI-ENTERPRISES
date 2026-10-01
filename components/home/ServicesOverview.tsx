"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../shared/SectionWrapper';
import { CTAButton } from '../shared/CTAButton';
import { ArrowRight, ArrowLeft, Bookmark } from 'lucide-react';

const coreServices = [
  {
    id: 1,
    title: 'RO PLANTS',
    location: 'Reverse Osmosis',
    description: 'Our Reverse Osmosis plants are designed for maximum efficiency and pure water output. Perfect for industrial, commercial, and municipal water purification needs. We deliver state-of-the-art membrane technology.',
    img: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1600',
    thumbnail: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=400',
  },
  {
    id: 2,
    title: 'STP PLANTS',
    location: 'Sewage Treatment',
    description: 'Advanced Sewage Treatment Plants for effective wastewater management. Ensuring environmental compliance, sustainable water reuse, and safe discharge into natural water bodies.',
    img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600',
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400',
  },
  {
    id: 3,
    title: 'ETP PLANTS',
    location: 'Effluent Treatment',
    description: 'Industrial Effluent Treatment Plants tailored to handle complex chemical and biological waste. We design systems that treat harsh industrial effluents securely and efficiently.',
    img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1600',
    thumbnail: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=400',
  },
  {
    id: 4,
    title: 'MAINTENANCE',
    location: 'Plant Services',
    description: 'Comprehensive O&M and maintenance services for all types of water treatment plants. Ensuring longevity, efficiency, and continuous operation with zero downtime.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600',
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400',
  }
];

export const ServicesOverview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % coreServices.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? coreServices.length - 1 : prev - 1));
  };

  const activeService = coreServices[activeIndex];

  // Helper to get the next 3 items for thumbnails
  const getThumbnails = () => {
    const thumbnails = [];
    for (let i = 1; i <= 3; i++) {
      thumbnails.push(coreServices[(activeIndex + i) % coreServices.length]);
    }
    return thumbnails;
  };

  return (
    <SectionWrapper className="p-0 max-w-none w-full">
      <div className="relative w-full h-[100svh] min-h-[700px] overflow-hidden bg-black text-white font-sans">
        
        {/* Background Image transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <Image 
              src={activeService.img}
              alt={activeService.title}
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* Main Content Area */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
          
          {/* Left Side Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start gap-4 mt-20 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-start"
              >
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-4 drop-shadow-lg leading-none">
                  {activeService.title}
                </h1>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-md drop-shadow-md">
                  {activeService.description}
                </p>
                
                <CTAButton href="/industrial" className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-black rounded-full px-8 py-3 flex items-center transition-all shadow-lg font-semibold group">
                  Explore <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </CTAButton>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side Thumbnails Carousel */}
          <div className="absolute right-0 bottom-24 md:bottom-1/4 md:translate-y-1/2 w-full md:w-auto overflow-hidden md:overflow-visible pl-6 md:pl-0 flex gap-4 md:pr-12 pointer-events-none">
            <div className="flex gap-4 md:gap-6 pointer-events-auto overflow-x-auto pb-4 no-scrollbar">
              <AnimatePresence mode="popLayout">
                {getThumbnails().map((service, idx) => (
                  <motion.div
                    key={`${service.id}-${activeIndex}`} // Force re-render/animation on slide change
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                    onClick={() => {
                      const targetIndex = coreServices.findIndex(s => s.id === service.id);
                      setActiveIndex(targetIndex);
                    }}
                    className="relative w-[140px] md:w-[220px] h-[200px] md:h-[320px] rounded-3xl overflow-hidden cursor-pointer group shadow-[0_8px_30px_rgb(0,0,0,0.5)] shrink-0 border border-white/20"
                  >
                    <Image 
                      src={service.thumbnail}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100"></div>
                    
                    {/* Bookmark icon top right */}
                    <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors">
                      <Bookmark className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>

                    {/* Thumbnail text */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white/80 text-[10px] md:text-xs font-semibold mb-1 uppercase tracking-wider">{service.location}</p>
                      <h3 className="text-white font-bold text-sm md:text-lg leading-tight mb-2">{service.title}</h3>
                      {/* Fake Star Rating to match video */}
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <svg key={star} className="w-2.5 h-2.5 md:w-3 md:h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Navigation Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-black/40 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-3">
              {coreServices.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    idx === activeIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/80 w-2'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-black/40 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all text-white"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

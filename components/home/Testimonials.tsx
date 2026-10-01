'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
// import { SectionWrapper } from '../shared/SectionWrapper';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Helper functions to convert 1536x696 design coordinates to responsive percentages
const pxX = (px: number) => `${(px / 1536) * 100}%`;
const pxY = (px: number) => `${(px / 696) * 100}%`;

const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=400&q=80",
];

const layoutSlots = [
  { left: 40, top: 125, width: 153, height: 218, isSide: true },
  { left: 40, top: 360, width: 153, height: 215, isSide: true },
  { left: 220, top: 98, width: 153, height: 156, isSide: true },
  { left: 220, top: 273, width: 153, height: 157, isSide: true },
  { left: 220, top: 447, width: 153, height: 156, isSide: true },
  { left: 399, top: 125, width: 153, height: 340, isSide: false },
  { left: 577, top: 70, width: 153, height: 340, isSide: false },
  { left: 756, top: 70, width: 153, height: 338, isSide: false },
  { left: 935, top: 125, width: 154, height: 340, isSide: false },
  { left: 1114, top: 100, width: 151, height: 154, isSide: true },
  { left: 1114, top: 280, width: 151, height: 154, isSide: true },
  { left: 1114, top: 447, width: 151, height: 156, isSide: true },
  { left: 1293, top: 126, width: 151, height: 217, isSide: true },
  { left: 1293, top: 360, width: 151, height: 216, isSide: true },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  // Auto-advance carousel
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 25 : -25,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -25 : 25,
      opacity: 0,
      scale: 0.97,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const testimonials = [
    {
      quote: "Saraswati Enterprises installed our 500 KLD ETP plant. Their engineering expertise and post-installation support have been outstanding. We passed our pollution board audits with zero issues.",
      name: "Rajesh Kumar",
      designation: "Plant Head",
      company: "Apex Textiles",
      avatar: "https://i.pravatar.cc/150?u=12"
    },
    {
      quote: "The DM plant supplied for our pharma unit is flawless. Conductivity is consistently below 0.1 µS/cm. Highly recommend them for any critical water treatment needs.",
      name: "Dr. Sunita Sharma",
      designation: "Quality Director",
      company: "MediCare Pharma",
      avatar: "https://i.pravatar.cc/150?u=45"
    },
    {
      quote: "We switched our hotel's entire water system to Saraswati. The RO and Softener combination has drastically reduced our maintenance costs on boilers and laundry.",
      name: "Vikram Singh",
      designation: "Chief Engineer",
      company: "Grand Horizon Hotels",
      avatar: "https://i.pravatar.cc/150?u=33"
    }
  ];

  return (
    <section className="w-full bg-white overflow-hidden pt-4 pb-16 md:pt-8 md:pb-20 relative">
      {/* 1. Desktop Collage Layout */}
      <div 
        className="w-full justify-center mb-4 md:mb-8 relative hidden lg:flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full max-w-[1536px] relative aspect-[1536/696]">
          {/* Images */}
          {layoutSlots.map((slot, i) => {
            const imgIndex = (currentIndex + i) % images.length;
            return (
              <motion.div
                key={`desktop-slot-${i}`}
                className="absolute rounded-3xl overflow-hidden shadow-sm"
                style={{
                  left: pxX(slot.left),
                  top: pxY(slot.top),
                  width: pxX(slot.width),
                  height: pxY(slot.height),
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <AnimatePresence custom={direction} mode="popLayout" initial={false}>
                  <motion.img
                    key={images[imgIndex] + i}
                    src={images[imgIndex]}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full h-full object-cover absolute top-0 left-0"
                  />
                </AnimatePresence>
              </motion.div>
            );
          })}
          
          {/* Text placed in the bottom middle space */}
          <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center justify-end z-10">
            <div className="inline-flex px-5 py-1.5 rounded-full border border-gray-200 text-gray-600 font-medium text-sm bg-white mb-6 shadow-sm">
              Testimonials
            </div>
            <h2 className="text-[2rem] leading-[1.1] md:text-[2.75rem] font-extrabold tracking-tight text-black text-center mb-1">
              Trusted by creatives and leaders
            </h2>
            <h2 className="text-[2rem] leading-[1.1] md:text-[2.75rem] font-extrabold tracking-tight text-gray-400 text-center">
              from various industries
            </h2>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet View (Carousel fallback) */}
      <div className="w-full flex flex-col items-center mb-8 md:mb-12 relative lg:hidden px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className="inline-flex px-5 py-1.5 rounded-full border border-gray-200 text-gray-600 font-medium text-sm bg-white mb-6 shadow-sm">
          Testimonials
        </div>
        <h2 className="text-[2rem] leading-[1.1] font-extrabold tracking-tight text-black text-center mb-1">
          Trusted by creatives and leaders
        </h2>
        <h2 className="text-[2rem] leading-[1.1] font-extrabold tracking-tight text-gray-400 text-center mb-10">
          from various industries
        </h2>
        
        <div className="w-full relative flex items-center justify-center">
          <button 
            onClick={handlePrev}
            className="absolute left-0 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-black transition-colors z-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="relative w-full h-[350px] px-8 overflow-hidden flex justify-center">
            <AnimatePresence custom={direction} mode="popLayout" initial={false}>
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full max-w-[300px] h-full object-cover rounded-2xl shadow-sm"
              />
            </AnimatePresence>
          </div>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-black transition-colors z-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Mobile dots */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-500 ease-out ${i === currentIndex ? 'bg-black w-6' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
      <div className="w-full relative mt-4 md:mt-8 overflow-hidden pt-10">
        <div className="flex">
          <motion.div
            className="flex shrink-0 gap-8 min-w-full px-4"
            animate={{ x: [0, "-100%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {testimonials.concat(testimonials).map((test, index) => {
              const initials = test.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase();

              return (
                <div
                  key={`marquee1-${index}`}
                  className="bg-bg rounded-2xl p-8 relative shadow-sm border border-orange-100/30 w-[350px] md:w-[420px] flex-shrink-0"
                >
                  {/* Overlapping Circle */}
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-soft-bg flex items-center justify-center shadow-sm">
                    <span className="font-bold text-white text-base font-serif">
                      {initials}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mt-2 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--color-soft-bg)] text-soft-bg" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-serif italic font-bold text-gray-800 text-[1.1rem] leading-relaxed mb-8 text-balance">
                    &quot;{test.quote}&quot;
                  </p>

                  {/* Author */}
                  <div className="mt-auto">
                    <h4 className="font-bold font-serif text-black">{test.name}</h4>
                    <p className="text-[0.7rem] uppercase tracking-wider text-muted-foreground font-semibold mt-1">
                      {test.designation}
                    </p>
                    <p className="text-xs text-soft-bg font-medium mt-0.5">
                      {test.company}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
          <motion.div
            className="flex shrink-0 gap-8 min-w-full px-4"
            animate={{ x: [0, "-100%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            aria-hidden="true"
          >
            {testimonials.concat(testimonials).map((test, index) => {
              const initials = test.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase();

              return (
                <div
                  key={`marquee2-${index}`}
                  className="bg-bg rounded-2xl p-8 relative shadow-sm border border-orange-100/30 w-[350px] md:w-[420px] flex-shrink-0"
                >
                  {/* Overlapping Circle */}
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-soft-bg flex items-center justify-center shadow-sm">
                    <span className="font-bold text-white text-base font-serif">
                      {initials}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mt-2 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--color-soft-bg)] text-soft-bg" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-serif italic font-bold text-gray-800 text-[1.1rem] leading-relaxed mb-8 text-balance">
                    &quot;{test.quote}&quot;
                  </p>

                  {/* Author */}
                  <div className="mt-auto">
                    <h4 className="font-bold font-serif text-black">{test.name}</h4>
                    <p className="text-[0.7rem] uppercase tracking-wider text-muted-foreground font-semibold mt-1">
                      {test.designation}
                    </p>
                    <p className="text-xs text-soft-bg font-medium mt-0.5">
                      {test.company}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

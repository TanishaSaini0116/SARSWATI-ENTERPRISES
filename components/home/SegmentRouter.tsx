'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../shared/SectionWrapper';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SEGMENTS = [
  {
    id: 'industrial',
    tag: 'THE BACKBONE',
    titleMain: 'Industrial',
    titleItalic: 'Solutions',
    subtitle: 'We engineer heavy-duty RO plants and wastewater management systems tailored for large-scale operations. Consistency is key when dealing with harsh industrial environments.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    link: '/industrial',
    // Fake data for the floating card
    cardData: { label: 'Efficiency', val1: '99%', val2: 'Uptime' }
  },
  {
    id: 'commercial',
    tag: 'THE STANDARD',
    titleMain: 'Commercial',
    titleItalic: 'Solutions',
    subtitle: 'Efficient and scalable water purification for businesses, hotels, and institutions. Because life gets in the way of even the best intentions, we make maintenance seamless.',
    image: 'https://images.unsplash.com/photo-1541888049615-5853247071e6?q=80&w=800&auto=format&fit=crop',
    link: '/commercial',
    cardData: { label: 'Purity', val1: '100%', val2: 'Safe' }
  },
  {
    id: 'institutional',
    tag: 'THE FOUNDATION',
    titleMain: 'Institutional',
    titleItalic: 'Solutions',
    subtitle: 'Safe, clean, and reliable drinking water solutions designed specifically for schools, hospitals, and public facilities where safety is paramount.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    link: '/residential', // keeping residential link for now as in original
    cardData: { label: 'Capacity', val1: '10k+', val2: 'Liters/Day' }
  }
];

export const SegmentRouter = () => {
  return (
    <SectionWrapper bg="white" className="relative z-30 pt-32 pb-32 overflow-hidden bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Header */}
        <div className="flex flex-col items-center text-center mb-24 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-500 uppercase">What are you looking for?</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] font-light tracking-tight leading-tight"
          >
            Find the right system <br />
            <span className="font-serif italic text-gray-500">For your specific needs</span>
          </motion.h2>
        </div>

        {/* Zig-Zag Segments */}
        <div className="flex flex-col gap-24 lg:gap-32 px-4">
          {SEGMENTS.map((segment, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={segment.id} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}
              >
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:w-1/2 relative"
                >
                  <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                    <Image
                      src={segment.image}
                      alt={segment.titleMain}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    
                    {/* Floating Glassmorphic UI Card (To match reference aesthetic) */}
                    <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-auto sm:w-64 bg-white/80 backdrop-blur-xl border border-white/50 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                      <p className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">{segment.cardData.label}</p>
                      <div className="flex justify-between items-end">
                        <span className="text-2xl sm:text-3xl font-light text-black">{segment.cardData.val1}</span>
                        <span className="text-xs sm:text-sm font-medium text-gray-400 mb-1">{segment.cardData.val2}</span>
                      </div>
                      {/* Fake Chart Lines */}
                      <div className="mt-4 flex items-end gap-1 h-8">
                        {[40, 70, 45, 90, 65, 85, 50, 100, 60, 80].map((h, i) => (
                          <div key={i} className="w-full bg-[#1A1A1A]/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="w-full md:w-1/2 flex flex-col items-start"
                >
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 sm:mb-6">
                    {segment.tag}
                  </span>
                  
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-light mb-6 tracking-tight leading-none">
                    {segment.titleMain} <br className="hidden sm:block" />
                    <span className="font-serif italic text-gray-500">{segment.titleItalic}</span>
                  </h3>
                  
                  <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
                    {segment.subtitle}
                  </p>
                  
                  <Link 
                    href={segment.link}
                    className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-black transition-all shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.3)] hover:-translate-y-1 group"
                  >
                    See Solutions 
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
};

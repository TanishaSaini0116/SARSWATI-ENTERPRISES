/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const logos = [
  { name: "ISO 9001:2015", font: "font-sans font-medium uppercase tracking-widest text-lg" },
  { name: "CPCB", font: "font-serif font-semibold text-2xl" },
  { name: "State PCB", font: "font-sans font-light tracking-wide text-xl" },
  { name: "TATA", font: "font-sans font-bold tracking-tighter text-2xl" },
  { name: "L&T", font: "font-serif font-medium text-2xl italic" },
  { name: "Reliance", font: "font-sans font-medium tracking-tight text-xl" }
];

export function TrustedClients() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const logoRowRef = useRef<HTMLDivElement>(null);
  const visualRowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Setup initial states
      gsap.set(headerRef.current, { y: 20, opacity: 0 });
      gsap.set(visualRowRef.current, { y: 40, opacity: 0 });
      
      const logoItems = logoRowRef.current?.children ? Array.from(logoRowRef.current.children) : [];
      gsap.set(logoItems, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      const easeOut = "cubic-bezier(0.22, 1, 0.36, 1)";

      // 1. Header fades up
      tl.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: easeOut
      });

      // 2. Logos fade in with stagger
      tl.to(logoItems, {
        opacity: 0.6,
        duration: 0.6,
        stagger: 0.1,
        ease: easeOut
      }, "-=0.2"); // Overlap slightly with header

      // 3. Visual row settles in last with heavier feel
      tl.to(visualRowRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: easeOut
      }, "-=0.4");
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([headerRef.current, visualRowRef.current], { opacity: 0 });
      const logoItems = logoRowRef.current?.children ? Array.from(logoRowRef.current.children) : [];
      gsap.set(logoItems, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(headerRef.current, { opacity: 1, duration: 0.5 });
      tl.to(logoItems, { opacity: 0.6, duration: 0.5, stagger: 0.1 }, "-=0.2");
      tl.to(visualRowRef.current, { opacity: 1, duration: 0.5 }, "-=0.2");
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden relative">
      {/* 1. Centered header block */}
      <div ref={headerRef} className="max-w-3xl mx-auto text-center px-4 mb-16 flex flex-col items-center">
        <span className="text-xs font-semibold tracking-wide text-zinc-500 mb-3 uppercase">
          Explore Solutions
        </span>
        <h2 className="text-4xl md:text-[2.75rem] font-medium text-zinc-900 leading-[1.1] mb-4 tracking-tight">
          Trusted by Leading Industries<br />Across India!
        </h2>
        <p className="text-sm text-zinc-500 mb-8 max-w-md mx-auto">
          From manufacturing plants to residential townships — our systems keep running where it matters most.
        </p>
        
        <button className="flex items-center gap-3 bg-[#E98A36] rounded-full pl-6 pr-1.5 py-1.5 text-white font-medium hover:bg-[#d67a2d] transition-colors shadow-sm">
          <span className="text-sm">Get a Free Quote</span>
          <div className="bg-white text-[#E98A36] rounded-full p-2 flex items-center justify-center">
            <ArrowRight className="w-4 h-4 -rotate-45" />
          </div>
        </button>

        <div className="mt-4 flex items-center gap-1.5 text-[11px] text-zinc-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>No obligation — response within 24 hours</span>
        </div>
      </div>

      {/* 2. Logo strip */}
      <div 
        className="mb-20 w-full overflow-hidden" 
        style={{ 
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", 
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" 
        }}
      >
        <div ref={logoRowRef} className="flex justify-between items-center w-[110%] -ml-[5%] px-8 grayscale gap-12">
          {logos.map((logo, i) => (
            <div key={i} className={`${logo.font} text-zinc-600 whitespace-nowrap opacity-0`}>
              {logo.name}
            </div>
          ))}
          {logos.map((logo, i) => (
            <div key={`dup-${i}`} className={`${logo.font} text-zinc-600 whitespace-nowrap opacity-0`}>
              {logo.name}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Three-column visual row */}
      <div ref={visualRowRef} className="relative w-full max-w-[1400px] mx-auto h-[450px] flex items-center justify-center gap-6 lg:gap-8 px-4 md:px-12">
        
        {/* Far Left Sliver */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[8vw] max-w-[100px] aspect-[4/5] rounded-r-3xl overflow-hidden opacity-90 -translate-x-4">
           <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=600" className="w-full h-full object-cover" alt="" />
        </div>

        {/* Left Image */}
        <div className="hidden md:block w-1/4 max-w-[280px] aspect-square rounded-[2rem] overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=800" className="w-full h-full object-cover" alt="Plant Installation" />
        </div>

        {/* Center Dark Card with Background Image */}
        <div className="w-full md:w-[45%] max-w-[480px] relative rounded-[2rem] overflow-hidden flex flex-col justify-center items-center text-center shadow-2xl h-[400px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800" className="w-full h-full object-cover" alt="Water Treatment Site" />
          </div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#0A0A0A]/85 z-10"></div>
          
          {/* Content */}
          <div className="relative z-20 p-10 md:p-14 flex flex-col justify-center items-center w-full h-full">
            <h3 className="text-lg md:text-xl font-normal text-white leading-relaxed mb-10 max-w-[280px]">
              Talk to our engineers about your water treatment requirements.
            </h3>
            
            <div className="w-full relative flex items-center bg-[#1A1A1A]/80 backdrop-blur-sm rounded-full p-1 border border-zinc-700 focus-within:border-zinc-500 transition-colors">
              <input 
                type="text" 
                placeholder="Enter your phone or email" 
                className="bg-transparent border-none outline-none text-white pl-5 py-3 w-full placeholder:text-zinc-400 text-sm"
              />
              <button className="bg-white text-black p-3 rounded-full hover:bg-zinc-200 transition-colors shrink-0 flex items-center justify-center ml-2">
                <ArrowRight className="w-4 h-4 -rotate-45" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block w-1/4 max-w-[280px] aspect-square rounded-[2rem] overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" className="w-full h-full object-cover" alt="Site Photo" />
        </div>

        {/* Far Right Sliver */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[8vw] max-w-[100px] aspect-[4/5] rounded-l-3xl overflow-hidden opacity-90 translate-x-4">
           <img src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=600" className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const steps = [
  { id: 1, title: "Consultation & Site Survey", desc: "Understanding your exact needs and site conditions." },
  { id: 2, title: "System Design", desc: "Engineering an optimal, cost-effective treatment solution." },
  { id: 3, title: "Installation", desc: "Expert deployment by our in-house technical team." },
  { id: 4, title: "Testing & Commissioning", desc: "Rigorous quality checks and system hand-over." },
  { id: 5, title: "AMC & Ongoing Support", desc: "Ensuring long-term performance and peace of mind." },
];

export function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop horizontal scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=4000",
          pin: true,
          scrub: 1,
        }
      });

      // Move track left to reveal steps
      tl.to(trackRef.current, {
        xPercent: -80, // Moves 4 out of 5 panels to the left
        ease: "none"
      }, 0);

      // Move character right across viewport to simulate walking along the path
      tl.to(characterRef.current, {
        x: "60vw",
        ease: "none"
      }, 0);
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile vertical scroll animations
      const stepElements = gsap.utils.toArray<HTMLElement>('.mobile-step');
      stepElements.forEach((step) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
          },
          opacity: 0,
          x: -30,
          duration: 0.6,
          ease: "power2.out"
        });
      });
      
      gsap.from('.mobile-character', {
        scrollTrigger: {
          trigger: '.mobile-character-container',
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "back.out(1.5)"
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-white text-primary overflow-hidden">
      {/* DESKTOP VIEW */}
      <div className="hidden md:block h-screen relative">
        {/* Header */}
        <div className="absolute top-16 left-0 w-full text-center z-20 pointer-events-none">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-semibold text-xs mb-4 border border-accent/20 tracking-wide uppercase">
            Our Water Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">How We Work</h2>
          <p className="text-lg text-text-muted">Delivering excellence from consultation to ongoing support.</p>
        </div>

        {/* Horizontal Track */}
        <div 
          ref={trackRef} 
          className="absolute top-0 left-0 h-full w-[500vw] flex items-center"
        >
          {/* Continuous Path line connecting steps */}
          <div className="absolute top-1/2 left-[10vw] right-[10vw] h-1.5 bg-blue-50 -translate-y-1/2 z-0 rounded-full"></div>
          
          {/* Active path line that fills as we scroll (optional, but using a static one for now as per design) */}
          <div className="absolute top-1/2 left-[10vw] w-[400vw] h-1.5 bg-gradient-to-r from-accent to-green-accent opacity-50 -translate-y-1/2 z-0 rounded-full"></div>

          {steps.map((step) => (
            <div key={step.id} className="w-[100vw] h-full flex flex-col justify-center items-center relative z-10 px-20">
              
              {/* Step Marker */}
              <div className="w-20 h-20 rounded-full bg-white border-4 border-accent text-accent flex items-center justify-center text-3xl font-bold shadow-xl mb-12 relative z-20">
                {step.id}
              </div>

              {/* Text Content */}
              <div className="text-center max-w-md bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold mb-3 text-primary">{step.title}</h3>
                <p className="text-lg text-text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Character Overlay */}
        <div 
          ref={characterRef}
          className="absolute top-1/2 -mt-24 left-[10vw] w-48 h-48 z-30 pointer-events-none"
          style={{ mixBlendMode: 'multiply' }}
        >
          <video 
            src="/images/cartoon3d.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden py-24 px-6 relative bg-gradient-to-b from-white to-gray-50/50">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-semibold text-xs mb-4 border border-accent/20 tracking-wide uppercase">
            Our Water Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">How We Work</h2>
          <p className="text-text-muted text-lg">Delivering excellence from start to finish.</p>
        </div>

        <div className="relative border-l-2 border-accent/30 ml-6 space-y-16 pb-8">
          {steps.map((step) => (
            <div key={step.id} className="mobile-step relative pl-10">
              {/* Marker */}
              <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-white border-4 border-accent text-accent flex items-center justify-center font-bold text-lg shadow-md">
                {step.id}
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm -mt-2">
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Character */}
        <div className="mobile-character-container mt-8 flex justify-center border-t border-gray-200 pt-12 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent pointer-events-none"></div>
          <div className="mobile-character w-56 h-56 relative z-10" style={{ mixBlendMode: 'multiply' }}>
            <video 
              src="/images/cartoon3d.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

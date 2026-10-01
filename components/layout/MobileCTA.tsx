'use client';

import { Phone, MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919571725256"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 lg:bottom-8 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-white text-text-secondary text-sm font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export const MobileCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.1)] flex">
      <a
        href="tel:+919571725256"
        className="flex-1 flex flex-col items-center justify-center py-3 text-primary font-semibold hover:bg-soft-bg"
      >
        <Phone className="w-5 h-5 mb-1" />
        <span className="text-xs">Call Now</span>
      </a>
      <a
        href="/contact"
        className="flex-1 flex flex-col items-center justify-center py-3 bg-green-accent text-white font-semibold"
      >
        <span className="text-sm">Get Quote</span>
      </a>
    </div>
  );
};

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CTAButton } from '../shared/CTAButton';

interface NavChild {
  title: string;
  href: string;
  description?: string;
}

interface NavItem {
  title: string;
  href: string;
  children?: NavChild[];
}

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      title: 'Products',
      href: '#',
      children: [
        { title: 'Industrial', href: '/industrial', description: 'RO, ETP, STP, DM Plants' },
        { title: 'Commercial', href: '/commercial', description: 'RO, Softeners, UV Plants' },
        { title: 'Residential', href: '/residential', description: 'Domestic RO, Whole House Softeners' },
      ],
    },
    {
      title: 'Industries',
      href: '/industries',
    },
    {
      title: 'Services',
      href: '/services',
      children: [
        { title: 'Installation', href: '/services/installation' },
        { title: 'AMC Maintenance', href: '/services/amc-maintenance' },
        { title: 'Consultation', href: '/services/consultation' },
      ],
    },
    { title: 'About Us', href: '/about' },
    { title: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <div className="flex items-center justify-center shrink-0 py-2">
                <Image src="/logos/Logo.png" alt="Saraswati Enterprises Logo" width={240} height={60} className="h-12 md:h-14 w-auto object-contain" priority />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-accent transition-colors py-8"
                >
                  {item.title}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full left-0 bg-white border border-gray-100 shadow-xl rounded-xl py-4 overflow-hidden z-50 ${item.title === 'Products' ? 'w-[600px] -translate-x-1/3' : 'w-64'}`}
                      >
                        {item.title === 'Products' ? (
                          <div className="grid grid-cols-3 gap-4 px-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.title}
                                href={child.href}
                                className="block p-4 rounded-lg bg-gray-50 hover:bg-primary hover:text-white transition-all group/card"
                              >
                                <div className="text-base font-bold text-primary group-hover/card:text-white mb-2">
                                  {child.title}
                                </div>
                                <div className="text-xs text-gray-500 group-hover/card:text-gray-300 leading-relaxed">
                                  {child.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                            >
                              <div className="text-sm font-semibold text-primary">
                                {child.title}
                              </div>
                            </Link>
                          ))
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm mr-2">
              <PhoneCall className="w-4 h-4 text-accent" />
              <span>+91 95717 25256</span>
            </div>
            <CTAButton href="/contact" variant="primary">
              Get Quote
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-primary"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.children ? '#' : item.href}
                    className="block text-lg font-semibold text-primary py-2"
                  >
                    {item.title}
                  </Link>
                  {item.children && (
                    <div className="pl-4 border-l-2 border-gray-100 mt-2 space-y-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block text-gray-600 font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 border-t border-gray-100">
                <CTAButton href="/contact" variant="primary" className="w-full text-center">
                  Request a Quote
                </CTAButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

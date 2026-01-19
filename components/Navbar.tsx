"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Yeh naya import hai page detect karne ke liye
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Current page ka pata lagana

  // Check: Kya hum Home Page ('/') par hain?
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // LOGIC: Navbar solid (cream color) tab hoga jab:
  // 1. Humne scroll kiya ho (scrolled == true)
  // YA
  // 2. Hum Home page par NAHI hain (!isHome)
  const showSolidNav = scrolled || !isHome;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Academy', href: '/academy' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        showSolidNav 
          ? 'bg-[#F4F1EA]/95 backdrop-blur-md border-b border-[#D4A373]/30 py-2 shadow-md' 
          : 'bg-transparent py-6' 
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* BRAND LOGO */}
        <Link href="/" className="group">
          <div className="flex flex-col">
            <h1 className={`font-serif text-2xl md:text-3xl font-bold tracking-wider transition-colors duration-300 ${
              showSolidNav ? 'text-stone-900' : 'text-white drop-shadow-md'
            }`}>
              BEAUTY BOX <span className="text-[#D4A373]">BY GEETA</span>
            </h1>
            <p className={`text-[10px] md:text-xs uppercase tracking-[0.3em] transition-colors duration-300 ${
              showSolidNav ? 'text-stone-500' : 'text-stone-300'
            }`}>
              Unisex Salon & Academy
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:text-[#D4A373] ${
                showSolidNav 
                  ? 'text-stone-600'      // Dark Text for Solid Nav
                  : 'text-white/90 drop-shadow-sm hover:text-white' // White Text for Transparent Nav
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/contact"
            className={`px-6 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${
              showSolidNav
                ? 'border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-[#F4F1EA]'
                : 'border-white text-white hover:bg-white hover:text-stone-900'
            }`}
          >
            Book Now
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className={`lg:hidden transition-colors duration-300 ${
            showSolidNav ? 'text-stone-800' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F4F1EA] border-b border-[#D4A373]/30 shadow-xl py-8 px-6 flex flex-col space-y-6 animate-fade-in h-screen">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-lg font-serif text-stone-800 border-b border-stone-200 pb-2 hover:text-[#D4A373]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
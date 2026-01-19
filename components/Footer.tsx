"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Instagram, MapPin, Phone, Mail, Facebook, Clock, Brush } from 'lucide-react';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll Detection Logic (Jab user footer par aaye tabhi animation chale)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger Animation
        }
      },
      { threshold: 0.3 } // 30% footer dikhne par trigger hoga
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-[#12100E] text-[#F4F1EA] border-t border-[#D4A373]/20 pt-32 pb-10 overflow-hidden">
      
      {/* ==================== ANIMATION ZONE ==================== */}
      
      {/* 1. BRUSH DROP ANIMATION */}
      <div 
        className={`absolute left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 ease-out ${
          isVisible ? 'top-[-20px] opacity-100' : 'top-[-200px] opacity-0'
        }`}
        style={{ transitionDelay: '0.2s' }}
      >
         {/* Brush Icon (Symbolic Representation) */}
         <div className="relative">
            <Brush 
              className={`w-16 h-16 text-[#D4A373] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transform -rotate-45 ${isVisible ? 'animate-bounce-once' : ''}`} 
              strokeWidth={1.5}
            />
         </div>
      </div>

      {/* 2. DUST EXPLOSION (Impact par dhool udegi) */}
      {isVisible && (
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full h-40 pointer-events-none z-10 flex justify-center">
           <style jsx>{`
              @keyframes puff {
                0% { transform: translate(0, 0) scale(0.5); opacity: 1; }
                100% { transform: translate(var(--x), var(--y)) scale(0); opacity: 0; }
              }
              @keyframes floatDust {
                0% { transform: translateY(0px); opacity: 0; }
                50% { opacity: 0.6; }
                100% { transform: translateY(-100px); opacity: 0; }
              }
              .puff-particle {
                position: absolute;
                background: radial-gradient(circle, #D4A373 0%, transparent 70%);
                border-radius: 50%;
                animation: puff 1.5s ease-out forwards;
              }
              .floating-dust {
                 position: absolute;
                 background: #D4A373;
                 border-radius: 50%;
                 opacity: 0;
                 animation: floatDust 4s infinite ease-in-out;
              }
           `}</style>

           {/* Explosion Particles (Instant Burst) */}
           {[...Array(20)].map((_, i) => {
             const angle = Math.random() * 360;
             const distance = Math.random() * 150 + 50; // Spread radius
             const x = Math.cos(angle * (Math.PI / 180)) * distance;
             const y = Math.sin(angle * (Math.PI / 180)) * distance;
             
             return (
               <div 
                 key={`puff-${i}`}
                 className="puff-particle"
                 style={{
                   width: `${Math.random() * 8 + 4}px`,
                   height: `${Math.random() * 8 + 4}px`,
                   top: '10px', // Impact point
                   '--x': `${x}px`,
                   '--y': `${y - 50}px`, // Thoda upar ki taraf
                   animationDelay: '0.9s' // Brush girne ke baad phatega
                 } as any}
               />
             );
           })}

           {/* 3. CONTINUOUS FLOATING DUST (Hawa mein udti rahegi) */}
           {[...Array(15)].map((_, i) => (
             <div 
               key={`float-${i}`}
               className="floating-dust"
               style={{
                 left: `${Math.random() * 100}%`, // Poore footer mein spread
                 bottom: '-20px',
                 width: `${Math.random() * 3 + 1}px`,
                 height: `${Math.random() * 3 + 1}px`,
                 animationDelay: `${Math.random() * 5 + 1}s`,
                 animationDuration: `${Math.random() * 5 + 5}s`
               }}
             />
           ))}
        </div>
      )}

      {/* ==================== FOOTER CONTENT ==================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          
          {/* COLUMN 1 */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-wider text-white">
                BEAUTY BOX <span className="text-[#D4A373]">BY GEETA</span>
              </h2>
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 mt-1">
                Unisex Salon & Academy
              </p>
            </div>
            <p className="text-stone-400 font-light leading-relaxed max-w-xs">
              Where artistry meets soul. Elevating your beauty experience with luxury standards and professional expertise.
            </p>
            
            <div className="flex gap-4 pt-2">
              <Link href="https://instagram.com/beautyboxbygeeta" target="_blank" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-[#D4A373] hover:border-[#D4A373] hover:text-stone-900 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-[#D4A373] hover:border-[#D4A373] hover:text-stone-900 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-[#D4A373] text-xs font-bold uppercase tracking-widest mb-8">Explore</h3>
            <ul className="space-y-4 font-light text-stone-300">
              <li>
                <Link href="/services" className="hover:text-[#D4A373] hover:pl-2 transition-all duration-300 flex items-center gap-2">
                  <span>Services Menu</span>
                </Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-[#D4A373] hover:pl-2 transition-all duration-300 flex items-center gap-2">
                  <span>Academy Courses</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#D4A373] hover:pl-2 transition-all duration-300 flex items-center gap-2">
                  <span>Bridal Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4A373] hover:pl-2 transition-all duration-300 flex items-center gap-2">
                  <span>Book Appointment</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-[#D4A373] text-xs font-bold uppercase tracking-widest mb-8">Visit Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-stone-300 group">
                <MapPin className="w-5 h-5 text-[#D4A373] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="font-light hover:text-white transition-colors">
                  Ring Road, Behind Sabzi Mandi,<br/> Dehradun, Uttarakhand
                </span>
              </li>
              <li className="flex items-center gap-4 text-stone-300 group">
                <Phone className="w-5 h-5 text-[#D4A373] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-light hover:text-white transition-colors">+91 86304 07452</span>
              </li>
              <li className="flex items-center gap-4 text-stone-300 group">
                <Mail className="w-5 h-5 text-[#D4A373] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-light hover:text-white transition-colors">contact@beautyboxbygeeta.com</span>
              </li>
              <li className="flex items-start gap-4 text-stone-300 pt-4 border-t border-stone-800 mt-4">
                <Clock className="w-5 h-5 text-stone-500 shrink-0 mt-1" />
                <div className="text-sm text-stone-500">
                  <p>Mon - Sun: 10:00 AM - 8:00 PM</p>
                  <p>Open 7 Days a Week</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-light tracking-wide">
          <p>&copy; 2026 Beauty Box by Geeta. All rights reserved.</p>
          <p>Designed with <span className="text-[#D4A373]">♥</span> for Luxury.</p>
        </div>
      </div>
    </footer>
  );
}
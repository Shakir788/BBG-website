"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Star, Award, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-[#F4F1EA] min-h-screen pt-24 pb-20 selection:bg-[#D4A373] selection:text-white">
      
      {/* --- HERO HEADER --- */}
      <section className="text-center max-w-4xl mx-auto px-6 mb-20 animate-fade-in-up">
        <p className="text-[#D4A373] tracking-[0.3em] uppercase text-xs font-bold mb-4">The Visionary</p>
        <h1 className="font-serif text-5xl md:text-7xl text-stone-900 mb-6">
          Meet <span className="italic text-stone-600">Geeta Khatri</span>
        </h1>
        <p className="text-stone-500 font-light text-lg max-w-2xl mx-auto">
          The artist behind the brush, turning dreams into reality one face at a time.
        </p>
      </section>

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* --- LEFT: IMAGE (Arch Shape with Decoration) --- */}
            <div className="relative animate-fade-in-left">
                {/* Background Decoration Pattern */}
                <div className="absolute top-10 left-10 w-full h-full border-2 border-[#D4A373] rounded-t-[10rem] rounded-b-3xl opacity-30 -z-10"></div>
                <div className="absolute -top-4 -left-4 text-[#D4A373] opacity-20">
                    <Sparkles className="w-16 h-16" />
                </div>
                
                {/* Main Image Container */}
                <div className="relative h-[600px] w-full rounded-t-[10rem] rounded-b-3xl overflow-hidden shadow-2xl group">
                    <Image 
                        src="/geeta-action.jpg" // Using action shot if available, else use geeta-yellow
                        alt="Geeta Khatri Makeup Artist"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Floating Badge (Glassmorphism) */}
                    <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-stone-100 max-w-[200px] animate-float">
                        <div className="flex items-center gap-1 mb-1">
                            {[1,2,3,4,5].map((_,i) => (
                                <Star key={i} className="w-3 h-3 text-[#D4A373] fill-[#D4A373]" />
                            ))}
                        </div>
                        <p className="font-serif text-stone-800 text-sm italic">"She creates magic with her hands."</p>
                        <p className="text-[10px] text-stone-400 mt-1 uppercase tracking-wider">- Happy Bride</p>
                    </div>
                </div>
            </div>

            {/* --- RIGHT: TEXT CONTENT (Storytelling) --- */}
            <div className="space-y-8 animate-fade-in-right">
                
                {/* Highlighted Quote */}
                <blockquote className="border-l-4 border-[#D4A373] pl-6 py-4 my-8 bg-gradient-to-r from-white/50 to-transparent rounded-r-lg">
                    <p className="font-serif text-xl md:text-2xl text-stone-700 italic leading-relaxed">
                    "Makeup is not just about applying color; it's about revealing the confidence and unique beauty that already exists within every person."
                    </p>
                </blockquote>

                <div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed">
                    <p>
                        For Geeta, beauty has always been more than just a profession—it's a lifelong passion. As the founder of <strong className="text-stone-800 font-medium">Beauty Box by Geeta</strong>, she has dedicated over a decade to mastering the intricate art of makeup and styling.
                    </p>
                    <p>
                        An internationally certified artist, she has honed her craft under global legends, bringing a blend of world-class techniques and her own signature flair to Dehradun. Her vision is to create a space where every client feels heard, pampered, and transformed into their most radiant self.
                    </p>
                    <p>
                        Today, Beauty Box stands as a testament to her commitment to excellence, offering a luxury salon experience that is both personalized and unforgettable.
                    </p>
                </div>

                {/* Signature & Stats Row */}
                <div className="pt-8 border-t border-stone-200 flex flex-wrap gap-8 items-center justify-between">
                    <div>
                        <p className="font-signature text-5xl text-[#D4A373] -rotate-3">Geeta Khatri</p>
                        <p className="text-[10px] uppercase tracking-widest text-stone-400 mt-2 ml-2">Founder & Lead Artist</p>
                    </div>
                    
                    <div className="flex gap-6">
                        <div className="text-center">
                            <h4 className="font-serif text-stone-800 text-2xl">12+</h4>
                            <p className="text-[10px] uppercase text-stone-400 tracking-wider">Years Exp.</p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-serif text-stone-800 text-2xl">5k+</h4>
                            <p className="text-[10px] uppercase text-stone-400 tracking-wider">Brides</p>
                        </div>
                    </div>
                </div>
                
                {/* Social Button */}
                <div className="pt-4">
                     <Link href="https://instagram.com/beautyboxbygeeta" target="_blank" className="inline-flex items-center gap-2 text-stone-500 hover:text-[#D4A373] transition-colors border-b border-[#D4A373]/30 hover:border-[#D4A373] pb-1 text-sm tracking-wide">
                        <Instagram className="w-4 h-4" /> Follow my journey on Instagram
                     </Link>
                </div>

            </div>
        </div>
      </section>

      {/* --- SECTION 3: CERTIFICATIONS STRIP (Luxury Black) --- */}
      <section className="bg-[#12100E] text-stone-400 py-16 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A373] to-transparent opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] mb-10 text-[#D4A373] font-bold">Certified & Trained By Industry Legends</p>
              
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
                  {/* Styled Text instead of Logos for clean look */}
                  <span className="text-2xl font-serif text-white hover:text-[#D4A373] transition-colors cursor-default">Samaira Sandhu</span>
                  <div className="w-1 h-1 bg-stone-700 rounded-full"></div>
                  <span className="text-2xl font-serif text-white hover:text-[#D4A373] transition-colors cursor-default">Pooja Khurana</span>
                  <div className="w-1 h-1 bg-stone-700 rounded-full"></div>
                  <span className="text-2xl font-serif text-white hover:text-[#D4A373] transition-colors cursor-default">Meera Sakhrani</span>
                  <div className="w-1 h-1 bg-stone-700 rounded-full"></div>
                  <span className="text-2xl font-serif text-white hover:text-[#D4A373] transition-colors cursor-default">Atul Chauhan</span>
              </div>
          </div>
      </section>

    </main>
  );
}
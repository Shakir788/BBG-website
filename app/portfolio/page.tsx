"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Heart, ExternalLink, Camera, Play } from 'lucide-react';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('All');

  // =================================================================
  // 📸 SECTION 1: PHOTO GALLERY DATA
  // =================================================================
  const photos = [
    // --- BRIDAL ---
    { src: "/bridal1.jpg", category: "Bridal", title: "Royal Heritage Bride" },
    { src: "/bridal2.jpg", category: "Bridal", title: "Classic Red" },
    { src: "/bridal3.jpg", category: "Bridal", title: "Modern Glam" },
    { src: "/bridal4.jpg", category: "Bridal", title: "Signature Look" },

    // --- ENGAGEMENT ---
    { src: "/engagement1.jpg", category: "Engagement", title: "Ring Ceremony" },
    { src: "/engagement2.jpg", category: "Engagement", title: "Subtle Glow" },
    { src: "/engagement3.jpg", category: "Engagement", title: "Soft Glam" },
    { src: "/engagement4.jpg", category: "Engagement", title: "Evening Elegance" },

    // --- RECEPTION ---
    { src: "/reception1.jpg", category: "Reception", title: "Reception HD" },

    // --- COCKTAIL ---
    { src: "/coctail1.jpg", category: "Cocktail", title: "Cocktail Glam" },
    { src: "/coctail2.jpg", category: "Cocktail", title: "Sangeet Night" },
    { src: "/coctail3.jpg", category: "Cocktail", title: "Cocktail Bride" },
  ];

  // =================================================================
  // 🎥 SECTION 2: REELS DATA (LUXURY CARDS)
  // Maine har video ke liye 'cover' image set kar di hai
  // =================================================================
  const reelsData = [
    {
      title: "Bridal Masterpieces",
      items: [
        { cover: "/bridal1.jpg", link: "https://www.instagram.com/reel/C5c9fjgyYRy/", title: "Royal Look" },
        { cover: "/bridal2.jpg", link: "https://www.instagram.com/reel/DKG_SWYSxiR/", title: "Classic Red" },
        { cover: "/bridal3.jpg", link: "https://www.instagram.com/reel/DMpiLNUS_um/", title: "Glamour" },
        { cover: "/bridal4.jpg", link: "https://www.instagram.com/reel/DQl8dYSAdea/", title: "Signature" },
      ]
    },
    {
      title: "Engagement & Roka",
      items: [
        { cover: "/engagement1.jpg", link: "https://www.instagram.com/reel/DJvsoSIyy92/", title: "Ring Ceremony" },
        { cover: "/engagement2.jpg", link: "https://www.instagram.com/reel/DGpsw9wyJcB/", title: "Subtle Glow" },
      ]
    },
    {
      title: "Reception Glam",
      items: [
        { cover: "/reception1.jpg", link: "https://www.instagram.com/reel/DTaOTfLAQXL/", title: "Reception HD" },
        { cover: "/reception1.jpg", link: "https://www.instagram.com/reel/C9uaXWJS5hp/", title: "Party Vibe" }, // Using reception1 as placeholder
      ]
    },
    {
      title: "Cocktail & Party Vibe",
      items: [
        { cover: "/coctail1.jpg", link: "https://www.instagram.com/reel/CsTfCzKrZpc/", title: "Cocktail Night" },
        { cover: "/coctail2.jpg", link: "https://www.instagram.com/reel/C2RhvmHy62l/", title: "Sangeet" },
        { cover: "/coctail3.jpg", link: "https://www.instagram.com/reel/C6lfJNZyHVI/", title: "Guest Look" },
        { cover: "/coctail1.jpg", link: "https://www.instagram.com/reel/DDtoZuYSqza/", title: "Party Glam" },
      ]
    }
  ];

  // --- Filter Logic ---
  const filteredPhotos = activeTab === 'All' 
    ? photos 
    : photos.filter(p => p.category === activeTab);

  return (
    <main className="bg-[#F4F1EA] min-h-screen pt-24 pb-20 selection:bg-[#D4A373] selection:text-white">
      
      {/* --- HERO HEADER --- */}
      <section className="text-center max-w-4xl mx-auto px-6 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full mb-6 bg-white/50 border border-[#D4A373]/30">
           <Camera className="w-4 h-4 text-[#D4A373]" />
           <p className="text-[#D4A373] tracking-[0.2em] uppercase text-xs font-bold">Our Masterpieces</p>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-stone-900 mb-6">
          The <span className="italic text-stone-600">Gallery</span>
        </h1>
        <p className="text-stone-500 font-light text-lg max-w-2xl mx-auto">
          Every face tells a story. Here are some of the beautiful stories we've had the honor to create.
        </p>
      </section>

      {/* --- TABS (FIXED: CLEAN LOOK) --- */}
      {/* Removed sticky background strip for a cleaner look */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 px-4">
        {['All', 'Bridal', 'Engagement', 'Reception', 'Cocktail'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-xs md:text-sm tracking-widest uppercase transition-all duration-300 ${
              activeTab === tab 
                ? 'bg-[#D4A373] text-white shadow-xl scale-105' 
                : 'bg-white text-stone-500 border border-stone-200 hover:border-[#D4A373] hover:text-[#D4A373]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- MASONRY PHOTO GRID --- */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-6 mb-24 min-h-[500px]">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredPhotos.map((photo, index) => (
            <div key={index} className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-stone-200">
              <Image 
                src={photo.src} 
                alt={photo.title}
                width={500}
                height={700}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                 <Heart className="w-8 h-8 mb-2 text-[#D4A373] fill-[#D4A373]" />
                 <h3 className="font-serif text-xl">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEW LUXURY REELS SECTION (NO FAKE BOXES) --- */}
      <section className="bg-[#12100E] text-[#F4F1EA] py-24 px-4 relative overflow-hidden rounded-[40px] mx-2 md:mx-6 shadow-2xl">
         
         {/* Subtle Glow Background */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4A373]/10 rounded-full blur-[120px]"></div>

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
               <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">Brides in <span className="italic text-[#D4A373]">Motion</span></h2>
               <p className="text-stone-400 font-light">Click on a card to watch the magic on Instagram</p>
            </div>

            {/* Categorized Reel Sections */}
            <div className="space-y-20">
              {reelsData.map((category, idx) => (
                <div key={idx}>
                  {/* Category Title */}
                  <div className="flex items-center gap-4 mb-8">
                     <div className="h-px bg-[#D4A373]/30 flex-1"></div>
                     <h3 className="font-serif text-2xl text-[#D4A373] tracking-wide">{category.title}</h3>
                     <div className="h-px bg-[#D4A373]/30 flex-1"></div>
                  </div>

                  {/* REEL CARDS GRID (iPhone Style) */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
                    {category.items.map((item, i) => (
                        <Link 
                            href={item.link} 
                            target="_blank" 
                            key={i} 
                            className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4A373] transition-all duration-300 hover:-translate-y-2 shadow-2xl bg-stone-900 block"
                        >
                            {/* Cover Image */}
                            <Image 
                                src={item.cover} 
                                alt={item.title}
                                fill
                                className="object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-500"
                            />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                                    <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-1" />
                                </div>
                                <h3 className="font-serif text-sm md:text-lg text-white tracking-wide text-center px-2">{item.title}</h3>
                                <div className="flex items-center gap-1 mt-2 text-[#D4A373] text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Instagram className="w-3 h-3" /> Watch
                                </div>
                            </div>
                        </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-20">
               <a href="https://instagram.com/beautyboxbygeeta" target="_blank" className="inline-flex items-center gap-3 border border-[#D4A373] text-[#D4A373] px-8 py-3 rounded-full hover:bg-[#D4A373] hover:text-stone-900 transition-all uppercase text-xs tracking-[0.2em]">
                  View Full Feed <ExternalLink className="w-4 h-4" />
               </a>
            </div>
         </div>
      </section>

      {/* --- BOOKING CTA --- */}
      <section className="py-24 text-center px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Ready for your transformation?</h2>
          <Link href="/contact" className="inline-block border-2 border-stone-900 text-stone-900 px-12 py-4 rounded-full uppercase tracking-widest font-bold hover:bg-stone-900 hover:text-white transition-all duration-300">
             Book A Date
          </Link>
      </section>

    </main>
  );
}
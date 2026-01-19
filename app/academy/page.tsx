"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Star, Camera, Check, Award, ArrowRight } from 'lucide-react';

export default function AcademyPage() {
  return (
    <main className="bg-[#F4F1EA] min-h-screen pt-24 pb-20 selection:bg-[#D4A373] selection:text-white">
      
      {/* --- HERO HEADER --- */}
      <section className="text-center max-w-4xl mx-auto px-6 mb-20">
        <div className="inline-flex items-center gap-2 bg-stone-900 text-[#D4A373] px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8 animate-fade-in shadow-lg">
          <Award className="w-4 h-4" /> Internationally Certified
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-stone-900 leading-tight mb-6">
          The Art of <span className="italic text-stone-600 relative inline-block">
             Makeup
             <span className="absolute bottom-2 left-0 w-full h-1 bg-[#D4A373]/30 -z-10"></span>
          </span>
        </h1>
        <p className="text-stone-500 font-light max-w-2xl mx-auto leading-relaxed text-lg">
          Join the next generation of top-tier makeup artists. Learn directly from Geeta Khatri 
          with a curriculum that blends artistry, business, and social media mastery.
        </p>
      </section>

      {/* --- MENTOR SECTION (Enhanced) --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100 flex flex-col lg:flex-row gap-16 items-center">
          
          {/* ✅ IMAGE UPDATED: Friendly Yellow Photo */}
          <div className="relative w-full lg:w-1/3 h-[500px] rounded-t-[200px] rounded-b-3xl overflow-hidden border-8 border-[#F4F1EA] shadow-2xl group">
             <Image 
               src="/geeta-yellow.jpg" // Using the yellow photo as requested
               alt="Geeta Khatri - Your Mentor"
               fill
               className="object-cover group-hover:scale-105 transition-transform duration-700"
               priority
             />
             {/* Floating Badge */}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-stone-900/90 backdrop-blur-md text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest border border-stone-700 shadow-lg whitespace-nowrap">
                Master Artist
             </div>
          </div>

          <div className="flex-1 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
                Meet Your <span className="italic text-[#D4A373]">Mentor</span>
            </h2>
            
            {/* Quote with Styling */}
            <blockquote className="border-l-4 border-[#D4A373] pl-6 py-2 italic text-stone-700 text-xl font-serif bg-[#F4F1EA]/50 rounded-r-lg">
              "Every student should master not just the art of makeup, but also the art of building a successful career."
            </blockquote>

            <div className="space-y-4 text-stone-600 font-light text-lg leading-relaxed">
              <p>
                <strong>Geeta Khatri</strong> is more than just an educator; she is a mentor who has walked the path you aspire to take. With over <strong>12+ years of professional experience</strong>, she brings real-world insights into the classroom.
              </p>
              <p>
                Having honed her skills under global icons like 
                <span className="text-stone-900 font-medium border-b border-[#D4A373]"> Samaira Sandhu, Pooja Khurana, and Meera Sakhrani</span>, 
                she ensures you learn nothing but the best techniques used in the luxury bridal industry.
              </p>
            </div>
            
            <div className="pt-4">
                <Link href="#curriculum" className="inline-flex items-center gap-2 text-[#D4A373] font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                    View Curriculum <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- COURSE CURRICULUM (Stylish Cards) --- */}
      <section id="curriculum" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-stone-900/5 skew-y-3 -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
              <p className="text-[#D4A373] uppercase tracking-[0.2em] text-xs font-bold mb-3">The Roadmap</p>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900">1-Month Mastery Course</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* PART 1: BASIC LEVEL */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-[#F4F1EA] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4A373] transition-colors duration-300">
                <BookOpen className="w-6 h-6 text-[#D4A373] group-hover:text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-1 text-stone-800">Part 1: Basic Level</h3>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-8 font-bold">The Foundation</p>
              
              <ul className="space-y-4">
                <ListItem text="Skin Preparation & Product Knowledge" />
                <ListItem text="Understanding Color Theory & Skin Tones" />
                <ListItem text="Foundation & Concealer Application" />
                <ListItem text="Blush, Highlight & Contour Basics" />
                <ListItem text="Eyebrow Grooming & Lashes" />
                <ListItem text="Natural Day Looks & Everyday Makeup" />
              </ul>
            </div>

            {/* PART 2: ADVANCE LEVEL (Highlighted) */}
            <div className="bg-stone-900 text-stone-300 p-8 rounded-2xl shadow-2xl relative transform lg:-translate-y-6 border border-stone-800">
              <div className="absolute top-0 right-0 bg-[#D4A373] text-stone-900 text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                  Most Popular
              </div>
              <div className="w-14 h-14 bg-stone-800 rounded-full flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-[#D4A373]" />
              </div>
              <h3 className="font-serif text-2xl mb-1 text-white">Part 2: Advance Level</h3>
              <p className="text-[10px] uppercase tracking-widest text-[#D4A373] mb-8 font-bold">Bridal Mastery</p>
              
              <ul className="space-y-4">
                <ListItem text="Bridal Makeup (Day & Night Looks)" darkTheme />
                <ListItem text="Smokey Eyes & Glitter Glam" darkTheme />
                <ListItem text="Cocktail & Party Makeup" darkTheme />
                <ListItem text="Mature Skin Makeup Techniques" darkTheme />
                <ListItem text="Hairstyling Basics for Makeup Artists" darkTheme />
                <ListItem text="Classic & Modern Glam Looks" darkTheme />
              </ul>
            </div>

            {/* PART 3: BUSINESS SKILLS */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-[#F4F1EA] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4A373] transition-colors duration-300">
                <Camera className="w-6 h-6 text-[#D4A373] group-hover:text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-1 text-stone-800">Part 3: Business Skills</h3>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-8 font-bold">Beyond Makeup</p>
              
              <ul className="space-y-4">
                <ListItem text="Instagram Reels & Content Creation" />
                <ListItem text="Lighting & iPhone Photography Tips" />
                <ListItem text="Client Handling & Professional Etiquette" />
                <ListItem text="Branding & Marketing for Artists" />
                <ListItem text="Career Roadmap - How to Start" />
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- GRAND FINALE (Luxury Dark Section) --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#1C1917] text-[#F4F1EA] p-10 md:p-20 rounded-[40px] text-center relative overflow-hidden shadow-2xl border border-stone-800">
          
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D4A373] opacity-10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Your Grand Finale</h2>
              <p className="text-stone-400 mb-12 max-w-lg mx-auto text-lg font-light">
                On the last day, walk away with a professional portfolio and certification ready to launch your career.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                     <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
                     <h4 className="font-serif text-xl mb-2 text-white">Create Looks</h4>
                     <p className="text-xs text-stone-400">2 Full Bridal/Party looks on real models</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                     <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📸</div>
                     <h4 className="font-serif text-xl mb-2 text-white">Portfolio Shoot</h4>
                     <p className="text-xs text-stone-400">Professional model & styling included</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                     <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎓</div>
                     <h4 className="font-serif text-xl mb-2 text-white">Certification</h4>
                     <p className="text-xs text-stone-400">Official Beauty Box Academy Certificate</p>
                  </div>
              </div>
              
              <Link href="/contact" className="inline-block bg-[#D4A373] text-stone-900 px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase hover:bg-white transition-all shadow-lg hover:shadow-[#D4A373]/20 font-bold transform hover:-translate-y-1">
                Book Your Seat Now
              </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

// Helper Component for List Items with Theme Support
function ListItem({ text, darkTheme = false }: { text: string, darkTheme?: boolean }) {
  return (
    <li className="flex items-start gap-3 group">
      <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${darkTheme ? 'bg-[#D4A373]/20' : 'bg-[#D4A373]/10'}`}>
          <Check className={`w-3 h-3 ${darkTheme ? 'text-[#D4A373]' : 'text-[#D4A373]'}`} />
      </div>
      <span className={`text-sm leading-relaxed transition-colors ${darkTheme ? 'text-stone-400 group-hover:text-stone-200' : 'text-stone-600 group-hover:text-stone-900'}`}>
          {text}
      </span>
    </li>
  );
}
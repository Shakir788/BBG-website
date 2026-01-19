import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Star } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Salon Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F4F1EA] to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 border border-[#D4A373]/50 rounded-full px-4 py-1 mb-6 bg-black/30 backdrop-blur-sm animate-fade-in">
             <Star className="w-3 h-3 text-[#D4A373] fill-[#D4A373]" />
             <span className="text-[#D4A373] tracking-[0.2em] uppercase text-xs">Premium Unisex Salon</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 drop-shadow-2xl">
            Redefining <br/> <span className="italic font-light text-[#D4A373]">Elegance</span>
          </h1>
          
          <p className="text-stone-200 max-w-xl mx-auto mb-10 text-lg font-light leading-relaxed tracking-wide drop-shadow-md">
            Experience the finest in bridal artistry and professional makeup education. 
            Where luxury meets soul in the heart of Dehradun.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="bg-[#D4A373] text-stone-900 px-10 py-4 rounded-sm text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(212,163,115,0.3)] font-medium"
            >
              Book Appointment
            </Link>
            <Link 
              href="/academy"
              className="border border-white/30 text-white px-10 py-4 rounded-sm text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-stone-900 transition-all duration-500 backdrop-blur-sm font-medium"
            >
              Join Academy
            </Link>
          </div>
        </div>
      </section>

      {/* --- ABOUT TEASER --- */}
      <section className="py-24 px-6 relative bg-[#F4F1EA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] w-full rounded-t-[200px] rounded-b-lg overflow-hidden shadow-2xl border-[8px] border-white">
             {/* Geeta Ji Placeholder */}
             <Image
               src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop"
               alt="Geeta Khatri"
               fill
               className="object-cover"
             />
          </div>
          
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
              More than makeup, <br/> it's a <span className="italic text-[#D4A373]">feeling.</span>
            </h2>
            <p className="text-stone-600 leading-loose font-light text-lg">
              Founded by <strong>Geeta Khatri</strong>, an internationally certified artist with over 12 years of experience. We believe that true luxury lies in simplicity. Whether you are a bride or a student, our studio is your sanctuary.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[#D4A373] uppercase tracking-widest text-xs hover:gap-4 transition-all font-bold">
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID (ALL USER LINKS UPDATED) --- */}
      <section className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#D4A373] uppercase tracking-widest text-xs font-bold">Our Expertise</span>
            <h2 className="font-serif text-4xl text-stone-900 mt-3">Curated Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. BRIDAL SUITE - (USER LINK: Indian Bride) */}
            <Link href="/services" className="group cursor-pointer">
              <div className="relative h-96 w-full overflow-hidden rounded-t-[100px] mb-6">
                 <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                 <Image
                   src="https://images.unsplash.com/photo-1737515045459-365999ac9da0?q=80&w=687&auto=format&fit=crop"
                   alt="Indian Bridal Makeup"
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                 />
                 <div className="absolute bottom-6 left-6 z-20">
                   <h3 className="text-white font-serif text-2xl drop-shadow-md">Bridal Suite</h3>
                 </div>
              </div>
            </Link>

            {/* 2. THE ACADEMY - (USER LINK: Makeup Products) */}
            <Link href="/academy" className="group cursor-pointer mt-0 md:-mt-12">
              <div className="relative h-96 w-full overflow-hidden rounded-t-[100px] mb-6 border-4 border-[#D4A373]">
                 <div className="absolute top-4 right-4 bg-[#D4A373] text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-lg">POPULAR</div>
                 <Image
                   src="https://plus.unsplash.com/premium_photo-1670006626814-a2157905d768?q=80&w=735&auto=format&fit=crop"
                   alt="Makeup Academy Tools"
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                 />
                 <div className="absolute bottom-6 left-6 z-20">
                   <h3 className="text-white font-serif text-2xl drop-shadow-md">The Academy</h3>
                 </div>
              </div>
            </Link>

            {/* 3. HAIR & SKIN - (USER LINK: Hair Model) */}
            <Link href="/services" className="group cursor-pointer">
              <div className="relative h-96 w-full overflow-hidden rounded-t-[100px] mb-6">
                 <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                 <Image
                   src="https://images.unsplash.com/photo-1717160675489-7779f2c91999?q=80&w=1170&auto=format&fit=crop"
                   alt="Facial and Hair Service"
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                 />
                 <div className="absolute bottom-6 left-6 z-20">
                   <h3 className="text-white font-serif text-2xl drop-shadow-md">Hair & Skin</h3>
                 </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- ACADEMY HIGHLIGHT (USER LINK: Artist Action Shot) --- */}
      <section className="py-24 px-6 bg-stone-900 text-[#F4F1EA]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="flex items-center gap-3 mb-6">
               <GraduationCap className="w-8 h-8 text-[#D4A373]" />
               <span className="text-[#D4A373] uppercase tracking-widest text-sm font-bold">Be The Next Pro</span>
             </div>
             <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
               Professional Makeup <br/> Mastery Course
             </h2>
             <p className="text-stone-400 leading-relaxed mb-8 font-light text-lg">
               Learn directly from Geeta Khatri. From Basic to Advanced Bridal techniques, our 1-Month intensive course is designed to launch your career.
             </p>
             <Link 
               href="/academy"
               className="inline-block bg-[#D4A373] text-stone-900 px-8 py-3 rounded-sm text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 font-medium"
             >
               View Curriculum
             </Link>
          </div>
          
          <div className="order-1 md:order-2 relative h-[400px] md:h-[600px] w-full border border-stone-700 p-4">
             <div className="relative h-full w-full grayscale hover:grayscale-0 transition-all duration-700">
               {/* NEW USER LINK: Artist applying makeup */}
               <Image
                 src="https://images.unsplash.com/photo-1645697744691-9fd0ee315181?q=80&w=765&auto=format&fit=crop" 
                 alt="Makeup Artist Working"
                 fill
                 className="object-cover"
               />
             </div>
          </div>
        </div>
      </section>

    </main>
  );
}
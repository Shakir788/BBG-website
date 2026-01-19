"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Plane, Crown, Sparkles, Check, Star, Heart, Scissors, Droplet, Sun } from 'lucide-react';

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <main className="bg-[#F4F1EA] min-h-screen pt-24 pb-20 overflow-x-hidden selection:bg-[#D4A373] selection:text-white">
      
      {/* --- HERO HEADER --- */}
      <section className={`text-center max-w-4xl mx-auto px-6 mb-20 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-block mb-4 p-2 px-4 rounded-full border border-[#D4A373]/30 bg-white/50 backdrop-blur-sm">
           <p className="text-[#D4A373] tracking-[0.3em] uppercase text-xs font-bold">Excellence in Artistry</p>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-stone-900 leading-tight mb-6">
          Service <span className="italic text-stone-600">Menu</span>
        </h1>
        <p className="text-stone-500 font-light max-w-2xl mx-auto leading-relaxed text-lg">
          Explore our premium makeup packages and extensive salon services.
        </p>
      </section>

      {/* =========================================================
          SECTION 1: STUDIO BRIDAL (With Local Bride Image)
         ========================================================= */}
      
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <SectionTitle title="Studio Bridal Collection" icon={<Crown className="w-6 h-6 text-[#D4A373]" />} />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: Cards */}
            <div className="space-y-6 order-2 md:order-1">
              <PremiumCard 
                title="BRIDAL ROYAL (HD)"
                price="₹22,000"
                tag="MOST POPULAR"
                products="Chanel, Charlotte Tilbury, Giorgio Armani, Tarte"
                includes={[
                   "Draping & Hair Do", "3D Mink Eye Lashes", 
                   "Hair Extensions Included", "Eye Lenses Included"
                ]}
              />
              <PremiumCard 
                title="BRIDAL DELUXE (Basic)"
                price="₹12,000"
                products="Kryolan, Forever 52, MAC"
                includes={[
                   "Draping & Hair Do", "Fake Eye Lashes",
                   "HD Makeup Finish", "Professional Styling"
                ]}
              />
            </div>

            {/* RIGHT: Image (Local File) */}
            <div className="order-1 md:order-2 relative h-[500px] rounded-2xl overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
               {/* Make sure 'service-bride.jpg' is in public folder */}
               <Image 
                 src="/service-bride.jpg" 
                 alt="Indian Bridal Makeup"
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
            </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 2: OCCASIONS (With Local Makeup Image)
         ========================================================= */}

      <section className="max-w-7xl mx-auto px-6 mb-24">
         <SectionTitle title="Occasions & Party" />

         <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: Image (Local File) */}
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden border-8 border-white shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-700">
               {/* Make sure 'service-makeup.jpg' is in public folder */}
               <Image 
                 src="/service-makeup.jpg" 
                 alt="Professional Makeup Aesthetic"
                 fill
                 className="object-cover"
               />
            </div>

            {/* RIGHT: Menu Grid */}
            <div className="grid gap-6">
              
              {/* Engagement / Reception Grid */}
              <div className="grid grid-cols-2 gap-4">
                  <StandardCard 
                    title="RECEPTION HD" price="₹16,000" isHighlight={true}
                    includes={["Hair Extensions", "Eye Lenses", "3D Mink Lashes"]}
                  />
                  <StandardCard 
                    title="RECEPTION BASIC" price="₹10,000"
                    includes={["Fake Eye Lashes", "Hair Do", "Draping"]}
                  />
                  <StandardCard 
                    title="ENGAGEMENT HD" price="₹15,000" isHighlight={true}
                    includes={["Hair Extensions", "Eye Lenses", "3D Mink Lashes"]}
                  />
                  <StandardCard 
                    title="ENGAGEMENT BASIC" price="₹9,000"
                    includes={["Fake Eye Lashes", "Hair Do", "Draping"]}
                  />
              </div>

              {/* Party / Pre-Bridal List */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 mt-4">
                  <h3 className="font-serif text-xl mb-4 text-stone-800">Guest & Family</h3>
                  <ul className="space-y-4">
                      <MenuItem name="Pre-Bridal (Haldi/Mehandi)" price="₹5,000" />
                      <MenuItem name="Party Makeup (HD)" price="₹5,000" />
                      <MenuItem name="Party Makeup (Basic)" price="₹2,000" />
                  </ul>
              </div>

            </div>
         </div>
      </section>

      {/* =========================================================
          SECTION 3: DESTINATION WEDDING (Dark Theme)
         ========================================================= */}
      
      <section className="bg-[#12100E] text-[#F4F1EA] py-24 px-4 md:px-6 relative overflow-hidden my-12 rounded-[50px] mx-2 md:mx-6 shadow-2xl border-t border-[#D4A373]/30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4A373] opacity-[0.03] rounded-full blur-[100px]"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-[#D4A373] px-6 py-2 rounded-full mb-6 bg-black/20 backdrop-blur-md">
               <Plane className="w-4 h-4 text-[#D4A373]" />
               <span className="text-xs uppercase tracking-widest text-[#D4A373] font-bold">Global Service</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-4">Destination Wedding</h2>
            <p className="text-stone-400 font-light max-w-xl mx-auto">
              Luxury packages for your big day, anywhere in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <DarkCard 
               title="BRIDAL HD" price="₹40,000" icon={<Crown />}
               products="Huda Beauty, MAC, Estee Lauder, Chanel"
               includes={["Draping & Hairdo", "Lenses & Extensions", "3D Mink Lashes"]}
               isPremium={true}
            />
            <DarkCard 
               title="RECEPTION" price="₹22,000" icon={<Sparkles />}
               products="Huda Beauty, Too Faced, Nars"
               includes={["Adv. Hairstyling", "Lenses & 3D Lashes", "Premium Draping"]}
            />
            <DarkCard 
               title="PRE-BRIDAL" price="₹10,000" icon={<Heart />} subtitle="Haldi / Mehandi"
               products="Too Faced, Estee Lauder"
               includes={["Soft HD Makeup", "Hairdo & Draping", "Lashes Included"]}
            />
            <DarkCard 
               title="PARTY MAKEUP" price="₹7,000" icon={<Star />} subtitle="For Guests"
               products="Kryolan Ultra HD, Too Faced"
               includes={["HD Finish", "Hairstyling Included", "Lashes Included"]}
            />
          </div>
          <p className="text-center text-stone-500 italic mt-12 text-sm">* Travel & Stay charges are extra.</p>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: SALON SERVICE MENU (With Local Salon Image)
         ========================================================= */}
      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl text-stone-900 mb-4">Salon Service Menu</h2>
          <div className="w-24 h-1 bg-[#D4A373] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           
           {/* IMAGE CARD (Local File) */}
           <div className="md:col-span-1 relative h-[300px] md:h-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              {/* Make sure 'service-salon.jpg' is in public folder */}
              <Image 
                src="/service-salon.jpg" 
                alt="Luxury Salon Interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-6 left-6 text-white">
                 <h3 className="font-serif text-3xl">Premium<br/>Care</h3>
              </div>
           </div>

           {/* MENU LISTS */}
           <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
               
               <MenuCategory title="Hair Studio" icon={<Scissors/>}>
                   <MenuItem name="Bangs / Fringe Cut" price="₹150" />
                   <MenuItem name="Hair Trimming" price="₹200" />
                   <MenuItem name="Hair Cut With Wash" price="₹350" />
                   <MenuItem name="Split Ends Removal" price="₹400" />
                   <MenuItem name="Hair Wash" price="₹200" />
                   <MenuItem name="Straight Blow Dry" price="₹300" />
                   <MenuItem name="Out Curls / Hair Curls" price="₹400 - ₹500" />
                   <MenuItem name="Hair Straightening" price="₹500" />
               </MenuCategory>

               <MenuCategory title="Hair Spa Treatment" icon={<Droplet/>}>
                   <MenuItem name="Basic Hair Spa" price="₹500" />
                   <MenuItem name="L'Oreal Hair Spa" price="₹800" />
                   <MenuItem name="Anti Dandruff / Hair Fall" price="₹1100" />
                   <MenuItem name="DE Fabulous Treatment" price="₹1600" />
                   <MenuItem name="Keratin Treatment" price="₹3000 - ₹5500" />
                   <MenuItem name="Smoothing" price="₹2500 - ₹4500" />
                   <MenuItem name="Botox Treatment" price="₹3500 - ₹5500" />
               </MenuCategory>

               <MenuCategory title="Facials" icon={<Sun/>}>
                   <MenuItem name="Basic Facial (Sara)" price="₹500" />
                   <MenuItem name="Papaya / Charcoal" price="₹600" />
                   <MenuItem name="Vedic Line" price="₹700" />
                   <MenuItem name="Cheryl's Vitalift" price="₹1200" />
                   <MenuItem name="Cheryl's Tan Clear" price="₹1500" />
                   <MenuItem name="Lotus Instafair" price="₹1900" />
                   <MenuItem name="Lotus Four Layer" price="₹2500" />
                   <MenuItem name="O3+ Whitening" price="₹1400" />
                   <MenuItem name="O3+ Diamond" price="₹3500" />
               </MenuCategory>

               <MenuCategory title="Hair Color" icon={<Sparkles/>}>
                   <MenuItem name="Root Touch Up (Streax)" price="₹500" />
                   <MenuItem name="Root Touch Up (L'Oreal)" price="₹700" />
                   <MenuItem name="Global Hair Color (Base)" price="₹2000" />
                   <MenuItem name="Global Highlights" price="₹2500" />
                   <MenuItem name="Balayage Technique" price="₹3000" />
                   <MenuItem name="Crown Highlights" price="₹1000" />
               </MenuCategory>

               <MenuCategory title="Cleanups & Bleach" icon={<Check/>}>
                   <MenuItem name="Sara Cleanup" price="₹300" />
                   <MenuItem name="Papaya / Vedic Line" price="₹400" />
                   <MenuItem name="Lotus Cleanup" price="₹600" />
                   <MenuItem name="O3+ Whitening" price="₹900" />
                   <MenuItem name="Kenpeki Cleanup" price="₹1300" />
                   <MenuItem name="Face D-Tan" price="₹250" />
                   <MenuItem name="Full Body Bleach" price="₹3000" />
               </MenuCategory>

               <MenuCategory title="Body & Grooming" icon={<Heart/>}>
                   <MenuItem name="Eyebrow Threading" price="₹30" />
                   <MenuItem name="Full Face Threading" price="₹200" />
                   <MenuItem name="Full Arms + Underarms" price="₹500" />
                   <MenuItem name="Full Legs Wax" price="₹700" />
                   <MenuItem name="Full Body Wax" price="₹4000" />
                   <MenuItem name="Manicure" price="₹500" />
                   <MenuItem name="Pedicure" price="₹600" />
                   <MenuItem name="Full Body Polishing" price="₹3000" />
               </MenuCategory>

           </div>
        </div>
      </section>

    </main>
  );
}

// ------------------------------------
// ✨ COMPONENTS
// ------------------------------------

function SectionTitle({title, icon}: any) {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
       <div className="h-px w-16 bg-[#D4A373]/50"></div>
       <div className="text-center">
          {icon && <div className="flex justify-center mb-2">{icon}</div>}
          <h2 className="font-serif text-3xl text-stone-800">{title}</h2>
       </div>
       <div className="h-px w-16 bg-[#D4A373]/50"></div>
    </div>
  )
}

function PremiumCard({ title, price, tag, products, includes }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl relative border border-stone-100 shadow-xl transition-all duration-300 hover:scale-[1.02]">
        {tag && (
          <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#D4A373] to-[#B08968] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg tracking-wider">
            {tag}
          </div>
        )}
        <div className="flex justify-between items-start mb-6">
            <h3 className="font-serif text-2xl text-stone-900">{title}</h3>
            <span className="font-serif text-3xl text-[#D4A373]">{price}</span>
        </div>
        <ul className="space-y-3 mb-6">
            {includes.map((item: string, i: number) => (
                <li key={i} className="flex gap-3 items-center text-sm text-stone-600">
                    <Check className="w-4 h-4 text-[#D4A373]" /> {item}
                </li>
            ))}
        </ul>
        <div className="pt-4 border-t border-stone-100">
           <p className="text-xs text-stone-400 italic">Includes: <span className="text-stone-500 font-medium">{products}</span></p>
        </div>
    </div>
  )
}

function StandardCard({ title, price, products, includes, isHighlight }: any) {
  return (
    <div className={`bg-white p-5 rounded-xl transition-all shadow-sm hover:shadow-md ${isHighlight ? 'border-2 border-[#D4A373]/20' : 'border border-stone-200'}`}>
        <div className="flex flex-col mb-3">
            <span className="font-serif text-xl text-[#D4A373] mb-1">{price}</span>
            <h3 className="font-serif text-sm text-stone-900 font-bold">{title}</h3>
        </div>
        <ul className="space-y-1">
            {includes.map((item: string, i: number) => (
                <li key={i} className="flex gap-2 items-center text-[11px] text-stone-600">
                    <Check className="w-3 h-3 text-[#D4A373]" /> {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

function DarkCard({ title, price, icon, subtitle, products, includes, isPremium }: any) {
  return (
    <div className={`bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#D4A373] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden`}>
       {isPremium && <div className="absolute top-0 right-0 w-16 h-16 bg-[#D4A373] opacity-20 blur-xl rounded-full -mr-8 -mt-8"></div>}
       <div>
         <div className="mb-4">
           <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${isPremium ? 'bg-[#D4A373] text-stone-900' : 'bg-white/10 text-[#D4A373]'}`}>
             {React.cloneElement(icon, { size: 20 })}
           </div>
           <h3 className="font-serif text-xl text-white">{title}</h3>
           {subtitle && <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">{subtitle}</p>}
         </div>
         <div className="space-y-3 mb-6">
           <ul className="space-y-2">
             {includes.map((item: string, i: number) => (
               <li key={i} className="flex gap-2 items-center text-xs text-stone-300">
                 <Check className="w-3 h-3 text-[#D4A373]" /> {item}
               </li>
             ))}
           </ul>
         </div>
       </div>
       <div className="font-serif text-2xl text-[#D4A373]">{price}</div>
    </div>
  )
}

function MenuCategory({ title, icon, children }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
       <div className="flex items-center gap-3 mb-6 border-b border-[#D4A373]/20 pb-4">
          <div className="text-[#D4A373]">{React.cloneElement(icon, { size: 22 })}</div>
          <h3 className="font-serif text-xl text-stone-800">{title}</h3>
       </div>
       <ul className="space-y-3">
         {children}
       </ul>
    </div>
  )
}

function MenuItem({ name, price }: { name: string, price: string }) {
  return (
    <li className="flex justify-between items-baseline text-sm">
      <span className="text-stone-600 font-medium">{name}</span>
      <span className="text-stone-800 font-serif font-bold">{price}</span>
    </li>
  )
}
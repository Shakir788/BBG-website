"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Instagram, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Bridal Makeup Package',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp Message with a clean format
    const text = `*New Inquiry for Beauty Box* ✨%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Date:* ${formData.date}%0A*Message:* ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/918630407452?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <main className="bg-[#F4F1EA] min-h-screen pt-24 pb-20 selection:bg-[#D4A373] selection:text-white overflow-hidden">
      
      {/* --- HERO HEADER (Animated) --- */}
      <section className="text-center max-w-4xl mx-auto px-6 mb-16 animate-fade-in-up">
        <div className="inline-block mb-4 px-4 py-1 border border-[#D4A373]/30 rounded-full bg-white/50 backdrop-blur-sm">
            <p className="text-[#D4A373] tracking-[0.3em] uppercase text-[10px] font-bold">Get in Touch</p>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-stone-900 leading-tight mb-6">
          Book Your <span className="italic text-stone-600 relative">
            Experience
            {/* Subtle underline decoration */}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#D4A373]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </h1>
        <p className="text-stone-500 font-light text-lg max-w-2xl mx-auto">
          Step into a world of elegance. We are waiting to craft your perfect look.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* --- LEFT: CONTACT INFO & MAP --- */}
        <div className="space-y-10">
          
          {/* Info Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            {/* Address Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group border border-white hover:border-[#D4A373]/30">
              <div className="w-12 h-12 bg-[#F9F7F2] rounded-2xl flex items-center justify-center mb-6 text-stone-400 group-hover:text-white group-hover:bg-[#D4A373] transition-all duration-500 rotate-0 group-hover:rotate-6">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-2">Visit Studio</h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed">
                Indraprastha Lane No. 15/16,<br/>
                Near 6 No. Puliya, Nathanpur,<br/>
                Dehradun, Uttarakhand
              </p>
              <Link href="https://maps.google.com/?q=Beauty+Box+by+Geeta+Dehradun" target="_blank" className="inline-flex items-center gap-1 text-[#D4A373] text-xs font-bold mt-4 uppercase tracking-widest hover:gap-2 transition-all">
                Get Directions <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group border border-white hover:border-[#D4A373]/30">
              <div className="w-12 h-12 bg-[#F9F7F2] rounded-2xl flex items-center justify-center mb-6 text-stone-400 group-hover:text-white group-hover:bg-[#D4A373] transition-all duration-500 rotate-0 group-hover:-rotate-6">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-2">Call Us</h3>
              <p className="text-stone-500 font-light text-sm mb-2 hover:text-[#D4A373] transition-colors">
                 <a href="tel:+918630407452" className="text-lg">+91 86304 07452</a>
              </p>
              <a href="https://wa.me/918630407452" target="_blank" className="inline-flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-green-600 hover:text-white transition-all">
                 <MessageCircle className="w-3 h-3" /> Chat Now
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group border border-white hover:border-[#D4A373]/30">
              <div className="w-12 h-12 bg-[#F9F7F2] rounded-2xl flex items-center justify-center mb-6 text-stone-400 group-hover:text-white group-hover:bg-[#D4A373] transition-all duration-500">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-2">Email Us</h3>
              <a href="mailto:geetakhatrionweb@gmail.com" className="text-stone-500 font-light text-sm hover:text-[#D4A373] break-all">
                geetakhatrionweb@gmail.com
              </a>
            </div>

            {/* Social Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group border border-white hover:border-[#D4A373]/30">
              <div className="w-12 h-12 bg-[#F9F7F2] rounded-2xl flex items-center justify-center mb-6 text-stone-400 group-hover:text-white group-hover:bg-[#D4A373] transition-all duration-500">
                <Instagram className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-2">Follow Us</h3>
              <Link href="https://instagram.com/beautyboxbygeeta" target="_blank" className="text-stone-500 font-light text-sm hover:text-[#D4A373] underline decoration-[#D4A373]/30 hover:decoration-[#D4A373]">
                @beautyboxbygeeta
              </Link>
            </div>
          </div>

          {/* EXACT LOCATION MAP */}
          <div className="w-full h-72 bg-white p-2 rounded-[30px] shadow-lg border border-stone-100 relative group overflow-hidden">
            <div className="absolute inset-0 bg-[#D4A373]/10 z-0 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
            <iframe 
              // This query targets "Beauty Box by Geeta Dehradun" specifically
              src="https://maps.google.com/maps?q=Beauty+Box+by+Geeta+Dehradun&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{border:0, borderRadius: '20px'}} 
              allowFullScreen={true}
              loading="lazy"
              title="Beauty Box Location"
              className="grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
            ></iframe>
          </div>

        </div>

        {/* --- RIGHT: LUXURY BOOKING FORM --- */}
        <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl border border-[#D4A373]/20 relative overflow-hidden">
          
          {/* Decorative Background Blur */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#D4A373]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="mb-10 relative z-10">
             <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-3">Send an Inquiry</h2>
             <p className="text-stone-400 text-sm">Fill the form and we will start your beauty journey on WhatsApp.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            
            {/* Name */}
            <div className="relative group">
              <input 
                type="text" 
                name="name"
                required
                className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-800 focus:outline-none focus:border-[#D4A373] transition-all text-lg placeholder-transparent peer"
                placeholder="Name"
                onChange={handleChange}
              />
              <label className="absolute left-0 -top-3 text-xs text-stone-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-[#D4A373] peer-focus:text-xs transition-all cursor-text uppercase tracking-widest font-bold">
                 Your Name
              </label>
            </div>

            {/* Phone & Date Row */}
            <div className="grid grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-800 focus:outline-none focus:border-[#D4A373] transition-all text-lg placeholder-transparent peer"
                    placeholder="Phone"
                    onChange={handleChange}
                  />
                  <label className="absolute left-0 -top-3 text-xs text-stone-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-[#D4A373] peer-focus:text-xs transition-all cursor-text uppercase tracking-widest font-bold">
                    Phone
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="date" 
                    name="date"
                    required
                    className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-600 focus:outline-none focus:border-[#D4A373] transition-all text-lg"
                    onChange={handleChange}
                  />
                  <label className="absolute left-0 -top-3 text-xs text-[#D4A373] uppercase tracking-widest font-bold">
                    Preferred Date
                  </label>
                </div>
            </div>

            {/* Service Selection */}
            <div className="relative pt-4">
              <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-bold">I am interested in</label>
              <div className="relative">
                <select 
                    name="service"
                    className="w-full bg-[#F4F1EA]/50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-[#D4A373]/50 transition-all text-stone-800 cursor-pointer appearance-none text-sm font-medium"
                    onChange={handleChange}
                >
                    <option>Bridal Makeup Package</option>
                    <option>Engagement / Party Makeup</option>
                    <option>Academy Course Inquiry</option>
                    <option>Hair / Skin Services</option>
                    <option>Other Inquiry</option>
                </select>
                {/* Custom Arrow */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="relative group pt-2">
              <textarea 
                name="message"
                rows={3}
                className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-800 focus:outline-none focus:border-[#D4A373] transition-all text-lg placeholder-transparent peer resize-none"
                placeholder="Message"
                onChange={handleChange}
              ></textarea>
              <label className="absolute left-0 -top-3 text-xs text-stone-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-[#D4A373] peer-focus:text-xs transition-all cursor-text uppercase tracking-widest font-bold">
                 Your Message (Optional)
              </label>
            </div>

            {/* Submit Button (Animated) */}
            <button 
              type="submit"
              className="group w-full bg-stone-900 text-[#D4A373] py-5 rounded-xl text-sm tracking-[0.2em] uppercase font-bold hover:bg-[#D4A373] hover:text-white transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#D4A373]/40 flex items-center justify-center gap-3 active:scale-95"
            >
              Send Request <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-[10px] text-center text-stone-400 flex items-center justify-center gap-1">
              <MessageCircle className="w-3 h-3 text-green-500" />
              Opening WhatsApp to confirm details securely.
            </p>

          </form>
        </div>

      </div>
    </main>
  );
}
"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, Send, Sparkles } from 'lucide-react';

export default function LaraChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Namaste! 🙏\nMain Lara hoon, Beauty Box ki AI Assistant.\n\nKya main aapko *Prices* bataun ya *Appointment* book karu?' }
  ]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]) {
        setMessages([...newMessages, { role: 'assistant', content: data.choices[0].message.content }]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      
      {/* --- CHAT WINDOW --- */}
      {isOpen && (
        <div className="bg-white/95 backdrop-blur-md w-[360px] h-[550px] rounded-[30px] shadow-2xl border border-white/50 flex flex-col overflow-hidden mb-4 animate-fade-in-up origin-bottom-right transition-all">
          
          {/* Header */}
          <div className="bg-[#1C1917] p-4 flex justify-between items-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A373] opacity-20 rounded-full blur-2xl -mr-10 -mt-10"></div>

            <div className="flex items-center gap-3 relative z-10">
              {/* HEADER AVATAR */}
              <div className="relative w-12 h-12 rounded-full border-2 border-[#D4A373] p-0.5">
                 <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                    {/* ✅ UPDATED: .png Extension */}
                    <Image src="/lara-avatar.png" alt="Lara AI" fill className="object-cover" />
                 </div>
                 <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1C1917] rounded-full"></div>
              </div>
              
              <div>
                <h3 className="font-serif text-xl text-[#F4F1EA] tracking-wide">LARA</h3>
                <p className="text-[10px] text-[#D4A373] uppercase tracking-widest font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> AI Assistant
                </p>
              </div>
            </div>
            
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F4F1EA] scrollbar-thin scrollbar-thumb-[#D4A373]/20">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                 
                 {/* ✅ UPDATED: Chat Bubble Avatar (.png) */}
                 {msg.role === 'assistant' && (
                   <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4A373]/30 mr-2 shrink-0 self-end mb-1">
                      <Image src="/lara-avatar.png" alt="Bot" width={32} height={32} className="object-cover" />
                   </div>
                 )}

                <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#1C1917] text-[#D4A373] rounded-br-none border border-[#D4A373]/20' 
                    : 'bg-white text-stone-700 border border-stone-200 rounded-bl-none'
                }`}>
                  {msg.content.split('\n').map((line, i) => (
                    <p key={i} className={`mb-1 last:mb-0 ${line.startsWith('-') ? 'pl-2' : ''}`}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start items-center gap-2 pl-10">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#D4A373] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#D4A373] rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-[#D4A373] rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-stone-100">
            <div className="flex gap-2 items-center bg-[#F4F1EA] rounded-full px-2 py-2 border border-stone-200 focus-within:border-[#D4A373] transition-all shadow-inner">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask LARA..." 
                  className="flex-1 bg-transparent px-3 text-sm focus:outline-none text-stone-800 placeholder-stone-400"
                />
                <button 
                  onClick={sendMessage}
                  disabled={isLoading}
                  className="w-10 h-10 bg-[#1C1917] text-[#D4A373] rounded-full flex items-center justify-center hover:bg-[#D4A373] hover:text-white transition-all disabled:opacity-50 shadow-lg transform active:scale-90"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
            </div>
          </div>
        </div>
      )}

      {/* --- FLOATING TOGGLE BUTTON --- */}
      <div 
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
          {/* Tooltip */}
          <div className={`absolute bottom-full right-0 mb-3 whitespace-nowrap bg-[#1C1917] text-[#D4A373] text-xs font-bold px-4 py-2 rounded-lg shadow-xl transition-all duration-300 transform ${isHovered || !isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
             Hi! Need help? 👋
             <div className="absolute -bottom-1 right-6 w-3 h-3 bg-[#1C1917] rotate-45"></div>
          </div>

          {/* Main Button */}
          <div className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 border-4 border-[#F4F1EA] relative overflow-hidden ${isOpen ? 'bg-[#1C1917] rotate-90' : 'bg-[#1C1917] hover:scale-110'}`}>
             {isOpen ? (
                 <X className="w-8 h-8 text-[#D4A373]" />
             ) : (
                 // ✅ UPDATED: Avatar in Button (.png)
                 <div className="w-full h-full relative">
                    <Image 
                      src="/lara-avatar.png" 
                      alt="Lara" 
                      fill 
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="absolute top-0 right-0 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A373] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-white text-[9px] font-bold items-center justify-center border border-white">1</span>
                    </span>
                 </div>
             )}
          </div>
      </div>

    </div>
  );
}
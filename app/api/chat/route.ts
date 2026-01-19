import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // 🧠 LARA's Knowledge Base (FULL MENU FROM YOUR CODE)
    const systemPrompt = {
      role: "system",
      content: `
      You are LARA, the AI Receptionist for 'Beauty Box by Geeta' (Dehradun).
      
      Your Personality:
      - Professional, Warm, & Helpful.
      - Speak in "Hinglish" (Natural mix of Hindi & English).
      - Keep answers short (Max 2-3 sentences).
      
      --- 💄 FULL OFFICIAL RATE CARD ---

      1. BRIDAL & WEDDING MAKEUP (Studio):
      - Bridal Royal (HD): ₹22,000 (Includes: Draping, Hair Do, 3D Mink Lashes, Hair Extensions, Lenses).
      - Bridal Deluxe (Basic): ₹12,000 (Includes: Draping, Hair Do, Fake Lashes, HD Finish).
      - Reception HD: ₹16,000.
      - Reception Basic: ₹10,000.
      - Engagement HD: ₹15,000.
      - Engagement Basic: ₹9,000.
      - Pre-Bridal (Haldi/Mehandi): ₹5,000.

      2. PARTY MAKEUP (Guest):
      - Party Makeup (HD): ₹5,000.
      - Party Makeup (Basic): ₹2,000.

      3. DESTINATION WEDDING (Global Service):
      - Bridal HD: ₹40,000.
      - Reception: ₹22,000.
      - Pre-Bridal (Haldi/Mehandi): ₹10,000.
      - Party Makeup (Guest): ₹7,000.
      *Note: Travel & Stay charges extra.

      4. HAIR STUDIO:
      - Bangs / Fringe Cut: ₹150.
      - Hair Trimming: ₹200.
      - Hair Cut With Wash: ₹350.
      - Split Ends Removal: ₹400.
      - Hair Wash: ₹200.
      - Straight Blow Dry: ₹300.
      - Out Curls / Hair Curls: ₹400 - ₹500.
      - Hair Straightening: ₹500.

      5. HAIR SPA & TREATMENTS:
      - Basic Hair Spa: ₹500.
      - L'Oreal Hair Spa: ₹800.
      - Anti Dandruff / Hair Fall: ₹1100.
      - DE Fabulous Treatment: ₹1600.
      - Keratin Treatment: ₹3000 - ₹5500.
      - Smoothing: ₹2500 - ₹4500.
      - Botox Treatment: ₹3500 - ₹5500.

      6. HAIR COLOR:
      - Root Touch Up (Streax): ₹500.
      - Root Touch Up (L'Oreal): ₹700.
      - Global Hair Color (Base): ₹2000.
      - Global Highlights: ₹2500.
      - Balayage Technique: ₹3000.
      - Crown Highlights: ₹1000.

      7. FACIALS:
      - Basic Facial (Sara): ₹500.
      - Papaya / Charcoal: ₹600.
      - Vedic Line: ₹700.
      - Cheryl's Vitalift: ₹1200.
      - Cheryl's Tan Clear: ₹1500.
      - Lotus Instafair: ₹1900.
      - Lotus Four Layer: ₹2500.
      - O3+ Whitening: ₹1400.
      - O3+ Diamond: ₹3500.

      8. CLEANUPS & BLEACH:
      - Sara Cleanup: ₹300.
      - Papaya / Vedic Line: ₹400.
      - Lotus Cleanup: ₹600.
      - O3+ Whitening Cleanup: ₹900.
      - Kenpeki Cleanup: ₹1300.
      - Face D-Tan: ₹250.
      - Full Body Bleach: ₹3000.

      9. BODY & GROOMING:
      - Eyebrow Threading: ₹30.
      - Full Face Threading: ₹200.
      - Full Arms + Underarms: ₹500.
      - Full Legs Wax: ₹700.
      - Full Body Wax: ₹4000.
      - Manicure: ₹500.
      - Pedicure: ₹600.
      - Full Body Polishing: ₹3000.

      --- END OF MENU ---

      Instruction:
      - Answer strictly based on this list.
      - If user asks generally (e.g. "Facial ka price?"), give range: "Facials start from ₹500 (Basic) up to ₹3500 (O3+ Diamond)."
      - Always encourage booking via WhatsApp (+91 8630407452).
      `
    };

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://beautyboxbygeeta.com',
        'X-Title': 'Beauty Box LARA',
      },
      body: JSON.stringify({
        model: 'xiaomi/mimo-v2-flash:freet', 
        messages: [systemPrompt, ...messages],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    
    if (data.error) {
      console.error('OpenRouter Error:', data.error);
      return NextResponse.json({ 
        choices: [{ message: { content: "Technical issue. Please WhatsApp: +91 8630407452" } }] 
      });
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
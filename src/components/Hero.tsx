import { useState } from 'react';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="w-full relative px-2 md:px-4 max-w-[1400px] mx-auto pb-12 pt-6">
      {/* The main hero box */}
      <div className="w-full bg-[#E5D7CC] p-2 md:p-3 flex flex-col items-center justify-center relative">
        
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/[0.03]"></div>
        
        <div className="flex flex-col items-center justify-center w-full relative z-10 bg-[#F9F4F1] min-h-[420px] md:min-h-[60vh]">
          {!imageError ? (
            <img 
              src="/logo.png" 
              alt="Seorin Lab Logo" 
              className="h-[280px] md:h-[380px] lg:h-[450px] w-auto max-w-full object-contain animate-scale-in transition-transform duration-700 hover:scale-[1.02]" 
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center animate-fade-in-up">
              <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 md:mb-8 md:scale-125 transition-transform duration-700 hover:scale-150">
                {/* Outer circles now matching the darker shade */}
                <circle cx="50" cy="50" r="46" stroke="#8F5D5A" strokeWidth="1" />
                <circle cx="50" cy="50" r="39" stroke="#8F5D5A" strokeWidth="1" />
                
                {/* Inner botanical elements */}
                <g stroke="#8F5D5A" fill="#8F5D5A">
                  <circle cx="45" cy="52" r="1.2" fill="#8F5D5A" stroke="none" />
                  <circle cx="55" cy="52" r="1.2" fill="#8F5D5A" stroke="none" />
                  <path d="M50 32 C53 40, 58 45, 58 45 C58 45, 53 48, 50 56 C47 48, 42 45, 42 45 C42 45, 47 40, 50 32 Z" strokeWidth="1.2" fill="none" />
                  <path d="M50 56 C54 52, 59 50, 63 52 C59 55, 54 59, 50 63 C46 59, 41 55, 37 52 C41 50, 46 52, 50 56 Z" strokeWidth="1.2" fill="none" />
                  <path d="M50 68 C38 64, 28 50, 24 38" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  <path d="M37 54 C32 49, 26 50, 26 50 C26 50, 29 55, 37 54 Z" strokeWidth="1.2" fill="none" />
                  <path d="M30 44 C25 38, 20 39, 20 39 C20 39, 22 45, 30 44 Z" strokeWidth="1.2" fill="none" />
                  <path d="M50 68 C62 64, 72 50, 76 38" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  <path d="M63 54 C68 49, 74 50, 74 50 C74 50, 71 55, 63 54 Z" strokeWidth="1.2" fill="none" />
                  <path d="M70 44 C75 38, 80 39, 80 39 C80 39, 78 45, 70 44 Z" strokeWidth="1.2" fill="none" />
                  
                  {/* The two top sparkles */}
                  <path d="M32 23 C32 25, 30 27, 28 27 C30 27, 32 29, 32 31 C32 29, 34 27, 36 27 C34 27, 32 25, 32 23 Z" strokeWidth="1.2" fill="#8F5D5A" />
                  <path d="M68 23 C68 25, 66 27, 64 27 C66 27, 68 29, 68 31 C68 29, 70 27, 72 27 C70 27, 68 25, 68 23 Z" strokeWidth="1.2" fill="#8F5D5A" />
                  
                  {/* Bottom little jewels */}
                  <path d="M50 62 L51.5 66 L50 70 L48.5 66 Z" stroke="none" />
                  <path d="M50 43 L51 46.5 L50 50 L49 46.5 Z" stroke="none" />
                </g>
              </svg>

              <h2 className="text-[44px] md:text-[65px] lg:text-[75px] tracking-[0.25em] font-serif text-[#4A4F4D] uppercase font-medium mt-4 md:mt-8 relative z-10 w-full text-center">
                Seorin Lab
              </h2>
              
              <div className="w-[110%] max-w-[550px] md:max-w-[700px] h-[1px] bg-[#C2C1BD] mt-4 mb-5"></div>
              
              <p className="font-serif italic text-[#8B847A] text-2xl lg:text-3xl tracking-[0.1em]">
                Korean Skincare
              </p>
            </div>
          )}
        </div>

        {/* The overlay button at the bottom center */}
        <div className="absolute left-1/2 -bottom-[22px] -translate-x-1/2 z-10">
          <button 
            className="btn-premium bg-[#4D4A48] hover:bg-[#3A3735] text-white px-10 md:px-14 py-4 rounded-full text-[10px] md:text-[11px] font-semibold tracking-[0.25em] shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap uppercase"
            onClick={() => {
              const el = document.getElementById('shop-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Discover Now
          </button>
        </div>
      </div>
    </section>
  );
}

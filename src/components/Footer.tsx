import { Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-16 flex flex-col items-center justify-center border-t border-black/5 mt-10 relative">
      
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/[0.01] to-transparent pointer-events-none"></div>

      {/* Logo repeated */}
      <div className="flex flex-col items-center mb-12 mt-6 relative z-10">
        <h2 className="text-xl md:text-2xl tracking-[0.25em] font-normal text-[#4A4A4A] uppercase ml-2">
          Seorin Lab
        </h2>
        <div className="w-12 h-[1px] gold-line mt-2 mb-2"></div>
        <span className="text-[7.5px] md:text-[8px] tracking-[0.3em] text-[#A39F99] uppercase ml-1">
          Korean Skincare
        </span>
      </div>
      
      {/* Social Icons */}
      <div className="flex items-center gap-8 mb-16 text-[#B5B0A8] relative z-10">
        <a href="https://wa.me/541125578250" target="_blank" rel="noopener noreferrer" className="inline-flex hover:text-[#4A4A4A] hover:scale-110 transition-all duration-300" style={{ color: 'inherit', textDecoration: 'none' }}>
          <MessageCircle size={22} strokeWidth={1.5} />
        </a>
        <a href="https://www.instagram.com/seorinlab.skincare?igsh=OTNmOWRmYWVwYjh1&utm_source=qr" target="_blank" rel="noopener noreferrer" className="inline-flex hover:text-[#4A4A4A] hover:scale-110 transition-all duration-300" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Instagram size={22} strokeWidth={1.5} />
        </a>
        <a href="mailto:seorin_lab@outlook.com" className="inline-flex hover:text-[#4A4A4A] hover:scale-110 transition-all duration-300" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Mail size={22} strokeWidth={1.5} />
        </a>
      </div>
      
      {/* Copyright */}
      <p className="text-[7px] md:text-[8px] tracking-[0.2em] text-[#ACAAA6] uppercase text-center font-medium mb-4 relative z-10">
        © 2026 Seorin Lab. Argentina.
      </p>
    </footer>
  )
}

export default function Philosophy() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-20 mt-10 md:mt-20 flex flex-col items-center justify-center text-center">
      {/* Decorative element */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-[1px] bg-accent-pink/40"></div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent-pink/60">
          <path d="M8 0C8 2 6 4 4 4C6 4 8 6 8 8C8 6 10 4 12 4C10 4 8 2 8 0Z" fill="currentColor"/>
          <path d="M8 8C8 10 6 12 4 12C6 12 8 14 8 16C8 14 10 12 12 12C10 12 8 10 8 8Z" fill="currentColor"/>
        </svg>
        <div className="w-8 h-[1px] bg-accent-pink/40"></div>
      </div>

      <h4 className="text-[9px] md:text-[10px] tracking-[0.4em] text-[#D9ABA0] uppercase font-bold mb-6">
        LO MEJOR PARA TU PIEL
      </h4>
      
      <p className="font-serif italic text-lg md:text-[22px] leading-[1.25] md:leading-[1.2] text-[#4A4A4A] max-w-[280px] md:max-w-[340px] text-balance font-light mx-auto">
        Productos originales, importados y seleccionados para el cuidado real de tu piel
      </p>

      {/* Bottom decorative element */}
      <div className="flex items-center gap-4 mt-8">
        <div className="w-8 h-[1px] bg-accent-pink/40"></div>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="text-accent-pink/50">
          <path d="M4 0L5 3H8L5.5 5L6.5 8L4 6L1.5 8L2.5 5L0 3H3L4 0Z" fill="currentColor"/>
        </svg>
        <div className="w-8 h-[1px] bg-accent-pink/40"></div>
      </div>
    </section>
  )
}

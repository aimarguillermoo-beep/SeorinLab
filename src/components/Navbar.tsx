import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];

  const handleCategoryClick = (cat: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('filterCategory', { detail: cat }));
    }, 100);
  };

  return (
    <>
      {/* Logo Section - scrolls away naturally */}
      <div className="w-full pt-6 pb-2 px-4 md:px-8 bg-page-bg">
        <div className="max-w-5xl mx-auto flex justify-center">
          <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <h1 className="tracking-[0.25em] font-normal text-text-main uppercase text-2xl md:text-3xl" style={{ paddingLeft: '0.25em' }}>
              Seorin Lab
            </h1>
            <div className="w-[110%] h-[1px] bg-text-main/20 mt-1 mb-1.5"></div>
            <span className="font-serif italic tracking-widest text-text-light text-[11px] md:text-xs" style={{ paddingLeft: '0.1em' }}>
              Korean Skincare
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Nav Bar - constant height, never changes */}
      <nav className="w-full px-4 md:px-8 py-3 sticky top-0 z-50 bg-[#FEF6F5]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Hamburger - Wrap in flex-1 to perfectly center the nav links */}
          <div className="flex-1 flex justify-start">
            <div className="relative">
              <button 
                className="text-text-main hover:opacity-70 transition-opacity z-50 flex items-center pt-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute top-8 left-0 min-w-[220px] bg-[#FEF6F5] shadow-xl rounded-md py-4 z-50 flex flex-col border border-black/5 animate-fade-in">
                  <span className="px-5 mb-3 text-[10px] tracking-[0.2em] uppercase font-bold text-text-light/80 border-b border-black/5 pb-2">
                    Categorías
                  </span>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryClick(cat)}
                      className="px-5 py-2.5 text-left text-[13px] md:text-sm text-text-main hover:bg-white/60 hover:text-accent-pink transition-colors w-full tracking-wide"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex-none flex justify-center items-center text-[10px] md:text-xs tracking-[0.15em] font-medium text-text-light uppercase select-none">
            {/* HOME */}
            <div className="w-20 md:w-28 flex justify-center">
              <div 
                className="flex flex-col items-center group cursor-pointer hover:text-text-main transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span className="mb-1">HOME</span>
                <div className="w-0 group-hover:w-6 h-[1.5px] gold-line transition-all duration-300"></div>
              </div>
            </div>

            {/* SHOP */}
            <div className="w-20 md:w-28 flex justify-center">
              <div 
                className="flex flex-col items-center group cursor-pointer hover:text-text-main transition-colors"
                onClick={() => {
                  const el = document.getElementById('shop-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="mb-1">SHOP</span>
                <div className="w-0 group-hover:w-6 h-[1.5px] gold-line transition-all duration-300"></div>
              </div>
            </div>

            {/* CONTACT */}
            <div className="w-20 md:w-28 flex justify-center">
              <div 
                className="flex flex-col items-center group cursor-pointer hover:text-text-main transition-colors"
                onClick={() => {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }}
              >
                <span className="mb-1">CONTACT</span>
                <div className="w-0 group-hover:w-6 h-[1.5px] gold-line transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* Cart */}
          <div className="flex-1 flex justify-end">
            <button 
              className="text-text-main hover:opacity-70 transition-opacity relative flex items-center pt-1"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-accent-pink text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium shadow-sm animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

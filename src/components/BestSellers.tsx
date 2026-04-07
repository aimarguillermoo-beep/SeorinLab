import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ProductModal } from './ProductModal';
import type { Product } from '../types';

export default function BestSellers() {
  const { addItem, items, updateQuantity } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const featuredNames = [
    "MADAGASCAR CENTELLA AMPOULE",
    "MADAGASCAR CENTELLA LIGHT CLEANSING OIL",
    "MADAGASCAR CENTELLA SOOTHING CREAM",
    "HYALU-CICA WATER-FIT SUN SERUM FPS 50+"
  ];

  const displayProducts = products.filter(p => featuredNames.includes(p.name));

  return (
    <section id="shop-section" className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-16 mt-8">
      {/* Header row */}
      <div className="flex justify-between items-end mb-10">
        <div className="flex flex-col">
          <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-accent-pink uppercase font-semibold mb-2">Selección especial</span>
          <h3 className="text-2xl md:text-[28px] font-serif font-normal text-text-main mb-2 italic">
            Productos Destacados
          </h3>
          <div className="w-12 h-[1.5px] gold-line rounded-full"></div>
        </div>
      </div>
      
      {/* Products Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-6 w-full">
        {displayProducts.map((product, index) => {
          const cartItem = items.find(i => i.product.id === product.id);
          const quantity = cartItem ? cartItem.quantity : 0;
          return (
          <div 
            key={product.id} 
            className={`w-full h-full flex flex-col group cursor-pointer animate-fade-in-up stagger-${index + 1}`}
            onClick={() => setSelectedProduct(product)}
          >
            {/* Image container */}
            <div className={`w-full aspect-[4/5] bg-transparent relative overflow-hidden flex items-end justify-center rounded-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1`}>
              
              {product.image ? (
                <div className="absolute inset-0 p-3 md:p-7 lg:p-9 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-white/50 rounded-sm">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain scale-[1.04] mix-blend-darken transition-transform duration-700 ease-out group-hover:scale-[1.1]" 
                    />
                  </div>
                </div>
              ) : (
                <>
                  {/* Product bottle placeholder */}
                  <div className={`w-[55%] max-w-[180px] h-[75%] ${product.bottleColor || 'bg-gray-300'} rounded-t-[40px] shadow-2xl relative z-10 flex flex-col items-center pt-8 md:pt-12 px-4 md:px-6 text-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-white/30 transition-transform duration-500 group-hover:-translate-y-2`}>
                    <div className="font-serif text-[#F4F9F5] text-xl md:text-2xl mb-1">{product.title1}</div>
                    <div className="font-serif text-[#F4F9F5] text-xl md:text-2xl mb-3">{product.title2}</div>
                    
                    <div className="w-full max-w-[100px] space-y-1.5 mt-2">
                      <div className="h-[1.5px] w-full bg-[#F4F9F5]/40"></div>
                      <div className="h-[1.5px] w-[80%] bg-[#F4F9F5]/25 mx-auto"></div>
                      <div className="h-[1.5px] w-[60%] bg-[#F4F9F5]/25 mx-auto"></div>
                    </div>
                    {/* Cap */}
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-8 ${product.bgColor || 'bg-gray-200'} rounded-t-[20px] mix-blend-multiply opacity-50`}></div>
                  </div>
                  
                  {/* Leaf placeholder */}
                  {product.leafColor && (
                    <div className="absolute left-6 md:left-8 bottom-8 md:bottom-12 w-12 md:w-16 h-28 md:h-36 z-0 mix-blend-multiply opacity-80" style={{ color: product.leafColor }}>
                      <svg viewBox="0 0 40 100" fill="currentColor" className="w-full h-full drop-shadow-md transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
                        <path d="M20 100V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M20 80C10 80 0 70 0 60c0 10 10 20 20 20z" fill="currentColor"/>
                        <path d="M20 70C30 70 40 60 40 50c0 10-10 20-20 20z" fill="currentColor"/>
                        <path d="M20 60C10 60 5 50 5 40c0 10 10 20 15 20z" fill="currentColor"/>
                        <path d="M20 50C30 50 35 40 35 30c0 10-10 20-15 20z" fill="currentColor"/>
                        <path d="M20 40C15 40 10 30 15 20c0 10 5 20 5 20z" fill="currentColor"/>
                      </svg>
                    </div>
                  )}
                </>
              )}
            </div>
            
            <div className="flex flex-col flex-grow mt-2 items-center transition-opacity duration-300">
              <h4 className="text-[12px] md:text-[17px] lg:text-[18px] font-serif font-bold text-black text-center leading-snug tracking-wide normal-case" style={{ WebkitTextStroke: '0.3px' }}>
                {product.name.split(' ').map(w => w.length <= 4 && w === w.toUpperCase() ? w : w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}
              </h4>
              <div className="mt-auto pt-3 flex flex-col items-center w-full">
                <p className="text-[11px] md:text-[14px] lg:text-[15px] font-medium text-text-main/90 mb-2 md:mb-3 tracking-wide">
                  {product.price}
                </p>
                {quantity > 0 ? (
                  <div className="flex items-center gap-3 border border-text-main/30 rounded-full px-3 py-1 bg-page-bg/80" onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => updateQuantity(product.id, quantity - 1)} className="text-text-main hover:text-accent-pink px-1 pb-0.5 transition-colors">
                      -
                    </button>
                    <span className="text-[11px] font-semibold w-4 text-center">{quantity}</span>
                    <button onClick={() => updateQuantity(product.id, quantity + 1)} className="text-text-main hover:text-accent-pink px-1 pb-0.5 transition-colors">
                      +
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={(e) => { e.stopPropagation(); addItem(product); }}
                    className="text-[4px] lg:text-[9px] font-serif font-semibold uppercase tracking-normal lg:tracking-[0.15em] border-b border-accent-pink/60 text-text-light hover:text-accent-pink transition-all duration-300 pb-0 lg:pb-px hover:border-accent-pink origin-bottom scale-[0.85] lg:scale-100"
                  >
                    Añadir al carrito
                  </button>
                )}
              </div>
            </div>
          </div>
        )})}
      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}

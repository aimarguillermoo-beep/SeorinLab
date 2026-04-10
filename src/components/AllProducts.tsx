import { useState, useMemo, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ProductModal } from './ProductModal';
import type { Product } from '../types';

export default function AllProducts() {
  const { addItem, items, updateQuantity } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Todos") return products;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  // Initially show 4 items, or all if showAll is true
  const displayProducts = showAll ? filteredProducts : filteredProducts.slice(0, 4);

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    setShowAll(false);
  };

  useEffect(() => {
    const handleFilter = (e: CustomEvent<string>) => {
      setSelectedCategory(e.detail);
      setShowAll(false);
      document.getElementById('all-products-section')?.scrollIntoView({ behavior: 'smooth' });
    };
    window.addEventListener('filterCategory', handleFilter as EventListener);
    return () => window.removeEventListener('filterCategory', handleFilter as EventListener);
  }, []);

  return (
    <section id="all-products-section" className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-16">
      {/* Header row */}
      <div className="flex justify-between items-end mb-10">
        <div className="flex flex-col">
          <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-accent-pink uppercase font-semibold mb-2">Catálogo completo</span>
          <h3 className="text-2xl md:text-[28px] font-serif font-normal text-text-main mb-2 italic">
            Nuestros Productos
          </h3>
          <div className="w-12 h-[1.5px] gold-line rounded-full"></div>
        </div>
      </div>
      
      {/* Category Filters */}
      <div className="grid grid-cols-4 lg:flex lg:flex-wrap justify-center gap-x-1 gap-y-1.5 lg:gap-2 mb-8 lg:mb-10 w-full px-1 lg:px-0">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`w-full lg:w-auto px-0.5 lg:px-2.5 py-1 text-[5px] sm:text-[5.5px] lg:text-[9px] tracking-tight lg:tracking-[0.1em] uppercase rounded-full transition-all duration-300 flex items-center justify-center text-center min-h-[24px] lg:min-h-0 leading-tight ${
              selectedCategory === cat 
                ? 'bg-text-main text-white border border-text-main shadow-sm' 
                : 'bg-transparent text-text-light border border-text-main/15 hover:border-text-main/40 hover:text-text-main'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* Products Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-6 w-full">
        {displayProducts.map((product, index) => {
          const cartItem = items.find(i => i.product.id === product.id);
          const quantity = cartItem ? cartItem.quantity : 0;
          return (
          <div 
            key={product.id} 
            className={`w-full h-full flex flex-col group cursor-pointer animate-fade-in-up stagger-${(index % 4) + 1}`}
            onClick={() => setSelectedProduct(product)}
          >
            {/* Image container */}
            <div className={`w-full aspect-square bg-transparent relative overflow-hidden flex items-center justify-center rounded-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1`}>
              
              {product.image ? (
                <div className="absolute inset-0 p-2 md:p-4 lg:p-5 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.06]" 
                  />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Sin imagen
                </div>
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

      {/* Show more / less button */}
      {filteredProducts.length > 4 && (
        <div className="w-full flex justify-center mt-14">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="btn-premium px-10 py-3.5 border border-text-main/30 text-text-main hover:border-text-main hover:bg-text-main hover:text-white transition-all duration-400 text-[11px] tracking-[0.2em] uppercase rounded-full"
          >
            {showAll ? 'Ver menos' : 'Ver más productos'}
          </button>
        </div>
      )}

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}

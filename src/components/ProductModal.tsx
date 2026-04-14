import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addItem, items, updateQuantity } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset to first image when modal opens or product changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [product, isOpen]);

  if (!isOpen || !product) return null;

  const images = product.image ? [product.image, ...(product.gallery || [])] : [];
  const hasMultipleImages = images.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Check if item is in cart
  const cartItem = items.find(i => i.product.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/40 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-5xl max-h-full overflow-y-auto bg-[#fdf5eb] rounded-xl shadow-2xl flex flex-col md:flex-row relative animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-black transition-colors rounded-full hover:bg-black/5"
          aria-label="Cerrar modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left column: Image carousel */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col items-center justify-center relative md:min-h-[50vh]">
          <div className="relative w-full flex items-center justify-center">
            {images.length > 0 ? (
              <img 
                src={images[currentImageIndex]} 
                alt={`${product.name} view ${currentImageIndex + 1}`}
                className="max-w-full max-h-[80vh] md:max-h-[60vh] object-contain transition-opacity duration-300"
                key={currentImageIndex} // Helps trigger tiny fade or re-layout
              />
            ) : null}

            {hasMultipleImages && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black hover:bg-black/5 rounded-full transition-all"
                  aria-label="Anterior imagen"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black hover:bg-black/5 rounded-full transition-all"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </>
            )}
          </div>

          {hasMultipleImages && (
            <div className="mt-4 flex justify-center gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    idx === currentImageIndex ? 'w-6 bg-black' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a la imagen ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right column: Content & Formatting */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <p className="text-xs tracking-[0.2em] text-gray-400 mb-3">{product.category}</p>
          <h2 className="text-2xl md:text-3xl font-light leading-tight mb-4 text-text-main">{product.name}</h2>
          <p className="text-xl md:text-2xl font-light text-accent-pink mb-8">{product.price}</p>
          
          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed font-light mb-10 overflow-y-auto pr-2 custom-scrollbar flex-grow">
            {product.description && (
              <p 
                className="text-justify text-gray-600 [&>strong]:font-semibold [&>strong]:text-black"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            )}
            {product.idealFor && (
              <p className="text-justify text-gray-600">
                <strong className="font-semibold text-black text-base">Ideal para:</strong>{' '}
                <span className="font-semibold text-black">{product.idealFor}</span>
              </p>
            )}
          </div>

          {quantity > 0 ? (
            <div className="w-full py-2 bg-transparent border border-text-main flex items-center justify-between px-6 transition-colors rounded-sm">
              <button 
                onClick={() => updateQuantity(product.id, quantity - 1)} 
                className="text-text-main hover:text-accent-pink px-4 py-2 text-xl transition-colors"
              >
                -
              </button>
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-text-main">{quantity} en carrito</span>
              <button 
                onClick={() => updateQuantity(product.id, quantity + 1)} 
                className="text-text-main hover:text-accent-pink px-4 py-2 text-xl transition-colors"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addItem(product)}
              className="w-full py-4 bg-text-main text-white hover:bg-black transition-colors uppercase tracking-[0.2em] text-xs font-medium rounded-sm"
            >
              Añadir al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

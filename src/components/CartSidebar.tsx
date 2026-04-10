import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCartMessage } from '../utils/whatsapp';

export default function CartSidebar() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeItem, cartTotal, clearCart } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    if (items.length === 0) return;
    const checkoutUrl = formatCartMessage(items, cartTotal);
    window.open(checkoutUrl, '_blank');
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/40 z-40 transition-opacity backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Sidebar sidebar */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-page-bg z-50 shadow-2xl transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-text-main/10">
          <div className="flex items-center gap-2">
            <ShoppingBag size={14} className="text-text-main" strokeWidth={1} />
            <span className="uppercase text-text-main tracking-[0.2em]" style={{ fontSize: '11px', fontWeight: 300 }}>Mi Carrito</span>
          </div>
          
          <div className="flex items-center gap-4">
            {items.length > 0 && (
              <button 
                onClick={clearCart}
                className="text-[10px] md:text-xs uppercase tracking-wider text-text-light hover:text-accent-pink transition-colors border-b border-transparent hover:border-accent-pink"
                title="Vaciar carrito"
              >
                Vaciar
              </button>
            )}
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-black/5 rounded-full transition-colors text-text-main"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-text-light/70 gap-4">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="tracking-widest uppercase text-sm">Tu carrito está vacío</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4">
                {/* Product image or fallback */}
                <div className={`w-20 h-24 ${!item.product.image ? (item.product.bgColor || 'bg-black/10') : 'bg-transparent'} rounded-sm flex items-center justify-center overflow-hidden`}>
                  {item.product.image ? (
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className={`w-[60%] h-[70%] ${item.product.bottleColor || 'bg-black/20'} rounded-t-xl`} />
                  )}
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="text-text-main pr-2 uppercase" style={{ fontSize: '11px', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0.05em' }}>{item.product.name}</div>
                      <button 
                        onClick={() => removeItem(item.product.id)}
                        className="text-text-light hover:text-red-500 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-[13px] text-text-light mt-1">{item.product.price}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-text-main/20 rounded-sm">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 px-2 hover:bg-black/5 transition-colors text-text-main"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 px-2 hover:bg-black/5 transition-colors text-text-main"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {items.length > 0 && (
          <div className="border-t border-text-main/10 p-6 bg-white/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm tracking-wider uppercase text-text-main">Total Estimado</span>
              <span className="text-xl font-medium text-text-main">${cartTotal.toLocaleString('es-AR')}</span>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full py-4 bg-text-main text-white tracking-[0.2em] text-sm uppercase hover:bg-black transition-colors"
            >
              Comprar en WhatsApp
            </button>
            <p className="text-center text-[10px] text-text-light mt-4 tracking-wider">
              Serás redirigido a WhatsApp para finalizar la confirmación de pago.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

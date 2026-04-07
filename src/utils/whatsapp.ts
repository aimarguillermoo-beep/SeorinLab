export const formatCartMessage = (cartItems: any[], total: number) => {
  const storePhone = "541125578250"; // Número real de WhatsApp
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || storePhone;
  
  let message = "Hola, me gustaría realizar el siguiente pedido:%0A%0A";
  
  cartItems.forEach(item => {
    message += `- ${item.quantity}x ${item.product.name} (${item.product.price})%0A`;
  });
  
  message += `%0A*Total estimado: $${total.toLocaleString('es-AR')}*%0A%0A`;
  message += "Quedo a la espera de la confirmación. ¡Gracias!";
  
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

import React from 'react';
import { useCart } from '../../context/CartContext';

function Cart({ onClose }) {
  const { cartItems, removeFromCart, getTotalPrice, updateQuantity } = useCart();

  const handleQuantityChange = (item, change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      updateQuantity(item, newQuantity);
    } else {
      removeFromCart(item); // Si la cantidad es 0 o menos, elimina el producto
    }
  };

  return (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-gray-900 text-white p-6 shadow-lg overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        ✕
      </button>
      <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={`${item.id}-${item.title}`} className="flex justify-between items-center mb-4">
              <div>
                <span className="font-semibold">{item.title}</span>
                <div className="flex items-center gap-2 mt-1">
                  <button onClick={() => handleQuantityChange(item, -1)} className="bg-gray-700 px-2 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item, 1)} className="bg-gray-700 px-2 rounded">+</button>
                </div>
              </div>
              <div>${item.price * item.quantity}</div>
              <button
                onClick={() => removeFromCart(item)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="mt-4">
          <p className="text-lg font-semibold">Total: ${getTotalPrice()}</p>
          <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded hover:bg-green-700">
            Pagar
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
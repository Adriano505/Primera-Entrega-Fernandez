import React from 'react';
import { useCart } from '../../context/CartContext';

function ProductCard({ image, title, price, id }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, image, title, price }, 1); // Agrega solo una unidad al carrito
  };

  return (
    <div className="bg-black bg-opacity-80 shadow-md p-4 text-white min-h-[400px] flex flex-col justify-between transition duration-300 hover:shadow-[0px_0px_15px_5px_rgba(255,255,255,0.6)]">
      {/* Imagen con altura mayor */}
      <img src={image} alt={title} className="w-full h-96 object-cover" />
      <h2 className="mt-4 text-xl font-semibold">{title}</h2>
      <p className="mt-2">${price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-white text-black w-full mt-2 py-2 rounded hover:bg-gray-400"
      >
        Comprar
      </button>
    </div>
  );
}

export default ProductCard;

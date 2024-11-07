import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import CartWidget from '../CartWidget/CartWidget'; 

function Navbar() {
  const { getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 bg-black text-white py-4 px-8 flex justify-between items-center`}
    >
      <div className="text-2xl font-bold">Adidas</div>
      <div className="flex gap-4">
        <a href="#" className="hover:text-gray-400">Hombre</a>
        <a href="#" className="hover:text-gray-400">Mujer</a>
        <a href="#" className="hover:text-gray-400">Niños</a>
      </div>
      
      <div className="relative cursor-pointer" onClick={toggleCart}>
        <CartWidget />
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 rounded-full text-xs px-2 py-1">
            {getTotalItems()}
          </span>
        )}
      </div>
      {isCartOpen && <Cart onClose={toggleCart} />}
    </nav>
  );
}

export default Navbar;

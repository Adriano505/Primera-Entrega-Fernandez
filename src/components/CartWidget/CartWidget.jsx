import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado o usa un emoji en su lugar

function CartWidget() {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
    </div>
  );
}

export default CartWidget;
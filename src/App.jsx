import React from 'react';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <CartProvider>
      <Home />
      <ItemListContainer greeting="Gracias por visitar nuestra tienda" />
    </CartProvider>
  );
}

export default App;

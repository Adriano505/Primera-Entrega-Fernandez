import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <footer className="bg-black bg-opacity-90 text-white py-6 text-center">
      <h2 className="text-xl font-semibold">{greeting}</h2>
      <p className="text-sm mt-2">© 2023 Adidas Store. Todos los derechos reservados.</p>
    </footer>
  );
}

export default ItemListContainer;

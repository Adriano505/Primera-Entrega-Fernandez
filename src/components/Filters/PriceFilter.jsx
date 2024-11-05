import React from 'react';

function PriceFilter() {
    return (
        <select className="bg-gray-800 text-white rounded px-4 py-2">
            <option value="">Filtrar por Precio</option>
            <option value="low">Menor a Mayor</option>
            <option value="high">Mayor a Menor</option>
        </select>
    );
}

export default PriceFilter;
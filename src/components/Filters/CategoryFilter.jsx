import React from 'react';

function CategoryFilter() {
    return (
        <select className="bg-gray-800 text-white rounded px-4 py-2">
            <option value="">Categoría</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
            <option value="Niños">Niños</option>
        </select>
    );
}

export default CategoryFilter;
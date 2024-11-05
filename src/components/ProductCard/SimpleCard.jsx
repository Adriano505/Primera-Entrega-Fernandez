import React from 'react';

function SimpleCard({ image, title, subtitle }) {
  return (
    <div className="text-center">
      <img src={image} alt={title} className="w-full object-cover" />
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
}

export default SimpleCard;

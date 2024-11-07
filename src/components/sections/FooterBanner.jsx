import React from 'react';
import footerBannerImage from '/assets/img/banners/footer1.jpg';

function FooterBanner() {
    return (
      <div className="relative mt-16">
        <img
          src={footerBannerImage}
          alt="Banner inferior"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
        {/* Botón en la esquina inferior izquierda */}
        <div className="absolute bottom-4 left-4">
          <button className="bg-white text-black font-semibold px-4 py-2 flex items-center space-x-2 hover:bg-gray-200">
            <span>Comprar Original</span>
            <span className="material-icons">→</span> {/* Flecha */}
          </button>
        </div>
      </div>
    );
  }
  
  export default FooterBanner;


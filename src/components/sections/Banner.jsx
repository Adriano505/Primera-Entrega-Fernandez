import React from 'react';
import bannerImage from '/assets/img/banners/banner.jpg';

function Banner() {
    return (
      <div className="relative bg-black text-white mt-16">
        <img
          src={bannerImage}
          alt="Banner principal"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
      </div>
    );
  }

export default Banner;

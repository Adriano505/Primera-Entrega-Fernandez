import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/sections/Banner';
import ProductCard from '../components/ProductCard/ProductCard';
import SimpleCard from '../components/ProductCard/SimpleCard';
import CategoryFilter from '../components/Filters/CategoryFilter';
import FooterBanner from '../components/sections/FooterBanner';
import PriceFilter from '../components/Filters/PriceFilter';
import forumLowImage from '/assets/img/championes/forum-low-cL.jpg';
import gazelleGrisImage from '/assets/img/championes/gazelle-gris.jpg';
import gazelleIndoorImage from '/assets/img/championes/gazelle-indoor.jpg';
import superstarImage from '/assets/img/championes/superstar.jpg';
import iconosImage from '/assets/img/banners/iconos.jpg';
import adizeroImage from '/assets/img/banners/adizero.jpg';
import gazelleBannerImage from '/assets/img/banners/gazelle.jpg';
import adicolorImage from '/assets/img/banners/adicolor.jpg';



const products = [
  { id: 1, image: forumLowImage, title: 'Championes Forum Low CL', price: 5990 },
  { id: 2, image: gazelleGrisImage, title: 'Championes Gazelle', price: 5990 },
  { id: 3, image: gazelleIndoorImage, title: 'Championes Gazelle Indoor', price: 6490 },
  { id: 4, image: superstarImage, title: 'Championes Superstar', price: 4990 },
];

const additionalCards = [
  { id: 1, image: iconosImage, title: 'ÍCONOS DEL MOMENTO', subtitle: 'Para cualquier look.' },
  { id: 2, image: adizeroImage, title: 'ADIZERP', subtitle: 'Para destacar siempre.' },
  { id: 3, image: gazelleBannerImage, title: 'GAZELLE', subtitle: 'Para los más exigentes.' },
  { id: 4, image: adicolorImage, title: 'ADICOLOR', subtitle: 'Para cualquier ocasión.' },
];

const popularItems = ['ultraboost', 'adizero', 'supernova', 'superstar', 'gazelle', 'samba'];

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Banner />
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <CategoryFilter />
          <PriceFilter />
        </div>
        <h2 className="text-3xl font-semibold text-center my-8">
          La moda de hoy en día
        </h2>
        <div className="grid grid-cols-4 gap-4 mb-16">
          {products.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
        <FooterBanner />
        {/* Nueva sección con SimpleCards */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          {additionalCards.map(card => (
            <SimpleCard
              key={card.id}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>

        {/* Nueva sección "Popular ahora" */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-white">Popular ahora</h2>
          <div className="grid grid-cols-3 gap-8">
            {popularItems.map((item, index) => (
              <button
                key={index}
                className="text-left font-bold text-4xl text-white tracking-widest border-b-2 border-white pb-2 transition-all duration-300 ease-in-out hover:border-b-4 hover:text-gray-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;

import React from 'react';
import { Link } from 'react-router-dom';


const dessertItems = [
  {
    name: 'BAKLAWA',
    image: '/Images/desert-1.png',
    desc: 'A rich mix of baklawa shapes filled with pistachios and walnuts. Contains wheat, milk, margarine, and corn starch.',
    priceSt: '12 kr',
    priceKg: '280 SEK'
  },
  {
    name: 'OSMA LEYYELI PISTACHIO',
    image: '/Images/desert-2.png',
    desc: 'Contains: wheat flour, corn starch, sunflower oil, glucose, salt, syrup, animal margarine, filling, pistachios',
priceSt: '15 kr',
    priceKg: '330 SEK'  },
  {
    name: 'PASTRY FRUIT VANILLA CREAM',
    image: '/Images/desert-3.png',
    desc: 'White cake base, cream, fruit cocktail, white chocolate',
      priceSt: '40 kr'
  },
  {
    name: 'PASTRY FRUIT CHOCOLATE',
    image: '/Images/desert-4.png',
    desc: 'Chocolate cake base, cream, fruit something, chocolate.',
    priceSt: '40 kr'
  }
];

const DessertsSection = () => (
  <section className="relative py-12 px-4 overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100 poppins-regular">
    {/* Decorative background */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-10 right-0 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-r from-amber-200 to-yellow-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-200 to-transparent md:h-32"></div>
      <div className="hidden md:block absolute bottom-0 right-4 w-12 h-24">
        <div className="absolute bottom-0 w-6 h-20 bg-green-900 rounded-t-full"></div>
        <div className="absolute bottom-12 left-3 w-4 h-6 bg-green-900 rotate-45 origin-bottom"></div>
        <div className="absolute bottom-14 right-3 w-4 h-6 bg-green-900 -rotate-45 origin-bottom"></div>
      </div>
    </div>

    {/* Main content */}
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold poppins-regular text-amber-900">Dessert Delights</h2>
        <p className="mt-2 text-amber-800 md:text-lg">
          Sweet treats to satisfy your cravings
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {dessertItems.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-contain drop-shadow-lg"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-amber-300 to-transparent rounded-b-full"></div>
            </div>
            <div className="mt-3 px-2">
<Link to="/meny">
  <h3 className="text-lg font-semibold text-amber-900 hover:text-yellow-600 transition-colors duration-200 cursor-pointer">
    {item.name}
  </h3>
</Link>
              <p className="text-sm text-amber-800 mt-1 leading-relaxed">{item.desc}</p>
              <span className="text-xs text-amber-700 mt-1 block">{item.calories}</span>
             <div className="mt-2 text-sm text-amber-700">
  {item.priceSt && <p><strong>St:</strong> {item.priceSt}</p>}
  {item.priceKg && <p><strong>Kg:</strong> {item.priceKg}</p>}
</div>

            </div>
          </div>
        ))}
      </div>

      {/* Bottom decorative */}
      <div className="mt-12 relative h-16">
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-amber-200 rounded-t-full"></div>
        <div className="absolute bottom-4 left-1/4 w-8 h-8 bg-green-900 rounded-full"></div>
        <div className="absolute bottom-6 right-1/4 w-6 h-6 bg-green-900 rounded-full"></div>
      </div>
    </div>
  </section>
);

export default DessertsSection;

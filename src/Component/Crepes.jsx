import React from 'react';
import { GiStrawberry, GiChocolateBar, GiWheat, GiBananaBunch } from 'react-icons/gi';
import { FaChild } from 'react-icons/fa6';
import { PiStackSimpleFill } from 'react-icons/pi'; // stack of food/pancakes
import { TbChefHat } from 'react-icons/tb';
import { Link } from 'react-router-dom';


const CrepesItems = [
  {
    name: 'NUTELLA CREPE',
    image: '/Images/Crepe/nutella-crepe.png',
    icon: <GiStrawberry className="text-red-500" />, // fruit-themed
    description: 'Nutella, Grädde, Frukt',
    price: '129 kr',
    accent: 'from-rose-50 to-red-100'
  },
  {
    name: "KINDER CREPES",
    image: '/Images/Crepe/childeren-crepe.png',
    icon: <FaChild className="text-amber-800" />, // child-friendly icon
    description: 'Nutella, Vit chocklad, Grädde, Frukt',
    price: '129 kr',
    accent: 'from-yellow-50 to-amber-100'
  },
  {
    name: "CREPES ROLL",
    image: '/Images/Crepe/crepe-roll.png',
    icon: <GiBananaBunch className="text-yellow-600" />, // banana/pistachio focus
    description: 'Nutella, vit chocklad, Pistagenötter, Grädde, Banan, Frukt',
    price: '139 kr',
    accent: 'from-yellow-50 to-yellow-100'
  },
  {
    name: 'MINI PANCAKE 9 ST',
    image: '/Images/Crepe/mini-pancake.png',
    icon: <PiStackSimpleFill className="text-blue-800" />,
    description: 'Nutella, vitchoklad, grädde, frukt',
    price: '129 kr',
    accent: 'from-blue-50 to-sky-100'
  }
];


const CrepesSection = () => (
  <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden poppins-black">
    {/* Wave Top Divider */}
    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-orange-100 to-rose-100 rounded-b-full blur-xl opacity-30 -z-10" />

    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center mb-5">
          <TbChefHat className="text-4xl text-amber-600 mr-3" />
          <h2 className="text-3xl poppins-regular font-extrabold text-gray-800 font-serif">Våra signaturcrêpes</h2>
        </div>
        <p className="text-gray-600 poppins-regular max-w-xl mx-auto text-lg">
          Söta eller salta – upptäck crêpes gjorda med kärlek och stil.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 poppins-regular sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {CrepesItems.map((item, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${item.accent} p-5 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1`}
          >
            {/* Image */}
            <div className="relative h-48 mb-4 rounded-xl overflow-hidden shadow">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 poppins-regular right-3 bg-white text-amber-700 px-3 py-1 rounded-full text-sm font-bold shadow">
                {item.price}
              </span>
            </div>

            {/* Icon + Title */}
            <div className="flex items-center  mb-2">
              <div className="bg-white p-2 rounded-full shadow-sm mr-3">
                {React.cloneElement(item.icon, { className: `${item.icon.props.className} text-xl` })}
              </div>
              <h3 className="text-lg poppins-regular font-semibold text-gray-800">{item.name}</h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>

            {/* Button */}

          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <Link to="/meny">
          <button className="px-6 py-3 poppins-regular border-2 border-amber-600 text-amber-700 font-semibold rounded-full hover:bg-amber-600 hover:text-white transition-colors">
            Visa hela menyn    </button>
        </Link>
      </div>
    </div>

    {/* Decorative Circles */}
    <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-100 rounded-full blur-2xl opacity-20 -z-10" />
    <div className="absolute top-16 right-10 w-48 h-48 bg-yellow-100 rounded-full blur-2xl opacity-20 -z-10" />
  </section>
);

export default CrepesSection;

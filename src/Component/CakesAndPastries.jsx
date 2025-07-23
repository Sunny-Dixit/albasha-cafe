import React from 'react';
import { FaBirthdayCake, FaIceCream, FaCookieBite, FaCheese } from 'react-icons/fa';
import { motion } from 'framer-motion';

const items = [
  {
    name: 'LOTUS CHEESE CAKE',
    desc: 'Egg yolk, cream, gelatin, lotus biscuits, sugar, glucose, Philadelphia chees',
    price: '40 kr',
    icon: <FaBirthdayCake className="text-pink-500 text-2xl" />,
    image: '/Images/cake-1.jpg',
  },
  {
    name: 'HAZELNUTS PASTRY',
    desc: 'Salted caramel, Chocolate cake base, Hazelnuts, Cream, Gelatin.',
    price: '40 kr',
    icon: <FaIceCream className="text-rose-500 text-2xl" />,
    image: '/Images/cake-2.jpg',
  },
  {
    name: 'CHOCOLATE PASTRY',
    desc: 'Krispig croissant med söt mandelfyllning och rostade mandlar.',
    price: '40 kr',
    icon: <FaCookieBite className="text-amber-500 text-2xl" />,
    image: '/Images/cake-3.jpg',
  },
  {
    name: 'RASPBERRY PASTRY',
    desc: 'Lyxig röd cupcake med fyllig cream cheese-frosting.',
    price: '40 kr',
    icon: <FaCheese className="text-yellow-600 text-2xl" />,
    image: '/Images/cake-4.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: 'easeOut' },
  }),
};

export default function CakesAndPastries() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#fff8f3] to-[#f8eadd] font-[Poppins]">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <img src="/Images/cake.png" alt="Kakikon" className="w-12 h-12" />
          <h2 className="text-4xl poppins-regular font-bold text-[#4b2e22]">Cakes & Pastries</h2>
        </div>
        <p className="text-gray-600 poppins-regular max-w-xl mx-auto text-sm">
Treat yourself to our delicious selection of freshly baked treats – baked with love.        </p>
      </motion.div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto relative z-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 relative pt-16 pb-6 px-5 text-center group"
          >
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mb-3 mt-4">{item.icon}</div>

            <h4 className="text-lg poppins-regular font-bold text-[#4b2e22] mb-1">{item.name}</h4>
            <p className="text-sm poppins-regular text-gray-500 mb-3">{item.desc}</p>
            <span className="inline-block poppins-regular bg-amber-300 text-[#4b2e22] px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
              {item.price}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

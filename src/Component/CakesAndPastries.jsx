import React from 'react';
import { FaBirthdayCake, FaIceCream, FaCookieBite, FaCheese } from 'react-icons/fa';
import { motion } from 'framer-motion';

const items = [
  {
    name: 'LOTUS CHESECAKE',
    desc: 'Äggula, Grädde, Gelatin, Lotuskex, Socker, Glukos, Philadelphia ost',
    price: '40 kr',
    icon: <FaBirthdayCake className="text-pink-500 text-2xl" />,
    image: '/Images/cake-1.jpg',
  },
  {
    name: 'HASSELNÖTTER BAKELSE',
    desc: 'Saltadcaramel, Chokladtårtbotten, Hasselnötter, Grädde, Gelatin.',
    price: '40 kr',
    icon: <FaIceCream className="text-rose-500 text-2xl" />,
    image: '/Images/cake-2.jpg',
  },
  {
    name: 'CHOKLAD BAKELSE',
    desc: 'En saftig chokladbakelse med rik smak och len chokladkräm – en dröm för alla chokladälskare.',
    price: '40 kr',
    icon: <FaCookieBite className="text-amber-500 text-2xl" />,
    image: '/Images/cake-3.jpg',
  },
  {
    name: 'HALLON BAKELSE',
    desc: 'En frisk hallonbakelse med luftig botten, söt bärkräm och syrliga hallon – en perfekt balans av sött och friskt.',
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
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 mb-4 text-center sm:text-left">
  <img
    src="/Images/cake.png"
    alt="Kakikon"
    className="w-10 h-10 sm:w-12 sm:h-12"
  />
  <h2 className="text-2xl sm:text-3xl md:text-4xl poppins-regular font-bold text-[#4b2e22] mt-2 sm:mt-0">
    Tårtor & Bakverk
  </h2>
</div>

        <p className="text-gray-600 poppins-regular max-w-xl mx-auto text-sm">
          Unna dig vårt utsökta urval av nybakade godsaker – bakade med kärlek.
       </p>
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

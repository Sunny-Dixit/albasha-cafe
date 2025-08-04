import React from 'react';
import { FaIceCream, FaPlus, FaStar, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <-- Added

const SummerNewsSection = () => {
  const summerItems = [
    {
      name: "Emperor's Strawberry",
      image: "/Images/SummerNews/summer-news-2.png",
      price: "129 kr",
      color: "bg-rose-100",
    },
    {
      name: "Emperor Avocado",
      image: "/Images/SummerNews/summer-news-1.png",
      price: "139 kr",
      color: "bg-emerald-100"
    },
    {
      name: "Exotisk Fruktsallad",
      image: "/Images/SummerNews/summer-news-3.png",
      price: "139 kr",
      color: "bg-amber-100"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-16 px-4 relative overflow-hidden poppins-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Animated sun rays */}
      {[...Array(8)].map((_, i) => (
        <motion.div 
          key={`ray-${i}`}
          className="absolute w-1 h-20 bg-yellow-400 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transformOrigin: "top center",
            transform: `rotate(${i * 45}deg) translate(-50%, -100%)`
          }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: [0, 0.5, 0], height: [0, 100, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      {/* Floating sun */}
      <motion.div
        className="absolute text-5xl text-yellow-400"
        style={{ top: "20%", left: "10%" }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0], rotate: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaSun />
      </motion.div>

      {/* Section Title */}
      <motion.div className="relative max-w-4xl mx-auto text-center mb-16" variants={titleVariants}>
        <div className="inline-flex items-center justify-center mb-6">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaSun className="text-4xl text-yellow-500 mr-3" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-800 font-serif">
            <motion.span className="text-yellow-500 poppins-regular inline-block">
              SOMMAR NYHETER
            </motion.span>
          </h2>
        </div>
        <motion.p className="text-gray-600 text-lg max-w-xl mx-auto">
          Ta en paus, njut av solen och unna dig något riktigt gott.
        </motion.p>
        <motion.p className="text-yellow-500 mt-4 flex items-center justify-center gap-2">
          <FaSun className="text-yellow-500" />
          ☀️ Välkommen in – smaken av sommar väntar på dig!
        </motion.p>
      </motion.div>

      {/* Items */}
      <motion.div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4" variants={containerVariants}>
        {summerItems.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={`group relative ${item.color} rounded-2xl poppins-regular shadow-lg hover:shadow-xl transition-all overflow-hidden border-2 border-white hover:border-yellow-200`}
            whileHover={{ y: -10 }}
          >
            {/* Image */}
            <div className="relative h-64 pt-8 px-8">
              <motion.div
                className="w-full h-full flex items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-48 h-48 object-cover rounded-xl shadow-md"
                />
              </motion.div>
            </div>

            {/* Name and Price */}
            <div className="p-6 text-center relative z-10">
              <motion.h3 
                className="text-lg poppins-regular font-bold text-gray-800 mb-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <Link to="/meny" className="hover:underline hover:text-yellow-600 transition-colors duration-200">
                  {item.name}
                </Link>
              </motion.h3>
              <motion.div 
                className="text-md poppins-regular font-bold text-yellow-600 mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                {item.price}
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SummerNewsSection;

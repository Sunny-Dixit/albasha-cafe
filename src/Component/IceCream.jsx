import React from 'react';
import { FaIceCream, FaPlus, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const iceCreamItems = [
  {
  name: 'Chocolate',
  image: '/Images/icecream-1.png',
  desc: 'Luxurious dark chocolate with a creamy texture',
  price: '49 kr',
  color: 'bg-amber-100',
},
{
  name: 'Strawberry ',
  image: '/Images/icecream-2.png',
  desc: 'Fresh strawberries mixed in smooth cream',
  price: '45 kr',
  color: 'bg-rose-100',
},
 {
  name: 'ARABIC ICE CREAM',
  image: '/Images/icecream-3.png',
  desc: 'Milk, cream, pistachio nuts',
  price: '60 kr (tallrik) / 300 kr (kg)',
  color: 'bg-emerald-100',
},
  {
  name: 'Ice Cream',
  image: '/Images/icecream-4.png',
  desc: 'Ice cream in different flavors',
  price: '1 kula – 20 kr / 2 kulor – 35 kr / 3 kulor – 49 kr',
  color: 'bg-purple-100',
}
,
];

const IceCreamSection = () => {
  // Animation variants
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="bg-gradient-to-b from-pink-50 via-rose-50 to-amber-50 py-16 px-4 relative overflow-hidden poppins-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated sprinkles background */}
        {[...Array(30)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full w-2 h-2"
            style={{
              backgroundColor: ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA'][Math.floor(Math.random() * 6)],
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [0, Math.random() * 0.5 + 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Floating ice cream cones */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`cone-${i}`}
            className="absolute text-4xl"
            style={{
              color: ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB'][i],
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 90 + 5}%`,
            }}
            initial={{ y: 0, rotate: Math.random() * 30 - 15, opacity: 0 }}
            animate={{ 
              y: [0, 20, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            <FaIceCream />
          </motion.div>
        ))}
      </div>

      {/* Section Header */}
      <motion.div 
        className="relative max-w-4xl mx-auto text-center mb-16"
        variants={titleVariants}
      >
        <div className="inline-flex items-center justify-center mb-6">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaIceCream className="text-4xl text-pink-500 mr-3" />
          </motion.div>
          <h2 className="text-5xl font-bold text-gray-800 font-serif">
            <motion.span 
              className="text-pink-500 poppins-regular inline-block"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                delay: 0.2
              }}
            >
              Ice Cream
            </motion.span>{' '}
            <motion.span 
              className="inline-block poppins-regular"
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                delay: 0.3
              }}
            >
              Parlor
            </motion.span>
          </h2>
        </div>
        <motion.p 
          className="text-gray-600 poppins-regular text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Handcrafted in small batches with the finest ingredients
        </motion.p>
      </motion.div>

      {/* Ice Cream Grid */}
      <motion.div 
        className="relative max-w-6xl mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
        variants={containerVariants}
      >
        {iceCreamItems.map((item, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            className={`group relative ${item.color} rounded-2xl poppins-regular shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-white hover:border-pink-200`}
            whileHover={{ y: -10 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            {/* Popular badge */}
            {item.popular && (
              <motion.div 
                className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center z-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <FaStar className="mr-1" /> Popular
              </motion.div>
            )}
            
            {/* Waffle cone texture background */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/waffle.png')]"></div>
            
            {/* Ice cream image */}
            <div className="relative h-64 pt-8 px-8">
              <motion.img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
                loading="lazy"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              />
              {/* Melting effect */}
              <motion.div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-white/30 rounded-b-full blur-md"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  height: [8, 12, 8],
                  width: [96, 104, 96]
                }}
                transition={{
                  delay: 0.5 + i * 0.1,
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center relative z-10">
              <motion.h3 
                className="text-xl poppins-regular font-bold text-gray-800 mb-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                {item.name}
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                {item.desc}
              </motion.p>
              <motion.div 
                className="flex items-center justify-between mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
              
              </motion.div>
            </div>

            {/* Dripping effect on hover */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-drip transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* View all button */}
    <motion.div 
  className="text-center mt-16"
  variants={buttonVariants}
>
  <Link to="/meny">
    <motion.button 
      className="px-8 py-3 border-2 poppins-regular border-pink-500 text-pink-600 rounded-full font-bold transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      <span>View All</span>
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FaIceCream className="text-pink-600 text-xl" />
      </motion.div>
    </motion.button>
  </Link>
</motion.div>



      {/* Animation styles */}
      <style jsx global>{`
        @keyframes drip {
          0% { transform: translate(-50%, 0) scale(0.5); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(-50%, 20px) scale(1.2); opacity: 0; }
        }
        .animate-drip {
          animation: drip 0.8s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default IceCreamSection;
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cafeImages = [
  "/Images/Gallery/gallery-left-1.webp", // Left 1
  "/Images/Gallery/gallery-left-2.webp", // Left 2
  "/Images/Gallery/gallery-center.webp", // Center (large)
  "/Images/Gallery/gallery-right-1.webp", // Right 1
  "/Images/Gallery/gallery-right-2.webp", // Right 2
];

const GalleryItem = ({ src, alt, delay = 0, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay: delay * 0.2 },
        },
        hidden: { opacity: 0, y: 50 },
      }}
      className={`relative overflow-hidden group ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
    </motion.div>
  );
};

export default function Gallery() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-[#fefaf6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
            hidden: { opacity: 0, y: 30 },
          }}
          className="text-3xl md:text-4xl poppins-regular font-bold text-center mb-12 text-gray-800 font-serif"
        >
Albasha Caféutrymme
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-1">
          {/* Left Column - Two Images */}
          <div className="flex flex-col gap-1">
            <GalleryItem 
              src={cafeImages[0]} 
              alt="Cafe left 1" 
              delay={0}
              className="h-[250px]"
            />
            <GalleryItem 
              src={cafeImages[1]} 
              alt="Cafe left 2" 
              delay={1}
              className="h-[250px]"
            />
          </div>

          {/* Center Large Image */}
          <GalleryItem 
            src={cafeImages[2]} 
            alt="Featured cafe space" 
            delay={0.5}
            className="md:col-span-3 h-[500px]"
          />

          {/* Right Column - Two Images */}
          <div className="flex flex-col gap-1">
            <GalleryItem 
              src={cafeImages[3]} 
              alt="Cafe right 1" 
              delay={0.8}
              className="h-[250px]"
            />
            <GalleryItem 
              src={cafeImages[4]} 
              alt="Cafe right 2" 
              delay={1.2}
              className="h-[250px]"
            />
          </div>
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-12"
        >
          
        </motion.div>
      </div>
    </section>
  );
}
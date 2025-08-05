import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/Images/Banner/final-banner-4.png",
  "/Images/Banner/final-banner-2.png",
  "/Images/Banner/final-banner-3.png",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(false); // Start exit animation
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setShowImage(true); // Start entry animation
      }, 2000); // match exit duration
    }, 5000); // image visible for 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] overflow-hidden bg-white">
      <AnimatePresence>
        {showImage && (
          <motion.img
  key={index}
  src={images[index]}
  alt="Banner"
  className="absolute w-full h-full object-cover"
  initial={{ opacity: 0, scale: 1.2 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.6 }} // Slightly shrink instead of too fast to 0.4
  transition={{ duration: 2.5, ease: "easeInOut" }} // Slower and smoother
/>

        )}
      </AnimatePresence>

      {/* Optional Button/Text */}
     
    </section>
  );
};

export default Hero;
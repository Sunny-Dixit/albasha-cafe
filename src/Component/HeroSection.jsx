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
    <>
      {/* Desktop Hero Section */}
      <section className="hidden md:block relative w-full overflow-hidden">
          <div className="carousel-inner">
            <div className="carousel-item active relative">
              <img
                src="/Images/Banner/desktop-banner.png"
                className="block w-full h-[700px] object-cover m-0 p-0"
                alt="albasha cafe"
                loading="lazy"
              />


            </div>
          </div>
      </section>

      {/* Mobile Hero Section */}
      <section className="block md:hidden rounded-lg">
        <div id="mobile-demo" className="carousel slide relative" data-bs-ride="carousel" data-bs-interval="2500">
          <div className="carousel-inner overflow-hidden shadow-md">
            <div className="carousel-item active relative">
              <img
                src="/Images/Banner/mobile-banner-2.png"
                alt="Skin Treatment 1"
                className="w-full h-[200px] sm:h-[160px] object-cover "
                loading="lazy"
              />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

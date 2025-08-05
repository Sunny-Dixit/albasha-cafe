import React, { useState, useEffect } from "react";

const images = [
  "/Images/Banner/final-banner-4.png",
  "/Images/Banner/final-banner-2.png",
  "/Images/Banner/final-banner-3.png",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "auto",
            }}
          >
            <img
              src={img}
              alt={`Banner ${i + 1}`}
              className="w-full object-contain sm:object-cover"
              style={{
                height: "100%",
                maxHeight: "450px",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

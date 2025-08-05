import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const PopularItems = () => {
  const popularItems = [
    {
      id: 1,
      name: "Dubai Strawberry Cup",
      description:
        "Den virala Dubai Chocolate Strawberry Cup är en drömmig dessert med en perfekt kombination av krispiga kadayiftrådar, len pistagekräm, söt mjölkchoklad och saftiga jordgubbar.",
      image: "/Images/Popular/popular-1.avif",
      prices: [
        { label: "Utan Glass", price: "109 kr" },
        { label: "Med Glass", price: "129 kr" },
      ],
    },
    {
      id: 2,
      name: "Nutella Explosion Våffla (TikTok)",
      description:
        "Våffla dränkt i Nutella toppad med en kula mjölkchoklad glass, skivade jordgubbar och fluffig svensk vispgrädde toppad med Oreo.",
      image: "/Images/Popular/popular-2.avif",
      prices: [{ price: "139 kr" }],
    },
    {
      id: 3,
      name: "DUBAI CHOCKLAD",
      description:
        "En kombinerad krispig kunafa-deg med rik pistachiofyllning. Omsluten av ett lager choklad av högsta kvalitet.",
      image: "/Images/Popular/popular-3.avif",
      prices: [
        { label: "Liten (ca 180g)", price: "120 kr" },
        { label: "Stor (ca 450g)", price: "300 kr" },
      ],
    },
    {
      id: 4,
      name: "DUBAI BAKELSE",
      description:
        "En tårtbotten med dubai fyllning (krispig kunafa-deg med rik pistachiofyllning). Toppad med chocklad och pistagekräm.",
      image: "/Images/Popular/popular-4.avif",
      prices: [{ price: "60 kr" }],
    },
    {
      id: 5,
      name: "DUBAI CREPES",
      description:
        "En smakrik crepes med dubai fyllning (krispig kunafa-deg med rik pistachiofyllning). Toppad med nutella chocklad, pistagesås och pistagenötter.",
      image: "/Images/Popular/popular-5.avif",
      prices: [{ price: "179 kr" }],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % popularItems.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + popularItems.length) % popularItems.length);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(slideInterval);
  }, [autoSlide]);

  return (
    <section className="relative bg-gradient-to-br from-[#fff9f0] to-[#fef0e1] py-6 px-4 sm:px-6 font-[Poppins] overflow-hidden">
      <div className="text-center mb-6 relative z-10">
        <div className="inline-block bg-gradient-to-r from-amber-400 to-rose-500 text-white px-3 py-1 rounded-full mb-2">
          <span className="flex items-center">
            <FiStar className="mr-2" /> Kundfavoriter
          </span>
        </div>
       <h2 className="text-2xl md:text-3xl font-bold text-[#3a251b] mb-1">
  Våra{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-700">
    Mest Älskade
  </span>{" "}
  Godsaker
</h2>
<p className="text-base text-[#6d4c3d] max-w-xl mx-auto">
  En noggrant utvald samling av kundfavoriter som snabbt blev succéer.
</p>

      </div>

      <div className="relative max-w-6xl mx-auto overflow-hidden z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={popularItems[current].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-amber-100"
            onMouseEnter={() => setAutoSlide(false)}
            onMouseLeave={() => setAutoSlide(true)}
          >
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[3/2] w-full h-[320px] overflow-hidden flex items-center justify-center bg-white">
                <img
                  src={popularItems[current].image}
                  alt={popularItems[current].name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-amber-500 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-amber-500 rounded-br-3xl"></div>
            </div>

            <div className="lg:pl-6 flex-1 p-4 sm:p-5">
              <h3 className="text-2xl font-bold text-[#3a251b] mb-2 flex items-center">
                <Link
                  to="/meny"
                  className="hover:underline hover:text-rose-600 transition-colors duration-200"
                >
                  {popularItems[current].name}
                </Link>
                <span className="ml-2 bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs px-2 py-0.5 rounded-full">
                  #{current + 1}
                </span>
              </h3>

              <p className="text-sm text-gray-700 mb-3 border-l-4 border-amber-400 pl-4 py-1 bg-amber-50 rounded-r-lg">
                {popularItems[current].description}
              </p>

              <div className="space-y-1 mb-3">
                {popularItems[current].prices.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-center bg-gradient-to-r from-amber-50 to-amber-100 p-3 rounded-lg border border-amber-200"
                  >
                    <span className="text-xs font-medium text-gray-700">
                      {p.label || "Price"}
                    </span>
                    <span className="text-base font-bold text-rose-700 bg-white px-3 py-1 rounded-md shadow-sm">
                      {p.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            className="bg-gradient-to-r from-amber-500 to-rose-600 text-white p-2.5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110"
          >
            <FiChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            className="bg-gradient-to-r from-amber-500 to-rose-600 text-white p-2.5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2 z-10">
        {popularItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3.5 h-3.5 rounded-full transition-all flex items-center justify-center ${
              i === current
                ? "bg-gradient-to-r from-amber-500 to-rose-600 ring-2 ring-amber-400 ring-offset-1 scale-110"
                : "bg-amber-200"
            }`}
          >
            {i === current && (
              <motion.span
                className="w-1 h-1 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PopularItems;

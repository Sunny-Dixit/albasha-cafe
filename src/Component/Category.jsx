import React from "react";

const categories = [
  {
    name: "Caffè",
    image: "/Images/coffe-2-main.jpg",
  },
  {
    name: "Cake",
    image: "/Images/cake-top-category.png",
  },
  {
    name: "Sweets",
    image: "/Images/Desert/baklawa.png",
  },
  {
    name: "Shake",
<<<<<<< HEAD
    image: "/Images/Shake/strawberry-milkshake.png",
=======
    image: "/Images/Shake/strawberry-milkshake.png", // Make sure this file exists
>>>>>>> d54f94df16c6e8e75380bcf7f81df04a91063cee
  },
];

export default function Categories() {
  return (
    <section className="relative py-8 px-4 overflow-hidden poppins-black">
      {/* ☕ Kaffebönor Dekorationer */}
      <img
        src="/Images/coffe.png"
        alt="Övre kaffebönor"
        className="absolute top-0 left-0 w-24 md:w-36 -translate-x-4 -translate-y-4 pointer-events-none select-none"
      />
      <img
        src="/Images/corner.png"
        alt="Nedre kaffebönor"
        className="absolute bottom-0 right-0 w-24 md:w-36 translate-x-4 translate-y-4 pointer-events-none select-none"
      />

      <div className="max-w-6xl mx-auto">
        {/* Rubrik */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center gap-4">
            <iframe
              src="https://lottie.host/embed/4aec28fb-a72b-4d06-9c03-5521404beb44/tl1XtLVh4S.lottie"
              style={{ width: "60px", height: "60px", border: "none" }}
              title="Kaffekopp-animation"
            ></iframe>
            <p className="text-black poppins-regular font-bold text-xl md:text-2xl font-serif">
              Toppkategori
            </p>
          </div>
        </div>

        {/* Rutnät */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-3 place-items-center">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="relative w-full max-w-[220px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-44 object-cover transition-transform duration-700 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/35 text-white flex items-center justify-center px-3 transition-all duration-500">
                <h3 className="text-[20px] poppins-regular font-semibold drop-shadow text-center">
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

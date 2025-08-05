import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Desktop Hero Section */}
      <section className="hidden md:block relative z-0 w-full overflow-hidden">
        <div className="carousel-inner relative">
          <div className="carousel-item active relative">
            <img
              src="/Images/Banner/final-banner-4.png"
              className="block w-full h-[500px] object-cover m-0 p-0"
              alt="albasha cafe"
              loading="lazy"
            />

            {/* Banner Text Content */}
            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-left">
              {/* Heading */}

              {/* Button below logo */}
              <button className="mt-30 ml-15 poppins-regular px-5 py-2 bg-amber-700 text-white text-lg rounded-md hover:bg-amber-800 transition duration-300">
  Explore the Menu
</button>

            </div>
          </div>
        </div>
      </section>




      {/* Mobile Hero Section */}
    <section className="block md:hidden rounded-lg relative z-0 bg-white">
  <div id="mobile-demo" className="carousel slide relative" data-bs-ride="carousel" data-bs-interval="2500">
    <div className="carousel-inner overflow-hidden shadow-md">
      <div className="carousel-item active relative">
        <img
          src="/Images/Banner/final-banner-4.png"
          alt="Skin Treatment 1"
          className="w-full object-contain max-h-[250px]"
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

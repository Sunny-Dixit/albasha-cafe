import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Desktop Hero Section */}
      <section className="hidden md:block relative z-0 w-full overflow-hidden bg-white">
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
      <section className="block md:hidden rounded-lg relative z-0 bg-white">
        <div id="mobile-demo" className="carousel slide relative" data-bs-ride="carousel" data-bs-interval="2500">
          <div className="carousel-inner overflow-hidden shadow-md">
            <div className="carousel-item active relative">
              <img
                src="/Images/Banner/mobile-banner-2.png"
                alt="Skin Treatment 1"
                className="w-full h-[250px] sm:h-[160px] object-cover"
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

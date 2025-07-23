import React from 'react';

const Hero = () => {
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
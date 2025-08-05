import React from 'react';
import { useNavigate } from 'react-router-dom';

const shakes = [
  {
    name: 'Strawberry Milkshake',
    image: '/Images/Shake/strawberry-milkshake.png',
    price: '75 kr',
    color: 'bg-rose-100'
  },
  {
    name: 'Avocado Milkshake',
    image: '/Images/Shake/Avocado-Milkshake.png',
    price: '85 kr',
    color: 'bg-amber-100'
  },
  {
    name: 'Pina Colada',
    image: '/Images/Shake/pina-colada.png',
    price: '89 kr',
    color: 'bg-lime-100'
  },
  {
    name: 'Mojito',
    image: '/Images/Shake/mojito.avif',
    price: '89 kr',
    color: 'bg-purple-100'
  }
];

const ShakesSection = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/meny'); // Relative route
    // OR: window.location.href = 'http://localhost:5173/meny'; if not using React Router
  };

  return (
    <section className="relative py-16 px-6  bg-gradient-to-br from-pink-50 via-yellow-50 to-rose-100 overflow-hidden poppins-black">
      {/* Decorative Blobs */}
      <div className="absolute top-[-50px] left-[-50px] w-80 h-80 bg-rose-200 opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[-40px] right-[-40px] w-72 h-72 bg-yellow-300 opacity-20 rounded-full blur-2xl -z-10"></div>

      {/* Header */}
     <div className="max-w-2xl mx-auto text-center mb-10 px-4">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
    <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16">
      <iframe
        src="https://lottie.host/embed/5ceae3a1-fe39-4c70-b77c-d4e2bcf10f77/PUy3IiyF2B.lottie"
        className="w-full h-full"
        title="Shake Animation"
      ></iframe>
    </div>
    <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold poppins-regular text-gray-900 font-serif">
      Våra skakande skapelser
    </h2>
    
  </div>

  <p className="text-xs sm:text-sm md:text-base text-gray-600 poppins-regular mt-3 leading-relaxed">
    Tjock, krämig och full av smak – skaka loss!
  </p>
</div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {shakes.map((item, index) => (
          <div
            key={index}
            onClick={handleCardClick}
            className={`cursor-pointer relative group overflow-hidden rounded-2xl ${item.color} p-5 shadow-md hover:shadow-xl transition-all duration-300`}
          >
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm z-10 text-sm">
              <span className="font-semibold poppins-regular text-amber-700">{item.price}</span>
            </div>

            <div className="relative h-52 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full w-auto object-contain group-hover:animate-shake"
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full  blur-lg group-hover:animate-wobble"></div>
            </div>

            <div className="text-center">
              <h3 className="text-lg poppins-regular font-semibold text-gray-800 mb-1">{item.name}</h3>
              <p className="text-sm poppins-regular text-gray-600 mb-3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          20% { transform: translateX(-4px) rotate(-1deg); }
          40% { transform: translateX(4px) rotate(1deg); }
          60% { transform: translateX(-3px) rotate(-0.5deg); }
          80% { transform: translateX(3px) rotate(0.5deg); }
        }
        @keyframes wobble {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.08); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .animate-wobble {
          animation: wobble 1.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ShakesSection;

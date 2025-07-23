import React from 'react';

const teaItems = [
  {
    name: 'Masala Chai',
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
    desc: 'Spiced Indian tea with cardamom and ginger',
    benefits: 'Boosts immunity'
  },
  {
    name: 'Green Tea',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
    desc: 'Delicate antioxidant-rich tea',
    benefits: 'Promotes metabolism'
  },
  {
    name: 'Lemon Ginger',
    image: 'https://images.unsplash.com/photo-1603665270146-bbdfd8e2d0a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
    desc: 'Zesty blend with digestive benefits',
    benefits: 'Aids digestion'
  }
];

const Teas = () => (
  <section className="py-12 px-6 bg-amber-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-amber-900">Hot Teas</h2>
      <p className="text-center text-amber-800 mb-8 max-w-2xl mx-auto">
        Handcrafted blends to warm your body and soul
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teaItems.map((item, i) => (
          <div 
            key={i} 
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
              <p className="text-amber-700 mt-2 text-sm">{item.desc}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-medium text-amber-700">{item.benefits}</span>
                <button className="px-4 py-2 bg-amber-600 text-white rounded-full text-sm hover:bg-amber-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Teas;
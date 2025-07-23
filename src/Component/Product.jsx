import React, { useState } from 'react';
import { FiHeart, FiStar } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";


const ProductsSection = () => {
    const [activeFilter, setActiveFilter] = useState('Alla');
    const [wishlist, setWishlist] = useState([]);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/meny");
    };

    const toggleWishlist = (id) => {
        setWishlist((prev) =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const coffeeProducts = [
    {
        id: 1,
        name: "Arabic Coffee",
        prices: [
            { variant: "Simple", amount: 30 },
            { variant: "Double", amount: 40 }
        ],
        image: "/Images/coffe-1-main.jpg",
        tags: ["Single Origin", "Ljusrost"],
        isNew: true,
        thought: "Mild smak med en touch av kryddor"
    },
    {
        id: 2,
        name: "Cappuccino",
        price: 49,
        image: "/Images/coffe-2-main.jpg",
        tags: ["Single Origin", "Mellanrost"],
        isBestSeller: true,
        thought: "Krämig med en balanserad kaffesmak"
    },
    {
        id: 3,
        name: "Brew Coffee",
        price: 34,
        image: "/Images/coffe-3.png",
        tags: ["Blend", "Mörkrost"],
        isFeatured: true,
        thought: "Stark smak med en hint av karamell"
    },
    {
        id: 4,
        name: "Coffee latte",
        price: 53,
        image: "/Images/coffe-4.png",
        tags: ["Single Origin", "Mellanrost"],
        thought: "Mjuk och söt med smak av mjölk"
    },
];


    const filters = ['Alla', 'Single Origin', 'Blandningar', 'Ljusrost', 'Mörkrost'];

    return (
        <div className="bg-[#fefaf6] poppins-black">
            {/* Hero Section */}
<div className="bg-[#fefaf6] poppins-black">
  {/* Hero Section */}
  <div
    className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[650px] xl:min-h-[750px] w-full bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/Images/header.png')" }}
  >
    {/* Content here if needed */}
  </div>
</div>



            {/* Produktsektion */}
            <section className="max-w-7xl mx-auto py-16 px-4 ">
                <div className="text-center mb-10">
                    <h2 className="text-4xl poppins-regular font-bold text-[#4b2e22]">What's Brewing Now</h2>
                    <p className="text-sm poppins-regular text-gray-600 mt-2">Hover to hear what each coffee has to say</p>
                    <div className="w-16 h-1 bg-amber-500 mx-auto mt-3"></div>
                </div>


                {/* Produktgrid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {coffeeProducts.map((product) => (
                        <div
                            key={product.id}
                            className="relative group flex flex-col items-center"
                        >
                            <div className="relative w-40 h-40">
                                <div className="w-full h-full rounded-full bg-white shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-32 h-32 object-cover rounded-full"
                                    />
                                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="relative bg-white rounded-lg p-3 poppins-regular shadow-md w-48 text-center">
                                            <div className="text-xs italic text-gray-600">"{product.thought}"</div>
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-4 h-4 bg-white rotate-45"></div>
                                        </div>
                                    </div>
                                </div>


                                
                            </div>

                            <h3 className="mt-4 text-lg poppins-regular font-medium text-gray-800 text-center">{product.name}</h3>
                            <div className="mt-1 text-center">
                                {product.prices ? (
                                    <div className="space-y-1">
                                        {product.prices.map((option, idx) => (
                                            <div key={idx} className="text-sm text-gray-800">
                                                <span className="font-medium">{option.variant}:</span>{" "}
                                                <span className="text-amber-700 poppins-regular font-semibold">{option.amount} kr</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <span className="text-amber-700 poppins-regular font-semibold">{product.price.toFixed(2)} kr</span>
                                )}
                            </div>


                        </div>
                    ))}
                </div>

                <div className="text-center mt-14">
                    <button
                        onClick={handleClick}
                        className="border poppins-regular border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-3 rounded-full font-medium transition-all">
                        Utforska mer
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProductsSection;

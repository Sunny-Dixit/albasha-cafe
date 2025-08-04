// src/Menu/MainMenu.jsx
import React, { useState, useEffect } from 'react';
import Header from '../Component/Header';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBirthdayCake, FaIceCream, FaPlus, FaCookieBite, FaSearch, FaShoppingCart, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import { GiStrawberry, GiWheat, GiCoffeeCup, GiGlassShot } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import { API_BASE_URL } from '../config/api';

// Available theme colors that will be cycled through for categories
const availableThemes = [
  { 
    id: 'pink',
    bg: 'from-pink-50 to-white', 
    text: 'text-pink-800',
    border: 'border-pink-200',
    accent: 'bg-pink-500',
    highlight: 'bg-pink-100'
  },
  { 
    id: 'amber',
    bg: 'from-amber-50 to-white', 
    text: 'text-amber-800',
    border: 'border-amber-200',
    accent: 'bg-amber-500',
    highlight: 'bg-amber-100'
  },
  { 
    id: 'yellow',
    bg: 'from-yellow-50 to-white', 
    text: 'text-yellow-800',
    border: 'border-yellow-200',
    accent: 'bg-yellow-500',
    highlight: 'bg-yellow-100'
  },
  { 
    id: 'orange',
    bg: 'from-orange-50 to-white', 
    text: 'text-orange-800',
    border: 'border-orange-200',
    accent: 'bg-orange-500',
    highlight: 'bg-orange-100'
  },
  { 
    id: 'blue',
    bg: 'from-blue-50 to-white', 
    text: 'text-blue-800',
    border: 'border-blue-200',
    accent: 'bg-blue-500',
    highlight: 'bg-blue-100'
  },
  { 
    id: 'green',
    bg: 'from-green-50 to-white', 
    text: 'text-green-800',
    border: 'border-green-200',
    accent: 'bg-green-500',
    highlight: 'bg-green-100'
  },
  { 
    id: 'purple',
    bg: 'from-purple-50 to-white', 
    text: 'text-purple-800',
    border: 'border-purple-200',
    accent: 'bg-purple-500',
    highlight: 'bg-purple-100'
  },
  { 
    id: 'red',
    bg: 'from-red-50 to-white', 
    text: 'text-red-800',
    border: 'border-red-200',
    accent: 'bg-red-500',
    highlight: 'bg-red-100'
  }
];

// Enhanced icons for specific categories
const defaultIcons = {
  'crepes': <GiWheat className="text-xl" />,
  'desserts': <FaCookieBite className="text-xl" />,
  'ice cream': <FaIceCream className="text-xl" />,
  'cold drinks': <GiGlassShot className="text-xl" />,
  'hot drinks': <GiCoffeeCup className="text-xl" />,
  'shakes': <GiStrawberry className="text-xl" />,
  'summer': <FaIceCream className="text-xl" />,
  'popular': <FaBirthdayCake className="text-xl" />,
  'default': <GiCoffeeCup className="text-xl" />
};

// Dummy data to use when API fails
const dummyCategories = [
  {
    id: 1,
    name: 'Popular',
    items: [
      {
        id: 101,
        name: 'Chokladboll',
        description: 'Hemmagjorda chokladbollar med kokos',
        price: 25,
        discountedPrice: 22,
        discount: 12,
        ingredients: 'Havregryn, kakao, kaffe, socker, kokos',
        calories: 280,
        imagePath: null
      },
      {
        id: 102,
        name: 'Kanelbulle',
        description: 'Färska kanelbullar med vaniljkräm',
        price: 35,
        discountedPrice: 35,
        discount: 0,
        ingredients: 'Vetemjöl, kanel, smör, socker, vaniljkräm',
        calories: 420,
        imagePath: null
      },
      {
        id: 103,
        name: 'Chokladmuffins',
        description: 'Mjuka chokladmuffins med chokladbitar',
        price: 32,
        discountedPrice: 32,
        discount: 0,
        ingredients: 'Mjöl, kakao, chokladbitar, ägg, mjölk',
        calories: 380,
        imagePath: null
      }
    ]
  },
  {
    id: 2,
    name: 'Crepes',
    items: [
      {
        id: 201,
        name: 'Nutellacrepe',
        description: 'Varm crepe med Nutella och banan',
        price: 65,
        discountedPrice: 65,
        discount: 0,
        ingredients: 'Vetemjöl, ägg, mjölk, Nutella, banan',
        calories: 520,
        imagePath: null
      },
      {
        id: 202,
        name: 'Bärcrepe',
        description: 'Crepe med jordgubbar, blåbär och vispgrädde',
        price: 75,
        discountedPrice: 70,
        discount: 7,
        ingredients: 'Vetemjöl, ägg, mjölk, jordgubbar, blåbär, vispgrädde',
        calories: 480,
        imagePath: null
      },
      {
        id: 203,
        name: 'Citroncrepe',
        description: 'Crepe med citron och socker',
        price: 55,
        discountedPrice: 55,
        discount: 0,
        ingredients: 'Vetemjöl, ägg, mjölk, citron, socker',
        calories: 390,
        imagePath: null
      }
    ]
  },
  {
    id: 3,
    name: 'Desserts',
    items: [
      {
        id: 301,
        name: 'Chokladfondant',
        description: 'Varm chokladfondant med vaniljglass',
        price: 85,
        discountedPrice: 85,
        discount: 0,
        ingredients: 'Mörk choklad, smör, ägg, socker, vaniljglass',
        calories: 650,
        imagePath: null
      },
      {
        id: 302,
        name: 'Crème Brûlée',
        description: 'Klassisk crème brûlée med karamelliserat socker',
        price: 75,
        discountedPrice: 70,
        discount: 7,
        ingredients: 'Grädde, äggulor, vanilj, socker',
        calories: 540,
        imagePath: null
      },
      {
        id: 303,
        name: 'Pannacotta',
        description: 'Pannacotta med passionsfrukt och jordgubbar',
        price: 70,
        discountedPrice: 70,
        discount: 0,
        ingredients: 'Grädde, socker, vanilj, passionsfrukt, jordgubbar',
        calories: 420,
        imagePath: null
      }
    ]
  },
  {
    id: 4,
    name: 'Ice Cream',
    items: [
      {
        id: 401,
        name: 'Vaniljglass',
        description: 'Krämig vaniljglass med chokladsås',
        price: 45,
        discountedPrice: 45,
        discount: 0,
        ingredients: 'Mjölk, grädde, vanilj, socker, chokladsås',
        calories: 320,
        imagePath: null
      },
      {
        id: 402,
        name: 'Jordgubbsglass',
        description: 'Färsk jordgubbsglass med jordgubbar',
        price: 50,
        discountedPrice: 50,
        discount: 0,
        ingredients: 'Mjölk, grädde, jordgubbar, socker',
        calories: 290,
        imagePath: null
      },
      {
        id: 403,
        name: 'Chokladglass',
        description: 'Rik chokladglass med chokladbitar',
        price: 55,
        discountedPrice: 50,
        discount: 9,
        ingredients: 'Mjölk, grädde, kakao, chokladbitar, socker',
        calories: 380,
        imagePath: null
      }
    ]
  }
];

const MenuStrip = ({ title, items, icon, theme, addToCart }) => {
  const [expandedItems, setExpandedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // State for image popup

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(i => i !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <section 
      id={title.toLowerCase().replace(/\s+/g, '-')}
      className={`bg-gradient-to-b ${theme.bg} py-16 px-4 sm:px-6 relative poppins-black scroll-mt-24`}
    >
      {/* Decorative fluid shape */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden -z-10">
        <svg 
          viewBox="0 0 1440 150" 
          className={`w-full h-full ${theme.accent} opacity-20`}
          preserveAspectRatio="none"
        >
          <path 
            d="M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,80C672,96,768,128,864,138.7C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 sticky top-0 pt-6 pb-4 bg-white/80 backdrop-blur-sm z-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <div className={`p-3 rounded-full ${theme.highlight}`}>
              {icon}
            </div>
            <h2 className={`text-3xl sm:text-4xl font-bold ${theme.text}`}>
              {title}
            </h2>
          </div>
          
          <div className="relative poppins-regular max-w-md mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={`Sök i ${title.toLowerCase()}...`}
              className="w-full pl-10 pr-4 py-2 rounded-full border ${theme.border} focus:outline-none focus:ring-1 focus:ring-current"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Menu items as fluid list */}
        <div className="space-y-1 poppins-regular relative">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative overflow-hidden rounded-xl ${
                  expandedItems.includes(i) ? theme.highlight : "bg-white"
                } border ${theme.border}`}
              >
                <button
                  onClick={() => toggleItem(i)}
                  className="w-full text-left p-5 pr-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <div className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border ${theme.border}`}>
                    {item.imagePath ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent expanding the item
                          setSelectedImage(`${API_BASE_URL}${item.imagePath}`);
                        }}
                        className="w-full h-full"
                      >
                        <img
                          src={`${API_BASE_URL}${item.imagePath}`}
                          alt={item.name}
                          className="object-cover w-full h-full hover:opacity-90 transition-opacity"
                        />
                      </button>
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <GiCoffeeCup className="text-gray-400 text-2xl" />
                      </div>
                    )}
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold">{item.name}</h3>

                      {/* Pricing with Discount */}
                      <div className="flex flex-col items-start sm:items-end">
                        {item.discount > 0 ? (
                          <>
                            <span className="text-sm text-gray-500 line-through">
                              {item.price} kr
                            </span>
                            <span className="text-lg font-bold text-green-600">
                              {item.discountedPrice.toFixed(2)} kr
                            </span>
                            <span className="text-xs text-red-500 font-semibold">
                              ({item.discount}% rabatt)
                            </span>
                          </>
                        ) : (
                          <span className="text-lg font-bold text-gray-800">
                            {item.price} kr
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mt-1 line-clamp-1">
                      {item.description}
                    </p>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedItems.includes(i) ? 180 : 0 }}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${theme.text}`}
                  >
                    <IoIosArrowDown />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedItems.includes(i) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-5 pb-5 pt-0 border-t ${theme.border}`}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">
                              Beskrivning
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {item.description || "Ingen beskrivning tillgänglig"}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">
                              Ingredienser
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {item.ingredients || "Premium kvalitetsingredienser"}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Näring</h4>
                            <p className="text-gray-600 text-sm">
                              {item.calories
                                ? `${item.calories} kalorier`
                                : "Näringsinformation finns på begäran"}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 flex justify-end">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-full ${theme.accent} text-white flex items-center gap-2`}
                            onClick={() => addToCart(item)}
                          >
                            <FaPlus size={14} />
                            <span>Lägg till</span>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <GiCoffeeCup className="mx-auto text-4xl text-gray-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-600">Inga matchande produkter hittades</h3>
              <p className="text-gray-500 mt-1">Försök med en annan sökning</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 bg-black bg-opacity-60 text-white rounded-full p-2 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes className="text-xl" />
              </button>
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={selectedImage} 
                  alt="Enlarged menu item" 
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const MainMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Persist cart in localStorage on every update
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  const [showCart, setShowCart] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    tableNo: '',
    email: '',
    phoneNumber: ''
  });

  // Add to cart function
  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove from cart function
  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  // Update quantity function
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate total
  const cartTotal = cart.reduce(
    (total, item) => total + (item.discountedPrice || item.price) * item.quantity,
    0
  );

  // Validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Validate phone number format
  const validatePhoneNumber = (phone) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  // Place order function
  const placeOrder = async () => {
    if (!customerInfo.name || !customerInfo.tableNo) {
      alert('Vänligen ange ditt namn och bordnummer');
      return;
    }

    if (customerInfo.email && !validateEmail(customerInfo.email)) {
      alert('Vänligen ange en giltig e-postadress');
      return;
    }

    if (customerInfo.phoneNumber && !validatePhoneNumber(customerInfo.phoneNumber)) {
      alert('Vänligen ange ett giltigt telefonnummer (10-15 siffror)');
      return;
    }

    try {
      const orderData = {
        customerName: customerInfo.name,
        tableNo: customerInfo.tableNo,
        email: customerInfo.email,
        phoneNumber: customerInfo.phoneNumber,
        totalAmount: cartTotal,
        items: cart.map(item => ({
          menuItem: { id: item.id },
          quantity: item.quantity,
          customerName: customerInfo.name,
          tableNo: customerInfo.tableNo
        }))
      };

      const response = await fetch(`${API_BASE_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Misslyckades med att skicka order');
      }

      // Clear cart and customer info on success
      setCart([]);
      setCustomerInfo({ 
        name: '', 
        tableNo: '', 
        email: '', 
        phoneNumber: '' 
      });
      setShowCart(false);
      alert('Order skickad!');
    } catch (err) {
      alert(`Fel vid beställning: ${err.message}`);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/categories/with-items`);
        if (!response.ok) {
          throw new Error('Misslyckades med att hämta kategorier');
        }
        const data = await response.json();
        setCategories(data);
        if (data.length > 0) {
          setActiveCategory(data[0].name.toLowerCase());
        }
      } catch (err) {
        console.error('API error, using dummy data:', err);
        setCategories(dummyCategories);
        setError(null); // Clear error to show dummy data
        if (dummyCategories.length > 0) {
          setActiveCategory(dummyCategories[0].name.toLowerCase());
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Function to assign a theme to each category
  const getCategoryTheme = (categoryName, index) => {
    // Cycle through available themes based on index
    const themeIndex = index % availableThemes.length;
    const theme = availableThemes[themeIndex];
    
    // Get icon based on category name
    const lowerName = categoryName.toLowerCase();
    let icon = defaultIcons.default;
    
    // Check for exact matches first
    for (const [key, value] of Object.entries(defaultIcons)) {
      if (lowerName.includes(key)) {
        icon = value;
        break;
      }
    }
    
    return {
      id: lowerName.replace(/\s+/g, '-'),
      icon,
      theme
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-2 text-gray-600">Laddar meny...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <GiCoffeeCup className="mx-auto text-4xl text-red-500 mb-4" />
          <h3 className="text-xl font-medium text-gray-800">Fel vid inläsning av meny</h3>
          <p className="text-gray-600 mt-1">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Försök igen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Cart Button */}
      <button
        onClick={() => setShowCart(true)}
        className="fixed right-4 bottom-4 bg-blue-500 text-white p-4 rounded-full shadow-lg z-20 flex items-center justify-center"
      >
        <FaShoppingCart className="text-xl" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* Cart Modal */}
      <AnimatePresence>
        {showCart && (
          <>
            {/* This hides the header when cart is open */}
            <style>{`header { display: none !important; }`}</style>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-center justify-center p-4"
              onClick={() => setShowCart(false)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white rounded-xl w-full max-w-md h-[90vh] flex flex-col shadow-xl"
                onClick={e => e.stopPropagation()}
              >
                {/* Cart Header */}
                <div className="bg-amber-800 p-4 flex justify-between items-center flex-shrink-0">
                  <h2 className="text-white font-bold text-lg">Din beställning</h2>
                  <button 
                    onClick={() => setShowCart(false)}
                    className="text-white hover:text-amber-200"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                  {cart.length === 0 ? (
                    <div className="text-center py-8 flex-1 flex flex-col justify-center items-center">
                      <GiCoffeeCup className="text-4xl text-amber-300 mb-3" />
                      <p className="text-gray-600 font-medium">Din varukorg är tom</p>
                      <button 
                        onClick={() => setShowCart(false)}
                        className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
                      >
                        Bläddra i menyn
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Cart Items */}
                      <div className="flex-1 overflow-y-auto px-4 py-2">
                        <div className="space-y-3 pr-2">
                          {cart.map(item => (
                            <div key={item.id} className="flex justify-between items-start py-3 border-b border-gray-100">
                              <div className="flex items-start gap-3 min-w-0 flex-1">
                                <div className="w-12 h-12 rounded bg-amber-50 overflow-hidden flex-shrink-0">
                                  {item.imagePath && (
                                    <img
                                      src={`${API_BASE_URL}${item.imagePath}`}
                                      alt={item.name}
                                      className="object-cover w-full h-full"
                                    />
                                  )}
                                </div>
                                <div className="min-w-0">
                                  <p className="font-medium text-sm break-words">{item.name}</p>
                                  <p className="text-xs text-gray-500">
                                    {(item.discountedPrice || item.price).toFixed(2)} kr styck
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2 ml-2">
                                <div className="flex items-center gap-1">
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="w-6 h-6 rounded bg-amber-100 text-amber-800 flex items-center justify-center text-xs hover:bg-amber-200"
                                  >
                                    -
                                  </button>
                                  <span className="text-sm w-6 text-center">{item.quantity}</span>
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="w-6 h-6 rounded bg-amber-100 text-amber-800 flex items-center justify-center text-xs hover:bg-amber-200"
                                  >
                                    +
                                  </button>
                                </div>
                                <span className="text-sm font-medium whitespace-nowrap">
                                  {((item.discountedPrice || item.price) * item.quantity).toFixed(2)} kr
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Totals */}
                      <div className="border-t border-gray-200 pt-3 mt-3 flex-shrink-0 px-4">
                        <div className="flex justify-between text-sm py-1">
                          <span>Delsumma</span>
                          <span className="font-medium">{cartTotal.toFixed(2)} kr</span>
                        </div>
                        <div className="flex justify-between font-bold py-1">
                          <span>Totalt</span>
                          <span>{cartTotal.toFixed(2)} kr</span>
                        </div>
                      </div>

                      {/* Order Form */}
                      <form 
                        onSubmit={(e) => { e.preventDefault(); placeOrder(); }} 
                        className="mt-4 space-y-3 flex-shrink-0 px-4 pb-4"
                      >
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <input
                              type="text"
                              placeholder="Namn*"
                              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                              value={customerInfo.name}
                              onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Bord*"
                              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                              value={customerInfo.tableNo}
                              onChange={(e) => setCustomerInfo({ ...customerInfo, tableNo: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <FaEnvelope className="absolute left-3 top-3 text-gray-400 text-sm" />
                          <input
                            type="email"
                            placeholder="E-post*"
                            className="w-full pl-9 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                            value={customerInfo.email}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                            required
                          />
                        </div>
                        
                        <div className="relative">
                          <FaPhone className="absolute left-3 top-3 text-gray-400 text-sm" />
                          <input
                            type="tel"
                            placeholder="Telefon*"
                            className="w-full pl-9 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                            value={customerInfo.phoneNumber}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, phoneNumber: e.target.value })}
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition mt-2"
                        >
                          Skicka beställning
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sidebar navigation */}
      <div className="hidden md:block fixed left-0 top-0 h-full w-20 pt-24 bg-white border-r border-gray-100 z-10">
        <div className="flex flex-col items-center py-4 space-y-6">
          {categories.map((category, index) => {
            const categoryTheme = getCategoryTheme(category.name, index);
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.name.toLowerCase());
                  document.getElementById(category.name.toLowerCase().replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`p-3 rounded-xl transition-all flex flex-col items-center ${activeCategory === category.name.toLowerCase() ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                {categoryTheme.icon}
                <span className="text-xs mt-1">{category.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile floating navigation */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 mx-auto w-max bg-white shadow-lg rounded-full px-2 py-1 flex items-center z-20 overflow-x-auto scrollbar-hide">
        {categories.map((category, index) => {
          const categoryTheme = getCategoryTheme(category.name, index);
          return (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.name.toLowerCase());
                document.getElementById(category.name.toLowerCase().replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`p-3 rounded-full transition-all mx-1 ${activeCategory === category.name.toLowerCase() ? categoryTheme.theme.accent + ' text-white' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              {categoryTheme.icon}
            </button>
          );
        })}
      </div>

      <main className="md:ml-20">
        {categories.map((category, index) => {
          const categoryTheme = getCategoryTheme(category.name, index);
          return (
            <MenuStrip
              key={category.id}
              title={category.name}
              items={category.items}
              icon={categoryTheme.icon}
              theme={categoryTheme.theme}
              addToCart={addToCart}
            />
          );
        })}
      </main>
    </div>
  );
};

export default MainMenu;
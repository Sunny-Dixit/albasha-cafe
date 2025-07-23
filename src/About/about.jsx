import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaLinkedin 
} from 'react-icons/fa';
import { 
  GiCoffeeCup, 
  GiCakeSlice, 
  GiFlowerEmblem 
} from 'react-icons/gi';
import { RiLeafLine } from 'react-icons/ri';
import { SiBuymeacoffee } from 'react-icons/si';
import { FaSun, FaSnowflake } from 'react-icons/fa';
import Header from '../Component/Header';



// Placeholder Header component (replace with your actual Header component)


// Helper function for color conversion
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

const SeasonalParticles = ({ season }) => {
  return (
    <>
      {[...Array(season.particles)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.3,
            rotate: Math.random() * 360
          }}
          animate={{
            y: [0, window.innerHeight],
            x: [0, (Math.random() - 0.5) * 200],
            rotate: [0, Math.random() * 360],
            opacity: [0.8, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            fontSize: `${Math.random() * 20 + 10}px`,
            color: season.darkColor
          }}
        >
          {season.particleShape === "flower" ? "🌸" : 
           season.particleShape === "leaf" ? "🍂" : 
           season.particleShape === "snowflake" ? "❄️" : "●"}
        </motion.div>
      ))}
    </>
  );
};

const AboutUs = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yFg = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  const [currentSeason, setCurrentSeason] = useState(0);
  const seasons = [
    { 
      name: "Spring", 
      color: "#d4edda",
      darkColor: "#155724",
      icon: <GiFlowerEmblem />,
      gradient: "linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)",
      particles: 60,
      particleShape: "flower"
    },
    { 
      name: "Summer", 
      color: "#d1ecf1",
      darkColor: "#0c5460",
      icon:  <FaSun />,
      gradient: "linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%)",
      particles: 40,
      particleShape: "circle"
    },
    { 
      name: "Autumn", 
      color: "#fff3cd",
      darkColor: "#856404",
      icon: <RiLeafLine />,
      gradient: "linear-gradient(135deg, #fff3cd 0%, #ffeeba 100%)",
      particles: 80,
      particleShape: "leaf"
    },
    { 
      name: "Winter", 
      color: "#e2e3e5",
      darkColor: "#383d41",
      icon: <FaSnowflake />,
      gradient: "linear-gradient(135deg, #e2e3e5 0%, #d6d8db 100%)",
      particles: 100,
      particleShape: "snowflake"
    }
  ];


  // 3D menu items with expanded seasonal offerings
const seasonalItems = [
    {
      season: "Spring",
      items: [
         { 
          name: "Emperor's Strawberry", 
          desc: "Premium dessert featuring fresh local strawberries",
          price: "129 SEK",
          ingredients: ["Local strawberries", "Premium cream", "Vanilla sponge", "Edible flowers"],
          pairing: "Strawberry Milkshake"
        },
        { 
          name: "Exotic Fruit Salad", 
          desc: "Tropical fruit medley with seasonal summer fruits",
          price: "139 SEK",
          ingredients: ["Mango", "Pineapple", "Passion fruit", "Kiwi", "Seasonal berries"],
          pairing: "Pina Colada"
        },
        { 
          name: "Dubai Strawberry Cup", 
          desc: "Crispy kadayif threads with pistachio cream and milk chocolate, served with ice cream",
          price: "129 SEK",
          ingredients: ["Kadayif dough", "Pistachio cream", "Milk chocolate", "Fresh strawberries", "Vanilla ice cream"],
          pairing: "Strawberry Limoncello"
        },
        { 
          name: "Arabic Ice Cream", 
          desc: "Traditional milk ice cream with pistachio nuts",
          price: "60 SEK",
          ingredients: ["Fresh milk", "Cream", "Pistachio nuts", "Rose water"],
          pairing: "Mojito Lemoncello"
        }
      ]
    },
    {
      season: "Summer",
      items: [
          { 
          name: "Emperor's Strawberry", 
          desc: "Premium dessert featuring fresh local strawberries",
          price: "129 SEK",
          ingredients: ["Local strawberries", "Premium cream", "Vanilla sponge", "Edible flowers"],
          pairing: "Strawberry Milkshake"
        },
        { 
          name: "Exotic Fruit Salad", 
          desc: "Tropical fruit medley with seasonal summer fruits",
          price: "139 SEK",
          ingredients: ["Mango", "Pineapple", "Passion fruit", "Kiwi", "Seasonal berries"],
          pairing: "Pina Colada"
        },
        { 
          name: "Dubai Strawberry Cup", 
          desc: "Crispy kadayif threads with pistachio cream and milk chocolate, served with ice cream",
          price: "129 SEK",
          ingredients: ["Kadayif dough", "Pistachio cream", "Milk chocolate", "Fresh strawberries", "Vanilla ice cream"],
          pairing: "Strawberry Limoncello"
        },
        { 
          name: "Arabic Ice Cream", 
          desc: "Traditional milk ice cream with pistachio nuts",
          price: "60 SEK",
          ingredients: ["Fresh milk", "Cream", "Pistachio nuts", "Rose water"],
          pairing: "Mojito Lemoncello"
        }
      ]
    },
    {
      season: "Autumn",
      items: [
                { 
          name: "Apple Cinnamon Bliss", 
          desc: "Warm apple cake with cinnamon streusel and vanilla sauce",
          price: "88 SEK",
          ingredients: ["Local apples", "Cinnamon", "Oats", "Vanilla bean"],
          pairing: "Spiced Chai Latte"
        },
        { 
          name: "Pumpkin Spice Semla", 
          desc: "Autumn version of the classic with pumpkin and spices",
          price: "78 SEK",
          ingredients: ["Pumpkin", "Cardamom", "Cinnamon", "Whipped cream"],
          pairing: "Pumpkin Spice Latte"
        },
        { 
          name: "Hazelnut Chocolate Tart", 
          desc: "Rich chocolate filling with roasted hazelnuts in shortcrust",
          price: "92 SEK",
          ingredients: ["Dark chocolate", "Hazelnuts", "Butter", "Sea salt"],
          pairing: "Mocha with Hazelnut"
        },
        { 
          name: "Salted Caramel Pastry", 
          desc: "Decadent pastry featuring salted caramel and chocolate",
          price: "40 SEK",
          ingredients: ["Salted caramel", "Chocolate cake base", "Hazelnuts", "Cream"],
          pairing: "Spiced Chai Latte"
        }
      ]
    },
    {
      season: "Winter",
      items: [
        { 
          name: "Pepparkakor Cheesecake", 
          desc: "Ginger snap crust with vanilla cheesecake and citrus glaze",
          price: "90 SEK",
          ingredients: ["Pepparkakor", "Cream cheese", "Lemon", "Orange"],
          pairing: "Glögg (Mulled Wine)"
        },
        { 
          name: "Nutella Explosion Waffle", 
          desc: "Waffle drenched in Nutella with ice cream and toppings",
          price: "139 SEK",
          ingredients: ["Belgian waffle", "Nutella", "Chocolate ice cream", "Strawberries", "Oreo"],
          pairing: "Hot Chocolate with Chili"
        },
        { 
          name: "Dubai Chocolate", 
          desc: "Crispy kunafa dough with pistachio filling enrobed in chocolate",
          price: "300 SEK",
          ingredients: ["Kunafa dough", "Pistachio filling", "Premium chocolate"],
          pairing: "Arabic Coffee"
        },
        { 
          name: "Lotus Treece", 
          desc: "Caramelized biscuit dessert with creamy filling",
          price: "60 SEK",
          ingredients: ["Lotus biscuits", "Caramel sauce", "Cream cheese", "Butter"],
          pairing: "Traditional Swedish Coffee"
        }
      ]
    }
  ];

  // Interactive gallery with micro-interactions
  const [activeView, setActiveView] = useState("philosophy");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Enhanced season change with animations
  useEffect(() => {
    const now = new Date();
    const month = now.getMonth();
    setCurrentSeason(Math.floor(month / 3) % 4);
    
    const interval = setInterval(() => {
      setCurrentSeason((prev) => (prev + 1) % seasons.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [seasons.length]);

  // Track cursor for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Team members with enhanced animations
  const teamMembers = [
    {
      name: "Albasha",
      role: "Master Baker",
      specialty: "Traditional Swedish Pastries",
      animation: { 
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
        transition: { duration: 2, repeat: Infinity } 
      },
      bio: "Fifth-generation baker trained in Stockholm and Paris. Passionate about preserving Swedish baking traditions while adding modern twists."
    },
    {
      name: "Albasha",
      role: "Coffee Alchemist",
      specialty: "Nordic Roast Profiles",
      animation: { 
        y: [0, -15, 0],
        transition: { duration: 3, repeat: Infinity } 
      },
      bio: "Former Swedish Barista Champion with a focus on sustainable coffee sourcing. Creates unique Nordic-inspired coffee blends."
    },
    {
      name: "Albasha",
      role: "Experience Curator",
      specialty: "Creating Hygge Moments",
      animation: { 
        rotate: [0, 2, -2, 0],
        scale: [1, 1.02, 1],
        transition: { duration: 4, repeat: Infinity } 
      },
      bio: "Designer and hospitality expert dedicated to crafting the perfect fika atmosphere through sensory experiences."
    }
  ];

  // Interactive cursor effect
  const cursorVariants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: seasons[currentSeason].darkColor,
      mixBlendMode: "multiply"
    },
    hover: {
      scale: 2,
      backgroundColor: seasons[currentSeason].color
    }
  };

  return (
    <> 
      <Header />   
      <div className="min-h-screen poppins-regular bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-amber-200 selection:text-gray-900">
        {/* Custom cursor */}
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50"
          variants={cursorVariants}
          animate={hoveredCard !== null ? "hover" : "default"}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        />
        
        {/* Immersive Parallax Hero with multiple layers */}
        <section 
          ref={targetRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
          style={{ 
            background: seasons[currentSeason].gradient,
            transition: "background 1.5s ease"
          }}
        >
          {/* Background layer */}
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y: yBg, scale }}
          >
            <div className="absolute inset-0 opacity-10">
              <SeasonalParticles season={seasons[currentSeason]} />
            </div>
          </motion.div>

          {/* Mid layer with decorative elements */}
          <motion.div 
            className="absolute inset-0 z-0 flex items-center justify-center"
            style={{ y: yMid, scale: 1.05 }}
          >
            <div className="relative w-full h-full">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full opacity-20"
                  style={{
                    background: seasons[currentSeason].darkColor,
                    width: `${100 + i * 50}px`,
                    height: `${100 + i * 50}px`,
                    top: '50%',
                    left: '50%',
                    x: '-50%',
                    y: '-50%',
                    filter: 'blur(10px)'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 5 + i * 2,
                    repeat: Infinity
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Foreground content */}
          <motion.div 
            className="relative z-10 text-center px-6"
            style={{ opacity, y: yFg }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={seasons[currentSeason].name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                  <span className="block poppins-regular text-5xl md:text-6xl font-light mb-2 opacity-80">Albasha</span>
                  {seasons[currentSeason].name}
                </h1>
                <motion.div 
                  className="text-5xl mb-8"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity
                  }}
                >
                  {typeof seasons[currentSeason].icon === 'string' 
                    ? seasons[currentSeason].icon 
                    : React.cloneElement(seasons[currentSeason].icon, { size: 60 })}
                </motion.div>
                <motion.p 
                  className="text-xl md:text-2xl max-w-2xl mx-auto font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Where Swedish tradition meets modern café culture
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Scroll indicator with seasonal color */}
          <motion.div 
            className="absolute bottom-10 left-0 right-0 flex justify-center z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div 
              className="w-8 h-12 rounded-full border-2 flex justify-center pt-2"
              style={{ borderColor: seasons[currentSeason].darkColor }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div 
                className="w-1 h-3 rounded-full"
                style={{ backgroundColor: seasons[currentSeason].darkColor }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky Navigation with animated underline */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-center relative">
            {["philosophy", "seasonal", "team", "location"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveView(item);
                  document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-8 py-5 font-medium text-sm uppercase tracking-wider transition-all relative ${activeView === item ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                onMouseEnter={() => setHoveredCard('nav')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {item}
                {activeView === item && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: seasons[currentSeason].darkColor }}
                    layoutId="navUnderline"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Philosophy Section - Interactive Cards with depth effect */}
        <section id="philosophy" className="py-28 poppins-regular px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-6">
                <span className="opacity-50">The Art of</span><br />
                <span className="font-bold" style={{ color: seasons[currentSeason].darkColor }}>Nordic Fika</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our philosophy blends Swedish tradition with contemporary café culture through three core principles
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Lagom",
                  description: "The Swedish art of balance—not too much, not too little. Our portions and flavors embody this perfect equilibrium that satisfies without overwhelming.",
                  icon: <RiLeafLine />,
                  color: seasons[currentSeason].darkColor,
                  hoverEffect: "scale"
                },
                {
                  title: "Fika",
                  description: "More than coffee—a sacred pause to connect. Our space is designed for these precious moments of togetherness that nourish the soul as much as the body.",
                  icon: <GiCoffeeCup />,
                  color: seasons[currentSeason].darkColor,
                  hoverEffect: "rotate"
                },
                {
                  title: "Hygge",
                  description: "Creating cozy contentment where time slows down. Every detail nurtures warmth and wellbeing, from our lighting to the curve of our chairs.",
                  icon: <GiCakeSlice />,
                  color: seasons[currentSeason].darkColor,
                  hoverEffect: "depth"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group perspective-1000 min-h-[400px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <motion.div
                    className={`relative h-full p-8 rounded-2xl shadow-xl bg-white border border-gray-100 transition-all duration-500 ease-[cubic-bezier(0.05, 0.6, 0.4, 0.9)] ${hoveredCard === index ? 'shadow-2xl' : ''}`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: hoveredCard === index ? 
                        (item.hoverEffect === "rotate" ? 'rotateY(10deg) rotateX(5deg)' : 
                         item.hoverEffect === "scale" ? 'scale(1.03)' : 
                         'translateZ(20px)') : 'none',
                      boxShadow: hoveredCard === index ? 
                        `0 30px 60px -15px rgba(${hexToRgb(seasons[currentSeason].darkColor)}, 0.3)` : '',
                      background: hoveredCard === index ? 
                        `linear-gradient(to bottom, white 0%, ${seasons[currentSeason].color}20 100%)` : 'white'
                    }}
                  >
                    <div className="absolute top-8 right-8 text-4xl" style={{ color: item.color }}>
                      {React.cloneElement(item.icon, { size: 40 })}
                    </div>
                    <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-8">{item.description}</p>
                    <motion.div 
                      className="absolute bottom-8 left-8 right-8 h-0.5 bg-current opacity-20"
                      animate={{ width: hoveredCard === index ? '100%' : '80%' }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-white rounded-t-full border-l border-r border-t border-gray-200" />
                  </motion.div>
                  
                  {/* Floating decorative element */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg"
                    style={{ backgroundColor: seasons[currentSeason].color }}
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: hoveredCard === index ? 360 : 0
                    }}
                    transition={{ 
                      y: { duration: 3, repeat: Infinity },
                      rotate: { duration: 0.6 }
                    }}
                  >
                    <SiBuymeacoffee color={seasons[currentSeason].darkColor} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Menu - Interactive 3D Flip Cards with ingredient visualization */}
        <section 
          id="seasonal" 
          className="py-28 poppins-regular px-6 relative overflow-hidden"
          style={{ 
            background: seasons[currentSeason].gradient,
            transition: "background 1.5s ease"
          }}
        >
          {/* Floating seasonal elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl opacity-10"
                style={{
                  color: seasons[currentSeason].darkColor,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, (Math.random() - 0.5) * 100],
                  x: [0, (Math.random() - 0.5) * 50],
                  rotate: [0, Math.random() * 360]
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {currentSeason === 0 ? "🌸" : 
                 currentSeason === 1 ? "☀️" : 
                 currentSeason === 2 ? "🍂" : "❄️"}
              </motion.div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-4 text-white">
                <span className="opacity-80">Seasonal</span> <span className="font-bold">Delights</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Our {seasons[currentSeason].name.toLowerCase()} menu celebrates Nordic ingredients at their peak
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {seasonalItems.find(s => s.season === seasons[currentSeason].name)?.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="h-[500px] perspective-1000"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  onMouseEnter={() => setHoveredCard(`menu-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d group hover:rotate-y-180">
                    {/* Front of card */}
                    <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between overflow-hidden">
                      <div>
                        <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center shadow-md" 
                          style={{ background: seasons[currentSeason].color }}>
                          {React.cloneElement(seasons[currentSeason].icon, { 
                            size: 36, 
                            color: seasons[currentSeason].darkColor 
                          })}
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                        <p className="text-gray-600 mb-6">{item.desc}</p>
                        
                        {/* Ingredient visualization */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {item.ingredients.map((ingredient, i) => (
                            <motion.span
                              key={i}
                              className="text-xs px-3 py-1 rounded-full border"
                              style={{ 
                                borderColor: seasons[currentSeason].darkColor,
                                color: hoveredCard === `menu-${index}` ? seasons[currentSeason].darkColor : 'inherit'
                              }}
                              whileHover={{
                                scale: 1.1,
                                backgroundColor: seasons[currentSeason].darkColor,
                                color: 'white'
                              }}
                            >
                              {ingredient}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-lg font-medium mb-2" style={{ color: seasons[currentSeason].darkColor }}>
                          {item.price}
                        </p>
                        <p className="text-sm text-gray-500">
                          Pairs perfectly with: <span className="font-medium">{item.pairing}</span>
                        </p>
                      </div>
                      
                      {/* Decorative corner */}
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-10" 
                        style={{ backgroundColor: seasons[currentSeason].darkColor }} />
                    </div>
                    
                    {/* Back of card */}
                    <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-xl p-8 flex items-center justify-center rotate-y-180 overflow-hidden" 
                      style={{ 
                        background: seasons[currentSeason].darkColor,
                        color: seasons[currentSeason].color
                      }}>
                      <div className="text-center p-6">
                        <div className="text-5xl mb-6">
                          {React.cloneElement(seasons[currentSeason].icon, { size: 48 })}
                        </div>
                        <p className="text-xl font-medium mb-2">"{seasons[currentSeason].name}'s Special"</p>
                        <p className="opacity-80 mb-6">A seasonal masterpiece</p>
                        <motion.div
                          className="inline-block px-6 py-2 rounded-full border border-current"
                          whileHover={{ 
                            backgroundColor: seasons[currentSeason].color,
                            color: seasons[currentSeason].darkColor
                          }}
                        >
                          <span className="font-medium">Recipe Story</span>
                        </motion.div>
                      </div>
                      
                      {/* Decorative corner */}
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-10" 
                        style={{ backgroundColor: seasons[currentSeason].color }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Interactive Profiles with animated backgrounds */}
        <section id="team" className="py-28 px-6 bg-white relative overflow-hidden">
          {/* Decorative floating circles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                backgroundColor: seasons[currentSeason].darkColor,
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 100],
                x: [0, (Math.random() - 0.5) * 50],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}

          <div className="max-w-6xl poppins-regular mx-auto relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-4">
                <span className="opacity-50">Our</span> <span className="font-bold" style={{ color: seasons[currentSeason].darkColor }}>Guardians</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The passionate team bringing Swedish tradition to life through exceptional experiences
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="text-center relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredCard(`team-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Profile card */}
                  <motion.div
                    className="relative mb-8 mx-auto w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                    style={{ 
                      boxShadow: hoveredCard === `team-${index}` ? 
                        `0 25px 50px -12px rgba(${hexToRgb(seasons[currentSeason].darkColor)}, 0.3)` : '' 
                    }}
                    whileHover="hover"
                    variants={{
                      hover: { 
                        y: -10,
                        transition: { type: "spring", stiffness: 300 }
                      }
                    }}
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 z-0"
                      style={{ backgroundColor: seasons[currentSeason].color }}
                      variants={{
                        hover: { 
                          opacity: 0.2,
                          transition: { duration: 0.3 }
                        }
                      }}
                    />
                    
                    {/* Profile image placeholder */}
                    <div className="relative z-10 w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">[Photo]</span>
                    </div>
                    
                    {/* Bio overlay */}
                    <motion.div
                      className="absolute inset-0 z-20 bg-black/80 p-6 flex flex-col justify-center opacity-0"
                      variants={{
                        hover: { 
                          opacity: 1,
                          transition: { duration: 0.3 }
                        }
                      }}
                    >
                      <p className="text-white text-sm leading-relaxed">{member.bio}</p>
                      <motion.button
                        className="mt-4 px-4 py-2 rounded-full border border-white text-white text-xs font-medium self-center"
                        whileHover={{ 
                          backgroundColor: 'white',
                          color: seasons[currentSeason].darkColor
                        }}
                      >
                        View Full Profile
                      </motion.button>
                    </motion.div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-lg mb-2 font-medium" style={{ color: seasons[currentSeason].darkColor }}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 italic">{member.specialty}</p>
                  
                  {/* Social links */}
                  <div className="flex justify-center gap-3 mt-4">
                    {['instagram', 'twitter', 'linkedin'].map((social) => (
                      <motion.a
                        key={social}
                        href="#"
                        className="w-8 h-8 rounded-full flex items-center justify-center border"
                        style={{ 
                          borderColor: seasons[currentSeason].darkColor,
                          color: hoveredCard === `team-${index}` ? seasons[currentSeason].darkColor : 'inherit'
                        }}
                        whileHover={{ 
                          backgroundColor: seasons[currentSeason].darkColor,
                          color: seasons[currentSeason].color
                        }}
                      >
                        {social === 'instagram' ? <FaInstagram /> :
                         social === 'twitter' ? <FaTwitter /> : <FaLinkedin />}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section - Interactive Map with Opening Hours */}
        <section id="location" className="py-28 poppins-regular px-6 bg-gray-50 relative">
          {/* Decorative seasonal element */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
            style={{ backgroundColor: seasons[currentSeason].darkColor }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="max-w-6xl mx-auto relative">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Information */}
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-light mb-12">
                  <span className="opacity-50">Find Your</span><br />
                  <span className="font-bold" style={{ color: seasons[currentSeason].darkColor }}>Moment</span>
                </h2>
                
                <div className="space-y-8">
                  {/* Café Location */}
                  <motion.div 
                    className="flex items-start gap-6 p-6 rounded-xl bg-white shadow-lg"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-3xl mt-1" style={{ color: seasons[currentSeason].darkColor }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium mb-2">Our Café</h3>
                      <p className="text-gray-600 text-lg">Alekärrsgatan 10 415 02 Gothenburg</p>
                      <p className="text-gray-500 mt-2">In the heart of Stockholm's historic district</p>
                    </div>
                  </motion.div>
                  
                  {/* Reservations */}
                  <motion.div 
                    className="flex items-start gap-6 p-6 rounded-xl bg-white shadow-lg"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-3xl mt-1" style={{ color: seasons[currentSeason].darkColor }}>
                      <FaPhone />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium mb-2">Reservations</h3>
                      <p className="text-gray-600 text-lg">031-388 01 94</p>
                    </div>
                  </motion.div>
                  
                  {/* Contact */}
                  <motion.div 
                    className="flex items-start gap-6 p-6 rounded-xl bg-white shadow-lg"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-3xl mt-1" style={{ color: seasons[currentSeason].darkColor }}>
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium mb-2">Contact</h3>
                      <p className="text-gray-600 text-lg">albashagbg@hotmail.com</p>
                      <p className="text-gray-500 mt-2">For events and collaborations</p>
                    </div>
                  </motion.div>
                </div>

                {/* Opening Hours with animated tabs */}
                <div className="mt-16">
                  <h3 className="text-2xl poppins-regular font-medium mb-6">Opening Hours</h3>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {[
                      { day: "Monday - Friday", hours: "11:00 - 21:00", note: "" },
                      { day: "Saturday", hours: "11:00 - 21:00", note: "" },
                      { day: "Sunday", hours: "11:00 - 21:00", note: "" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="p-6 border-b last:border-b-0 border-gray-100"
                        whileHover={{ 
                          backgroundColor: seasons[currentSeason].color + '20',
                          paddingLeft: '28px'
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex justify-between items-center">
                          <p className="font-medium text-lg">{item.day}</p>
                          <p className="font-bold" style={{ color: seasons[currentSeason].darkColor }}>
                            {item.hours}
                          </p>
                        </div>
                        <p className="text-gray-500 mt-1">{item.note}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Interactive Map */}
              <motion.div 
                className="md:w-1/2 relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="sticky top-28 h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  {/* Map placeholder with seasonal overlay */}
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">[Interactive Map]</span>
                  </div>
                  
                  {/* Seasonal marker */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                    style={{ 
                      backgroundColor: seasons[currentSeason].darkColor,
                      color: seasons[currentSeason].color
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      y: [-10, 0, -10]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                  >
                    <GiCoffeeCup size={24} />
                  </motion.div>
                  
                  {/* Info card */}
                  <motion.div
                    className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                        style={{ 
                          backgroundColor: seasons[currentSeason].color,
                          color: seasons[currentSeason].darkColor
                        }}>
                        {React.cloneElement(seasons[currentSeason].icon, { size: 20 })}
                      </div>
                      <div>
                        <h4 className="font-bold">Fika {seasons[currentSeason].name}</h4>
                        <p className="text-sm text-gray-600">Come experience our seasonal offerings</p>
                      </div>
                    </div>
                    
                    <motion.button
                      className="mt-4 w-full py-3 rounded-lg font-medium"
                      style={{ 
                        backgroundColor: seasons[currentSeason].darkColor,
                        color: seasons[currentSeason].color
                      }}
                      whileHover={{ 
                        y: -2,
                        boxShadow: `0 5px 15px rgba(${hexToRgb(seasons[currentSeason].darkColor)}, 0.3)`
                      }}
                    >
                      Get Directions
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs; 
// CafeFooter.jsx
import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaYelp, FaTripadvisor, FaClock } from "react-icons/fa";
import { GiCoffeeCup, GiCoffeeBeans } from "react-icons/gi";
import { motion } from "framer-motion";

const CafeFooter = () => {
  return (
    <footer className="bg-[#0f0c0a] poppins-regular text-white pt-16 pb-8 border-t border-[#2c2c2c]">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#1a130f] to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Brand identity */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#c9af7f] to-[#a87d4a] rounded-full flex items-center justify-center shadow-lg">
              <GiCoffeeCup className="text-2xl text-[#0d0d0d]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider ml-4">
              <span className="text-[#c9af7f]">Albasha</span> Sweets 
            </h2>
          </div>
          <p className="text-[#b8b8b8] text-center max-w-md italic font-light">
            Crafting exceptional coffee experiences 
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Section */}
          <div className="p-6 rounded-xl bg-[#1a1a1a]/40 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center text-[#c9af7f]">
              <FaMapMarkerAlt className="mr-2" />
              Find Us
            </h3>
            <ul className="space-y-3 mt-5">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#c9af7f]" />
                <div>
                  <p className="font-medium">Alekärrsgatan 10</p>
                  <p className="text-[#b8b8b8]">415 02 Göteborg</p>
                </div>
              </li>
             <li className="flex  items-center">
  <FaPhone className="mr-3 text-[#c9af7f]" />
  <a href="tel:0313880194" className="text-white  hover:underline">
    031-388 01 94
  </a>
</li>
<li className="flex text-white items-center">
  <FaEnvelope className="mr-3 text-[#c9af7f]" />
  <a href="mailto:albashagbg@hotmail.com" className="text-white hover:underline">
    albashagbg@hotmail.com
  </a>
</li>
              
            </ul>
          </div>

          {/* Hours Section */}
          <div className="p-6 rounded-xl bg-[#1a1a1a]/40 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center text-[#c9af7f]">
              <FaClock className="mr-2" />
              Opening Hours
            </h3>
            
            <ul className="space-y-3 mt-5">
              {[
                { day: "Monday - Friday", time: "11:00 AM - 21:00 PM" },
                { day: "Saturday", time: "11:00 AM - 21:00 PM" },
                { day: "Sunday", time: "11:00 AM - 21:00 PM" },
              ].map((item, i) => (
                <li key={i} className="flex justify-between py-2 border-b border-[#ffffff08] last:border-0">
                  <span className="text-[#b8b8b8]">{item.day}</span>
                  <span className="text-[#c9af7f] font-medium">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="p-6 rounded-xl bg-[#1a1a1a]/40 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center text-[#c9af7f]">
              <GiCoffeeBeans className="mr-2" />
              Explore
            </h3>
            
          <div className="grid grid-cols-2 gap-4 mt-5">
  {[
    { label: "Menu", href: "/meny" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "#gallery" },
  ].map((item, i) => (
    <a
      key={i}
      href={item.href}
      className="text-[#b8b8b8] hover:text-[#c9af7f] transition flex items-center group"
    >
      <span className="w-2 h-2 bg-[#c9af7f] rounded-full mr-3 transition-transform group-hover:scale-125"></span>
      {item.label}
    </a>
  ))}
</div>


          </div>

          {/* Newsletter */}
          <div className="p-6 rounded-xl bg-[#1a1a1a]/40 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center text-[#c9af7f]">
              <GiCoffeeCup className="mr-2" />
              Newsletter
            </h3>
            
            <p className="mb-4 text-[#b8b8b8]">
              Subscribe for exclusive offers, events and coffee insights
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 bg-[#1a1a1a] border border-[#2c2c2c] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c9af7f] text-white placeholder-[#5a5a5a]"
              />
              <button
                className="px-5 py-3 bg-gradient-to-r from-[#c9af7f] to-[#a87d4a] text-[#0d0d0d] font-medium rounded-lg hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-[#e0e0e0]">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <FaInstagram />, name: "Instagram" },
                  { icon: <FaFacebook />, name: "Facebook" },
                  { icon: <FaTwitter />, name: "Twitter" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center px-4 py-2 bg-[#1a1a1a] rounded-lg hover:bg-[#c9af7f] transition group border border-[#2c2c2c]"
                  >
                    <span className="mr-2 text-[#c9af7f] group-hover:text-[#0d0d0d]">
                      {social.icon}
                    </span>
                    <span className="text-sm group-hover:text-[#0d0d0d]">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-[#ffffff10] pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <GiCoffeeBeans className="mr-2 text-[#c9af7f]" />
           <p className="text-[#7d7d7d] text-sm sm:text-base">
  © {new Date().getFullYear()} Albasha Sweets & Coffee. All rights reserved.{" "}
  <span className="block sm:inline mt-1 sm:mt-0">
    Powered by <a href="https://genesisvirtue.com" className="text-pink-600 hover:underline" target="_blank" rel="noopener noreferrer">Genesis Virtue</a>.
  </span>
</p>

          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Privacy", "Terms"].map((item, i) => (
              <a
                key={i}
                href="#"
                className="text-[#7d7d7d] hover:text-[#c9af7f] transition text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CafeFooter;
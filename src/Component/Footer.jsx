import React from 'react';
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { GiCoffeeCup, GiCoffeeBeans } from "react-icons/gi";

const CafeFooter = () => {
  return (
    <footer className="bg-[#0f0c0a] poppins-regular text-white pt-16 pb-8 border-t border-[#2c2c2c]">
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#1a130f] to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Brand */}
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
            Skapar exceptionella kaffeupplevelser
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Kontakt */}
          <div className="p-6 rounded-xl bg-[#1a1a1a]/40 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center text-[#c9af7f]">
              <FaMapMarkerAlt className="mr-2" />
              Hitta oss
            </h3>
            <ul className="space-y-3 mt-5">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#c9af7f]" />
                <div>
                  <p className="font-medium">Alekärrsgatan 10</p>
                  <p className="text-[#b8b8b8]">415 02 Göteborg</p>
                </div>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-[#c9af7f]" />
                <a href="tel:0313880194" className="text-white hover:underline">
                  031-388 01 94
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-[#c9af7f]" />
                <a
                  href="mailto:albashagbg@hotmail.com"
                  className="text-white hover:underline"
                >
                  albashagbg@hotmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Öppettider */}
          <div className="p-6 rounded-xl bg-[#1a1a1a]/40 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center text-[#c9af7f]">
              <FaClock className="mr-2" />
              Öppettider
            </h3>
            <ul className="space-y-3 mt-5">
              {[
                { day: "Måndag - Fredag", time: "11:00 - 21:00" },
                { day: "Lördag", time: "11:00 - 21:00" },
                { day: "Söndag", time: "11:00 - 21:00" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between py-2 border-b border-[#ffffff08] last:border-0"
                >
                  <span className="text-[#b8b8b8]">{item.day}</span>
                  <span className="text-[#c9af7f] font-medium">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Utforska */}
          <div className="p-6 rounded-xl bg-[#1a1a1a]/40 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center text-[#c9af7f]">
              <GiCoffeeBeans className="mr-2" />
              Utforska
            </h3>
            <div className="grid grid-cols-2 gap-4 mt-5">
              {[
                { label: "Meny", href: "/meny" },
                { label: "Om oss", href: "/about" },
                { label: "Galleri", href: "#gallery" },
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

          {/* Följ oss */}
          <div className="p-6 rounded-xl bg-[#1a1a1a]/40 backdrop-blur-sm">
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-[#e0e0e0]">Följ oss</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: <FaInstagram />,
                    name: "Instagram",
                    link: "https://www.instagram.com/al_basha_goteborg/",
                  },
                  {
                    icon: <FaFacebook />,
                    name: "Facebook",
                    link: "https://www.facebook.com/p/Al-Basha-G%C3%B6teborg-100063721565861/",
                  },
                  {
                    icon: <FaTiktok />,
                    name: "TikTok",
                    link: "https://www.tiktok.com/@albasha.gothenborg",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#1a1a1a] rounded-lg hover:bg-[#c9af7f] transition group border border-[#2c2c2c]"
                  >
                    <span className="mr-2 text-[#c9af7f] group-hover:text-[#0d0d0d]">
                      {social.icon}
                    </span>
                    <span className="text-sm group-hover:text-[#0d0d0d]">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-[#ffffff10] pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <GiCoffeeBeans className="mr-2 text-[#c9af7f]" />
            <p className="text-[#7d7d7d] text-sm sm:text-base">
              © {new Date().getFullYear()} Albasha Sweets & Coffee. Alla rättigheter
              förbehållna.{" "}
              <span className="block sm:inline mt-1 sm:mt-0">
                Drivs av{" "}
                <a
                  href="https://genesisvirtue.com"
                  className="text-pink-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Genesis Virtue
                </a>
                .
              </span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Integritetspolicy", "Villkor"].map((item, i) => (
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

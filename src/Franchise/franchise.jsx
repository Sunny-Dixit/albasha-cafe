import React, { useState } from 'react';

const FranchisePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Thank you! Our team will contact you soon.');
    setFormData({ name: '', email: '', phone: '', location: '', experience: '', message: '' });
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header Section */}
      <header className="bg-[#2C3E50] text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4 font-serif">Become an Al Basha Café Franchisee</h1>
        <p className="text-xl max-w-3xl mx-auto">
          A unique opportunity to own a business that celebrates Middle Eastern tradition with a modern twist.
        </p>
      </header>

      {/* Why Franchise Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Al Basha Café?</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-xl font-semibold">Authentic Concept</h3>
            <p>
              Known for authentic Middle Eastern pastries such as baklava and kunafa, crafted from carefully developed recipes.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Strong Brand Identity</h3>
            <p>
              Leverage an established customer base and industry recognition to grow your business.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Support and Training</h3>
            <p>
              Full support in marketing, operations, and staff training provided to all franchisees.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Quality Products</h3>
            <p>
              Premium ingredients ensure consistent, high-quality offerings across all locations.
            </p>
          </li>
        </ul>
      </section>

      {/* Ideal Franchisee Section */}
      <section className="bg-white py-16 px-6 border-t">
        <h2 className="text-3xl font-bold text-center mb-8">What We Look for in a Franchisee</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Passion for Baking & Service</h4>
            <p>We seek passionate individuals who value quality and customer experience.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Entrepreneurial Spirit</h4>
            <p>Drive to manage and grow a successful café with a trusted brand.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Commitment</h4>
            <p>Consistency in delivering the Al Basha experience across every outlet.</p>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 px-6 bg-[#ECF0F1]" id="apply">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Apply Now</h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
              />
            </div>
            <input
              type="text"
              name="location"
              placeholder="Preferred Location (City/Region)*"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
            />
            <textarea
              name="experience"
              rows="3"
              placeholder="Relevant Business/Restaurant Experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
            ></textarea>
            <textarea
              name="message"
              rows="4"
              placeholder="Why are you interested in an Al Basha Café franchise?*"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#3498DB] hover:bg-[#2980B9] text-white py-3 font-semibold rounded transition transform hover:scale-105"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-[#2C3E50] text-white py-10 text-center">
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <p>Email: <a href="mailto:franchise@albasha.se" className="underline">franchise@albasha.se</a></p>
        <p>Phone: <a href="tel:+46123456789" className="underline">+46 123 456 789</a></p>
        <p>Website: <a href="https://www.albasha-cafe.com" target="_blank" className="underline">www.albasha-cafe.com</a></p>
        <p className="mt-4 text-sm">© {new Date().getFullYear()} Al Basha Café. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FranchisePage;

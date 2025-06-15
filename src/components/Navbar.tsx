
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'glass-effect shadow-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className={`text-3xl font-bold transition-all duration-300 ${
              scrolled ? 'text-sky-600' : 'text-white'
            }`}>
              <span className="gradient-text">SpikingJet</span>
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                    scrolled 
                      ? 'text-gray-700 hover:bg-sky-50 hover:text-sky-600' 
                      : 'text-white hover:bg-white/10 hover:text-sky-200'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-full transition-all duration-300 ${
                scrolled ? 'text-gray-700 hover:bg-sky-50' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden glass-effect rounded-2xl mt-4 p-6 animate-scale-in">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Quality', path: '/quality' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Customization', path: '/customization' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="HRK Logo" className="h-16 w-auto" />
            <div className="flex flex-col">
              <span className="text-dark font-bold text-lg leading-tight uppercase tracking-wider">Biopolymers</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-tighter">Packaging Solutions</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary hover:bg-red-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Export Inquiry
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-primary transition-colors focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-medium ${
                location.pathname === link.path ? 'bg-red-50 text-primary' : 'text-dark hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-4 bg-primary text-white px-3 py-4 rounded-md text-base font-bold"
          >
            Export Inquiry
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

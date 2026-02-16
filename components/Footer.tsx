
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
             
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight uppercase tracking-wider">HRK Bio Polymers</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Global Packaging Solutions. Engineered for Reliability. Delivering high-performance polymer and bio-based packaging to international markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Explore</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products Range</Link></li>
              <li><Link to="/quality" className="hover:text-white transition-colors">Quality & Compliance</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/customization" className="hover:text-white transition-colors">Customization</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-secondary pl-3">Our Range</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Garbage Bags</li>
              <li>Carrier & T-Shirt Bags</li>
              <li>Courier & E-commerce Bags</li>
              <li>Shrink & Stretch Film</li>
              <li>Agricultural Mulch Film</li>
              <li>Packaging Accessories</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-gray-500 pl-3">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>export@hrkbiopolymers.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} HRK Bio Polymers. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
           

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

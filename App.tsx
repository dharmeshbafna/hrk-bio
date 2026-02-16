
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Globe, ShieldCheck, Leaf, Factory, Layers, Package, Truck, ArrowRight } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Quality from './pages/Quality';
import Sustainability from './pages/Sustainability';
import Customization from './pages/Customization';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/customization" element={<Customization />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

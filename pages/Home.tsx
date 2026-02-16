
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Truck, Factory, Layers, Globe, ArrowRight, Package, Leaf, CheckCircle2, ChevronLeft } from 'lucide-react';
import GlobalPresenceMap from '../components/GlobalPresenceMap';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const slides = [
    {
      url: "banner1.jpg",
      caption: "State of art Manufacturing Facility"
    },
    {
      url: "banner2.jpg",
      caption: "Precise Quality Control"
    },
    {
      url: "banner4.jpg",
      caption: "Automated Processes for Consistent Quality"
    },
    {
      url: "banner3.jpg",
      caption: "Unique Design for Strength & Durability"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-dark overflow-hidden py-20 lg:py-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark pointer-events-none z-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-white">
              <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase">Engineered for Performance.</span>
              </div>
              <h1 className="text-5xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Technology-driven manufacturing <br />
                <span className="text-primary">Export-ready reliability</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                HRK Biopolymers delivers durable, ISO-certified packaging solutions with large-scale capacity and export-ready reliability. Built on precision, sustainability, and global standards.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/products" className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center space-x-2 group shadow-xl">
                  <span>Explore Catalog</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-center transition-all">
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Right: Image Slider */}
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10">
              {slides.map((slide, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                    idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                  }`}
                >
                  <img src={slide.url} alt={slide.caption} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <p className="text-white font-bold text-xl tracking-wide">{slide.caption}</p>
                  </div>
                </div>
              ))}
              
              {/* Slider Controls */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-30"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-30"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Dots */}
              <div className="absolute bottom-4 right-8 flex space-x-2 z-30">
                {slides.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-primary w-6' : 'bg-white/50'}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Assurance Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Quality Standards</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">What We Ensure in Every Product</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Every HRK biopolymer product undergoes rigorous testing and quality control to meet international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { name: "Puncture Resistance", icon: "puncture.png" },
              { name: "High-Definition Print Quality", icon: "print-quality.png" },
              { name: "Excellent Tear Strength", icon: "shield.png" },
              { name: "Dart Impact", icon: "dart.png" },
              { name: "Thickness", icon: "thickness.png" },
              { name: "Tensile Testing", icon: "tensile.png" },
              { name: "Tear Resistance", icon: "tear.png" },
              { name: "Print Quality Shade Card", icon: "shade-card.png" },
              { name: "Superior Strength", icon: "strength.png" },
              { name: "Opacity", icon: "opacity.png" }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300 border-2 border-gray-200 group-hover:border-primary/50">
                    <img src={`/${feature.icon}`} alt={feature.name} className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors duration-300">{feature.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Premium Solutions for Every Need</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our comprehensive range of high-quality biopolymer products designed for durability and sustainability.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Garbage Bags', 'Packaging Solutions', 'Industrial Products'].map((tab, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 md:px-8 py-3 rounded-full font-bold transition-all ${
                  activeTab === idx 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-gray-100 text-dark hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === 0 && (
              <>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img src="kitchen_bags.jpg" alt="Heavy Duty Garbage Bags" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">Drawstring Interleaved
Trash Bags</h3>
                    <p className="text-gray-600 text-sm">Durable and puncture-resistant bags for heavy waste disposal</p>
                  </div>
                </div>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img src="scut.jpg" alt="S Cut Bags" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">S Cut Garbage Bag 
On Roll</h3>
                    <p className="text-gray-600 text-sm">Easy S-cut opening for quick, smooth tearing</p>
                  </div>
                </div>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img src="gbag3.jpg" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">Star Sealed Garbage Bag on Roll</h3>
                    <p className="text-gray-600 text-sm">Perfect for Home/Offices/Restaurantand Commercial spaces.
</p>
                  </div>
                </div>
              </>
            )}

            {activeTab === 1 && (
              <>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img src="tamper-evident.jpg" alt="Tamper Evident Bags" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">Tamper  Evident 
Bags</h3>
                    <p className="text-gray-600 text-sm">Safe and hygienic films for food storage and preservation</p>
                  </div>
                </div>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img src="courier-bag.jpg" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">Courier Mailers</h3>
                    <p className="text-gray-600 text-sm">Secure and protective packaging for logistics and e-commerce</p>
                  </div>
                </div>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img src="ziplock.jpg" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">Slider Storage Bags</h3>
                    <p className="text-gray-600 text-sm">Easy slider closure for quick open and close.</p>
                  </div>
                </div>
              </>
            )}

            {activeTab === 2 && (
              <>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img src="mulch.jpg" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">Mulch Film</h3>
                    <p className="text-gray-600 text-sm">Used in agriculture to cover soil and protect crops, Helps retain moisture and reduce water usage.</p>
                  </div>
                </div>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img src="construction.jpg" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">Construction Sheets</h3>
                    <p className="text-gray-600 text-sm">Protects against dust, paint splashes, cement, and moisture. Made from strong plastic for temporary site protection.</p>
                  </div>
                </div>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img src="shrink.jpg" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">Shrink Film</h3>
                    <p className="text-gray-600 text-sm">Used in paper industry, bundling bottles, cans, and food packs together.</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <Link to="/products" className="inline-flex items-center bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg">
              Explore Full Catalog <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      
      <section className="relative bg-gray-100 text-dark overflow-visible pt-12 pb-16">
        {/* Content positioned above animation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative mb-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">International Hubs</span>
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">A Truly Global Supply Network</h2>
            <p className="text-dark/70 max-w-2xl mx-auto">
              From our manufacturing headquarters in India, we deliver consistent, high-quality packaging to partners across Europe, North America, and Australia. The animation highlights our primary export destinations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {['India','USA','UK','Israel','Europe','Spain','Ireland','Australia'].map((loc) => (
              <div key={loc} className="inline-flex items-center gap-3 bg-white border border-gray-300 text-dark px-4 py-2 rounded-full text-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary block" aria-hidden="true"></span>
                <span>{loc}</span>
              </div>
            ))}
          </div>

          <ul className="sr-only" aria-label="Global presence locations">
            <li>India (headquarters)</li>
            <li>United States</li>
            <li>United Kingdom</li>
            <li>Israel</li>
            <li>Europe</li>
            <li>Spain</li>
            <li>Ireland</li>
            <li>Australia</li>
          </ul>
        </div>

        {/* Animation Background - positioned with proper spacing */}
        <div className="hidden lg:block relative my-12 pointer-events-none">
          <GlobalPresenceMap />
        </div>

        {/* Button at bottom of section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 relative -mt-32">
          <a href="/contact" className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">Partner with us globally</a>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 10 rounded-3xl -rotate-3"></div>
              <img src="factory.jpg" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Manufacturing Excellence</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Engineered for Reliability</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                HRK Biopolymers is a technology-driven packaging manufacturer and global exporter specializing in providing packaging solutions globally. Built on a customer-first philosophy, we deliver durable, reliable, and performance-oriented packaging solutions that meet international expectations.
              </p>
              <div className="space-y-4 mb-10">
                {["Proprietary bio-blend formulations", "ISO certified production lines", "12,000+ tonne annual capacity"].map((feat, i) => (
                  <div key={i} className="flex items-center space-x-3 text-dark font-medium">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center text-primary font-bold hover:underline group">
                Learn more about our processes <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Sustainability Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
                <Leaf size={32} />
              </div>
              <h2 className="text-3xl font-bold text-dark">The Future is Green</h2>
              <p className="text-gray-600 leading-relaxed">
                Sustainability isn't just a trend for us—it's the core of our innovation. Our bio-polymers are designed to break down without leaving a trace, reducing plastic waste while delivering peak performance.
              </p>
              <Link to="/sustainability" className="text-primary font-bold flex items-center hover:underline group">
                Explore our Eco-range <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" alt="Eco" className="rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready for Premium Packaging?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Join hundreds of global brands that trust HRK Bio Polymers for their logistics and retail needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
              Request Export Quote
            </Link>
            <Link to="/products" className="bg-transparent border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all">
              View Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

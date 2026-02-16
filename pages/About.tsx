
import React from 'react';
import { Target, Eye, Shield, Users, Factory, Globe, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-20 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">About HRK Bio Polymers</h1>
          <p className="text-xl text-gray-500 max-w-3xl">Expert-Oriented Polymer Packaging Manufacturer focused on strength, safety, and environmental responsibility.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
            {/* Images - Larger and more prominent */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <img src="factory.jpg" className="rounded-lg shadow-lg w-full h-80 object-cover" alt="Manufacturing Facility" />
              <img src="blown.jpg" className="rounded-lg shadow-lg w-full h-80 object-cover" alt="Advanced Technology" />
            </div>

            {/* Text Content - Right side */}
            <div className="lg:col-span-3">
              <h2 className="text-4xl font-bold text-dark mb-8">Who We Are</h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  HRK Bio Polymers is a technology-driven packaging manufacturer specializing in innovative, durable, and performance-oriented solutions for global markets. Built on a customer-first philosophy, we deliver export-ready products that meet international expectations and compliance standards.
                </p>

                {/* Key Highlights */}
                <div className="space-y-4 mt-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Factory className="w-6 h-6 text-primary mt-1" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-lg mb-1">Modern Manufacturing Facility</h3>
                      <p className="text-gray-600">1 lakh sq. ft. facility in Bavla, Ahmedabad with 12,000 tonnes annual capacity, equipped with advanced machinery and process-driven systems.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Award className="w-6 h-6 text-secondary mt-1" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-lg mb-1">Global Certifications</h3>
                      <p className="text-gray-600">ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, and Kosher certified for quality, environmental, and workplace safety standards.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary mt-1" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-lg mb-1">Global Export Focus</h3>
                      <p className="text-gray-600">80% of business serves international markets across multiple regions with consistent quality and responsive service.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Zap className="w-6 h-6 text-secondary mt-1" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-lg mb-1">Advanced Technology</h3>
                      <p className="text-gray-600">Combining cutting-edge material technology with disciplined quality assurance for consistent, efficient, and environmentally responsible products.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Manufacturing Capabilities</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">Precision Manufacturing at Scale</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-800 rounded-xl hover:bg-gray-800/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Precision Extrusion</h3>
              <p className="text-gray-400 text-sm">Modern extrusion technology enabling consistent output and uniform specifications across every batch.</p>
            </div>
            <div className="p-8 border border-gray-800 rounded-xl hover:bg-gray-800/50 transition-colors">
              <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-lg flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">High-Volume Converting</h3>
              <p className="text-gray-400 text-sm">Equipped to handle high-volume export requirements with efficient turnaround times without compromising quality.</p>
            </div>
            <div className="p-8 border border-gray-800 rounded-xl hover:bg-gray-800/50 transition-colors">
              <div className="w-12 h-12 bg-white/10 text-white rounded-lg flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert QC Team</h3>
              <p className="text-gray-400 text-sm">Every process is optimized to support rigorous quality and process controls for international compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-red-50 p-12 rounded-3xl">
              <div className="flex items-center space-x-4 mb-6">
                <Eye className="text-primary" size={40} />
                <h2 className="text-3xl font-bold text-dark">Vision</h2>
              </div>
              <p className="text-xl text-gray-700 font-medium leading-relaxed italic">
                "To become a global leader in durable, innovative, and eco-responsible garbage bag solutions, making waste management simpler, safer, and more sustainable worldwide. "
              </p>
            </div>
            <div className="bg-orange-50 p-12 rounded-3xl">
              <div className="flex items-center space-x-4 mb-6">
                <Target className="text-secondary" size={40} />
                <h2 className="text-3xl font-bold text-dark">Mission</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Deliver export-ready packaging solutions",
                  "Maintain strict quality and process controls",
                  "Support sustainable material innovation",
                  "Build enduring global partnerships"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Certifications & Compliance</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">Industry-recognized certifications ensuring quality, safety, and environmental responsibility</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                image: "hrk biopolymers private limited - iso 9001-2015_page-0001.jpg",
                caption: "ISO 9001:2015 Certification"
              },
              {
                image: "hrk biopolymers private limited - iso 14001-2015_page-0001.jpg",
                caption: "ISO 14001:2015 Certification"
              },
              {
                image: "hrk biopolymers private limited - iso 45001-2018_page-0001.jpg",
                caption: "ISO 45001-2018 Certification"
              },
              {
                image: "Kosher Ceritficate of HRK Biopolymers Private Limited - Gujarat- India 2026_page-0001.jpg",
                caption: "Kosher Certificate"
              },
              {
                image: "star-expo.jpg",
                caption: "Star Export House Recognition"
              }
            ].map((cert, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md mb-4 bg-white aspect-[3/4] flex items-center justify-center border border-gray-200">
                  <img 
                    src={cert.image} 
                    alt={cert.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-center font-semibold text-dark text-sm md:text-base leading-tight group-hover:text-primary transition-colors">
                  {cert.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

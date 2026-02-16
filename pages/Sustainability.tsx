
import React from 'react';
import { Leaf, Recycle, Wind, Droplets } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-24 gradient-bg text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Leaf className="mx-auto mb-8 animate-bounce" size={64} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustainable Packaging Solutions</h1>
          <p className="text-xl text-white/90">Performance Without Compromise. Helping clients meet evolving environmental expectations worldwide.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-6">Our Approach</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sustainability is integrated into product development—not treated as an afterthought. We offer post-consumer recycled blends, material-efficient designs, and eco-conscious packaging options that help reduce environmental impact while maintaining product reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">PCR Blends</h3>
              <p className="text-gray-500">Incorporating Post-Consumer Recycled (PCR) materials into packaging to close the loop in waste management.</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Resource Optimization</h3>
              <p className="text-gray-500">Down-gauging technology that maintains strength while reducing material volume and carbon footprint during transport.</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wind size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Bio-Based Alternatives</h3>
              <p className="text-gray-500">Continuous R&D into bio-polymers and compostable materials for specific industry applications.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl shadow-2xl" alt="Nature" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">A Shared Responsibility</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                HRK Bio Polymers integrates sustainable practices through recycled material blends, material optimization, and environmentally responsible production processes—helping clients meet evolving environmental and regulatory expectations worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="font-medium">Reduced Plastic Footprint</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="font-medium">Efficient Waste Re-processing</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="font-medium">Environmentally Safe Formulations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;

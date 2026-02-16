
import React from 'react';
import { Tag, Edit, Settings, Briefcase } from 'lucide-react';

const Customization: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Tailored for Global Brands</h1>
          <p className="text-xl text-gray-600 max-w-3xl">We provide customized packaging solutions and private-label manufacturing designed to match your local market specifications.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-dark">Specifications That Match Your Market</h2>
              <p className="text-gray-600">
                International markets have unique requirements. We specialize in adapting our production to meet the specific thickness, size, and material blend requirements of your region.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Settings className="text-primary" />, title: "Custom Formulations", desc: "Virgin, recycled, or hybrid material blends." },
                  { icon: <Tag className="text-primary" />, title: "Private Label", desc: "Your branding on our high-quality products." },
                  { icon: <Edit className="text-primary" />, title: "Custom Prints", desc: "Up to multi-color printing for branding." },
                  { icon: <Briefcase className="text-primary" />, title: "Bulk Supply", desc: "Reliable manufacturing for large distributors." }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-primary transition-colors">
                    <div className="mb-4">{item.icon}</div>
                    <h4 className="font-bold text-dark mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-dark rounded-3xl p-10 text-white shadow-2xl h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Our Customization Capabilities</h3>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h4 className="font-bold">Sizes & Thickness</h4>
                      <p className="text-sm text-gray-400">Width, length, and gauge (microns) precisely as per order.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h4 className="font-bold">Printing & Packaging</h4>
                      <p className="text-sm text-gray-400">Custom master bags, outer cartons, and label branding.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded bg-gray-600 flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h4 className="font-bold">Material Options</h4>
                      <p className="text-sm text-gray-400">LDPE, HDPE, LLDPE, and biodegradable blends available.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-10 pt-8 border-t border-gray-800">
                  <button className="w-full bg-white text-dark font-bold py-4 rounded-xl hover:bg-primary hover:text-white transition-all">
                    Discuss Private Labeling
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customization;

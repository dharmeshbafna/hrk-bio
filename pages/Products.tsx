
import React, { useState } from 'react';
import { Layers, Truck, Package, Leaf, Shield, CheckCircle, Info, X, ChevronRight, Scale, Move, FileText } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  desc: string;
  caption: string;
  image: string;
  features: string[];
  specs: {
    materials: string;
    thickness: string;
    sizes: string;
    capacity: string;
    compliance: string;
  };
  icon: React.ReactNode;
}

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: Product[] = [
    {
      id: "garbage-bags",
      title: "Garbage Bags",
      caption: "Heavy-duty waste containment for all environments.",
      desc: "Introducing our premium quality garbage bags, crafted to deliver strength, hygiene, and everyday convenience, making waste disposal simple and worry-free. ",
      image: "garbage.jpg",
      features: ["Leak-proof design", "High tensile strength", "Unique Emboss Design", "Odour Eliminator Technology"],
      specs: {
        materials: "HDPE / LDPE / LLDPE Blends",
        thickness: "10 - 100 Microns",
        sizes: "400mm",
        capacity: "1200mm",
        compliance: "Side Sealed Bags"
      },
      icon: <Package className="text-primary" size={32} />
    },
    {
      id: "carrier-bags",
      title: "Carrier & T-Shirt Bags",
      caption: "Reliable retail solutions with custom branding.",
      desc: "Lightweight, strong bags for retail, grocery, and food service applications, available in custom sizes and prints.",
      image: "tshirt.jpg",
      features: ["Reinforced handles", "Custom branding", "Food safe", "Recyclable"],
      specs: {
        materials: "Virgin HDPE / Bio-based Starch",
        thickness: "10 - 50 Microns",
        sizes: "Standard Grocery & Custom Boutique",
        capacity: "Up to 15kg load",
        compliance: "Food Grade Certified"
      },
      icon: <Layers className="text-primary" size={32} />
    },
    {
      id: "courier-bags",
      title: "Courier & E-commerce",
      caption: "Secure, tamper-evident logistics packaging.",
      desc: "Multilayered, tamper-evident courier bags with permanent adhesive, designed for e-commerce and logistics supply chains.",
      image: "courier.jpg",
      features: ["Tamper-evident seal", "Water resistant", "POD jacket options", "High opacity"],
      specs: {
        materials: "Co-extruded Multi-layer Film",
        thickness: "40 - 80 Microns",
        sizes: "Standard Postal & Oversized",
        capacity: "Tear-resistant edge strength",
        compliance: "Logistics Industry Grade"
      },
      icon: <Truck className="text-primary" size={32} />
    },
    {
      id: "slider-bags",
      title: "Slider & Zip Lock Bags",
      caption: "Airtight organized storage for consumer goods.",
      desc: "Airtight, reusable packaging for food, consumer goods, and organized storage with smooth slide mechanisms.",
      image: "zip.jpg",
      features: ["Resealable closure", "Extra clarity", "BPA Free", "Multi-purpose"],
      specs: {
        materials: "FDA Approved LDPE",
        thickness: "50 - 150 Microns",
        sizes: "Small Accessory to Large Clothing",
        capacity: "Air-tight sealing technology",
        compliance: "BPA Free & FDA Food Safe"
      },
      icon: <Shield className="text-primary" size={32} />
    },
    {
      id: "shrink-film",
      title: "Shrink & Stretch Film",
      caption: "Superior stability for warehouse and transport.",
      desc: "High-clarity film with consistent shrink performance and high-elasticity film for stable pallet wrapping.",
      image: "shrinkfilm.jpg",
      features: ["High puncture resistance", "Consistent shrink", "UV stabilized", "Ultra-clear visibility"],
      specs: {
        materials: "Linear Low Density Polyethylene",
        thickness: "12 - 50 Microns",
        sizes: "Hand roll & Machine roll widths",
        capacity: "High stretch ratio (up to 300%)",
        compliance: "ISO Transport Standards"
      },
      icon: <Layers className="text-primary" size={32} />
    },
    {
      id: "mulch-film",
      title: "Agricultural Mulch",
      caption: "Performance films for crop and soil health.",
      desc: "Agricultural mulch film engineered to improve moisture retention, weed control, and overall crop efficiency.",
      image: "mulchfilm.jpg",
      features: ["Moisture retention", "Weed suppression", "Crop protection", "UV protection"],
      specs: {
        materials: "UV Resistant Bio-Polymer / PE",
        thickness: "20 - 40 Microns",
        sizes: "Up to 3m roll width",
        capacity: "Soil temperature control",
        compliance: "Agricultural Grade Certified"
      },
      icon: <Leaf className="text-primary" size={32} />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Product Portfolio</h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            From industrial waste management to high-end retail, we engineer every product with precision and a commitment to global quality standards.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((product) => (
              <div 
                key={product.id} 
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-xl text-primary shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Info size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-red-50 rounded-lg text-primary">
                      {React.cloneElement(product.icon as React.ReactElement, { size: 24 })}
                    </div>
                    <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors">{product.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 font-medium italic">"{product.caption}"</p>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-6">
                    {product.desc}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                    <span className="text-primary font-bold text-sm flex items-center">
                      View Specifications <ChevronRight size={16} className="ml-1" />
                    </span>
                    <div className="flex -space-x-2">
                 {/*     <div className="w-8 h-8 rounded-full border-2 border-white bg-green-500 flex items-center justify-center text-[10px] text-white font-bold" title="Eco-Friendly">Bio</div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold" title="Custom Branding">P/L</div>*/}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-dark/80 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedProduct(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl animate-in zoom-in duration-300">
            <button 
              className="absolute top-6 right-6 p-3 bg-gray-100 hover:bg-red-50 hover:text-primary text-gray-500 rounded-full transition-all z-20"
              onClick={() => setSelectedProduct(null)}
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-full">
                <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-6">
                   <div className="p-3 bg-red-50 rounded-2xl text-primary">
                    {React.cloneElement(selectedProduct.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark">{selectedProduct.title}</h2>
                </div>
                
                <p className="text-xl text-gray-500 italic mb-8">"{selectedProduct.caption}"</p>
                
                <div className="space-y-10">
                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-4 flex items-center">
                      <CheckCircle className="text-primary mr-2" size={20} />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProduct.features.map((f, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0"></span>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specs */}
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-4 flex items-center">
                      <FileText className="text-secondary mr-2" size={20} />
                      Technical Specifications
                    </h4>
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                      {[
                        { label: "Material Composition", value: selectedProduct.specs.materials, icon: <Layers size={16} /> },
                        { label: "Thickness Range", value: selectedProduct.specs.thickness, icon: <Move size={16} /> },
                        { label: "Min. Length", value: selectedProduct.specs.sizes, icon: <Scale size={16} /> },
                        { label: "Max. Length", value: selectedProduct.specs.capacity, icon: <Package size={16} /> },
                        { label: "Seal", value: selectedProduct.specs.compliance, icon: <Shield size={16} /> }
                      ].map((spec, idx) => (
                        <div key={idx} className={`flex justify-between p-4 ${idx !== 0 ? 'border-t border-gray-100' : ''} hover:bg-gray-50 transition-colors`}>
                          <span className="text-sm text-gray-400 font-medium flex items-center">
                            <span className="mr-2 text-primary">{spec.icon}</span>
                            {spec.label}
                          </span>
                          <span className="text-sm text-dark font-bold text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                      Request Bulk Quote
                    </button>
                    <button className="flex-1 border-2 border-gray-200 text-dark py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                      Download Technical TDS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

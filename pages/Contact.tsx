
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your export inquiry. Our team will contact you shortly.");
    setFormData({ name: '', email: '', company: '', country: '', message: '' });
  };

  return (
    <div className="bg-white">
      <section className="py-20 bg-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With HRK Bio Polymers</h1>
          <p className="text-xl text-gray-400">Your Global Packaging Manufacturing Partner. For export inquiries, product specifications, or long-term supply discussions.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-dark mb-8">Export Office</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-50 p-3 rounded-full text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Location</h4>
                      <p className="text-gray-600">Ahmedabad, Gujarat, India</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-50 p-3 rounded-full text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Email</h4>
                      <p className="text-gray-600">export@hrkbiopolymers.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-50 p-3 rounded-full text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Phone</h4>
                      <p className="text-gray-600">+91 XXXXX XXXXX</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold text-dark mb-4">Quick Links</h3>
                <div className="flex flex-col space-y-3">
                  <button className="flex items-center space-x-2 text-primary font-bold hover:translate-x-1 transition-transform">
                    <Send size={18} />
                    <span>Request Export Quote</span>
                  </button>
                  <button className="flex items-center space-x-2 text-secondary font-bold hover:translate-x-1 transition-transform">
                    <MessageCircle size={18} />
                    <span>WhatsApp Inquiry</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-dark mb-8">Export Inquiry Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-red-100 transition-all outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-red-100 transition-all outline-none"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-red-100 transition-all outline-none"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Country / Region</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-red-100 transition-all outline-none"
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Inquiry / Specifications</label>
                    <textarea 
                      rows={4} 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-red-100 transition-all outline-none resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full gradient-bg text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const EXPORT_EMAIL = 'export@hrk.co.in';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // No backend is wired up, so hand the inquiry to the visitor's email client
  // instead of silently discarding it.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Export Inquiry - ${formData.company} (${formData.country})`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company: ${formData.company}`,
      `Country / Region: ${formData.country}`,
      '',
      formData.message,
    ].join('\n');
    window.location.href = `mailto:${EXPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
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
                    <div className="bg-primary-light p-3 rounded-full text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Location</h4>
                      <p className="text-gray-600">Ahmedabad, Gujarat, India</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-light p-3 rounded-full text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Email</h4>
                      <a href={`mailto:${EXPORT_EMAIL}`} className="text-gray-600 hover:text-primary transition-colors">{EXPORT_EMAIL}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold text-dark mb-4">Quick Links</h3>
                <div className="flex flex-col space-y-3">
                  <a href="#inquiry-form" onClick={(e) => { e.preventDefault(); document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex items-center space-x-2 text-primary font-bold hover:translate-x-1 transition-transform">
                    <Send size={18} />
                    <span>Request Export Quote</span>
                  </a>
                  <a href={`mailto:${EXPORT_EMAIL}`} className="flex items-center space-x-2 text-secondary font-bold hover:translate-x-1 transition-transform">
                    <Mail size={18} />
                    <span>Email Our Export Team</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7 scroll-mt-28" id="inquiry-form">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-dark mb-8">Export Inquiry Form</h2>
                {submitted && (
                  <div className="mb-6 p-4 rounded-xl bg-secondary-light text-secondary-dark text-sm">
                    Your email app should now open with the inquiry pre-filled. If it didn't, please email us directly at{' '}
                    <a href={`mailto:${EXPORT_EMAIL}`} className="font-bold underline">{EXPORT_EMAIL}</a>.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Country / Region</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
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

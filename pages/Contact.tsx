
import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { EXPORT_EMAIL, INFO_EMAIL, OFFICES } from '../constants/contact';

const EMPTY_FORM = { name: '', email: '', company: '', country: '', message: '' };

const Contact: React.FC = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  // Hidden honeypot field; bots fill it, people don't
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  // Sent by the /api/contact Vercel function through the company Zoho mailbox
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent');
      setFormData(EMPTY_FORM);
    } catch {
      setStatus('error');
    }
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
                <h2 className="text-3xl font-bold text-dark mb-8">Our Offices</h2>
                <div className="space-y-8">
                  {OFFICES.map((office) => (
                    <div key={office.label} className="flex items-start space-x-4">
                      <div className="bg-primary-light p-3 rounded-full text-primary">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark">{office.label}</h4>
                        <p className="text-gray-600">
                          {office.lines.map((line) => <span key={line} className="block">{line}</span>)}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-light p-3 rounded-full text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Email</h4>
                      <p className="text-gray-600"><span className="text-gray-400 text-sm">Export:</span> <a href={`mailto:${EXPORT_EMAIL}`} className="hover:text-primary transition-colors">{EXPORT_EMAIL}</a></p>
                      <p className="text-gray-600"><span className="text-gray-400 text-sm">General:</span> <a href={`mailto:${INFO_EMAIL}`} className="hover:text-primary transition-colors">{INFO_EMAIL}</a></p>
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
                {status === 'sent' && (
                  <div className="mb-6 p-4 rounded-xl bg-secondary-light text-secondary-dark text-sm flex items-start gap-3" role="status">
                    <CheckCircle2 size={20} className="shrink-0" />
                    <span>Thank you! Your inquiry has been sent. Our team will get back to you shortly.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-700 text-sm flex items-start gap-3" role="alert">
                    <AlertCircle size={20} className="shrink-0" />
                    <span>
                      Sorry, your message could not be sent. Please try again, or email us directly at{' '}
                      <a href={`mailto:${EXPORT_EMAIL}`} className="font-bold underline">{EXPORT_EMAIL}</a>.
                    </span>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        maxLength={200}
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
                        maxLength={200}
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
                        maxLength={200}
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
                        maxLength={100}
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
                      maxLength={5000}
                        value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full gradient-bg text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all disabled:opacity-70 disabled:cursor-wait disabled:hover:scale-100"
                  >
                    {status === 'sending' ? 'Sending…' : 'Submit Inquiry'}
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

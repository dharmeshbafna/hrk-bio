
import React from 'react';
import { ShieldCheck, ClipboardCheck, Globe, BadgeCheck } from 'lucide-react';

const Quality: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">Consistency You Can Rely On</h1>
          <p className="text-white/80 max-w-2xl text-lg">Quality control is embedded throughout our manufacturing cycle to ensure every batch meets global expectations.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-dark">Quality Assurance Systems</h2>
              <p className="text-gray-600 leading-relaxed">
                Every product batch is subjected to systematic quality checks. We utilize advanced testing equipment to verify that our output aligns with the specific performance requirements of our global partners.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Material Strength", desc: "Verifying tensile strength and elongation performance." },
                  { title: "Thickness Uniformity", desc: "Precise gauge control for consistent protection." },
                  { title: "Seal Integrity", desc: "Rigorous testing of bottom and side seals." },
                  { title: "Performance Testing", desc: "Simulated real-world use case evaluations." }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="shrink-0 mt-1 bg-red-50 p-2 rounded-lg text-primary">
                      <ClipboardCheck size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-dark mb-8 flex items-center space-x-3">
                <Globe className="text-secondary" />
                <span>Export Standards</span>
              </h3>
              <p className="text-gray-600 mb-8">
                Our processes are aligned with international packaging and environmental expectations, supporting smooth compliance for cross-border trade and regulatory approvals.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="font-bold text-primary mb-2">Compliance Focused</h4>
                  <p className="text-sm text-gray-500">Adherence to REACH, RoHS, and other international safety and material standards.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="font-bold text-secondary mb-2">Documentation Support</h4>
                  <p className="text-sm text-gray-500">Complete technical data sheets (TDS) and safety data sheets (SDS) for all exports.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="font-bold text-dark mb-2">Custom Audit Ready</h4>
                  <p className="text-sm text-gray-500">Facilities prepared for regular client and third-party quality audits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;

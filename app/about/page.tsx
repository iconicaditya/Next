"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Zap, Heart, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight"
          >
            Removing the Fear from <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-8">Documentation.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-medium leading-relaxed"
          >
            Formora Nepal was born from a simple observation: millions of Nepalis struggle with complex digital forms every day. We're here to change that.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-[64px] overflow-hidden rotate-3" />
            <div className="absolute inset-0 bg-blue-600 rounded-[64px] -rotate-3 -z-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-8xl font-black mb-2 tracking-tighter">100%</div>
                <div className="text-xl font-bold uppercase tracking-widest opacity-80">Accuracy Focused</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight tracking-tight">Built by Experts, <br />Driven by Empathy.</h2>
            <div className="space-y-8">
              {[
                { icon: Heart, title: "User First", desc: "We design every interaction to reduce anxiety and build confidence." },
                { icon: ShieldCheck, title: "Secure by Design", desc: "Your personal data is handled with bank-grade security protocols." },
                { icon: Zap, title: "High-Speed Accuracy", desc: "We optimize processes to save you time without compromising quality." }
              ].map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Globe, label: "Nationwide Impact", val: "77 Districts" },
            { icon: Users, label: "Happy Users", val: "50k+" },
            { icon: Award, label: "Success Rate", val: "99.9%" }
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-50 p-12 rounded-[40px] text-center border border-slate-200/50">
              <stat.icon className="h-10 w-10 text-blue-600 mx-auto mb-6" />
              <div className="text-4xl font-black text-slate-900 mb-2">{stat.val}</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

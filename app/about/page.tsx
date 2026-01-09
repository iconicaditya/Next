"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Zap, Heart, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 mb-6 lg:mb-8 tracking-tight"
          >
            Removing the Fear from <span className="text-blue-600 underline decoration-blue-100 decoration-4 lg:decoration-8 underline-offset-4 lg:underline-offset-8">Documentation.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed px-4"
          >
            Formora Nepal was born from a simple observation: millions of Nepalis struggle with complex digital forms every day. We&apos;re here to change that.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
          <div className="relative order-2 lg:order-1 px-4 lg:px-0">
            <div className="aspect-square bg-slate-100 rounded-[32px] lg:rounded-[64px] overflow-hidden rotate-2 lg:rotate-3 shadow-2xl shadow-slate-200/50" />
            <div className="absolute inset-0 bg-blue-600 rounded-[32px] lg:rounded-[64px] -rotate-2 lg:-rotate-3 -z-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl lg:text-8xl font-black mb-2 tracking-tighter">100%</div>
                <div className="text-base lg:text-xl font-bold uppercase tracking-widest opacity-80">Accuracy Focused</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 lg:mb-8 leading-tight tracking-tight">Built by Experts, <br className="hidden sm:block" />Driven by Empathy.</h2>
            <div className="space-y-6 lg:space-y-8">
              {[
                { icon: Heart, title: "User First", desc: "We design every interaction to reduce anxiety and build confidence." },
                { icon: ShieldCheck, title: "Secure by Design", desc: "Your personal data is handled with bank-grade security protocols." },
                { icon: Zap, title: "High-Speed Accuracy", desc: "We optimize processes to save you time without compromising quality." }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 lg:gap-6">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-50 text-blue-600 rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 lg:h-7 lg:w-7" />
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-xl font-bold text-slate-900 mb-1 lg:mb-2">{item.title}</h4>
                    <p className="text-sm lg:text-base text-slate-500 font-medium italic leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { icon: Globe, label: "Nationwide Impact", val: "77 Districts" },
            { icon: Users, label: "Happy Users", val: "50k+" },
            { icon: Award, label: "Success Rate", val: "99.9%" }
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-50 p-8 lg:p-12 rounded-[24px] lg:rounded-[40px] text-center border border-slate-200/50 shadow-sm">
              <stat.icon className="h-8 w-8 lg:h-10 lg:w-10 text-blue-600 mx-auto mb-4 lg:mb-6" />
              <div className="text-3xl lg:text-4xl font-black text-slate-900 mb-1 lg:mb-2">{stat.val}</div>
              <div className="text-[10px] lg:text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

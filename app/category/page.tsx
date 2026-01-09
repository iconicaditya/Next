"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, ShieldCheck,
  CheckCircle2, AlertCircle, Clock, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CategoryPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6"
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-50 rounded-xl lg:rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-lg shadow-blue-500/10">
              <ShieldCheck className="h-6 w-6 lg:h-8 lg:w-8" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">Government & Public Services</h1>
              <p className="text-sm lg:text-lg text-slate-500 font-medium italic mt-1 lg:mt-2">Reliable assistance for official government documentation.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Service List */}
          <div className="lg:col-span-2 space-y-4 lg:space-y-6">
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-6 lg:mb-8 uppercase tracking-widest text-xs opacity-50">Available Services</h2>
            {[
              { title: "Citizenship Application", desc: "Expert guidance for new citizenship or replacement certificates.", time: "3-5 Business Days" },
              { title: "Passport Assistance", desc: "Complete support for MRP and e-Passport application processes.", time: "2-4 Business Days" },
              { title: "Voter ID Registration", desc: "Update or register your voter information accurately.", time: "5-7 Business Days" }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-6 lg:p-8 rounded-[24px] lg:rounded-3xl border border-slate-200 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5 transition-all cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <h3 className="text-lg lg:text-xl font-bold group-hover:text-blue-600 transition-colors tracking-tight">{service.title}</h3>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] lg:text-xs font-bold shrink-0">
                    <Clock className="h-3 w-3" /> {service.time}
                  </div>
                </div>
                <p className="text-sm lg:text-base text-slate-500 mb-6 lg:mb-8 font-medium leading-relaxed opacity-80">{service.desc}</p>
                <div className="flex items-center text-xs lg:text-sm font-black text-blue-600 uppercase tracking-[0.2em]">
                  Select Service <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Sidebar */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-slate-900 text-white p-8 lg:p-10 rounded-[32px] lg:rounded-[40px] shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />
              <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8 relative z-10 tracking-tight">Why choose Formora?</h3>
              <div className="space-y-6 lg:space-y-8 relative z-10">
                {[
                  { icon: CheckCircle2, title: "Expert Verification", desc: "Every form is checked by our senior consultants." },
                  { icon: Shield, title: "Privacy First", desc: "Your data is deleted after completion." },
                  { icon: AlertCircle, title: "Zero Rejections", desc: "We guarantee accuracy for every submission." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 lg:gap-5">
                    <item.icon className="h-5 w-5 lg:h-6 lg:w-6 text-blue-400 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm lg:text-base mb-1 tracking-tight">{item.title}</h4>
                      <p className="text-slate-400 text-xs lg:text-sm leading-relaxed opacity-80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] border border-blue-100 shadow-sm shadow-blue-500/5">
              <h4 className="font-bold text-blue-900 mb-3 lg:mb-4 text-lg tracking-tight">Need Help?</h4>
              <p className="text-xs lg:text-sm text-blue-700/80 mb-6 lg:mb-8 font-medium leading-relaxed italic">Our experts are available 24/7 to guide you through the process.</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl lg:rounded-2xl h-12 lg:h-14 font-bold text-base shadow-xl shadow-blue-500/20">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

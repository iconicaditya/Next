"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Globe, Landmark, GraduationCap, 
  Briefcase, CheckCircle2, AlertCircle, Clock, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { id: 1, name: "Government & Public Services", icon: ShieldCheck, color: "text-red-600", bg: "bg-red-50", services: ["Citizenship", "Passport", "Voter ID"] },
  { id: 2, name: "Citizenship & Identity", icon: Globe, color: "text-blue-600", bg: "bg-blue-50", services: ["National ID", "Birth Certificate"] },
  { id: 3, name: "Education & Exams", icon: GraduationCap, color: "text-green-600", bg: "bg-green-50", services: ["NOC", "Equivalence", "License Exams"] },
  { id: 4, name: "Foreign & International", icon: Globe, color: "text-purple-600", bg: "bg-purple-50", services: ["Visa Appointment", "Attestation"] },
  { id: 5, name: "Banking & Finance", icon: Landmark, color: "text-amber-600", bg: "bg-amber-50", services: ["Loan Forms", "Account Opening"] },
  { id: 6, name: "Business & Tax", icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-50", services: ["PAN Registration", "Tax Filing"] },
];

export default function CategoryPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">Government & Public Services</h1>
              <p className="text-slate-500 font-medium italic">Reliable assistance for official government documentation.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Service List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Available Services</h2>
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
                className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">
                    <Clock className="h-3 w-3" /> {service.time}
                  </div>
                </div>
                <p className="text-slate-500 mb-6 font-medium">{service.desc}</p>
                <div className="flex items-center text-sm font-bold text-blue-600">
                  Select Service <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Sidebar */}
          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-10 rounded-[40px] shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Why choose Formora?</h3>
              <div className="space-y-6">
                {[
                  { icon: CheckCircle2, title: "Expert Verification", desc: "Every form is checked by our senior consultants." },
                  { icon: Shield, title: "Privacy First", desc: "Your data is deleted after completion." },
                  { icon: AlertCircle, title: "Zero Rejections", desc: "We guarantee accuracy for every submission." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <item.icon className="h-6 w-6 text-blue-400 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-[32px] border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-4">Need Help?</h4>
              <p className="text-sm text-blue-700/80 mb-6 font-medium">Our experts are available 24/7 to guide you through the process.</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-2xl h-12 font-bold">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

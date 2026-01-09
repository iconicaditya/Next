"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Globe, Landmark, GraduationCap, Briefcase, ChevronRight, Menu, X, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const categories = [
  { id: 1, name: "Government & Public Services", icon: ShieldCheck, color: "text-red-600", bg: "bg-red-50" },
  { id: 2, name: "Citizenship & Identity", icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
  { id: 3, name: "Education & Exams", icon: GraduationCap, color: "text-green-600", bg: "bg-green-50" },
  { id: 4, name: "Foreign & International", icon: Globe, color: "text-purple-600", bg: "bg-purple-50" },
  { id: 5, name: "Banking & Finance", icon: Landmark, color: "text-amber-600", bg: "bg-amber-50" },
  { id: 6, name: "Business & Tax", icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-50" },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-primary/10">
      {/* Premium Navbar */}
      <nav className={cn(
        "fixed w-full z-50 transition-all duration-500 border-b",
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-slate-200/60 py-3 shadow-sm" 
          : "bg-transparent border-transparent py-5"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-11 h-11 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl tracking-tighter">F</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900">FORMORA <span className="text-blue-600">NEPAL</span></span>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase leading-none">Form Assistance</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {["Government", "Foreign", "Education", "Banking"].map((item) => (
              <Button key={item} variant="ghost" className="text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-full px-5 transition-all">
                {item}
              </Button>
            ))}
            <div className="w-px h-6 bg-slate-200 mx-4" />
            <Button variant="ghost" className="text-sm font-bold text-slate-900 hover:text-blue-600 px-5">Expert Help</Button>
            <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 h-11 font-bold shadow-lg shadow-slate-900/10 ml-2">
              Start Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-52 lg:pb-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-red-100 rounded-full blur-[120px]" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">Nepal's Most Trusted Digital Form Assistance</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl lg:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[0.95]"
            >
              One Platform.<br />
              Every Form.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">Zero Stress.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-600 mb-12 leading-relaxed font-medium max-w-2xl mx-auto"
            >
              Government, education, foreign, banking, and digital forms — handled accurately, securely, and fast.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <Button size="lg" className="rounded-2xl px-12 h-16 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/25 group">
                Start My Application <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-12 h-16 text-lg font-bold border-2 border-slate-200 hover:bg-slate-50 transition-all">
                Talk to an Expert
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Expert Assistance,<br />Simplified for You.</h2>
              <p className="text-lg text-slate-500 font-medium">Choose a category to get started with professional form guidance.</p>
            </div>
            <Button variant="ghost" className="w-fit text-blue-600 font-bold hover:bg-blue-50 rounded-xl px-6 group">
              View All Services <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white p-10 rounded-[32px] border border-slate-200/60 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110", cat.bg, cat.color)}>
                  <cat.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                <p className="text-slate-500 leading-relaxed mb-10 font-medium">Navigate complex {cat.name.toLowerCase()} with our certified experts.</p>
                <div className="flex items-center text-sm font-bold text-blue-600 uppercase tracking-widest">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Menu */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40"
        >
          <MessageSquare className="h-8 w-8" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40"
        >
          <Phone className="h-7 w-7" />
        </motion.button>
      </div>

      {/* Modern Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">FORMORA <span className="text-blue-600">NEPAL</span></span>
              </div>
              <p className="text-lg text-slate-500 font-medium max-w-sm">Nepal's first professional digital form assistance platform. Built for trust, speed, and accuracy.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Services</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li className="hover:text-blue-600 transition-colors cursor-pointer">Government Forms</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer">Visa Assistance</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer">Education Portals</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer">Business Registration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Support</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact Us</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer">FAQ</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 font-medium">© 2026 Formora Nepal. Handcrafted with precision.</p>
            <div className="flex space-x-8 text-slate-400 font-bold text-sm">
              <span className="hover:text-slate-900 transition-colors cursor-pointer">TWITTER</span>
              <span className="hover:text-slate-900 transition-colors cursor-pointer">FACEBOOK</span>
              <span className="hover:text-slate-900 transition-colors cursor-pointer">LINKEDIN</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Zap, Globe, Landmark, GraduationCap, 
  Briefcase, ChevronRight, Menu, X, Phone, MessageSquare, ChevronDown 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const categories = [
  { id: 1, name: "Government & Public Services", icon: ShieldCheck, color: "text-red-600", bg: "bg-red-50", services: ["Citizenship", "Passport", "Voter ID"], path: "/category" },
  { id: 2, name: "Citizenship & Identity", icon: Globe, color: "text-blue-600", bg: "bg-blue-50", services: ["National ID", "Birth Certificate"], path: "/category" },
  { id: 3, name: "Education & Exams", icon: GraduationCap, color: "text-green-600", bg: "bg-green-50", services: ["NOC", "Equivalence", "License Exams"], path: "/category" },
  { id: 4, name: "Foreign & International", icon: Globe, color: "text-purple-600", bg: "bg-purple-50", services: ["Visa Appointment", "Attestation"], path: "/category" },
  { id: 5, name: "Banking & Finance", icon: Landmark, color: "text-amber-600", bg: "bg-amber-50", services: ["Loan Forms", "Account Opening"], path: "/category" },
  { id: 6, name: "Business & Tax", icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-50", services: ["PAN Registration", "Tax Filing"], path: "/category" },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
          <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg lg:text-xl tracking-tighter">F</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold tracking-tight text-slate-900 leading-tight">FORMORA <span className="text-blue-600">NEPAL</span></span>
              <span className="text-[8px] lg:text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase leading-none">Form Assistance</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/">
              <Button variant="ghost" className="text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-full px-5 transition-all">
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" className="text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-full px-5 transition-all">
                About
              </Button>
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Button variant="ghost" className="text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-full px-5 transition-all flex items-center gap-1">
                Services <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isServicesOpen && "rotate-180")} />
              </Button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                  >
                    <div className="bg-white rounded-[24px] border border-slate-200/60 shadow-2xl p-6 grid grid-cols-2 gap-4">
                      {categories.map((cat) => (
                        <Link key={cat.id} href={cat.path} className="group/item p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={cn("p-2 rounded-lg", cat.bg, cat.color)}>
                              <cat.icon className="h-4 w-4" />
                            </div>
                            <span className="font-bold text-slate-900 text-sm">{cat.name}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {cat.services.map(s => (
                              <span key={s} className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 rounded-md text-slate-500">{s}</span>
                            ))}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-px h-6 bg-slate-200 mx-4" />
            <Link href="/apply">
              <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 h-11 font-bold shadow-lg shadow-slate-900/10 ml-2">
                Start Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-4 pb-8 space-y-2">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-base font-bold py-6">Home</Button>
                </Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-base font-bold py-6">About</Button>
                </Link>
                <div className="pt-4 pb-2 px-4 text-xs font-black text-slate-400 uppercase tracking-widest">Services</div>
                <div className="grid grid-cols-1 gap-1">
                  {categories.map((cat) => (
                    <Link key={cat.id} href={cat.path} onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-sm font-bold py-4 pl-8 h-auto flex flex-col items-start">
                        <span className="flex items-center gap-2">
                          <cat.icon className={cn("h-4 w-4", cat.color)} />
                          {cat.name}
                        </span>
                      </Button>
                    </Link>
                  ))}
                </div>
                <div className="pt-6">
                  <Link href="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-slate-900 text-white py-6 rounded-2xl font-bold text-lg">Start Application</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-52 lg:pb-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-blue-100 rounded-full blur-[80px] lg:blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[20%] -left-[10%] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-red-100 rounded-full blur-[80px] lg:blur-[120px]" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 px-3 lg:px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6 lg:mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] lg:text-xs font-bold text-slate-600 tracking-wide uppercase">Nepal's Most Trusted Digital Form Assistance</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight text-slate-900 mb-6 lg:mb-8 leading-[1.1] lg:leading-[0.95]"
            >
              One Platform.<br className="hidden sm:block" />
              Every Form.<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">Zero Stress.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg lg:text-xl text-slate-600 mb-8 lg:mb-12 leading-relaxed font-medium max-w-2xl mx-auto px-4"
            >
              Government, education, foreign, banking, and digital forms — handled accurately, securely, and fast.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-5 px-4"
            >
              <Link href="/apply" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-2xl px-10 lg:px-12 h-14 lg:h-16 text-base lg:text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/25 group">
                  Start My Application <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-2xl px-10 lg:px-12 h-14 lg:h-16 text-base lg:text-lg font-bold border-2 border-slate-200 hover:bg-slate-50 transition-all">
                Talk to an Expert
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 lg:py-32 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-20">
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 lg:mb-6 tracking-tight">Expert Assistance,<br className="hidden sm:block" />Simplified for You.</h2>
              <p className="text-base lg:text-lg text-slate-500 font-medium">Choose a category to get started with professional form guidance.</p>
            </div>
            <Button variant="ghost" className="w-fit text-blue-600 font-bold hover:bg-blue-50 rounded-xl px-6 group">
              View All Services <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                href={cat.path}
                className="group relative bg-white p-8 lg:p-10 rounded-[24px] lg:rounded-[32px] border border-slate-200/60 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className={cn("w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 lg:mb-10 transition-transform duration-500 group-hover:scale-110", cat.bg, cat.color)}>
                    <cat.icon className="h-6 w-6 lg:h-8 lg:h-8" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-3 lg:mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                  <p className="text-sm lg:text-base text-slate-500 leading-relaxed mb-6 lg:mb-10 font-medium italic">Navigate complex {cat.name.toLowerCase()} with our certified experts.</p>
                  <div className="flex items-center text-xs lg:text-sm font-bold text-blue-600 uppercase tracking-widest">
                    Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Menu */}
      <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 flex flex-col items-end gap-3 lg:gap-4">
        <motion.a 
          href="https://wa.me/9768441368"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40"
        >
          <MessageSquare className="h-7 w-7 lg:h-8 lg:w-8" />
        </motion.a>
        <motion.a 
          href="tel:9768441368"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 lg:w-16 lg:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40"
        >
          <Phone className="h-6 w-6 lg:h-7 lg:w-7" />
        </motion.a>
      </div>

      {/* Modern Footer */}
      <footer className="bg-white pt-16 lg:pt-24 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6 lg:mb-8">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 font-sans uppercase">FORMORA NEPAL</span>
              </div>
              <p className="text-base lg:text-lg text-slate-500 font-medium max-w-sm">Nepal's first professional digital form assistance platform. Built for trust, speed, and accuracy.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Services</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li className="hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base">Government Forms</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base">Visa Assistance</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base">Education Portals</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base">Business Registration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Support</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li className="hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base">Contact Us</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base">Privacy Policy</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base">Terms of Service</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base">FAQ</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 lg:pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 font-medium text-xs lg:text-sm text-center md:text-left">© 2026 Formora Nepal. Handcrafted with precision.</p>
            <div className="flex space-x-6 lg:space-x-8 text-slate-400 font-bold text-[10px] lg:text-sm">
              <span className="hover:text-slate-900 transition-colors cursor-pointer uppercase">TWITTER</span>
              <span className="hover:text-slate-900 transition-colors cursor-pointer uppercase">FACEBOOK</span>
              <span className="hover:text-slate-900 transition-colors cursor-pointer uppercase">LINKEDIN</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

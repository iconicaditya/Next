"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Globe, Landmark, GraduationCap, 
  Briefcase, ChevronRight, Menu, X, Phone, ChevronDown, 
  CheckCircle2, Shield, Star, TrendingUp, Sparkles, Search
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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

const stats = [
  { label: "Success Rate", value: 99.9, suffix: "%", icon: CheckCircle2, color: "from-blue-500 to-indigo-600" },
  { label: "Forms Handled", value: 50, suffix: "K+", icon: TrendingUp, color: "from-emerald-500 to-teal-600" },
  { label: "Expert Advisors", value: 100, suffix: "+", icon: Star, color: "from-amber-500 to-orange-600" },
  { label: "Customer Satisfaction", value: 4.9, suffix: "/5", icon: Shield, color: "from-red-500 to-rose-600" },
];

function Counter({ value, suffix, decimals = 0, shouldAnimate = true }: { value: number, suffix: string, decimals?: number, shouldAnimate?: boolean }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useState<HTMLSpanElement | null>(null)[0];

  useEffect(() => {
    if (!shouldAnimate) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    const el = document.getElementById(`counter-${value}-${suffix}`);
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [value, suffix, shouldAnimate, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, value]);

  return (
    <span id={`counter-${value}-${suffix}`}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const allServices = categories.flatMap(cat => 
    cat.services.map(service => ({
      name: service,
      category: cat.name,
      path: cat.path,
      icon: cat.icon,
      color: cat.color,
      bg: cat.bg
    }))
  );

  const filteredServices = searchQuery.trim() === "" 
    ? [] 
    : allServices.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        s.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const
      }
    })
  };

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-primary/10 overflow-x-hidden">
      {/* Premium Navbar */}
      <nav className={cn(
        "fixed w-full z-50 transition-all duration-500 border-b",
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-slate-200/60 py-3 shadow-sm" 
          : "bg-transparent border-transparent py-5"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20"
            >
              <span className="text-white font-bold text-lg lg:text-xl tracking-tighter">F</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold tracking-tight text-slate-900 leading-tight">FORMORA <span className="text-blue-600">NEPAL</span></span>
              <span className="text-[8px] lg:text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase leading-none">Form Assistance</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8 relative">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search services (e.g. Passport, Visa...)"
                className="block w-full pl-11 pr-4 py-2.5 bg-slate-100/50 border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 rounded-2xl text-sm font-medium transition-all outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              
              {/* Search Results Dropdown */}
              <AnimatePresence>
                {searchQuery.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl p-2 z-50 overflow-hidden"
                  >
                    {filteredServices.length > 0 ? (
                      <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                        {filteredServices.map((service, idx) => (
                          <Link 
                            key={`${service.name}-${idx}`} 
                            href={service.path}
                            onClick={() => setSearchQuery("")}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/result"
                          >
                            <div className={cn("p-2 rounded-lg", service.bg, service.color)}>
                              <service.icon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-slate-900 group-hover/result:text-blue-600 transition-colors">{service.name}</span>
                              <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{service.category}</span>
                            </div>
                            <ChevronRight className="h-4 w-4 ml-auto text-slate-300 group-hover/result:text-blue-400 transition-colors" />
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center">
                        <p className="text-sm text-slate-500 font-medium">No services found for &quot;{searchQuery}&quot;</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

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
                    className="absolute top-full right-0 pt-4 w-[600px] max-w-[calc(100vw-2rem)]"
                  >
                    <div className="bg-white rounded-[24px] border border-slate-200/60 shadow-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                {/* Mobile Search */}
                <div className="pb-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search services..."
                      className="block w-full pl-11 pr-4 py-3 bg-slate-100/50 border-none focus:bg-white focus:ring-4 focus:ring-blue-50 rounded-xl text-base font-medium transition-all outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    
                    {searchQuery.length > 0 && (
                      <div className="mt-2 bg-slate-50 rounded-xl p-2 space-y-1">
                        {filteredServices.slice(0, 5).map((service, idx) => (
                          <Link 
                            key={`mobile-${service.name}-${idx}`} 
                            href={service.path}
                            onClick={() => {
                              setSearchQuery("");
                              setIsMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors"
                          >
                            <div className={cn("p-2 rounded-lg", service.bg, service.color)}>
                              <service.icon className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-bold text-slate-900">{service.name}</span>
                          </Link>
                        ))}
                        {filteredServices.length > 5 && (
                          <div className="text-center py-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">+ {filteredServices.length - 5} more results</span>
                          </div>
                        )}
                        {filteredServices.length === 0 && (
                          <div className="p-4 text-center">
                            <p className="text-sm text-slate-500 font-medium">No results</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

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
      <section className="relative pt-32 pb-16 lg:pt-52 lg:pb-40 overflow-hidden min-h-[90vh] flex items-center justify-center">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-blue-100 rounded-full blur-[80px] lg:blur-[150px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[20%] -left-[10%] w-[300px] lg:w-[700px] h-[300px] lg:h-[700px] bg-red-100 rounded-full blur-[80px] lg:blur-[150px]" 
          />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:40px_40px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xl shadow-blue-500/5 mb-8 lg:mb-10"
            >
              <div className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </div>
              <span className="text-[10px] lg:text-xs font-black text-slate-800 tracking-[0.15em] uppercase">Nepal&apos;s Premier Digital Form Assistance</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-7xl lg:text-[110px] font-[1000] tracking-[-0.04em] text-slate-900 mb-8 lg:mb-10 leading-[0.9] lg:leading-[0.85]"
            >
              One Platform.<br className="hidden sm:block" />
              Every Form.<br className="hidden sm:block" />
              <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-[length:200%_auto]"
              >Zero Stress.</motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-slate-600 mb-10 lg:mb-14 leading-relaxed font-medium max-w-3xl mx-auto px-4"
            >
              Government, education, foreign, banking, and digital form services — handled accurately, securely, and fast by experts.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-6 px-4"
            >
              <Link href="/apply" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="lg" className="w-full rounded-2xl px-12 lg:px-16 h-16 lg:h-20 text-lg lg:text-xl font-black bg-blue-600 hover:bg-blue-700 shadow-[0_20px_50px_rgba(59,130,246,0.3)] group overflow-hidden relative border-none">
                    <span className="relative z-10">Start My Application</span>
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform relative z-10" />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" 
                    />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/category" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-2xl px-12 lg:px-16 h-16 lg:h-20 text-lg lg:text-xl font-black border-2 border-slate-200 hover:bg-slate-50 transition-all hover:border-blue-400 hover:text-blue-600">
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 lg:mt-16 flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-slate-400 font-black text-[10px] lg:text-xs uppercase tracking-[0.2em]"
            >
              <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-amber-500" /> Trusted by Nepalis nationwide</span>
              <span className="hidden sm:block text-slate-200">|</span>
              <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-blue-500" /> Privacy-first</span>
              <span className="hidden sm:block text-slate-200">|</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Error-free assistance</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Grid */}
      <section className="py-16 lg:py-24 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 lg:p-12 rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/40 flex flex-col items-center text-center group transition-all duration-500"
              >
                <div className={cn("w-14 h-14 lg:w-20 lg:h-20 rounded-[24px] lg:rounded-[32px] flex items-center justify-center mb-6 lg:mb-8 bg-gradient-to-br text-white shadow-2xl transform group-hover:rotate-6 transition-transform duration-500", stat.color)}>
                  <stat.icon className="h-7 w-7 lg:h-10 lg:w-10" />
                </div>
                <div className="text-3xl lg:text-5xl font-[1000] text-slate-900 mb-2 tracking-tighter">
                  <Counter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    decimals={stat.value % 1 === 0 ? 0 : 1} 
                    shouldAnimate={true}
                  />
                </div>
                <div className="text-[10px] lg:text-sm font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 lg:py-40 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 lg:mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-4xl lg:text-7xl font-[1000] text-slate-900 mb-6 lg:mb-8 tracking-tighter leading-[0.95]">Expert Assistance,<br />Simplified for You.</h2>
              <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed">Choose a category to get started with professional form guidance from our certified experts.</p>
            </motion.div>
            <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 400 }}>
              <Button variant="ghost" className="w-fit text-blue-600 font-black text-lg hover:bg-blue-50 rounded-2xl px-8 py-8 group transition-all">
                View All Services <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                href={cat.path}
                className="group relative"
              >
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  whileHover={{ y: -15 }}
                  className="bg-white p-10 lg:p-14 rounded-[40px] lg:rounded-[56px] border border-slate-200/60 shadow-2xl shadow-slate-200/20 hover:shadow-[0_40px_80px_rgba(59,130,246,0.12)] transition-all duration-700 h-full relative overflow-hidden flex flex-col"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-50 to-transparent -mr-20 -mt-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className={cn("w-16 h-16 lg:w-24 lg:h-24 rounded-[28px] lg:rounded-[40px] flex items-center justify-center mb-8 lg:mb-12 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-xl", cat.bg, cat.color)}>
                    <cat.icon className="h-8 w-8 lg:h-12 lg:w-12" />
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-black text-slate-900 mb-4 lg:mb-6 tracking-tight group-hover:text-blue-600 transition-colors leading-tight">{cat.name}</h3>
                  <p className="text-base lg:text-lg text-slate-500 leading-relaxed mb-10 lg:mb-14 font-medium italic opacity-80 group-hover:opacity-100">Navigate complex {cat.name.toLowerCase()} with our certified experts.</p>
                  
                  <div className="flex items-center text-sm lg:text-base font-black text-blue-600 uppercase tracking-[0.2em] mt-auto">
                    <span>Get Started</span>
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-3 transition-transform duration-500" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Menu */}
      <div className="fixed bottom-6 right-6 lg:bottom-12 lg:right-12 z-[60] flex flex-col items-end gap-4 lg:gap-6">
          <motion.a 
          href="https://wa.me/9768441368"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 lg:w-20 lg:h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_20px_40px_rgba(37,211,102,0.4)] border-4 border-white relative group cursor-pointer"
        >
          <div className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-black px-4 py-2 rounded-xl opacity-0 lg:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none tracking-widest shadow-xl uppercase">
            WhatsApp Us
          </div>
          <FaWhatsapp className="h-9 w-9 lg:h-11 lg:w-11" />
        </motion.a>
        <motion.a 
          href="tel:9768441368"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-[0_20px_40px_rgba(37,99,235,0.4)] border-4 border-white relative group cursor-pointer"
        >
          <div className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-black px-4 py-2 rounded-xl opacity-0 lg:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none tracking-widest shadow-xl uppercase">
            Call Expert
          </div>
          <Phone className="h-7 w-7 lg:h-9 lg:w-9" />
        </motion.a>
      </div>

      {/* Modern Footer */}
      <footer className="bg-white pt-24 lg:pt-40 pb-16 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24 lg:mb-40">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8 lg:mb-12">
                <div className="w-12 h-12 bg-slate-900 rounded-[18px] flex items-center justify-center shadow-2xl">
                  <span className="text-white font-black text-xl">F</span>
                </div>
                <span className="text-2xl lg:text-3xl font-[1000] tracking-tighter text-slate-900 uppercase">FORMORA NEPAL</span>
              </div>
              <p className="text-lg lg:text-xl text-slate-500 font-medium max-w-sm leading-relaxed">Nepal&apos;s first professional digital form assistance platform. Built for trust, speed, and accuracy.</p>
            </div>
            <div>
              <h4 className="font-black text-slate-900 mb-8 lg:mb-10 uppercase tracking-[0.25em] text-xs">Services</h4>
              <ul className="space-y-6 text-slate-500 font-bold">
                <li className="hover:text-blue-600 transition-all cursor-pointer text-base lg:text-lg hover:translate-x-2">Government Forms</li>
                <li className="hover:text-blue-600 transition-all cursor-pointer text-base lg:text-lg hover:translate-x-2">Visa Assistance</li>
                <li className="hover:text-blue-600 transition-all cursor-pointer text-base lg:text-lg hover:translate-x-2">Education Portals</li>
                <li className="hover:text-blue-600 transition-all cursor-pointer text-base lg:text-lg hover:translate-x-2">Business Registration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-slate-900 mb-8 lg:mb-10 uppercase tracking-[0.25em] text-xs">Support</h4>
              <ul className="space-y-6 text-slate-500 font-bold">
                <li className="hover:text-blue-600 transition-all cursor-pointer text-base lg:text-lg hover:translate-x-2">Contact Us</li>
                <li className="hover:text-blue-600 transition-all cursor-pointer text-base lg:text-lg hover:translate-x-2">Privacy Policy</li>
                <li className="hover:text-blue-600 transition-all cursor-pointer text-base lg:text-lg hover:translate-x-2">Terms of Service</li>
                <li className="hover:text-blue-600 transition-all cursor-pointer text-base lg:text-lg hover:translate-x-2">FAQ</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 lg:pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-400 font-black text-xs lg:text-sm text-center md:text-left tracking-widest uppercase">© 2026 Formora Nepal. Handcrafted with precision.</p>
            <div className="flex space-x-10 lg:space-x-14 text-slate-400 font-black text-[10px] lg:text-xs tracking-[0.3em]">
              <motion.span whileHover={{ color: "#0f172a", y: -2 }} className="transition-all cursor-pointer uppercase">TWITTER</motion.span>
              <motion.span whileHover={{ color: "#0f172a", y: -2 }} className="transition-all cursor-pointer uppercase">FACEBOOK</motion.span>
              <motion.span whileHover={{ color: "#0f172a", y: -2 }} className="transition-all cursor-pointer uppercase">LINKEDIN</motion.span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

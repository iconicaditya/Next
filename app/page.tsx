"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Globe, Landmark, GraduationCap, Briefcase, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { id: 1, name: "Government & Public Services", icon: ShieldCheck, color: "text-red-600", bg: "bg-red-50" },
  { id: 2, name: "Citizenship & Identity", icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
  { id: 3, name: "Education & Exams", icon: GraduationCap, color: "text-green-600", bg: "bg-green-50" },
  { id: 4, name: "Foreign & International", icon: Globe, color: "text-purple-600", bg: "bg-purple-50" },
  { id: 5, name: "Banking & Finance", icon: Landmark, color: "text-amber-600", bg: "bg-amber-50" },
  { id: 6, name: "Business & Tax", icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-50" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">FORMORA <span className="text-primary">NEPAL</span></span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <Button size="sm" className="rounded-full px-6">Login</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-400 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Nepal's Most Trusted Digital Form Assistance Platform
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8">
              One Platform. Every Form. <br />
              <span className="gradient-text text-primary">Zero Stress.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-10">
              Government, education, foreign, banking, and digital forms — handled accurately, securely, and fast.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-10 h-14 text-lg">
                Start My Application <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg">
                Talk to an Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Explore Our Services</h2>
              <p className="text-muted-foreground">Premium assistance for all your digital documentation needs.</p>
            </div>
            <Button variant="ghost" className="hidden sm:flex group">
              View all services <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors", category.bg, category.color)}>
                  <category.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{category.name}</h3>
                <p className="text-muted-foreground mb-6">Expert guidance for all forms related to {category.name.toLowerCase()}.</p>
                <div className="flex items-center text-sm font-semibold text-primary">
                  Get Started <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Built on Trust, <br />Powered by Accuracy.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand that your documents are precious. That's why we've built Formora with top-tier security and a team of experts who verify every single detail.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">End-to-End Encryption</h4>
                    <p className="text-sm text-muted-foreground">Your files are encrypted and never shared with third parties.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 text-green-600">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Express Processing</h4>
                    <p className="text-sm text-muted-foreground">Get your forms processed faster than any traditional agency.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-tr from-primary/20 to-primary/5 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                      <div className="text-3xl font-bold text-primary mb-1">99%</div>
                      <div className="text-sm font-medium text-slate-500">Accuracy Rate</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 translate-y-8">
                      <div className="text-3xl font-bold text-primary mb-1">50k+</div>
                      <div className="text-sm font-medium text-slate-500">Users Helped</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                      <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                      <div className="text-sm font-medium text-slate-500">Expert Support</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 translate-y-8">
                      <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
                      <div className="text-sm font-medium text-slate-500">User Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">FORMORA NEPAL</span>
          </div>
          <p className="mb-8">© 2026 Formora Nepal. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

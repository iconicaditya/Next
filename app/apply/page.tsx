"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronLeft, Upload, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = ["Info", "Files", "Done"];

export default function FormSystem() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex flex-col min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 w-full">
        {/* Progress Bar */}
        <div className="mb-10 lg:mb-16 px-2 lg:px-0">
          <div className="flex justify-between items-center mb-6 lg:mb-8 relative">
            <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-100 -z-10" />
            <motion.div 
              className="absolute top-5 left-0 h-0.5 bg-blue-600 -z-10"
              initial={{ width: "0%" }}
              animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
            {steps.map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-3">
                <motion.div 
                  initial={false}
                  animate={{ 
                    scale: i <= currentStep ? 1 : 0.9,
                    backgroundColor: i <= currentStep ? "#2563eb" : "#ffffff",
                    borderColor: i <= currentStep ? "#2563eb" : "#e2e8f0"
                  }}
                  className={cn(
                    "w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center border-2 font-black text-xs lg:text-sm shadow-xl",
                    i <= currentStep ? "text-white shadow-blue-500/20" : "text-slate-400 shadow-slate-200/50"
                  )}
                >
                  {i < currentStep ? <CheckCircle2 className="h-5 w-5 lg:h-6 lg:w-6" /> : i + 1}
                </motion.div>
                <span className={cn(
                  "text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] transition-colors",
                  i <= currentStep ? "text-blue-600" : "text-slate-400"
                )}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <motion.div 
          layout
          className="bg-white rounded-[24px] lg:rounded-[48px] border border-slate-200 shadow-2xl shadow-slate-200/50 p-6 lg:p-16 overflow-hidden relative"
        >
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl lg:text-4xl font-black text-slate-900 mb-2 tracking-tight">Personal Details</h2>
                  <p className="text-sm lg:text-base text-slate-500 font-medium italic">Accurate information ensures successful submission.</p>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:gap-6">
                  <div className="space-y-1.5 lg:space-y-2">
                    <label className="text-[10px] lg:text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
                    <input type="text" className="w-full h-12 lg:h-14 px-5 lg:px-6 rounded-xl lg:rounded-2xl border-2 border-slate-50 bg-slate-50 focus:border-blue-600 focus:bg-white outline-none transition-all font-bold text-sm lg:text-base" placeholder="As per legal ID" />
                  </div>
                  <div className="space-y-1.5 lg:space-y-2">
                    <label className="text-[10px] lg:text-xs font-black text-slate-400 uppercase tracking-widest pl-1">WhatsApp Number</label>
                    <input type="text" className="w-full h-12 lg:h-14 px-5 lg:px-6 rounded-xl lg:rounded-2xl border-2 border-slate-50 bg-slate-50 focus:border-blue-600 focus:bg-white outline-none transition-all font-bold text-sm lg:text-base" placeholder="Active mobile number" />
                  </div>
                  <div className="space-y-1.5 lg:space-y-2">
                    <label className="text-[10px] lg:text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                    <input type="email" className="w-full h-12 lg:h-14 px-5 lg:px-6 rounded-xl lg:rounded-2xl border-2 border-slate-50 bg-slate-50 focus:border-blue-600 focus:bg-white outline-none transition-all font-bold text-sm lg:text-base" placeholder="For updates" />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl lg:text-4xl font-black text-slate-900 mb-2 tracking-tight">Upload Files</h2>
                  <p className="text-sm lg:text-base text-slate-500 font-medium italic">Clear digital copies of your documents.</p>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div className="border-3 border-dashed border-slate-100 rounded-[24px] lg:rounded-[32px] p-8 lg:p-16 flex flex-col items-center text-center group hover:border-blue-600/50 hover:bg-blue-50/20 transition-all cursor-pointer">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                      <Upload className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 tracking-tight">Upload Documents</h3>
                    <p className="text-xs lg:text-sm text-slate-400 mb-6 lg:mb-8 font-bold italic">MAX 10MB (PDF, JPG, PNG)</p>
                    <Button variant="outline" className="rounded-xl lg:rounded-2xl px-8 h-11 lg:h-12 border-2 font-black text-xs lg:text-sm uppercase tracking-widest">Select Files</Button>
                  </div>
                </div>
                <div className="bg-slate-900 p-5 lg:p-6 rounded-2xl flex gap-3 lg:gap-4 items-center">
                  <ShieldCheck className="h-5 w-5 lg:h-6 lg:w-6 text-blue-400 shrink-0" />
                  <p className="text-[10px] lg:text-xs font-bold text-slate-300 tracking-wide uppercase leading-relaxed">Encrypted processing & zero data sharing guaranteed.</p>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8 lg:py-10"
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-xl shadow-blue-500/10">
                  <CheckCircle2 className="h-10 w-10 lg:h-14 lg:w-14" />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-3 lg:mb-4 tracking-tight">Verify & Finish</h2>
                  <p className="text-sm lg:text-lg text-slate-500 font-medium italic max-w-sm mx-auto">One final check before we start processing your application.</p>
                </div>
                <div className="bg-slate-50 p-6 lg:p-10 rounded-[24px] lg:rounded-[40px] border-2 border-slate-100 text-left space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-[10px] lg:text-xs font-black uppercase text-slate-400 tracking-widest">Service</span>
                    <span className="text-sm lg:text-lg text-slate-900 font-black">Citizenship Assist</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[10px] lg:text-xs font-black uppercase text-slate-400 tracking-widest">Est. Time</span>
                    <span className="text-sm lg:text-lg text-blue-600 font-black">3-5 Days</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 lg:mt-16 pt-8 border-t border-slate-100">
            <Button 
              variant="ghost" 
              onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
              className={cn("rounded-xl lg:rounded-2xl h-12 lg:h-14 px-6 lg:px-8 font-black text-[10px] lg:text-xs uppercase tracking-widest text-slate-400 hover:text-slate-900", currentStep === 0 && "invisible")}
            >
              <ChevronLeft className="mr-1 h-4 w-4" /> Back
            </Button>
            <Button 
              onClick={() => currentStep < steps.length - 1 ? setCurrentStep(currentStep + 1) : null}
              className="bg-blue-600 hover:bg-blue-700 rounded-xl lg:rounded-2xl h-12 lg:h-14 px-8 lg:px-12 font-black text-xs lg:text-sm text-white shadow-xl shadow-blue-500/20 uppercase tracking-widest group"
            >
              {currentStep === steps.length - 1 ? "Submit Form" : "Next Step"} 
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Trust Footer */}
        <div className="mt-10 lg:mt-12 flex justify-center items-center gap-6 lg:gap-10 text-slate-300">
          <div className="flex items-center gap-2 font-black italic text-[10px] lg:text-xs tracking-widest">
            <ShieldCheck className="h-4 w-4" /> SECURE
          </div>
          <div className="flex items-center gap-2 font-black italic text-[10px] lg:text-xs tracking-widest">
            <CheckCircle2 className="h-4 w-4" /> VERIFIED
          </div>
        </div>
      </div>
    </div>
  );
}

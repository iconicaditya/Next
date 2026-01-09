"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronLeft, Upload, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = ["Information", "Documents", "Review"];

export default function FormSystem() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20 bg-slate-50/30">
      <div className="max-w-4xl mx-auto px-4 w-full">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-2">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-2 font-bold text-sm",
                  i <= currentStep ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-slate-200 text-slate-400"
                )}>
                  {i < currentStep ? <CheckCircle2 className="h-5 w-5" /> : i + 1}
                </div>
                <span className={cn(
                  "text-xs font-bold uppercase tracking-widest transition-colors",
                  i <= currentStep ? "text-blue-600" : "text-slate-400"
                )}>{step}</span>
              </div>
            ))}
          </div>
          <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-blue-600"
              initial={{ width: "0%" }}
              animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Form Container */}
        <motion.div 
          layout
          className="bg-white rounded-[40px] border border-slate-200 shadow-2xl shadow-slate-200/50 p-10 lg:p-16 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2">Personal Information</h2>
                  <p className="text-slate-500 font-medium">Please provide accurate details as per your legal documents.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input type="text" className="w-full h-14 px-6 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:border-blue-600 focus:bg-white outline-none transition-all font-medium" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input type="text" className="w-full h-14 px-6 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:border-blue-600 focus:bg-white outline-none transition-all font-medium" placeholder="WhatsApp preferred" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input type="email" className="w-full h-14 px-6 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:border-blue-600 focus:bg-white outline-none transition-all font-medium" placeholder="For notifications" />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2">Upload Documents</h2>
                  <p className="text-slate-500 font-medium">Clear photos or PDFs of required documents.</p>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div className="border-3 border-dashed border-slate-200 rounded-[32px] p-16 flex flex-col items-center text-center group hover:border-blue-600/50 hover:bg-blue-50/30 transition-all cursor-pointer">
                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Upload className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Drag & drop files here</h3>
                    <p className="text-slate-500 mb-8 font-medium italic text-sm">Supported: PDF, JPG, PNG (Max 10MB)</p>
                    <Button variant="outline" className="rounded-2xl px-10 h-12 border-2 font-bold">Browse Files</Button>
                  </div>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl flex gap-4 items-center">
                  <ShieldCheck className="h-6 w-6 text-green-600 shrink-0" />
                  <p className="text-sm font-bold text-green-800">Your documents are encrypted and handled only by verified experts.</p>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8 py-10"
              >
                <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="h-14 w-14" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-slate-900 mb-4">Ready to Submit?</h2>
                  <p className="text-slate-500 font-medium max-w-sm mx-auto">Please review your information one last time before proceeding to secure processing.</p>
                </div>
                <div className="bg-slate-50 p-10 rounded-[32px] border border-slate-200 text-left">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Selected Service</span>
                    <span className="text-slate-900 font-black">Citizenship Application</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Processing Time</span>
                    <span className="text-blue-600 font-black">3-5 Business Days</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-slate-100">
            <Button 
              variant="ghost" 
              onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
              className={cn("rounded-2xl h-14 px-8 font-bold text-slate-500", currentStep === 0 && "invisible")}
            >
              <ChevronLeft className="mr-2 h-5 w-5" /> Back
            </Button>
            <Button 
              onClick={() => currentStep < steps.length - 1 ? setCurrentStep(currentStep + 1) : null}
              className="bg-blue-600 hover:bg-blue-700 rounded-2xl h-14 px-12 font-bold text-white shadow-xl shadow-blue-500/25 group"
            >
              {currentStep === steps.length - 1 ? "Submit Application" : "Continue"} 
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Trust Footer */}
        <div className="mt-12 flex justify-center items-center gap-8 text-slate-400 grayscale opacity-60">
          <div className="flex items-center gap-2 font-black italic text-sm">
            <ShieldCheck className="h-5 w-5" /> ENCRYPTED
          </div>
          <div className="flex items-center gap-2 font-black italic text-sm">
            <CheckCircle2 className="h-5 w-5" /> VERIFIED
          </div>
        </div>
      </div>
    </div>
  );
}

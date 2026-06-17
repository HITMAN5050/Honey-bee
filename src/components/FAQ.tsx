"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "What is the shelf life of the honey sachets?",
      a: "Our pure multifloral honey has a natural shelf life of 12 months in its airtight food-grade packaging. Because pure raw honey doesn't contain moisture or additives, it is naturally self-preserving and does not spoil, but we guarantee premium freshness and aroma for up to a year.",
    },
    {
      q: "What is your Minimum Order Quantity (MOQ) in Ahmedabad?",
      a: "Our MOQ is just 1 box, which contains 500 sachets. This low entry threshold allows boutique cafés to test honey as a beverage sweetener without large capital outlays or storage space.",
    },
    {
      q: "How do you guarantee the quality and taste of the honey?",
      a: "Our honey is sourced directly from certified local apiaries in Gujarat. It undergoes rigorous quality testing to ensure it is 100% natural, unadulterated, and free from added sugars, corn syrup, or preservatives. We supply laboratory reports for every batch on request.",
    },
    {
      q: "What are your delivery timelines for local cafés?",
      a: "We offer guaranteed next-day delivery across Ahmedabad for all orders placed before 5:00 PM. Deliveries are completely free of cost for all municipal areas.",
    },
    {
      q: "Can we print our café’s logo on the honey sachets?",
      a: "Yes! Custom brand printing is available for contract clients with a monthly volume exceeding 5,000 sachets. Contact us using the form below or via WhatsApp, and our design team will work with you to draft custom packaging templates.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-cream text-brand-charcoal relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-brand-honey uppercase mb-3 block">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            Everything you need to know about our sourcing, packaging, and logistics.
          </p>
        </div>

        <div className="space-y-4 font-sans">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-brand-white/20 bg-brand-white/50 backdrop-blur-md rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-brand-charcoal group-hover:text-brand-honey transition-colors duration-200">
                    {faq.q}
                  </span>
                  <span className="p-1 rounded-full bg-brand-honey-light text-brand-honey shrink-0 ml-4">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 border-t border-brand-muted-border/40 text-sm sm:text-base text-brand-charcoal/70 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

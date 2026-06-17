"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function TheGap() {
  return (
    <section id="the-gap" className="py-24 bg-brand-cream/30 text-brand-charcoal relative font-sans overflow-hidden">
      {/* Subtle organic background grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#1E1A16_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* Glowing background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-honey/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-widest text-brand-honey uppercase mb-3"
          >
            The Beverage Upgrade
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal mb-6"
          >
            Why Ahmedabad’s Best Cafés Are Ditching the Honey Pot
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-charcoal/80 leading-relaxed font-sans"
          >
            You serve specialty coffee, organic teas, and curated desserts. Yet, when a customer requests honey, they receive a sticky shared jar, a messy metal pot, or a plastic squeezy bottle. It’s time for a premium upgrade.
          </motion.p>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Old Method */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl glass-card glass-card-hover flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-red-100/70 border border-red-200/50 flex items-center justify-center mb-6">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="text-xl font-serif font-bold text-brand-charcoal mb-4">
                The Legacy Honey Bottle
              </h4>
              <p className="text-brand-charcoal/70 mb-6 font-sans text-sm leading-relaxed">
                Shared squeeze bottles and jars accumulate sticky residue, attract flies, invite cross-contamination, and clutter your elegant counter space.
              </p>
              <ul className="space-y-4">
                {[
                  "Sticky fingers, sticky tables, and messy clean-ups.",
                  "Zero portion control — leading to food waste and uneven taste profiles.",
                  "Hygienically compromised in the eyes of conscious guests.",
                  "High upfront loss through crystallisation and bottom-of-jar waste."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-brand-charcoal/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* New Method */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl glass-card-honey glass-card-hover flex flex-col justify-between relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-honey/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-full bg-brand-honey/10 border border-brand-honey/20 flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-brand-honey" />
              </div>
              <h4 className="text-xl font-serif font-bold text-brand-charcoal mb-4">
                The Honey Bee Sachet
              </h4>
              <p className="text-brand-charcoal/70 mb-6 font-sans text-sm leading-relaxed">
                A single-serve, beautifully branded sachet containing pure raw honey. Served neat on a saucer next to your signature beverages.
              </p>
              <ul className="space-y-4">
                {[
                  "Hygienic, sealed, and completely mess-free.",
                  "Precise 8g–10g portion — perfect for a standard cup of tea or coffee.",
                  "A visual statement of quality that shows your café cares about detail.",
                  "100% usage rate, predictable costing, and zero storage hassle."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-brand-charcoal/90">
                    <Check className="w-4 h-4 text-brand-honey mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Inline Stat / Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <div className="h-px bg-brand-muted-border/50 my-8" />
          <p className="font-serif italic text-xl text-brand-charcoal/90 leading-relaxed">
            "We supply sugar packets and milk cups out of convenience and hygiene. It’s time we offer honey with the exact same professionalism."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

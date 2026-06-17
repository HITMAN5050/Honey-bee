"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Calendar, CheckCircle, HelpCircle } from "lucide-react";

export default function ProductDetails() {
  const specs = [
    {
      icon: <CheckCircle className="w-5 h-5 text-brand-honey" />,
      title: "Perfect Portioning",
      value: "8g – 10g per sachet",
      desc: "Exactly the sweetness profile required for a standard 200ml cup of tea or coffee, preventing excessive use.",
    },
    {
      icon: <Calendar className="w-5 h-5 text-brand-honey" />,
      title: "Optimized Shelf Life",
      value: "12 Months Guaranteed",
      desc: "Pure raw honey never spoils, but our airtight food-grade packaging ensures freshness for up to 12 months.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-honey" />,
      title: "100% Pure Origin",
      value: "Multifloral Raw Honey",
      desc: "Sourced locally from trusted apiaries. Unfiltered, unpasteurized, free from sugar syrup, additives, or adulterants.",
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-brand-honey" />,
      title: "FSSAI Standards",
      value: "Certified Food Grade",
      desc: "Packed under strict hygiene regulations. FSSAI registration is currently in progress for full commercial compliance.",
    },
  ];

  return (
    <section id="product-details" className="py-24 bg-brand-cream text-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Product macro shot */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-brand-muted-border shadow-md"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/40 via-transparent to-transparent opacity-40 z-10" />
              <Image
                src="/images/honey_drizzle.png"
                alt="Macro shot of golden, pure raw honey dripping from a wooden dipper, showcasing rich texture and authentic quality."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-brand-white/80 backdrop-blur-md border border-brand-honey/15 text-brand-honey text-xs font-semibold uppercase tracking-wider shadow-sm">
                Raw & Unrefined
              </div>
            </motion.div>
          </div>

          {/* Right: Technical specifications and claims */}
          <div className="lg:col-span-7 flex flex-col justify-center font-sans">
            <div className="mb-10 text-left font-serif">
              <span className="text-xs font-semibold tracking-widest text-brand-honey uppercase mb-3 block">
                Product Specifications
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal mb-4">
                Designed for Specialty Coffee & Tea
              </h2>
              <p className="text-brand-charcoal/80 font-sans leading-relaxed text-sm sm:text-base">
                Our sachets contain nothing but 100% natural bee honey. We do not pasteurize or ultra-filter, preserving the organic enzymes, rich floral aromas, and smooth mouthfeel that complement specialty beverages.
              </p>
            </div>

            {/* Spec grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-brand-white/40 backdrop-blur-md border border-brand-white/20 flex flex-col items-start shadow-sm hover:bg-brand-white/60 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-brand-honey-light/70 border border-brand-honey/10 mb-4">
                    {spec.icon}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-brand-charcoal mb-1">
                    {spec.title}
                  </h3>
                  <span className="text-xs font-bold text-brand-honey uppercase tracking-wider mb-2">
                    {spec.value}
                  </span>
                  <p className="text-xs text-brand-charcoal/70 leading-relaxed font-sans">
                    {spec.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* FSSAI Badge placeholder */}
            <div className="mt-8 flex items-center gap-4 p-4 rounded-xl border border-dashed border-brand-honey/20 bg-brand-honey-light/30 backdrop-blur-md">
              <div className="w-12 h-12 rounded bg-brand-honey/10 border border-brand-honey/20 flex items-center justify-center text-[10px] font-bold text-brand-honey uppercase tracking-tight text-center shrink-0">
                FSSAI
              </div>
              <div>
                <p className="text-xs font-bold text-brand-charcoal uppercase tracking-wide">
                  FSSAI Commercial Compliance
                </p>
                <p className="text-[11px] text-brand-charcoal/70 leading-normal">
                  {/* TODO: replace with real FSSAI registration badge once certified */}
                  Registration in progress. Batch testing documents and food safety parameters are available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

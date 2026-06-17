"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Trash2, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-brand-honey" />,
      title: "Superior Hygiene Standards",
      desc: "Individual sealed packaging eliminates shared spoons, stickiness, flies, and cross-contamination. A clean solution for post-pandemic dining.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-honey" />,
      title: "Consistent Portion Control",
      desc: "Each sachet has an exact weight (8g–10g) ensuring your recipes taste exactly as your baristas intended, cup after cup.",
    },
    {
      icon: <Trash2 className="w-6 h-6 text-brand-honey" />,
      title: "Zero Product Wastage",
      desc: "Unlike honey jars that crystallize or leave 15% residue at the bottom, sachets ensure 100% of paid product is served and consumed.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-brand-white text-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-brand-honey uppercase mb-3 block">
            Why Cafés Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal mb-6">
            Designed for Smooth Café Operations
          </h2>
          <p className="text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            By switching from messy jars to premium single-serve pouches, your café saves labor time, reduces food wastage, and presents a modern premium aesthetic to every guest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: benefits list */}
          <div className="lg:col-span-7 space-y-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-brand-white/40 backdrop-blur-md border border-brand-white/20 hover:border-brand-honey/30 hover:bg-brand-white/60 transition-all duration-300 shadow-sm"
              >
                <div className="p-3 rounded-xl bg-brand-honey-light/70 text-brand-honey shrink-0 h-fit">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-brand-charcoal mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed font-sans">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Custom Brand Tease */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-2xl bg-brand-honey-light/50 backdrop-blur-md border border-brand-honey/20 flex gap-4 shadow-sm"
            >
              <div className="p-3 rounded-xl bg-brand-honey text-brand-white shrink-0 h-fit">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-brand-charcoal mb-1">
                  Custom Logo Printing
                </h4>
                <p className="text-xs text-brand-honey font-extrabold uppercase tracking-wider mb-2">
                  Coming Soon for Monthly Contracts
                </p>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed font-sans">
                  Stand out in Ahmedabad's competitive café scene. We will soon offer custom co-branded sachet printing featuring your café’s unique logo and color theme (available for monthly contracts exceeding 5,000 sachets).
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Sachet Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-brand-muted-border shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/20 via-transparent to-transparent z-10" />
              <Image
                src="/images/sachet_in_hand.png"
                alt="A premium single-serve honey sachet held in hand, demonstrating its compact size, clean sealed packaging, and modern minimalist design."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

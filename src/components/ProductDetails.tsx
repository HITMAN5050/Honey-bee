"use client";

import { useState, useEffect } from "react";
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
      image: "/images/sachet_in_hand.png",
    },
    {
      icon: <Calendar className="w-5 h-5 text-brand-honey" />,
      title: "Optimized Shelf Life",
      value: "12 Months Guaranteed",
      desc: "Pure raw honey never spoils, but our airtight food-grade packaging ensures freshness for up to 12 months.",
      image: "/images/honey_sachet_hero.png",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-honey" />,
      title: "100% Pure Origin",
      value: "Multifloral Raw Honey",
      desc: "Sourced locally from trusted apiaries. Unfiltered, unpasteurized, free from sugar syrup, additives, or adulterants.",
      image: "/images/honey_drizzle.png",
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-brand-honey" />,
      title: "FSSAI Standards",
      value: "Certified Food Grade",
      desc: "Packed under strict hygiene regulations. FSSAI registration is currently in progress for full commercial compliance.",
      image: "/images/quality_seal.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers = specs.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          rootMargin: "-25% 0px -25% 0px", // Trigger when card occupies center 50% of viewport
          threshold: 0.2,
        }
      );

      const target = document.getElementById(`spec-card-${index}`);
      if (target) observer.observe(target);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="product-details" className="py-24 bg-brand-cream/40 text-brand-charcoal relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-honey/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width Intro Header */}
        <div className="mb-16 max-w-3xl text-left">
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

        {/* Side-by-Side Flex Layout */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Sticky Image Column (Hidden on mobile, sticky on desktop) */}
          <div className="hidden md:block md:w-5/12 md:sticky md:top-28 z-20">
            <div className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden border border-brand-muted-border shadow-md bg-brand-white/10 backdrop-blur-md h-[400px] lg:h-[450px]">
              {/* Glowing decorative border overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/20 via-transparent to-transparent opacity-40 z-10 pointer-events-none" />
              
              {specs.map((spec, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    activeIndex === idx
                      ? "opacity-100 scale-100 blur-0"
                      : "opacity-0 scale-95 blur-[4px] pointer-events-none"
                  }`}
                >
                  <Image
                    src={spec.image}
                    alt={spec.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority={idx === 0}
                  />
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-brand-white/80 backdrop-blur-md border border-brand-honey/15 text-brand-honey text-xs font-semibold uppercase tracking-wider shadow-sm">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Scrolling Content Column */}
          <div className="w-full md:w-7/12 space-y-12">
            {specs.map((spec, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  id={`spec-card-${index}`}
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`p-6 sm:p-8 rounded-2xl transition-all duration-500 ease-in-out ${
                    isActive
                      ? "glass-card-honey border-brand-honey/30 shadow-md scale-[1.01]"
                      : "glass-card opacity-40 scale-100"
                  }`}
                >
                  {/* Mobile Image (Visible only on mobile) */}
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-brand-muted-border/30 md:hidden">
                    <Image
                      src={spec.image}
                      alt={spec.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-brand-white/90 text-brand-honey text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {spec.value}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 rounded-lg bg-brand-honey-light/70 border border-brand-honey/10 text-brand-honey">
                      {spec.icon}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-brand-charcoal">
                        {spec.title}
                      </h3>
                      <span className="text-xs font-bold text-brand-honey uppercase tracking-wider md:hidden">
                        {spec.value}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed font-sans">
                    {spec.desc}
                  </p>
                </motion.div>
              );
            })}

            {/* FSSAI Badge placeholder */}
            <div className="mt-8 flex items-center gap-4 p-5 rounded-2xl border border-dashed border-brand-honey/35 bg-brand-honey-light/35 backdrop-blur-lg shadow-sm">
              <div className="w-12 h-12 rounded bg-brand-honey/10 border border-brand-honey/20 flex items-center justify-center text-[10px] font-bold text-brand-honey uppercase tracking-tight text-center shrink-0">
                FSSAI
              </div>
              <div>
                <p className="text-xs font-bold text-brand-charcoal uppercase tracking-wide">
                  FSSAI Commercial Compliance
                </p>
                <p className="text-[11px] text-brand-charcoal/70 leading-normal">
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

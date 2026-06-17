"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Founders() {
  const founders = [
    {
      name: "Aarav Mehta",
      role: "Co-Founder, Sourcing & Quality",
      image: "/images/founder_1.png",
      bio: "Over 8 years of experience in agricultural supply chains and FMCG sourcing, ensuring Honey Bee honey is 100% pure and premium.",
    },
    {
      name: "Riya Patel",
      role: "Co-Founder, Café Operations",
      image: "/images/founder_2.png",
      bio: "Former operations lead at a major regional café chain, obsessed with solving logistics, waste, and presentation for hospitality partners.",
    },
  ];

  return (
    <section id="founders" className="py-24 bg-brand-cream/30 text-brand-charcoal relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-honey/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-brand-honey uppercase mb-3 block">
            Meet the Founders
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal mb-6">
            Building Trust with Ahmedabad’s Café Owners
          </h2>
          <p className="text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            We are food service professionals and supply chain specialists dedicated to solving daily operational issues for cafés and restaurants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl glass-card glass-card-hover"
            >
              {/* Photo */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-2 border-brand-honey/40 shadow-sm">
                <Image
                  src={founder.image}
                  alt={`Professional headshot of ${founder.name}, ${founder.role}.`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 192px"
                />
              </div>

              <h3 className="font-serif font-bold text-xl text-brand-charcoal mb-1">
                {founder.name}
              </h3>
              <p className="text-xs font-bold text-brand-honey uppercase tracking-wider mb-4">
                {founder.role}
              </p>
              <p className="text-sm text-brand-charcoal/70 leading-relaxed max-w-sm font-sans">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

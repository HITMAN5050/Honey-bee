"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const whatsappUrl = "https://wa.me/919601483320?text=Hi,%20I'd%20like%20to%20know%20more%20about%20Honey%20Bee%20honey%20sachets%20for%20my%20café.";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-cream">
      {/* Background Cinematic Video Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        {/* 
            TODO: replace '/videos/honey_cinematic.mp4' with your real product/cinematic video file 
        */}
        <source src="/videos/honey_cinematic.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent white-cream overlay with backdrop-blur for premium frosted glass effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-white/70 via-brand-white/50 to-brand-cream/80 backdrop-blur-[3px] z-10" />

      {/* Subtle honey glow trims */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-brand-honey/15 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/50 bg-white/45 backdrop-blur-md text-brand-honey text-xs font-semibold tracking-wider uppercase mb-8 shadow-[0_4px_12px_0_rgba(226,158,37,0.03)]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-honey animate-pulse" />
              Ahmedabad's Premium Café Supplier
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif leading-tight text-brand-charcoal mb-6"
          >
            Premium Honey. <br />
            <span className="text-brand-honey italic">One Cup</span> at a Time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-brand-charcoal/80 max-w-xl mb-10 leading-relaxed font-sans"
          >
            Upgrade your customer experience with our single-serve honey sachets. The premium, hygienic, and portion-controlled alternative to sugar packets and sticky shared jars.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-brand-honey text-brand-white text-center font-bold tracking-wide hover:bg-brand-honey-hover shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:ring-2 focus:ring-brand-honey focus:ring-offset-2"
            >
              Request a Free Sample for Your Café
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-brand-honey/30 text-brand-honey bg-brand-white/45 backdrop-blur-md font-semibold tracking-wide hover:bg-brand-honey hover:text-brand-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-honey/60 shadow-[0_4px_15px_rgba(226,158,37,0.02)]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.863-4.336-2.886-6.973-2.888-5.442 0-9.866 4.42-9.87 9.86-.001 1.768.461 3.493 1.34 5.022L1.81 22.24l6.096-1.599c-1.63.95-3.2 1.449-4.83 1.451-.01 0-.02 0-.03 0z" />
              </svg>
              <span>WhatsApp Live Inquiry</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Check, Truck, Box, Sparkles } from "lucide-react";

export default function Pricing() {
  const [volume, setVolume] = useState(1000);

  const getPricePerSachet = (qty: number) => {
    if (qty <= 1500) return 5.5;
    if (qty <= 3000) return 4.8;
    return 4.2;
  };

  const pricePerSachet = getPricePerSachet(volume);
  const totalCost = volume * pricePerSachet;
  const boxes = Math.ceil(volume / 500);

  return (
    <section id="pricing" className="py-24 bg-brand-cream/40 text-brand-charcoal relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-brand-honey/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-brand-honey uppercase mb-3 block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal mb-6">
            Predictable Costs, Zero Waste
          </h2>
          <p className="text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            No hidden fees, no opaque contracts. We offer clear, volume-based pricing for cafés of all sizes in Ahmedabad. Do the math and see how simple upgrading can be.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Pricing tiers & Delivery features */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif font-bold text-2xl text-brand-charcoal mb-6">
              Our Pricing Tiers
            </h3>

            {[
              { tier: "Starter Pack", volume: "500 – 1,500 sachets", price: "₹5.50 / sachet", desc: "Perfect for boutique cafés launching their honey menus." },
              { tier: "Growth Pack", volume: "1,501 – 3,000 sachets", price: "₹4.80 / sachet", desc: "For popular local cafes with steady beverage volumes.", recommended: true },
              { tier: "Enterprise Pack", volume: "3,001+ sachets", price: "₹4.20 / sachet", desc: "For chain cafes and fine dining establishments." }
            ].map((t, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl glass-card-hover ${
                  t.recommended
                    ? "glass-card-honey border-2 border-brand-honey/70"
                    : "glass-card"
                } relative overflow-hidden`}
              >
                {t.recommended && (
                  <div className="absolute top-0 right-0 bg-brand-honey text-brand-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl">
                    Most Popular
                  </div>
                )}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-brand-charcoal">{t.tier}</h4>
                    <p className="text-xs text-brand-honey font-bold tracking-wider">{t.volume}</p>
                  </div>
                  <span className="text-xl font-bold text-brand-charcoal">{t.price}</span>
                </div>
                <p className="text-xs text-brand-charcoal/70 leading-relaxed font-sans">{t.desc}</p>
              </div>
            ))}

            {/* Delivery coverage info */}
            <div className="pt-6 border-t border-brand-muted-border space-y-4">
              <div className="flex gap-3 items-start text-sm text-brand-charcoal/80">
                <Truck className="w-5 h-5 text-brand-honey shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-brand-charcoal">Free Delivery Across Ahmedabad</p>
                  <p className="text-xs text-brand-charcoal/65">Guaranteed next-day delivery for all partner cafes within city boundaries.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start text-sm text-brand-charcoal/80">
                <Box className="w-5 h-5 text-brand-honey shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-brand-charcoal">Minimum Order Quantity (MOQ)</p>
                  <p className="text-xs text-brand-charcoal/65">Starting at just 1 box (500 sachets) per order to keep storage needs minimal.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Estimator */}
          <div className="lg:col-span-7 p-8 rounded-2xl glass-card flex flex-col justify-between w-full relative">
            {/* Direct glow behind the calculator card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-honey/10 blur-[90px] pointer-events-none -z-10" />
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-brand-honey" />
                <h3 className="font-serif font-bold text-xl text-brand-charcoal">
                  Interactive Cost Estimator
                </h3>
              </div>

              <p className="text-sm text-brand-charcoal/85 mb-8 font-sans">
                Drag the slider to match your estimated monthly sachet requirements to calculate your custom pricing.
              </p>

              {/* Slider */}
              <div className="mb-10 font-sans">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-brand-charcoal/60 font-bold uppercase tracking-wider">
                    Sachets Per Month
                  </span>
                  <span className="text-2xl font-bold font-serif text-brand-honey">
                    {volume.toLocaleString()} <span className="text-xs font-sans text-brand-charcoal">pcs</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-1.5 bg-brand-cream rounded-lg appearance-none cursor-pointer accent-brand-honey focus:outline-none focus:ring-1 focus:ring-brand-honey"
                />
                <div className="flex justify-between text-[10px] text-brand-charcoal/50 mt-2">
                  <span>500 (MOQ)</span>
                  <span>1,500 (Tier 1)</span>
                  <span>3,000 (Tier 2)</span>
                  <span>5,000+ (Tier 3)</span>
                </div>
              </div>

              {/* Calc panel */}
              <div className="grid grid-cols-3 gap-4 p-5 rounded-xl glass-card-honey mb-8">
                <div className="text-center">
                  <p className="text-[10px] text-brand-charcoal/60 font-bold uppercase tracking-wider mb-1">
                    Rate / Sachet
                  </p>
                  <p className="text-xl font-bold font-serif text-brand-honey">
                    ₹{pricePerSachet.toFixed(2)}
                  </p>
                </div>
                <div className="text-center border-x border-brand-honey/15">
                  <p className="text-[10px] text-brand-charcoal/60 font-bold uppercase tracking-wider mb-1">
                    Boxes Needed
                  </p>
                  <p className="text-xl font-bold font-serif text-brand-charcoal">
                    {boxes} <span className="text-[10px] font-sans text-brand-charcoal/70">({boxes * 500} pcs)</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-brand-charcoal/60 font-bold uppercase tracking-wider mb-1">
                    Monthly Total
                  </p>
                  <p className="text-xl font-bold font-serif text-brand-honey">
                    ₹{totalCost.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Value propositions */}
              <div className="space-y-3 mb-8">
                <div className="flex gap-2.5 items-start text-xs text-brand-charcoal/80">
                  <Check className="w-4 h-4 text-brand-honey shrink-0 mt-0.5" />
                  <span>No locked contracts or hidden fees. Adjust orders freely.</span>
                </div>
                <div className="flex gap-2.5 items-start text-xs text-brand-charcoal/80">
                  <Check className="w-4 h-4 text-brand-honey shrink-0 mt-0.5" />
                  <span>Complimentary shipping to any location within Ahmedabad limits.</span>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="w-full py-4 text-center rounded-full bg-brand-honey text-brand-white font-bold tracking-wide hover:bg-brand-honey-hover shadow-lg transition-all duration-300 block focus:ring-2 focus:ring-brand-honey"
            >
              Order Sample Box (500 sachets)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

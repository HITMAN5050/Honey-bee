"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, PhoneCall, AlertCircle, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    cafeName: "",
    city: "Ahmedabad",
    phone: "",
    monthlyVolume: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.cafeName.trim()) newErrors.cafeName = "Café or Restaurant name is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";

    const phoneRegex = /^[6-9]\d{9}$/; // Indian phone numbers (10 digits starting with 6-9)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          cafeName: "",
          city: "Ahmedabad",
          phone: "",
          monthlyVolume: "",
        });
      } else {
        setSubmitError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setSubmitError("Failed to submit form. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = "https://wa.me/919876543210?text=Hi,%20I'd%20like%20to%20know%20more%20about%20Honey%20Bee%20honey%20sachets%20for%20my%20café.";

  return (
    <section id="contact" className="py-24 bg-brand-cream/30 text-brand-charcoal relative overflow-hidden font-sans">
      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-brand-honey/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-5xl mx-auto items-stretch">
          
          {/* Left Column: direct call information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-widest text-brand-honey uppercase mb-3 block">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal mb-6">
                Request Your Free Sample Box Today
              </h2>
              <p className="text-base text-brand-charcoal/80 mb-8 font-sans leading-relaxed">
                We will deliver a complimentary sample box containing 10 sachets (various weights) directly to your café in Ahmedabad so you can test solubility, taste profile, and customer response.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-honey-light text-brand-honey flex items-center justify-center">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-charcoal/50 font-bold uppercase tracking-wider">
                      Direct Sales Line
                    </p>
                    <p className="font-bold text-brand-charcoal">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-honey-light text-brand-honey flex items-center justify-center">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.863-4.336-2.886-6.973-2.888-5.442 0-9.866 4.42-9.87 9.86-.001 1.768.461 3.493 1.34 5.022L1.81 22.24l6.096-1.599c-1.63.95-3.2 1.449-4.83 1.451-.01 0-.02 0-.03 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-brand-charcoal/50 font-bold uppercase tracking-wider">
                      Instantly Chat With Us
                    </p>
                    <p className="font-bold text-brand-charcoal">Available on WhatsApp 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-full border-2 border-brand-honey text-brand-honey font-bold tracking-wide hover:bg-brand-honey hover:text-brand-white transition-all duration-300 w-full mb-8 lg:mb-0 focus:ring-2 focus:ring-brand-honey"
            >
              <span>Text Us on WhatsApp</span>
            </a>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 p-8 rounded-2xl glass-card flex flex-col justify-center relative overflow-hidden">
            {/* Ambient glow inside the card */}
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-honey/10 rounded-full blur-2xl pointer-events-none" />
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-brand-honey-light border border-brand-honey/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-brand-honey" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-brand-charcoal mb-4">
                  Request Received!
                </h3>
                <p className="text-sm text-brand-charcoal/70 max-w-sm mx-auto leading-relaxed font-sans mb-8">
                  Thank you for your interest in Honey Bee. Our sales co-founder Aarav will call you back on your mobile number within 2 hours to confirm your café delivery address.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 rounded-full border border-brand-honey/40 text-brand-honey hover:bg-brand-honey hover:text-brand-white text-xs font-bold tracking-wide transition-all cursor-pointer"
                >
                  Send Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif font-bold text-xl text-brand-charcoal mb-4">
                  Submit Sachet Sample Request
                </h3>

                {submitError && (
                  <div className="flex gap-2.5 items-center p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-lg bg-white/45 border ${
                      errors.name ? "border-red-500" : "border-white/50"
                    } text-brand-charcoal font-sans placeholder-brand-charcoal/40 focus:outline-none focus:border-brand-honey text-sm focus:ring-1 focus:ring-brand-honey backdrop-blur-sm transition-all focus:bg-white/80 focus:border-brand-honey`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 font-sans">{errors.name}</p>}
                </div>

                {/* Cafe Name */}
                <div>
                  <label htmlFor="cafeName" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">
                    Café or Restaurant Name *
                  </label>
                  <input
                    id="cafeName"
                    type="text"
                    required
                    value={formData.cafeName}
                    onChange={(e) => {
                      setFormData({ ...formData, cafeName: e.target.value });
                      if (errors.cafeName) setErrors({ ...errors, cafeName: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-lg bg-white/45 border ${
                      errors.cafeName ? "border-red-500" : "border-white/50"
                    } text-brand-charcoal font-sans placeholder-brand-charcoal/40 focus:outline-none focus:border-brand-honey text-sm focus:ring-1 focus:ring-brand-honey backdrop-blur-sm transition-all focus:bg-white/80 focus:border-brand-honey`}
                    placeholder="e.g. Roastery Coffee House"
                  />
                  {errors.cafeName && <p className="text-red-500 text-xs mt-1.5 font-sans">{errors.cafeName}</p>}
                </div>

                {/* Grid for City and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">
                      City *
                    </label>
                    <input
                      id="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => {
                        setFormData({ ...formData, city: e.target.value });
                        if (errors.city) setErrors({ ...errors, city: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-lg bg-white/45 border ${
                        errors.city ? "border-red-500" : "border-white/50"
                      } text-brand-charcoal font-sans placeholder-brand-charcoal/40 focus:outline-none focus:border-brand-honey text-sm focus:ring-1 focus:ring-brand-honey backdrop-blur-sm transition-all focus:bg-white/80 focus:border-brand-honey`}
                      placeholder="Ahmedabad"
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1.5 font-sans">{errors.city}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">
                      WhatsApp/Mobile Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-lg bg-white/45 border ${
                        errors.phone ? "border-red-500" : "border-white/50"
                      } text-brand-charcoal font-sans placeholder-brand-charcoal/40 focus:outline-none focus:border-brand-honey text-sm focus:ring-1 focus:ring-brand-honey backdrop-blur-sm transition-all focus:bg-white/80 focus:border-brand-honey`}
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-sans">{errors.phone}</p>}
                  </div>
                </div>

                {/* Est Monthly Volume */}
                <div>
                  <label htmlFor="monthlyVolume" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">
                    Estimated Monthly Volume (Optional)
                  </label>
                  <select
                    id="monthlyVolume"
                    value={formData.monthlyVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/45 border border-white/50 text-brand-charcoal font-sans focus:outline-none focus:border-brand-honey text-sm cursor-pointer backdrop-blur-sm transition-all focus:bg-white/80 focus:border-brand-honey"
                  >
                    <option value="" disabled className="text-brand-charcoal">Select estimated volume</option>
                    <option value="Under 500 sachets" className="text-brand-charcoal font-sans">Under 500 sachets / month</option>
                    <option value="500 - 1500 sachets" className="text-brand-charcoal font-sans">500 - 1,500 sachets / month</option>
                    <option value="1500 - 3000 sachets" className="text-brand-charcoal font-sans">1,500 - 3,000 sachets / month</option>
                    <option value="3000+ sachets" className="text-brand-charcoal font-sans">3,000+ sachets / month</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-brand-honey text-brand-white font-bold tracking-wide hover:bg-brand-honey-hover shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2 focus:ring-2 focus:ring-brand-honey"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-brand-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Free Sample Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

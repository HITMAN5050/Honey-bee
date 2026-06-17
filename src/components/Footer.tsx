"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-white border-t border-brand-muted-border/60 py-12 text-brand-charcoal/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Brand logo & tagline */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#" className="flex items-center gap-3 group">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 text-brand-honey fill-none stroke-current"
                strokeWidth="1.5"
              >
                <polygon points="12,3 19,7 19,15 12,19 5,15 5,7" />
                <path d="M12 7c-1 0-1.5.5-1.5 1.5s.5 1.5 1.5 1.5 1.5-.5 1.5-1.5S13 7 12 7z" fill="currentColor" />
                <path d="M10.5 8.5C9 8.5 8 7.5 8 6.5s1-1.5 2.5-1.5" />
                <path d="M13.5 8.5c1.5 0 2.5-1 2.5-2s-1-1.5-2.5-1.5" />
              </svg>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-brand-charcoal">
                Honey Bee
              </span>
            </Link>
            <p className="text-xs text-brand-charcoal/65 max-w-sm font-sans leading-relaxed">
              Supplying Ahmedabad’s leading cafés and restaurants with premium, portion-controlled, single-serve multifloral raw honey sachets. Elevating beverage service, one cup at a time.
            </p>
          </div>

          {/* Quick Sitemap Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-brand-charcoal uppercase tracking-widest">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 text-xs font-medium">
              <a href="#the-gap" className="hover:text-brand-honey transition-colors">The Gap</a>
              <a href="#product-details" className="hover:text-brand-honey transition-colors">Product Details</a>
              <a href="#why-us" className="hover:text-brand-honey transition-colors">Why Choose Us</a>
              <a href="#pricing" className="hover:text-brand-honey transition-colors">Pricing & Ordering</a>
              <a href="#faq" className="hover:text-brand-honey transition-colors">FAQ</a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-brand-charcoal uppercase tracking-widest">
              Contact & Address
            </h4>
            <div className="text-xs space-y-2 leading-relaxed font-sans">
              <p className="text-brand-charcoal font-semibold font-serif">Honey Bee Foods Private Limited</p>
              <p className="text-brand-charcoal/75">
                Bodakdev, Off S.G. Highway,<br />
                Ahmedabad, Gujarat – 380054
              </p>
              <p className="text-brand-charcoal/75">
                Email: <a href="mailto:hello@honeybee.in" className="hover:text-brand-honey">hello@honeybee.in</a>
              </p>
              <p className="text-brand-charcoal/75">
                Phone: <a href="tel:+919601483320" className="hover:text-brand-honey">+91 96014 83320</a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="pt-8 border-t border-brand-muted-border/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-brand-charcoal/50 font-sans">
            &copy; {currentYear} Honey Bee Foods. All rights reserved. Sourced and packed in Gujarat, India.
          </p>
          <div className="flex gap-4 text-[11px] text-brand-charcoal/50 font-sans">
            <Link href="#" className="hover:text-brand-honey transition-colors">Terms of Service</Link>
            <span>&bull;</span>
            <Link href="#" className="hover:text-brand-honey transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

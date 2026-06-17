"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Gap", href: "#the-gap" },
    { name: "Product Details", href: "#product-details" },
    { name: "Why Us", href: "#why-us" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  const whatsappUrl = "https://wa.me/919876543210?text=Hi,%20I'd%20like%20to%20know%20more%20about%20Honey%20Bee%20honey%20sachets%20for%20my%20café.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-white/45 backdrop-blur-md border-b border-brand-white/30 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 group">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 text-brand-honey fill-none stroke-current transition-transform duration-300 group-hover:scale-110"
              strokeWidth="1.5"
            >
              <polygon points="12,3 19,7 19,15 12,19 5,15 5,7" />
              <path d="M12 7c-1 0-1.5.5-1.5 1.5s.5 1.5 1.5 1.5 1.5-.5 1.5-1.5S13 7 12 7z" fill="currentColor" />
              <path d="M10.5 8.5C9 8.5 8 7.5 8 6.5s1-1.5 2.5-1.5" />
              <path d="M13.5 8.5c1.5 0 2.5-1 2.5-2s-1-1.5-2.5-1.5" />
            </svg>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-brand-charcoal group-hover:text-brand-honey transition-colors duration-300">
              Honey Bee
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-brand-charcoal/80 hover:text-brand-honey transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full border border-brand-honey/40 text-brand-honey hover:bg-brand-honey hover:text-brand-white transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.863-4.336-2.886-6.973-2.888-5.442 0-9.866 4.42-9.87 9.86-.001 1.768.461 3.493 1.34 5.022L1.81 22.24l6.096-1.599c-1.63.95-3.2 1.449-4.83 1.451-.01 0-.02 0-.03 0z" />
              </svg>
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-semibold rounded-full bg-brand-honey text-brand-white hover:bg-brand-honey-hover shadow-md transition-all duration-300"
            >
              Request Free Sample
            </a>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-brand-honey/40 text-brand-honey hover:bg-brand-honey hover:text-brand-white transition-colors duration-300"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.863-4.336-2.886-6.973-2.888-5.442 0-9.866 4.42-9.87 9.86-.001 1.768.461 3.493 1.34 5.022L1.81 22.24l6.096-1.599c-1.63.95-3.2 1.449-4.83 1.451-.01 0-.02 0-.03 0z" />
              </svg>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-charcoal hover:text-brand-honey focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-brand-white/85 backdrop-blur-xl border-b border-brand-white/35 py-4 px-6 absolute top-full left-0 right-0 shadow-lg flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-brand-charcoal/90 hover:text-brand-honey transition-colors py-2 border-b border-brand-muted-border/10"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-full border border-brand-honey text-brand-honey hover:bg-brand-honey hover:text-brand-white transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.863-4.336-2.886-6.973-2.888-5.442 0-9.866 4.42-9.87 9.86-.001 1.768.461 3.493 1.34 5.022L1.81 22.24l6.096-1.599c-1.63.95-3.2 1.449-4.83 1.451-.01 0-.02 0-.03 0z" />
              </svg>
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="py-3 rounded-full bg-brand-honey text-brand-white hover:bg-brand-honey-hover text-center font-bold shadow-md transition-colors"
            >
              Request Free Sample
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onRequestPilot: (triggerElem?: HTMLElement | null) => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestPilot }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Market & Pricing', href: '#market-pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-subtle transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[4.25rem]">
          {/* Brand Wordmark - Logo square removed as requested */}
          <div className="flex items-center">
            <a
              href="#home"
              className="group flex flex-col justify-center text-heading hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-brand-teal rounded-lg py-1 px-0.5"
            >
              <span className="text-xl sm:text-[22px] font-extrabold tracking-tight text-heading leading-none">
                TraceMetric
              </span>
              <span className="text-[10px] tracking-wide uppercase text-slate-500 font-semibold mt-1">
                Analytical Measurement Impact Engine
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-semibold text-slate-600 hover:text-heading hover:bg-slate-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              onClick={(e) => onRequestPilot(e.currentTarget)}
              className="inline-flex items-center gap-2 px-4.5 py-2 text-sm font-semibold text-white bg-brand-teal hover:bg-brand-tealDark rounded-xl shadow-subtle hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 active:scale-[0.98]"
            >
              Request a Pilot
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              className="p-2 rounded-xl text-slate-600 hover:text-heading hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-teal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-b border-border bg-white px-4 pt-2 pb-5 space-y-2 animate-fadeIn"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-heading hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2.5 border-t border-slate-100">
            <button
              type="button"
              onClick={(e) => {
                handleNavClick();
                onRequestPilot(e.currentTarget);
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-teal hover:bg-brand-tealDark rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-teal"
            >
              Request a Pilot
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

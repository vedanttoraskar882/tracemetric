import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Market & Pricing', href: '#market-pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-10 md:py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          {/* Brand Info - Logo box removed */}
          <div className="md:col-span-6 space-y-3">
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white block">
                TraceMetric
              </span>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Analytical Measurement Impact Engine
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Planned decision support for retrospective pharmaceutical analytical impact assessment.
            </p>

            <div className="pt-1 text-xs text-slate-400">
              <p className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 leading-relaxed text-slate-300">
                TraceMetric supports QA/QC investigations. Outputs require human QA review before use in disposition decisions.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-6 md:flex md:justify-end">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Navigation
              </h4>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs sm:text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-brand-teal rounded"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {currentYear} TraceMetric. All rights reserved.</p>
          <p className="text-slate-500">
            Pharmaceutical QA/QC Decision Support Platform
          </p>
        </div>
      </div>
    </footer>
  );
};

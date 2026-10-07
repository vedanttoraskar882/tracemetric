import React from 'react';
import { Building2, UserCircle, Globe, ArrowRight, HelpCircle } from 'lucide-react';

interface MarketPricingSectionProps {
  onRequestPilot: (triggerElem?: HTMLElement | null) => void;
}

export const MarketPricingSection: React.FC<MarketPricingSectionProps> = ({ onRequestPilot }) => {
  const targetCustomers = [
    'UK pharmaceutical manufacturers.',
    'Generic pharmaceutical manufacturers.',
    'Contract development and manufacturing organisations.',
    'Independent contract testing laboratories.',
    'Nutraceutical manufacturers operating to pharmaceutical quality standards.',
  ];

  const principalUsers = [
    'QC Laboratory Managers.',
    'Heads of Quality Assurance.',
    'Validation and Compliance Leads.',
    'Site Quality Directors.',
  ];

  const pricingOfferings = [
    {
      name: 'Proof-of-value pilot',
      price: '£15,000–£30,000',
      cadence: 'Pilot engagement',
      type: 'engagement',
      description: 'Pilot engagement.',
    },
    {
      name: 'Single laboratory annual licence',
      price: '£25,000–£60,000',
      cadence: 'per year',
      type: 'annual',
      description: 'Annual licence for a single laboratory.',
    },
    {
      name: 'Large QC laboratory / site licence',
      price: '£60,000–£120,000',
      cadence: 'per year',
      type: 'annual',
      description: 'Annual licence for a large QC laboratory or site.',
    },
    {
      name: 'Multi-site licence',
      price: '£150,000–£400,000',
      cadence: 'per year',
      type: 'annual',
      description: 'Annual multi-site licensing.',
    },
    {
      name: 'Validation and integration',
      price: '£15,000–£75,000',
      cadence: 'one-off',
      type: 'one-off',
      description: 'Validation and integration engagement.',
    },
    {
      name: 'Specialist impact-assessment project',
      price: '£5,000–£20,000',
      cadence: 'per investigation',
      type: 'per-investigation',
      description: 'Investigation-specific project engagement.',
    },
    {
      name: 'Dedicated-instance deployment premium',
      price: 'To be determined',
      cadence: 'Subject to evaluation',
      type: 'provisional',
      description: 'Subject to buyer interviews and deployment decisions.',
    },
  ];

  return (
    <section id="market-pricing" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-brand-teal mb-2.5 border border-teal-200/60">
            Market & Users
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-heading tracking-tight leading-tight">
            Designed for pharmaceutical quality teams.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-body leading-relaxed">
            Tailored to organisations operating under rigorous GxP compliance standards where retrospective investigations demand systematic evidence assembly.
          </p>
        </div>

        {/* Target Customers & Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {/* Target Customer Groups */}
          <div className="bg-surface rounded-2xl p-6 border border-border shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center mb-4 border border-teal-200/60">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-heading mb-3">
                Target Customer Groups
              </h3>
              <ul className="space-y-2">
                {targetCustomers.map((customer) => (
                  <li key={customer} className="text-xs sm:text-sm text-body flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                    <span>{customer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Principal Users and Buyers */}
          <div className="bg-surface rounded-2xl p-6 border border-border shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-4 border border-blue-200/60">
                <UserCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-heading mb-3">
                Principal Users and Buyers
              </h3>
              <ul className="space-y-2">
                {principalUsers.map((user) => (
                  <li key={user} className="text-xs sm:text-sm text-body flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                    <span>{user}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Geographic Markets */}
          <div className="bg-surface rounded-2xl p-6 border border-border shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 border border-slate-200">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-heading mb-3">
                Market Geography
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm text-body">
                <div className="p-2.5 bg-teal-50/70 border border-teal-200/80 rounded-xl">
                  <span className="font-bold text-brand-teal block text-[11px] uppercase tracking-wider mb-0.5">
                    Initial Target Market
                  </span>
                  <span className="text-heading font-medium">United Kingdom (UK)</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="font-bold text-slate-500 block text-[11px] uppercase tracking-wider mb-0.5">
                    Longer-Term Plans
                  </span>
                  <span className="text-slate-700">EU, India and US expansion</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRICING SUBSECTION */}
        <div className="pt-8 border-t border-border">
          <div className="max-w-3xl mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-heading tracking-tight">
              Indicative commercial pricing
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 bg-slate-100/90 border border-slate-200 rounded-xl p-3.5 leading-relaxed font-medium">
              These provisional ranges are mature-vendor reference points from the business plan, rather than confirmed launch packages.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
            {pricingOfferings.map((offering) => {
              const isTBD = offering.price === 'To be determined';
              return (
                <div
                  key={offering.name}
                  className={`rounded-2xl p-5 border flex flex-col justify-between transition-all bg-surface ${
                    isTBD
                      ? 'border-dashed border-slate-300 bg-slate-50/50'
                      : 'border-border shadow-subtle hover:shadow-card hover:-translate-y-0.5'
                  }`}
                >
                  <div>
                    {/* Cadence badge */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          offering.type === 'annual'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : offering.type === 'engagement'
                            ? 'bg-teal-50 text-teal-700 border border-teal-200'
                            : offering.type === 'one-off'
                            ? 'bg-purple-50 text-purple-700 border border-purple-200'
                            : offering.type === 'per-investigation'
                            ? 'bg-amber-50 text-amber-800 border border-amber-200'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        {offering.cadence}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-heading mb-1.5 leading-snug">
                      {offering.name}
                    </h4>

                    <div className="mt-2 mb-3">
                      <div className="text-lg sm:text-xl font-bold text-heading tracking-tight">
                        {offering.price}
                      </div>
                      {!isTBD && offering.cadence !== offering.price && (
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                          {offering.cadence}
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-body pt-2.5 border-t border-slate-100">
                    {offering.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Pricing Notes & Disclaimers */}
          <div className="bg-surface rounded-2xl border border-border p-5 sm:p-6 space-y-3 shadow-subtle mb-8">
            <div className="flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-heading">
                  Indicative pricing — subject to scope and validation requirements.
                </p>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  Early-stage contract values are expected to be lower than these mature-vendor reference ranges. Early pilots may be discounted or offered free in exchange for reference-customer participation and anonymised data access under NDA, subject to agreement.
                </p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-5 sm:p-6 bg-gradient-to-r from-teal-50/80 to-blue-50/80 rounded-2xl border border-teal-200/70 gap-4">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-heading">
                Interested in evaluating TraceMetric for your laboratory?
              </h4>
              <p className="text-xs sm:text-sm text-body mt-0.5">
                Participate in early proof-of-value pilots and discuss retrospective assessment scope.
              </p>
            </div>
            <button
              type="button"
              onClick={(e) => onRequestPilot(e.currentTarget)}
              className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-teal hover:bg-brand-tealDark rounded-xl shadow-subtle hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 active:scale-[0.98]"
            >
              Request a Pilot
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

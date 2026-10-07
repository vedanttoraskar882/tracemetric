import React from 'react';
import { ArrowRight, ChevronRight, FileSearch, AlertCircle, Database, CheckSquare2 } from 'lucide-react';

interface HeroSectionProps {
  onRequestPilot: (triggerElem?: HTMLElement | null) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestPilot }) => {
  return (
    <section id="home" className="relative pt-8 pb-14 md:pt-12 md:pb-16 overflow-hidden bg-background">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-tealBg rounded-full filter blur-3xl opacity-50 -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-blueBg rounded-full filter blur-3xl opacity-40 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 animate-fadeInUp">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-brand-teal border border-teal-200/70">
                Pharmaceutical QA/QC Decision Support
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                Platform under development
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-extrabold text-heading tracking-tight leading-[1.16]">
              Understand the impact of analytical errors on historical laboratory results.
            </h1>

            {/* Supporting Paragraphs */}
            <p className="text-base sm:text-lg text-body leading-relaxed max-w-2xl font-normal">
              TraceMetric is a proposed software platform designed to help pharmaceutical quality teams assess which historical tests, samples and batches may be affected when a reference standard, calibration state or reagent is later found to be unreliable.
            </p>

            <p className="text-sm sm:text-base text-slate-700 font-semibold leading-relaxed max-w-2xl border-l-2 border-brand-teal pl-3 py-0.5">
              Built around human-led investigation, with evidence to support QA review and scientifically justified follow-up.
            </p>

            {/* Initial Scope Notice */}
            <div className="text-xs sm:text-sm text-slate-600 bg-slate-100/90 rounded-lg px-3.5 py-1.5 inline-block border border-border">
              <span className="font-semibold text-heading">Initial focus:</span> incorrect reference-standard potency assignments.
            </div>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={(e) => onRequestPilot(e.currentTarget)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-teal hover:bg-brand-tealDark rounded-xl shadow-subtle hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 active:scale-[0.98]"
              >
                Request a Pilot
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-border rounded-xl shadow-subtle transition-all focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                Explore the Platform
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Illustrative Assessment Panel */}
          <div className="lg:col-span-5">
            <div className="bg-surface rounded-2xl border border-border shadow-elevated p-5 sm:p-6 relative overflow-hidden">
              {/* Mandatory Illustration Disclaimer Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-border mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  Illustrative concept — not live laboratory data
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
                </span>
              </div>

              {/* Text-based mock assessment panel state */}
              <div className="space-y-3">
                {/* Reference Input Context */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-0.5">
                    Analytical Input Under Scrutiny
                  </div>
                  <div className="text-sm font-bold text-heading flex items-center justify-between">
                    <span>Working Reference Standard WRS-2024-042</span>
                    <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      Discrepancy Logged
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Assigned potency updated retrospectively following re-assay verification.
                  </p>
                </div>

                {/* 1. Affected Records */}
                <div className="p-3 bg-white rounded-xl border border-border shadow-subtle">
                  <div className="flex items-start gap-2.5">
                    <Database className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                        Affected Records
                      </div>
                      <div className="text-sm font-semibold text-heading mt-0.5">
                        Historical Population Mapped
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Historical batch assays and stability intervals linked across defined usage period.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Evidence Review */}
                <div className="p-3 bg-white rounded-xl border border-border shadow-subtle">
                  <div className="flex items-start gap-2.5">
                    <FileSearch className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                        Evidence Review
                      </div>
                      <div className="text-sm font-semibold text-heading mt-0.5">
                        Structured Gap Assessment
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Corrected certificate data verified; highlighted supporting evidence gaps for review.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Investigation Priorities */}
                <div className="p-3 bg-white rounded-xl border border-border shadow-subtle">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                        Investigation Priorities
                      </div>
                      <div className="text-sm font-semibold text-heading mt-0.5">
                        Triage & Risk-Ranked Batches
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Focus directed to release-critical specifications and shelf-life intervals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Human QA Review Required */}
                <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-200/80">
                  <div className="flex items-start gap-2.5">
                    <CheckSquare2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-bold text-brand-teal uppercase tracking-wide">
                        Human QA Review Required
                      </div>
                      <p className="text-xs text-slate-700 mt-0.5 font-medium leading-relaxed">
                        Outputs structured to assist authorised quality personnel. Batch disposition remains under QMS governance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

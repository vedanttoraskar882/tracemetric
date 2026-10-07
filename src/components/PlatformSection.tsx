import React from 'react';
import {
  FileText,
  Search,
  Scale,
  Calculator,
  ListOrdered,
  FileCheck2,
  ShieldAlert,
  GitBranch,
} from 'lucide-react';

export const PlatformSection: React.FC = () => {
  const capabilities = [
    {
      title: 'Laboratory Record Review',
      description:
        'Planned support for importing and checking structured laboratory exports used in an assessment.',
      icon: FileText,
    },
    {
      title: 'Affected Test and Batch Identification',
      description:
        'Planned support for identifying historical tests, samples and batches associated with an affected analytical input.',
      icon: Search,
    },
    {
      title: 'Evidence Assessment',
      description:
        'Planned support for establishing what the available information can responsibly support and highlighting missing evidence.',
      icon: Scale,
    },
    {
      title: 'Eligible Result Reassessment',
      description:
        'Where scientifically justified corrected inputs and adequate supporting information exist, TraceMetric is intended to support reassessment of affected results.',
      icon: Calculator,
    },
    {
      title: 'Investigation Prioritisation',
      description:
        'Planned organisation of findings and evidence gaps to support QA-led investigation.',
      icon: ListOrdered,
    },
    {
      title: 'Evidence Reporting',
      description:
        'Planned preparation of source-linked assessment information for human review and investigation documentation.',
      icon: FileCheck2,
    },
  ];

  const plannedFutureScope = [
    'Calibration failures.',
    'Reagent lot recalls.',
    'Analytical method changes.',
    'Broader retrospective batch-impact assessment.',
  ];

  return (
    <section id="platform" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-brand-teal mb-2.5 border border-teal-200/60">
            Platform Overview
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-heading tracking-tight leading-tight">
            Planned capabilities for retrospective analytical impact assessment.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-body leading-relaxed">
            TraceMetric is designed to complement existing laboratory and quality systems, helping teams organise affected records, assess available evidence and prepare findings for human QA review.
          </p>
        </div>

        {/* 6 High-Level Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-surface rounded-2xl p-6 border border-border shadow-subtle hover:shadow-card hover:-translate-y-0.5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center border border-teal-200/60">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Separate Panel: Initial scope and planned expansion */}
        <div className="bg-surface rounded-2xl border border-border shadow-subtle p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-2 mb-5">
            <GitBranch className="w-5 h-5 text-brand-teal" />
            <h3 className="text-xl sm:text-2xl font-bold text-heading">
              Initial scope and planned expansion
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Initial Scope */}
            <div className="space-y-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 rounded-md mb-2">
                  Initial Scope
                </span>
                <p className="text-base font-semibold text-heading">
                  Incorrect reference-standard potency assignments.
                </p>
              </div>

              <div className="pt-1">
                <span className="inline-block px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 rounded-md mb-2">
                  Integration Approach
                </span>
                <p className="text-sm text-body leading-relaxed">
                  Structured file exports are the initial integration approach. Direct API connectors and continuous monitoring are future developments.
                </p>
              </div>
            </div>

            {/* Planned Future Scope */}
            <div>
              <span className="inline-block px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 border border-blue-200 rounded-md mb-2.5">
                Planned Future Scope
              </span>
              <ul className="space-y-2">
                {plannedFutureScope.map((scope) => (
                  <li key={scope} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                    <span>{scope}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 mt-3.5 italic">
                Note: Future scope capabilities are planned milestones and not currently available.
              </p>
            </div>
          </div>
        </div>

        {/* Core Integrity & Decision Support Notices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Data Integrity Principle
            </h4>
            <p className="text-slate-700 leading-relaxed font-medium">
              TraceMetric is intended to preserve original laboratory results and create separate, linked assessment records.
            </p>
          </div>

          <div className="bg-teal-50/60 rounded-2xl p-5 sm:p-6 border border-teal-200/80 text-sm">
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldAlert className="w-4 h-4 text-brand-teal" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800">
                Decision-Support Boundary
              </h4>
            </div>
            <p className="text-slate-800 leading-relaxed font-medium">
              Outputs require human QA review before they influence batch disposition. TraceMetric does not independently release batches, make recall decisions or replace scientifically necessary physical testing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

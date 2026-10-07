import React from 'react';
import { AlertCircle, FileSpreadsheet, Binary, CheckCircle, ShieldCheck } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Identify the concern',
      description:
        'A quality team identifies an issue with a reference standard or another analytical input within the supported scope.',
      icon: AlertCircle,
    },
    {
      number: '2',
      title: 'Provide relevant records',
      description:
        'Relevant laboratory exports and supporting information are prepared for assessment.',
      icon: FileSpreadsheet,
    },
    {
      number: '3',
      title: 'Review affected results and evidence',
      description:
        'TraceMetric is intended to help identify the affected population and clarify what the available evidence supports.',
      icon: Binary,
    },
    {
      number: '4',
      title: 'Review prioritised findings',
      description:
        'The quality team examines assessment findings, missing evidence and investigation priorities.',
      icon: CheckCircle,
    },
    {
      number: '5',
      title: 'Complete QA-led follow-up',
      description:
        'Authorised laboratory personnel determine any confirmatory testing, investigation or other action through the organisation’s quality processes.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-16 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 mb-2.5 border border-slate-200">
            Assessment Workflow
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-heading tracking-tight leading-tight">
            From an analytical concern to a structured QA review.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-body leading-relaxed">
            A structured, non-destructive user journey designed around human oversight and defensible pharmaceutical quality investigations.
          </p>
        </div>

        {/* 5 Numbered Steps */}
        <div className="relative">
          {/* Subtle timeline connector for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-slate-200 -translate-y-8 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-background rounded-2xl p-5 sm:p-6 border border-border shadow-subtle hover:shadow-card hover:-translate-y-0.5 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200/60 text-brand-teal flex items-center justify-center font-bold text-sm">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md border border-slate-200">
                        Step 0{step.number}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-heading mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Essential Statement below steps */}
        <div className="mt-8 sm:mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-heading font-medium leading-relaxed">
            Human review remains essential at every stage. Final disposition approval may remain within the customer’s existing quality management system.
          </p>
        </div>
      </div>
    </section>
  );
};

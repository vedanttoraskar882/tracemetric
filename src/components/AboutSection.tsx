import React from 'react';
import { Layers, FileCheck, Compass, UserCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const benefits = [
    {
      title: 'Understand the affected population',
      description:
        'Identify historical tests, samples and batches potentially linked to an unreliable analytical input.',
      icon: Layers,
    },
    {
      title: 'Organise the evidence',
      description:
        'Support a structured review of available information and unresolved evidence gaps.',
      icon: FileCheck,
    },
    {
      title: 'Support QA-led follow-up',
      description:
        'Help quality teams prioritise investigation and confirmatory testing where scientifically justified.',
      icon: Compass,
    },
  ];

  const founders = [
    {
      name: 'Ajay Kumar Reddy Mandagiri',
      role: 'Co-founder',
      description:
        'Pharmaceutical postgraduate background, formulation research experience, manufacturing and quality-control training, and operational leadership experience.',
    },
    {
      name: 'Indhu Abavathi',
      role: 'Co-founder',
      description:
        'Pharmaceutical postgraduate background and QC analyst experience involving finished-product testing, analytical instruments, investigations and laboratory documentation.',
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 mb-2.5 border border-slate-200">
            About TraceMetric
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-heading tracking-tight leading-tight">
            A focused response to a complex laboratory investigation.
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-body leading-relaxed">
            <p>
              Pharmaceutical laboratories depend on reference standards, calibrated instruments and reagents when testing medicines. If one of these inputs is later found to be incorrect or unreliable, quality teams must investigate the impact on earlier tests and related batches.
            </p>
            <p>
              This work can involve reviewing records across laboratory and quality systems and assembling evidence for a defensible investigation.
            </p>
            <p className="font-semibold text-heading">
              TraceMetric is intended to support this retrospective assessment while preserving human responsibility for quality decisions.
            </p>
          </div>
        </div>

        {/* 3 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-background rounded-2xl p-6 border border-border shadow-subtle hover:shadow-card hover:-translate-y-0.5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-brand-teal mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Capability 0{index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-heading mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founding Team Subsection - Photo box removed as requested */}
        <div className="bg-background rounded-2xl p-6 sm:p-8 border border-border shadow-subtle">
          <div className="max-w-2xl mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-brand-teal mb-2 border border-teal-200/60">
              <UserCheck className="w-3.5 h-3.5" />
              Founding Team
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-heading">
              Domain experience in pharmaceutical sciences and laboratory QC
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-surface rounded-xl p-5 sm:p-6 border border-border shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h4 className="text-base sm:text-lg font-bold text-heading">
                      {founder.name}
                    </h4>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-brand-teal border border-teal-200/70">
                      {founder.role}
                    </span>
                  </div>
                  <p className="text-sm text-body leading-relaxed">
                    {founder.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

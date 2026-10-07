import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'What is TraceMetric?',
      answer:
        'TraceMetric stands for Analytical Measurement Impact Engine. It is a proposed decision-support platform intended to help pharmaceutical quality teams assess the impact of unreliable analytical inputs on historical laboratory results.',
    },
    {
      question: 'Who is TraceMetric designed for?',
      answer:
        'TraceMetric initially targets pharmaceutical manufacturers, CDMOs, independent testing laboratories, generic manufacturers and nutraceutical manufacturers operating to pharmaceutical quality standards. Intended users include QC, QA, validation and site-quality teams.',
    },
    {
      question: 'What is the initial use case?',
      answer:
        'The initial scope focuses on incorrect reference-standard potency assignments. Calibration failures, reagent recalls and broader impact-assessment scenarios are planned for later development.',
    },
    {
      question: 'Can every affected result be recalculated?',
      answer:
        'No. Numerical reassessment requires scientifically justified corrected inputs and adequate supporting evidence. Where that evidence is unavailable, investigation and evidence-gap review are required rather than invented corrected results.',
    },
    {
      question: 'Does TraceMetric replace physical retesting?',
      answer:
        'No. TraceMetric is intended to support investigations and help quality teams scope follow-up. Confirmatory retesting, resampling or method verification may still be required.',
    },
    {
      question: 'Does TraceMetric release batches or decide recalls?',
      answer:
        'No. Batch disposition, regulatory notification and recall decisions remain with the customer’s authorised quality organisation and, where applicable, its Qualified Person.',
    },
    {
      question: 'Does TraceMetric replace LIMS, CDS or QMS?',
      answer:
        'No. TraceMetric is intended to complement existing systems. Structured file exports are the initial integration approach, while direct API connectors are future scope.',
    },
    {
      question: 'Is TraceMetric already commercially validated?',
      answer:
        'The business plan describes a proposed venture and staged development programme. Laboratory validation and commercial proof remain planned milestones.',
    },
    {
      question: 'Are the displayed prices confirmed launch prices?',
      answer:
        'No. They are provisional mature-vendor reference ranges. Actual proposals will depend on scope, validation needs and commercial agreement. Early pilot arrangements may differ.',
    },
    {
      question: 'What happens when I submit the pilot form on this website?',
      answer:
        'Your entry is saved only in this browser’s local storage. It is not transmitted to TraceMetric and does not trigger an email or a contact request. Saved entries remain on this browser until its storage is cleared.',
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-16 bg-white border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 mb-2.5 border border-slate-200">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-heading tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-body">
            Clarifications on platform scope, human oversight, integration and commercial status.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className="border border-border rounded-xl overflow-hidden bg-background transition-all"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                  className="w-full px-5 py-4 text-left font-semibold text-heading flex items-center justify-between gap-4 hover:bg-slate-100/60 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal"
                >
                  <span className="text-sm sm:text-base font-bold">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-teal' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-body leading-relaxed border-t border-slate-200/60 animate-fadeIn"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

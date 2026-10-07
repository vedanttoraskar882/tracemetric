import React, { useEffect, useRef, useState } from 'react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { PilotRequestInput } from '../types';
import { saveAmiePilotRequest } from '../services/storage';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose, triggerRef }) => {
  const [formData, setFormData] = useState<PilotRequestInput>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof PilotRequestInput, string>>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Manage body scroll and focus when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus first input or close button
      const timer = setTimeout(() => {
        if (firstInputRef.current) {
          firstInputRef.current.focus();
        } else if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
        clearTimeout(timer);
        if (triggerRef?.current) {
          triggerRef.current.focus();
        }
      };
    }
  }, [isOpen, triggerRef]);

  // Trap focus & Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!modalRef.current) return;
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusableArray = Array.from(focusableElements).filter(
          (el) => !el.hasAttribute('disabled') && el.offsetParent !== null
        );

        if (focusableArray.length === 0) return;

        const firstElement = focusableArray[0];
        const lastElement = focusableArray[focusableArray.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (fieldErrors[name as keyof PilotRequestInput]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (generalError) {
      setGeneralError(null);
    }
  };

  const validate = (): boolean => {
    const errors: Partial<Record<keyof PilotRequestInput, string>> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required.';
    }
    if (!formData.emailAddress.trim()) {
      errors.emailAddress = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      errors.emailAddress = 'Please enter a valid email address.';
    }
    if (!formData.organisationName.trim()) {
      errors.organisationName = 'Organisation Name is required.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setGeneralError(null);
    setSuccessMessage(null);

    const isValid = validate();
    if (!isValid) {
      return;
    }

    setIsSubmitting(true);

    try {
      saveAmiePilotRequest(formData);
      // Show success only after localStorage.setItem succeeds
      setSuccessMessage('Your pilot request has been saved in this browser. It has not been sent to TraceMetric.');
      // Reset fields only after successful saving
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        organisationName: '',
      });
      setFieldErrors({});
    } catch (err: unknown) {
      // Keep fields populated if saving fails
      if (err instanceof Error) {
        setGeneralError(err.message);
      } else {
        setGeneralError('An unexpected error occurred while saving your request.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-hidden={!isOpen}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pilot-modal-title"
        className="relative w-full max-w-lg bg-surface rounded-2xl shadow-elevated border border-border p-5 sm:p-6 max-h-[92vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between pb-3.5 border-b border-border">
          <div>
            <h2 id="pilot-modal-title" className="text-xl sm:text-2xl font-bold text-heading">
              Request a Pilot
            </h2>
            <p className="text-xs sm:text-sm text-body mt-0.5">
              Connect with our team to explore proof-of-value laboratory participation.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-slate-400 hover:text-heading hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Region for Accessible Notifications */}
        <div aria-live="polite" className="mt-3">
          {successMessage && (
            <div className="p-3 mb-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs sm:text-sm flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-emerald-800">Request Saved</p>
                <p className="mt-0.5">{successMessage}</p>
              </div>
            </div>
          )}

          {generalError && (
            <div className="p-3 mb-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-rose-800">Error</p>
                <p className="mt-0.5">{generalError}</p>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-3.5 space-y-3.5">
          <div>
            <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-heading mb-1">
              Full Name <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              ref={firstInputRef}
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              autoComplete="name"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.fullName}
              aria-describedby={fieldErrors.fullName ? 'fullName-error' : undefined}
              className={`w-full px-3.5 py-2 bg-white border rounded-xl text-heading text-sm focus:outline-none focus:ring-2 transition-colors ${
                fieldErrors.fullName
                  ? 'border-rose-400 focus:ring-rose-200'
                  : 'border-border focus:border-brand-teal focus:ring-brand-teal/20'
              }`}
            />
            {fieldErrors.fullName && (
              <p id="fullName-error" className="mt-1 text-xs text-rose-600 font-medium">
                {fieldErrors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-xs sm:text-sm font-semibold text-heading mb-1">
              Phone Number <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              autoComplete="tel"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.phoneNumber}
              aria-describedby={fieldErrors.phoneNumber ? 'phoneNumber-error' : undefined}
              className={`w-full px-3.5 py-2 bg-white border rounded-xl text-heading text-sm focus:outline-none focus:ring-2 transition-colors ${
                fieldErrors.phoneNumber
                  ? 'border-rose-400 focus:ring-rose-200'
                  : 'border-border focus:border-brand-teal focus:ring-brand-teal/20'
              }`}
            />
            {fieldErrors.phoneNumber && (
              <p id="phoneNumber-error" className="mt-1 text-xs text-rose-600 font-medium">
                {fieldErrors.phoneNumber}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="emailAddress" className="block text-xs sm:text-sm font-semibold text-heading mb-1">
              Email Address <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              autoComplete="email"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.emailAddress}
              aria-describedby={fieldErrors.emailAddress ? 'emailAddress-error' : undefined}
              className={`w-full px-3.5 py-2 bg-white border rounded-xl text-heading text-sm focus:outline-none focus:ring-2 transition-colors ${
                fieldErrors.emailAddress
                  ? 'border-rose-400 focus:ring-rose-200'
                  : 'border-border focus:border-brand-teal focus:ring-brand-teal/20'
              }`}
            />
            {fieldErrors.emailAddress && (
              <p id="emailAddress-error" className="mt-1 text-xs text-rose-600 font-medium">
                {fieldErrors.emailAddress}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="organisationName" className="block text-xs sm:text-sm font-semibold text-heading mb-1">
              Organisation Name <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="organisationName"
              name="organisationName"
              value={formData.organisationName}
              onChange={handleChange}
              autoComplete="organization"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.organisationName}
              aria-describedby={fieldErrors.organisationName ? 'organisationName-error' : undefined}
              className={`w-full px-3.5 py-2 bg-white border rounded-xl text-heading text-sm focus:outline-none focus:ring-2 transition-colors ${
                fieldErrors.organisationName
                  ? 'border-rose-400 focus:ring-rose-200'
                  : 'border-border focus:border-brand-teal focus:ring-brand-teal/20'
              }`}
            />
            {fieldErrors.organisationName && (
              <p id="organisationName-error" className="mt-1 text-xs text-rose-600 font-medium">
                {fieldErrors.organisationName}
              </p>
            )}
          </div>

          <div className="pt-2">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4.5 py-2 rounded-xl border border-border text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                Close
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-brand-teal text-white hover:bg-brand-tealDark text-sm font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Saving...' : 'Save Pilot Request'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

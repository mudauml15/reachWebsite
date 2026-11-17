import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { ArrowRight, Check, X } from "lucide-react";

interface ApplyModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  ageRange: string;
  profile: string;
  goals: string;
}

const emptyForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  ageRange: "",
  profile: "",
  goals: "",
};

const ageRanges = ["18–24", "25–29", "30–35", "36 or older"];

const profiles = [
  "Young person looking for my first opportunity",
  "Woman returning to work",
  "Currently working and ready to grow",
  "Partner or organisation wanting to support REACH",
];

const fieldClass =
  "mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3.5 text-xs font-medium text-ink placeholder:font-medium placeholder:text-slate-400 focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20";
const labelClass = "block text-[11px] font-semibold text-ink/80";

export default function ApplyModal({ open, onClose }: ApplyModalProps) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    lastFocused.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      lastFocused.current?.focus();
    };
  }, [open, onClose]);

  // Reset the form each time the modal is closed.
  useEffect(() => {
    if (!open) {
      setForm(emptyForm);
      setSubmitting(false);
      setSubmitted(false);
    }
  }, [open]);

  if (!open) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // TODO: send `form` to your backend / form service here.
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-navy/70 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="apply-modal-title"
        className="relative my-auto w-full max-w-[540px] rounded-lg bg-cream p-6 shadow-2xl sm:p-10"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-slate-500 transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-coral"
        >
          <X size={20} />
        </button>

        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-coral text-lg font-bold text-white">
          R
        </span>

        <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.15em] text-coral">
          REACH programme
        </p>

        {submitted ? (
          <div className="py-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white">
              <Check size={22} />
            </span>
            <h2 id="apply-modal-title" className="mt-6 text-4xl font-normal tracking-tight text-ink">
              Thank you.
            </h2>
            <p className="mt-3 max-w-sm text-xs leading-6 text-slate-500">
              We’ve received your application. Our team will be in touch about the next programme intake.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2
              id="apply-modal-title"
              className="mt-5 text-4xl font-normal leading-tight tracking-tight text-ink"
            >
              Start your journey.
            </h2>
            <p className="mt-3 max-w-md text-xs leading-6 text-slate-500">
              Tell us a little about yourself and our team will be in touch about the next programme intake.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-x-4 gap-y-5 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className={labelClass}>Full name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>Phone number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="ageRange" className={labelClass}>Age range</label>
                <select
                  id="ageRange"
                  name="ageRange"
                  required
                  value={form.ageRange}
                  onChange={handleChange}
                  className={fieldClass}
                >
                  <option value="" disabled>Select one</option>
                  {ageRanges.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="profile" className={labelClass}>Which best describes you?</label>
                <select
                  id="profile"
                  name="profile"
                  required
                  value={form.profile}
                  onChange={handleChange}
                  className={fieldClass}
                >
                  <option value="" disabled>Select one</option>
                  {profiles.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="goals" className={labelClass}>What would you like to achieve through REACH?</label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={4}
                  placeholder="Tell us what you want to work towards"
                  value={form.goals}
                  onChange={handleChange}
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="sm:col-span-2 inline-flex items-center justify-center gap-3 rounded-md bg-coral px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-coral/30 transition-colors hover:bg-[#d95a41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral disabled:opacity-70"
              >
                {submitting ? "Submitting…" : "Submit my application"}
                {!submitting && <ArrowRight size={16} />}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

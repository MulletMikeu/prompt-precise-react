import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useForm } from '@formspree/react';
import { BUSINESS_INFO } from '@/lib/constants';
import { trackEvent } from '@/lib/analytics';

/**
 * The submission path shared by every estimate form on the site.
 *
 * Extracted from QuickQuoteForm in Ship L so the homepage's two-step
 * HeroQuoteForm could reuse it instead of growing a second copy: one Formspree
 * form, one set of spam controls, one conversion event. Anything that decides
 * what happens to a lead belongs here, not in a form's markup.
 */

/** The one Formspree form every estimate request goes to. */
export const FORMSPREE_FORM_ID = 'xkokzrjp';

/**
 * Spam controls. There were none before QuickQuoteForm added them — the form
 * relied entirely on Formspree's built-in filtering.
 *
 * `_gotcha` is Formspree's honeypot convention: a field no human can see, which
 * Formspree silently discards the submission for if it arrives filled. It is
 * positioned off-screen rather than `display: none` — the crawlers worth
 * catching skip anything explicitly hidden — and carries tabIndex={-1} plus
 * aria-hidden so keyboard and screen-reader users never reach it.
 *
 * MIN_FILL_MS is the second gate: a scripted POST fills and submits in
 * milliseconds, where a person typing a name, phone, address and service takes
 * seconds. Tripping it is recoverable, not fatal — a human who somehow beats the
 * clock gets a short "look it over and submit again" notice, and the second
 * attempt is always past the threshold. It fails OPEN: before the mount effect
 * runs (and during SSG prerender) the reference time is 0, which makes the
 * elapsed time enormous and lets the submit through.
 */
export const HONEYPOT_FIELD = '_gotcha';
export const MIN_FILL_MS = 2500;

export function validateName(name: string): string | undefined {
  return name.trim() ? undefined : 'Please enter your name.';
}

/* Phone is counted in digits rather than pattern-matched so that
   (618) 704-4861, 618-704-4861 and 6187044861 are all accepted and only a
   genuinely short number is rejected. */
export function validatePhone(phone: string): string | undefined {
  const value = phone.trim();
  if (!value) return 'Please enter a phone number so we can reach you.';
  if (value.replace(/\D/g, '').length < 10) {
    return 'Please enter a complete phone number, including area code.';
  }
  return undefined;
}

/**
 * Honeypot markup. Off-screen rather than hidden, unreachable by tab, and
 * invisible to screen readers. Never `required`: a human must be able to submit
 * with it empty. `idPrefix` keeps the id unique if two forms share a page.
 */
export function Honeypot({ idPrefix }: { idPrefix: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 1,
        height: 1,
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)',
        whiteSpace: 'nowrap',
      }}
    >
      <label htmlFor={`${idPrefix}-gotcha`}>Leave this field empty</label>
      <input
        id={`${idPrefix}-gotcha`}
        type="text"
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}

/**
 * The implied-consent line for the calls and texts a phone number is collected
 * for. One definition so every form says it identically. The JSX shape (text,
 * interpolated name, text) is deliberate and must not be collapsed into one
 * template literal: QuickQuoteForm's prerendered HTML on 24 pages is
 * byte-identical to what it was before this was extracted.
 */
export function PhoneConsentLine({ id, className }: { id: string; className: string }) {
  return (
    <p id={id} className={className}>
      By submitting, you agree to receive service-related calls and texts
      about your request from {BUSINESS_INFO.name}. Reply STOP anytime to opt out.
    </p>
  );
}

/**
 * Formspree state plus the timing gate and the conversion event.
 *
 * `submit(event)` is the only way a form should hand an event to Formspree: it
 * applies MIN_FILL_MS first. Field validation stays with each form, because
 * each asks for different fields — call `submit` only once they are clean.
 *
 * The conversion fires on the SUCCESS state rather than on submit, so it only
 * counts submissions Formspree actually accepted — a network failure or a
 * server-side rejection must not look like a lead. `state.succeeded` goes
 * false -> true exactly once, so this cannot double-count. No-ops unless
 * VITE_GA_MEASUREMENT_ID is set; queues if gtag.js is still loading.
 */
export function useQuoteSubmission({ source, formId }: { source?: string; formId: string }) {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  // Set on mount, so it measures how long the visitor has had the form open.
  // Stays 0 through SSG prerender and the first client render — see MIN_FILL_MS.
  const openedAt = useRef(0);
  const [tooFast, setTooFast] = useState(false);

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (!state.succeeded) return;
    trackEvent('generate_lead', {
      form_source: source ?? 'unknown',
      form_id: formId,
    });
  }, [state.succeeded, source, formId]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    if (Date.now() - openedAt.current < MIN_FILL_MS) {
      event.preventDefault();
      setTooFast(true);
      return;
    }
    setTooFast(false);
    handleSubmit(event);
  };

  return { state, submit, tooFast, setTooFast };
}

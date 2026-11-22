import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ValidationError } from '@formspree/react';
import { BUSINESS } from '../data/siteData';
import {
  Honeypot,
  PhoneConsentLine,
  useQuoteSubmission,
  validateName,
  validatePhone,
} from './sections/quoteFormCore';

/**
 * Homepage two-step estimate form (Ship L).
 *
 * The submission path is QuickQuoteForm's, shared through ./sections/quoteFormCore:
 * the same Formspree form, honeypot, MIN_FILL_MS gate, implied-consent line and
 * generate_lead event. Only the questions and the layout are new.
 *
 * Both steps live in ONE <form>. Step 1 is only `hidden`, never unmounted, so
 * its radios and select still submit with step 2, and "Back" finds every answer
 * where the visitor left it. Step 1 has no text input, so pressing Enter there
 * cannot submit the form by accident. onSubmit still re-checks step 1 in case it
 * is somehow reached.
 *
 * Choices are native radios styled as chips (.hq-chip in index.css). That gives
 * keyboard behaviour for free (Tab into a group, arrows between options), a
 * <fieldset>/<legend> per question, and nothing to hand-roll for screen readers.
 */

const FORM_SOURCE = 'home-hero';

const QUESTIONS = {
  emergency: { legend: 'Is this an emergency?', options: ['Yes', 'No'] },
  service: {
    legend: 'How can we help?',
    options: ['Tree removal', 'Tree trimming', 'Stump grinding', 'Storm or emergency', 'Something else'],
  },
  tree_count: { legend: 'How many trees or stumps?', options: ['1', '2–3', '4+', 'Not sure'] },
  timeline: { legend: 'How soon?', options: ['This week', 'This month', 'Just getting prices'] },
} as const;

const TOWNS = [
  'Jacksonville',
  'Hubert',
  'Richlands',
  'Swansboro',
  'Sneads Ferry',
  'Camp Lejeune',
  'Maysville',
  'Beulaville',
  'Holly Ridge',
  'Surf City',
  'Somewhere else',
] as const;

type Field = 'service' | 'town' | 'name' | 'phone';
type Errors = Partial<Record<Field, string>>;

const STEP1_REQUIRED: Field[] = ['service', 'town'];
const STEP2_REQUIRED: Field[] = ['name', 'phone'];

function validateStep1(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.get('service')) errors.service = 'Please choose how we can help.';
  if (!data.get('town')) errors.town = 'Please choose your town.';
  return errors;
}

function validateStep2(data: FormData): Errors {
  const errors: Errors = {};
  const nameError = validateName(String(data.get('name') ?? ''));
  if (nameError) errors.name = nameError;
  const phoneError = validatePhone(String(data.get('phone') ?? ''));
  if (phoneError) errors.phone = phoneError;
  return errors;
}

function ChipGroup({
  name,
  legend,
  options,
  required = false,
  error,
  onPick,
}: {
  name: string;
  legend: string;
  options: readonly string[];
  required?: boolean;
  error?: string;
  onPick?: (value: string) => void;
}) {
  const errorId = `hq-${name}-error`;
  return (
    <fieldset className="hq-group" aria-describedby={error ? errorId : undefined}>
      <legend className="hq-legend">
        {legend}
        {required ? <span className="hq-req"> *</span> : <span className="hq-opt"> (optional)</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="hq-chip-label">
            <input
              type="radio"
              name={name}
              value={option}
              className="hq-chip-input"
              onChange={() => onPick?.(option)}
            />
            <span className="hq-chip">{option}</span>
          </label>
        ))}
      </div>
      {error && (
        <p id={errorId} role="alert" className="hq-error">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export default function HeroQuoteForm() {
  const { state, submit, tooFast, setTooFast } = useQuoteSubmission({
    source: FORM_SOURCE,
    formId: 'hero-quote',
  });
  const [step, setStep] = useState<1 | 2>(1);
  const [emergency, setEmergency] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);
  // Skip the focus move on first render: the form must not steal focus on load.
  const stepChanged = useRef(false);

  useEffect(() => {
    if (!stepChanged.current) return;
    const target = step === 2 ? '#hq-name' : '#hq-step-label';
    formRef.current?.querySelector<HTMLElement>(target)?.focus();
  }, [step]);

  const focusFirst = (fields: Field[], found: Errors) => {
    const first = fields.find((f) => found[f]);
    if (!first) return;
    const selector = first === 'service' ? 'input[name="service"]' : `#hq-${first}`;
    formRef.current?.querySelector<HTMLElement>(selector)?.focus();
  };

  const goNext = () => {
    const form = formRef.current;
    if (!form) return;
    const found = validateStep1(new FormData(form));
    setErrors(found);
    if (Object.keys(found).length) {
      focusFirst(STEP1_REQUIRED, found);
      return;
    }
    stepChanged.current = true;
    setStep(2);
  };

  const goBack = () => {
    stepChanged.current = true;
    setTooFast(false);
    setStep(1);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    if (step === 1) {
      event.preventDefault();
      goNext();
      return;
    }
    const step1 = validateStep1(data);
    if (Object.keys(step1).length) {
      event.preventDefault();
      setErrors(step1);
      stepChanged.current = true;
      setStep(1);
      return;
    }
    const found = validateStep2(data);
    setErrors(found);
    if (Object.keys(found).length) {
      event.preventDefault();
      setTooFast(false);
      focusFirst(STEP2_REQUIRED, found);
      return;
    }
    submit(event);
  };

  // Clears a message as soon as the visitor fixes the field, but only for
  // fields that already showed one.
  const onChange = (event: FormEvent<HTMLFormElement>) => {
    if (!Object.keys(errors).length) return;
    const data = new FormData(event.currentTarget);
    const next = step === 1 ? validateStep1(data) : validateStep2(data);
    setErrors((prev) => {
      const kept: Errors = {};
      for (const key of Object.keys(prev) as Field[]) if (next[key]) kept[key] = next[key];
      return kept;
    });
  };

  const callLink = (
    <a href={BUSINESS.phoneHref} className="hq-tel">
      {BUSINESS.phone}
    </a>
  );

  return (
    <div className="hq-wrap">
      {/* id: the scroll target for HomeLocal's "Schedule with Mike Today". */}
      <div id="estimate" className="hq-card">
        {/* Outside the step containers, so it is the first line on step 1,
            step 2 and the success message alike. */}
        <p className="hq-proof">
          {`${BUSINESS.jobsCompleted} jobs completed in ${BUSINESS.county} since ${BUSINESS.founded}`}
        </p>
        {state.succeeded ? (
          <div className="hq-success" role="status">
            <h2 className="hq-title">Got it — Michael or James will call you shortly.</h2>
            <p className="hq-success-call">
              Need us now? {callLink}.
            </p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={onSubmit} onChange={onChange} noValidate>
            <input type="hidden" name="page-source" value={FORM_SOURCE} />
            <Honeypot idPrefix="hq" />

            <div className="hq-head">
              <h2 className="hq-title">Get my free estimate</h2>
              <p
                id="hq-step-label"
                className="hq-step"
                tabIndex={-1}
              >
                Step {step} of 2
              </p>
            </div>

            <div hidden={step !== 1} className="hq-step1">
              {/* Order is the spec's: the two required questions first, then the
                  optional ones. 2 columns from 768px: service spans both, then
                  town | emergency, then timeline | tree count. */}
              <div className="hq-grid">
                <div className="hq-span-2">
                  <ChipGroup
                    name="service"
                    legend={QUESTIONS.service.legend}
                    options={QUESTIONS.service.options}
                    required
                    error={errors.service}
                  />
                </div>
                <div className="hq-group">
                  <label htmlFor="hq-town" className="hq-legend">
                    Which town?<span className="hq-req"> *</span>
                  </label>
                  <select
                    id="hq-town"
                    name="town"
                    defaultValue=""
                    aria-invalid={errors.town ? true : undefined}
                    aria-describedby={errors.town ? 'hq-town-error' : undefined}
                    className="hq-input"
                  >
                    <option value="" disabled>
                      Choose your town…
                    </option>
                    {TOWNS.map((town) => (
                      <option key={town} value={town}>
                        {town}
                      </option>
                    ))}
                  </select>
                  {errors.town && (
                    <p id="hq-town-error" role="alert" className="hq-error">
                      {errors.town}
                    </p>
                  )}
                </div>
                <ChipGroup
                  name="emergency"
                  legend={QUESTIONS.emergency.legend}
                  options={QUESTIONS.emergency.options}
                  onPick={setEmergency}
                />
                <ChipGroup
                  name="timeline"
                  legend={QUESTIONS.timeline.legend}
                  options={QUESTIONS.timeline.options}
                />
                <ChipGroup
                  name="tree_count"
                  legend={QUESTIONS.tree_count.legend}
                  options={QUESTIONS.tree_count.options}
                />
              </div>

              <div className="hq-actions">
                {emergency === 'Yes' && (
                  <p className="hq-emergency">
                    Tree on a house or blocking a road? Call now — {callLink}
                  </p>
                )}
                <button type="button" onClick={goNext} className="btn-primary hq-next">
                  Next
                </button>
              </div>
            </div>

            <div hidden={step !== 2} className="hq-step2">
              <div className="hq-grid">
                <div className="hq-group">
                  <label htmlFor="hq-name" className="hq-legend">
                    Name<span className="hq-req"> *</span>
                  </label>
                  <input
                    id="hq-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    maxLength={100}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? 'hq-name-error' : undefined}
                    className="hq-input"
                  />
                  {errors.name ? (
                    <p id="hq-name-error" role="alert" className="hq-error">{errors.name}</p>
                  ) : (
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="hq-error" />
                  )}
                </div>
                <div className="hq-group">
                  <label htmlFor="hq-phone" className="hq-legend">
                    Phone<span className="hq-req"> *</span>
                  </label>
                  <input
                    id="hq-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    maxLength={20}
                    aria-invalid={errors.phone ? true : undefined}
                    aria-describedby={errors.phone ? 'hq-phone-error hq-phone-consent' : 'hq-phone-consent'}
                    className="hq-input"
                  />
                  {errors.phone ? (
                    <p id="hq-phone-error" role="alert" className="hq-error">{errors.phone}</p>
                  ) : (
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="hq-error" />
                  )}
                </div>
                <div className="hq-group">
                  <label htmlFor="hq-address" className="hq-legend">
                    Street address<span className="hq-opt"> (optional)</span>
                  </label>
                  <input
                    id="hq-address"
                    type="text"
                    name="address"
                    autoComplete="street-address"
                    maxLength={200}
                    className="hq-input"
                  />
                </div>
                <div className="hq-group">
                  <label htmlFor="hq-message" className="hq-legend">
                    Anything we should know?<span className="hq-opt"> (optional)</span>
                  </label>
                  <textarea
                    id="hq-message"
                    name="message"
                    rows={2}
                    maxLength={1000}
                    className="hq-input hq-textarea"
                  />
                </div>
              </div>

              <PhoneConsentLine id="hq-phone-consent" className="hq-consent" />

              {tooFast && (
                <p role="alert" className="hq-error">
                  Give your details a quick look and press the button once more — we
                  want to be sure we got them right.
                </p>
              )}
              <ValidationError errors={state.errors} className="hq-error" />

              <div className="hq-actions hq-actions-2">
                <button type="button" onClick={goBack} className="hq-back">
                  Back
                </button>
                <button type="submit" disabled={state.submitting} className="btn-primary hq-next">
                  {state.submitting ? 'Sending…' : 'Get My Free Estimate'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
      <p className="hq-under">
        Or call {callLink} — we answer 24/7. Free estimate either way.
      </p>
    </div>
  );
}

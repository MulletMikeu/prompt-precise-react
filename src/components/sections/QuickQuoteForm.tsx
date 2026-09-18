import { useState, type FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { BUSINESS_INFO } from '@/lib/constants';
import { BUSINESS } from '@/data/siteData';

interface QuickQuoteFormProps {
  /** Optional source identifier sent to Formspree (e.g. page slug) */
  source?: string;
  /** Optional pre-filled service value for the dropdown */
  defaultService?: string;
  /** Background color variant */
  variant?: 'light' | 'dark';
  /**
   * Express written consent UI: per-channel SMS checkboxes and the full
   * messaging disclosure, in place of the one-line implied-consent note.
   * Off everywhere but /contact, which is the page carriers review.
   */
  fullOptIn?: boolean;
}

/* Every submission records all three answers explicitly, including the ones
   left unchecked: an unchecked box submits nothing at all, so "no answer" and
   "declined" would be indistinguishable in Formspree. Hidden inputs mirror the
   checkbox state as yes/no, which makes the consent record per-submission
   evidence rather than an inference from a missing key. */
const SMS_FIELDS = {
  customerCare: 'sms_customer_care',
  marketing: 'sms_marketing',
  decline: 'sms_decline',
} as const;

type SmsConsent = { customerCare: boolean; marketing: boolean; decline: boolean };

const NO_SMS_CONSENT: SmsConsent = { customerCare: false, marketing: false, decline: false };

/** Fields we validate, in DOM order — the order decides which one gets focus
    when a submit is rejected. `message` is optional and never validated. */
const REQUIRED_FIELDS = ['name', 'phone', 'address', 'service'] as const;
type RequiredField = (typeof REQUIRED_FIELDS)[number];
type Errors = Partial<Record<RequiredField, string>>;

/* The form is noValidate, so nothing here duplicates a native check — without
   this the browser stays silent and the first feedback on an empty or
   mistyped field is a Formspree round-trip. Phone is counted in digits rather
   than pattern-matched so that (618) 704-4861, 618-704-4861 and 6187044861 are
   all accepted and only a genuinely short number is rejected. */
function validate(data: FormData): Errors {
  const errors: Errors = {};
  const value = (field: string) => String(data.get(field) ?? '').trim();

  if (!value('name')) errors.name = 'Please enter your name.';

  const phone = value('phone');
  if (!phone) {
    errors.phone = 'Please enter a phone number so we can reach you.';
  } else if (phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Please enter a complete phone number, including area code.';
  }

  if (!value('address')) errors.address = 'Please enter the service address.';
  if (!value('service')) errors.service = 'Please choose the service you need.';

  return errors;
}

export function QuickQuoteForm({ source, defaultService, variant = 'dark', fullOptIn = false }: QuickQuoteFormProps) {
  const [state, handleSubmit] = useForm('xkokzrjp');
  const [errors, setErrors] = useState<Errors>({});
  // Stays false until the first submit attempt so we don't flag fields the
  // visitor has not reached yet; after that, edits re-check on every change.
  const [submitted, setSubmitted] = useState(false);
  // Never validated and never required: consent is not a condition of purchase,
  // so leaving all three boxes alone is a valid, submittable state.
  const [smsConsent, setSmsConsent] = useState<SmsConsent>(NO_SMS_CONSENT);

  // The two Yes boxes and the No box are contradictory answers to one question,
  // so each side clears the other. They are checkboxes rather than radios on
  // purpose: the Yes options are independently selectable (either channel, both,
  // or neither), which a radio group cannot express.
  const toggleConsent = (key: keyof SmsConsent) => (event: { target: { checked: boolean } }) => {
    const checked = event.target.checked;
    setSmsConsent((prev) =>
      key === 'decline'
        ? { customerCare: false, marketing: false, decline: checked }
        : { ...prev, [key]: checked, decline: false },
    );
  };

  // True when Formspree has returned a validation error for the given field,
  // used to drive aria-invalid so screen readers announce the bad field.
  const hasError = (field: string) =>
    (state.errors?.getFieldErrors?.(field) ?? []).length > 0;

  const isInvalid = (field: string) =>
    Boolean(errors[field as RequiredField]) || hasError(field);

  // Only point at the error node when one is actually rendered — otherwise
  // aria-describedby is a dangling reference to an element that isn't there.
  // Phone additionally carries the always-present consent line: it is a legal
  // disclosure about what submitting signs you up for, so a screen reader
  // reaching the field by tab must hear it, not just a sighted visitor. Error
  // first when there is one, so the actionable message leads. Under fullOptIn
  // that line is gone and the disclosure hangs off the checkbox group instead,
  // so there is nothing to reference here.
  const describedBy = (field: string) => {
    const ids: string[] = [];
    if (isInvalid(field)) ids.push(`qq-${field}-error`);
    if (field === 'phone' && !fullOptIn) ids.push('qq-phone-consent');
    return ids.length > 0 ? ids.join(' ') : undefined;
  };

  // One error slot per field: our message when we have one, else whatever
  // Formspree returned. Only ever one element, so the id stays unique.
  const renderError = (field: string, label: string) => {
    const clientError = errors[field as RequiredField];
    if (clientError) {
      return (
        <p id={`qq-${field}-error`} role="alert" className="text-red-600 text-sm mt-1">
          {clientError}
        </p>
      );
    }
    return (
      <ValidationError
        id={`qq-${field}-error`}
        prefix={label}
        field={field}
        errors={state.errors}
        className="text-red-600 text-sm mt-1"
      />
    );
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const found = validate(new FormData(form));
    setSubmitted(true);
    setErrors(found);

    const firstInvalid = REQUIRED_FIELDS.find((field) => found[field]);
    if (firstInvalid) {
      // Nothing reaches the network until the form is clean.
      event.preventDefault();
      form.querySelector<HTMLElement>(`#qq-${firstInvalid}`)?.focus();
      return;
    }

    handleSubmit(event);
  };

  // Form-level so one handler covers every control: clears each message as
  // soon as the visitor fixes it, but only once they've tried to submit.
  const onChange = (event: FormEvent<HTMLFormElement>) => {
    if (!submitted) return;
    setErrors(validate(new FormData(event.currentTarget)));
  };

  const isDark = variant === 'dark';
  const sectionBg = isDark ? 'bg-gray-950 border-t border-gray-800' : 'bg-gray-50';
  const headingColor = isDark ? 'text-white' : 'text-black';
  const trustColor = isDark ? 'text-gray-300' : 'text-gray-600';

  return (
    <section id="quote-form" className={`py-16 ${sectionBg}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-3 ${headingColor}`}>
              Get a Fast Quote
            </h2>
            <p className={`text-lg ${trustColor}`}>
              Fast response. Fair pricing. No obligation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-2xl border-2 border-gray-200 p-6 md:p-8">
            {state.succeeded ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  Thank you, we'll contact you shortly.
                </h3>
                <p className="text-gray-600 mb-6">
                  For immediate assistance or emergencies, call us 24/7.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phone.tel}`}
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
                >
                  📞 Call Now: {BUSINESS_INFO.phone.display}
                </a>
              </div>
            ) : (
              <>
              <form onSubmit={onSubmit} onChange={onChange} className="space-y-4" noValidate>
                {source && <input type="hidden" name="page-source" value={source} />}

                <p className="text-sm text-gray-500">
                  Fields marked <span className="text-red-600">*</span> are required.
                </p>

                <div>
                  <label htmlFor="qq-name" className="block text-sm font-bold text-gray-700 mb-1.5">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="qq-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    maxLength={100}
                    aria-invalid={isInvalid('name') || undefined}
                    aria-describedby={describedBy('name')}
                    className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                  {renderError('name', 'Name')}
                </div>

                <div>
                  <label htmlFor="qq-phone" className="block text-sm font-bold text-gray-700 mb-1.5">
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="qq-phone"
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    maxLength={20}
                    aria-invalid={isInvalid('phone') || undefined}
                    aria-describedby={describedBy('phone')}
                    className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="(555) 555-5555"
                  />
                  {renderError('phone', 'Phone')}
                  {/* Consent disclosure for the calls/texts the phone number is
                      collected for. Muted `text-sm text-gray-500`, the same
                      treatment as the "Fields marked * are required" note and
                      the call-us line, so it reads as fine print rather than as
                      another field. Sits below the error slot so a validation
                      message stays adjacent to the input it concerns.

                      Suppressed under fullOptIn, and not merely supplemented:
                      "By submitting, you agree to receive … texts" asserts
                      consent by submission, which directly contradicts an
                      unchecked "No, I do not want to receive any text
                      messages" sitting inches below it. Express consent has to
                      be the only claim on the page for the checkbox record to
                      mean anything. */}
                  {!fullOptIn && (
                    <p id="qq-phone-consent" className="text-sm text-gray-500 mt-2">
                      By submitting, you agree to receive service-related calls and texts
                      about your request from {BUSINESS_INFO.name}. Reply STOP anytime to opt out.
                    </p>
                  )}
                </div>

                {fullOptIn && (
                  <fieldset
                    className="border-2 border-gray-200 rounded-lg p-4"
                    aria-describedby="qq-sms-disclosure"
                  >
                    <legend className="text-sm font-bold text-gray-700 px-1">
                      Text messages <span className="text-gray-500 font-normal">(optional)</span>
                    </legend>
                    {/* Hidden mirrors, not `name` on the checkboxes themselves:
                        a checkbox contributes nothing to FormData when
                        unchecked, so all three keys would vanish exactly when
                        the answer matters most. */}
                    <input type="hidden" name={SMS_FIELDS.customerCare} value={smsConsent.customerCare ? 'yes' : 'no'} />
                    <input type="hidden" name={SMS_FIELDS.marketing} value={smsConsent.marketing ? 'yes' : 'no'} />
                    <input type="hidden" name={SMS_FIELDS.decline} value={smsConsent.decline ? 'yes' : 'no'} />

                    <div className="flex flex-col gap-3 mt-1">
                      <label htmlFor="qq-sms-customer-care" className="flex items-start gap-3 text-base text-gray-700">
                        <input
                          id="qq-sms-customer-care"
                          type="checkbox"
                          checked={smsConsent.customerCare}
                          onChange={toggleConsent('customerCare')}
                          className="mt-1 h-5 w-5 flex-shrink-0 accent-red-600"
                        />
                        <span>{`Yes, I consent to receive customer care text messages from ${BUSINESS.shortName}`}</span>
                      </label>

                      <label htmlFor="qq-sms-marketing" className="flex items-start gap-3 text-base text-gray-700">
                        <input
                          id="qq-sms-marketing"
                          type="checkbox"
                          checked={smsConsent.marketing}
                          onChange={toggleConsent('marketing')}
                          className="mt-1 h-5 w-5 flex-shrink-0 accent-red-600"
                        />
                        <span>{`Yes, I consent to receive marketing text messages from ${BUSINESS.shortName}`}</span>
                      </label>

                      <label htmlFor="qq-sms-decline" className="flex items-start gap-3 text-base text-gray-700">
                        <input
                          id="qq-sms-decline"
                          type="checkbox"
                          checked={smsConsent.decline}
                          onChange={toggleConsent('decline')}
                          className="mt-1 h-5 w-5 flex-shrink-0 accent-red-600"
                        />
                        <span>{`No, I do not want to receive any text messages from ${BUSINESS.shortName}`}</span>
                      </label>
                    </div>
                  </fieldset>
                )}

                <div>
                  <label htmlFor="qq-address" className="block text-sm font-bold text-gray-700 mb-1.5">
                    Service Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="qq-address"
                    type="text"
                    name="address"
                    required
                    autoComplete="street-address"
                    maxLength={200}
                    aria-invalid={isInvalid('address') || undefined}
                    aria-describedby={describedBy('address')}
                    className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="Street, City, NC"
                  />
                  {renderError('address', 'Address')}
                </div>

                <div>
                  <label htmlFor="qq-service" className="block text-sm font-bold text-gray-700 mb-1.5">
                    Service Needed <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="qq-service"
                    name="service"
                    required
                    defaultValue={defaultService ?? ''}
                    aria-invalid={isInvalid('service') || undefined}
                    aria-describedby={describedBy('service')}
                    className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors bg-white"
                  >
                    <option value="" disabled>Select a service…</option>
                    <option value="Tree Removal">Tree Removal</option>
                    <option value="Tree Trimming">Tree Trimming</option>
                    <option value="Stump Grinding">Stump Grinding</option>
                    <option value="Emergency Tree Service">Emergency Tree Service</option>
                  </select>
                  {renderError('service', 'Service')}
                </div>

                <div>
                  <label htmlFor="qq-message" className="block text-sm font-bold text-gray-700 mb-1.5">
                    Message <span className="text-gray-500 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="qq-message"
                    name="message"
                    rows={3}
                    maxLength={1000}
                    aria-invalid={isInvalid('message') || undefined}
                    aria-describedby={describedBy('message')}
                    className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your tree (size, location, urgency)…"
                  />
                  {renderError('message', 'Message')}
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                >
                  {state.submitting ? 'Sending…' : 'Get a Fast Quote'}
                </button>

                <p className="text-center text-sm text-gray-500">
                  Or call us 24/7:{' '}
                  <a href={`tel:${BUSINESS_INFO.phone.tel}`} className="text-red-600 font-bold hover:underline">
                    {BUSINESS_INFO.phone.display}
                  </a>
                </p>
              </form>

              {/* One template literal, not JSX text around {BUSINESS.legalName}:
                  React SSR splits interpolated JSX text into separate nodes and
                  injects <!-- --> between them, which breaks an exact-string
                  fetch of this disclosure by a carrier reviewer. The URLs are
                  plain text rather than links for the same reason — an anchor
                  would cut the sentence in two in the prerendered HTML. */}
              {fullOptIn && (
                <p id="qq-sms-disclosure" className="text-sm text-gray-500 leading-relaxed mt-6">
                  {`${BUSINESS.legalName} (doing business as ${BUSINESS.shortName}) would like your consent to send customer care and/or marketing text message communications to the mobile number listed above. Customer care messages may include responses to messages you send us, as well as information relevant to your relationship with us. Marketing messages may include discount codes, special deals or texts promoting our services. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply 'STOP' to unsubscribe at any time. Reply 'HELP' for assistance or more information. We do not share your mobile opt-in information with anyone. Our Privacy Policy is available at https://godhans.com/privacy-policy and our Messaging Terms and Conditions at https://godhans.com/terms-of-service.`}
                </p>
              )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

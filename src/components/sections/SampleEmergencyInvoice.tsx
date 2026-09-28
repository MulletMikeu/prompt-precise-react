import { Link } from 'react-router-dom';
import { EMERGENCY_INVOICES, EMERGENCY_INVOICE_CAVEAT } from '@/data/ownerContent';

/**
 * "Sample emergency invoice (anonymized)" on the emergency page.
 *
 * Renders nothing while EMERGENCY_INVOICES is empty.
 *
 * Each invoice is split into mitigation and haul-away because that split is the
 * most useful thing a homeowner can take from one of these bills — the small
 * tree-debris sublimit generally bites on Section B, not Section A. The note on
 * each section says so in plain English and the page links out to the full
 * explanation rather than restating it here.
 *
 * Markup is a real <table> at every width; src/index.css restacks it below
 * 640px into labelled blocks, so nothing scrolls sideways on a phone and the
 * semantics stay identical for assistive tech. The wrapper keeps `overflow-x`
 * contained on the off chance a long description forces it on a narrow desktop
 * window — the page body never scrolls horizontally either way.
 */
export default function SampleEmergencyInvoice() {
  if (EMERGENCY_INVOICES.length === 0) return null;

  return (
    <section
      id="sample-invoice"
      className="py-16 bg-black border-t border-gray-800"
      aria-labelledby="sample-invoice-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2
          id="sample-invoice-heading"
          className="text-2xl sm:text-3xl font-bold text-white mb-4"
        >
          Sample Emergency Invoices
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Two real jobs, with the customer, address and claim details removed. The line
          items are the point: this is where the money on an emergency call actually goes.
        </p>

        {EMERGENCY_INVOICES.map((invoice, idx) => (
          <article
            key={invoice.context}
            className={idx > 0 ? 'mt-12 pt-10 border-t border-gray-800' : ''}
          >
            <h3 className="text-white font-bold text-lg mb-6 leading-snug">
              {invoice.context}
            </h3>

            {invoice.sections.map((section) => (
              <div key={section.title} className="mb-8">
                <h4 className="text-white font-semibold text-base mb-1">{section.title}</h4>
                {section.note && (
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{section.note}</p>
                )}
                <div style={{ overflowX: 'auto' }}>
                  <table className="invoice">
                    <caption className="sr-only">
                      {section.title} — {invoice.context}
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Description</th>
                        <th scope="col" className="inv-num">Qty</th>
                        <th scope="col" className="inv-num">Rate</th>
                        <th scope="col" className="inv-num">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row) => (
                        <tr key={row.description}>
                          <td className="inv-desc">{row.description}</td>
                          <td className="inv-num" data-label="Qty">{row.qty}</td>
                          <td className="inv-num" data-label="Rate">{row.rate}</td>
                          <td className="inv-num" data-label="Amount">{row.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th scope="row" colSpan={3}>{section.title.split('—')[0].trim()} subtotal</th>
                        <td className="inv-num" data-label="Subtotal">{section.subtotal}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            ))}

            <p className="text-white font-bold text-lg flex justify-between gap-4 border-t-2 border-gray-700 pt-4">
              <span>Total billed to insurance</span>
              <span className="tabular-nums">{invoice.total}</span>
            </p>
          </article>
        ))}

        {EMERGENCY_INVOICE_CAVEAT && (
          <p className="text-gray-300 text-base leading-relaxed mt-10 border-l-4 border-red-600 pl-4">
            {EMERGENCY_INVOICE_CAVEAT}
          </p>
        )}

        <p className="mt-6">
          <Link
            to="/storm-cleanup-jacksonville-nc"
            className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
          >
            How insurance handles tree removal →
          </Link>
        </p>
      </div>
    </section>
  );
}

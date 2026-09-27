import {
  EMERGENCY_INVOICE,
  EMERGENCY_INVOICE_CONTEXT,
  EMERGENCY_INVOICE_TOTAL,
} from '@/data/ownerContent';

/**
 * "Sample emergency invoice (anonymized)" on the emergency page.
 *
 * Renders NOTHING until EMERGENCY_INVOICE has real redacted line items in it.
 * That is deliberate: an emergency invoice is the single most persuasive thing
 * this page could carry, and a made-up one would be worse than none at all.
 * Fill the array in src/data/ownerContent.ts and this appears on the next build.
 */
export default function SampleEmergencyInvoice() {
  if (EMERGENCY_INVOICE.length === 0) return null;

  return (
    <section id="sample-invoice" className="py-16 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Sample Emergency Invoice
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A real tree-on-structure invoice with the customer, address, claim number and
          adjuster removed. The line items are the point: this is where the money on an
          emergency call actually goes.
        </p>
        {EMERGENCY_INVOICE_CONTEXT && (
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            {EMERGENCY_INVOICE_CONTEXT}
          </p>
        )}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <caption className="sr-only">
              Redacted line items from an emergency tree removal invoice
            </caption>
            <thead>
              <tr>
                <th scope="col" className="text-white font-bold text-base pb-3 border-b border-gray-700">
                  Line item
                </th>
                <th scope="col" className="text-white font-bold text-base pb-3 border-b border-gray-700 text-right">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {EMERGENCY_INVOICE.map((line) => (
                <tr key={line.description}>
                  <td className="text-gray-300 text-base py-3 pr-4 border-b border-gray-800">
                    {line.description}
                  </td>
                  <td className="text-gray-300 text-base py-3 border-b border-gray-800 text-right whitespace-nowrap">
                    {line.amount}
                  </td>
                </tr>
              ))}
            </tbody>
            {EMERGENCY_INVOICE_TOTAL && (
              <tfoot>
                <tr>
                  <th scope="row" className="text-white font-bold text-base pt-4 pr-4">
                    Total
                  </th>
                  <td className="text-white font-bold text-base pt-4 text-right whitespace-nowrap">
                    {EMERGENCY_INVOICE_TOTAL}
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>
    </section>
  );
}

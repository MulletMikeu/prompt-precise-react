import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQ_ITEMS = [
  {
    question: "How much does tree removal cost in Jacksonville, NC?",
    answer:
      "Tree removal in Jacksonville typically ranges from $300 to $2,500+ depending on tree size, location, accessibility, and proximity to structures or power lines. Small trees under 30ft start around $300, mid-size trees run $500–$1,200, and large pines or oaks over 60ft can range from $1,200 to $2,500+. Godhans Tree Company offers free, no-obligation on-site estimates with transparent pricing.",
  },
  {
    question: "Do I need a permit to remove a tree in Jacksonville, NC?",
    answer:
      "On most private residential property in Jacksonville and Onslow County, you do not need a permit to remove a tree. Permits may be required for protected species, trees in city right-of-way, or properties under HOA or commercial zoning rules. We help homeowners verify local requirements before any removal begins.",
  },
  {
    question: "Do you offer 24/7 emergency tree service?",
    answer:
      "Yes. Godhans Tree Company provides 24/7 emergency tree service across Jacksonville, Camp Lejeune, Richlands, Hubert, Sneads Ferry, and Swansboro. We respond quickly to fallen trees, storm damage, trees on homes or vehicles, and hazardous limbs. Call (618) 704-4861 anytime — day or night.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. We are fully licensed, bonded, and insured — including general liability and workers' compensation coverage. This protects your property and ensures you're never held liable for on-the-job incidents. We provide proof of insurance on request before any work begins.",
  },
  {
    question: "How soon can you come out for an estimate or job?",
    answer:
      "Most free estimates are scheduled within 24–48 hours. Standard tree work is typically completed within 1–2 weeks of accepting a quote, and emergency calls are responded to the same day — often within hours. Storm response and military relocations are prioritized.",
  },
  {
    question: "Do you clean up after the job?",
    answer:
      "Absolutely. Complete cleanup is included on every job. We haul away all branches, logs, and debris, rake the work area, and leave your property cleaner than we found it. If you'd like to keep the wood for firewood, just let our crew know and we'll stack it for you.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Answers to common tree service questions in Jacksonville, NC
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-white border-2 border-gray-200 rounded-lg px-6 data-[state=open]:border-red-600 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-black hover:no-underline py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

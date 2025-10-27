import { TRUST_ITEMS } from '@/lib/constants';

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why Choose Godhans Tree Company?
          </h2>
          <p className="text-xl text-gray-600">
            Jacksonville's most trusted tree service professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRUST_ITEMS.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

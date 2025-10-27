import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by hundreds of Jacksonville homeowners and businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              rating={testimonial.rating}
              text={testimonial.text}
              author={testimonial.author}
              location={testimonial.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

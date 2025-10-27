interface TestimonialCardProps {
  rating: number;
  text: string;
  author: string;
  location: string;
}

export function TestimonialCard({ rating, text, author, location }: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 transition-all duration-300 hover:border-red-600 hover:shadow-lg">
      <div className="text-red-600 text-2xl mb-4">
        {"★".repeat(rating)}
      </div>
      
      <p className="text-gray-700 italic mb-6 leading-relaxed">
        "{text}"
      </p>
      
      <div className="font-semibold text-black">
        - {author}, <span className="text-gray-600">{location}</span>
      </div>
    </div>
  );
}

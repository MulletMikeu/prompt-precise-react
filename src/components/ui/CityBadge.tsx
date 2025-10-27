interface CityBadgeProps {
  city: string;
}

export function CityBadge({ city }: CityBadgeProps) {
  return (
    <div className="bg-white px-4 py-3 rounded-lg text-center border-2 border-gray-200 transition-all duration-300 hover:border-red-600 hover:shadow-md">
      <strong className="text-red-600">{city}</strong>
    </div>
  );
}

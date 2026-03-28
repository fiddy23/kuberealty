import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status?: string;
}

export function PropertyCard({
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  status = 'For Sale',
}: PropertyCardProps) {
  const displayPrice = price.toLowerCase() === 'request pricing' ? 'Learn More' : price;
  const isLearnMore = displayPrice === 'Learn More';

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-[#1e3a8a] text-white px-3 py-1 rounded-full text-sm">
          {status}
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="mb-4">
          <span
            className={`inline-flex items-center rounded-lg border px-5 py-3 text-2xl transition-colors duration-300 ${
              isLearnMore
                ? 'border-[#1e3a8a] text-[#1e3a8a] hover:border-[#AC835D] hover:bg-[#AC835D] hover:text-white'
                : 'border-transparent text-[#1e3a8a]'
            }`}
          >
            {displayPrice}
          </span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div className="flex items-center text-gray-600">
            <Bed size={18} className="mr-1" />
            <span className="text-sm">{bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bath size={18} className="mr-1" />
            <span className="text-sm">{bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Square size={18} className="mr-1" />
            <span className="text-sm">{area} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}

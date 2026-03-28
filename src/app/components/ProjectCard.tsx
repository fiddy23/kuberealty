import { MapPin, Calendar, Tag, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  name: string;
  tagline: string;
  description: string;
  location: string;
  priceRange: string;
  unitTypes: string[];
  amenities: string[];
  image: string;
  status: string;
  completionDate: string;
  href?: string;
}

export function ProjectCard({
  name,
  tagline,
  description,
  location,
  priceRange,
  unitTypes,
  amenities,
  image,
  status,
  completionDate,
  href,
}: ProjectCardProps) {
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="block bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative h-96 lg:h-auto overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 bg-[#181D24] text-[#CA9D75] px-4 py-2 rounded-full font-bold shadow-lg">
            {status}
          </div>
        </div>

        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-3xl md:text-4xl text-[#181D24] mb-2 font-bold">{name}</h3>
            <p className="text-xl text-[#AC835D] italic">{tagline}</p>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed bg-gray-50 p-4 rounded-xl border-l-4 border-[#CA9D75]">{description}</p>

          <div className="space-y-4 mb-6">
            <div className="flex items-center text-gray-700">
              <MapPin className="text-[#AC835D] mr-3 flex-shrink-0" size={20} />
              <span className="font-medium">{location}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Tag className="text-[#AC835D] mr-3 flex-shrink-0" size={20} />
              <span className="text-lg font-medium">{priceRange}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Calendar className="text-[#AC835D] mr-3 flex-shrink-0" size={20} />
              <span className="font-medium">Expected Completion: {completionDate}</span>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg mb-3 text-gray-900 font-semibold">Available Unit Types:</h4>
            <div className="flex flex-wrap gap-2">
              {unitTypes.map((type, index) => (
                <span
                  key={index}
                  className="bg-[#181D24] text-gray-200 border border-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:text-[#CA9D75] hover:border-[#CA9D75] transition"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg mb-3 text-gray-900 font-semibold">Amenities:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <Check className="text-[#CA9D75] mr-2 flex-shrink-0" size={18} />
                  <span className="text-sm font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <span className="bg-[#181D24] text-white px-6 py-3 rounded-lg hover:bg-[#2B3441] transition shadow-lg font-medium text-center">
              Request Information
            </span>
            <span className="border-2 border-[#AC835D] text-[#AC835D] px-6 py-3 rounded-lg hover:bg-[#AC835D]/10 transition font-medium text-center">
              Schedule Site Visit
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

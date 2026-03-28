import { Search, MapPin, Home, DollarSign } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-5xl mx-auto -mt-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
          <MapPin size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
          <Home size={20} className="text-gray-400 mr-2" />
          <select className="w-full outline-none bg-transparent">
            <option>Property Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Land</option>
          </select>
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
          <DollarSign size={20} className="text-gray-400 mr-2" />
          <select className="w-full outline-none bg-transparent">
            <option>Price Range</option>
            <option>$0 - $100k</option>
            <option>$100k - $300k</option>
            <option>$300k - $500k</option>
            <option>$500k+</option>
          </select>
        </div>
        <button className="bg-[#1e3a8a] text-white rounded-lg px-6 py-3 flex items-center justify-center hover:bg-[#1e40af] transition">
          <Search size={20} className="mr-2" />
          Search
        </button>
      </div>
    </div>
  );
}

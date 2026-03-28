import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#181D24]/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-[#CA9D75]">KR</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-[#CA9D75] transition font-medium">HOME</a>
            <a href="/villas/" className="text-gray-300 hover:text-[#CA9D75] transition font-medium">VILLAS</a>
            <a href="/kr-projects/" className="text-gray-300 hover:text-[#CA9D75] transition font-medium">KR PROJECTS</a>
            <a href="/blog/blog/" className="text-gray-300 hover:text-[#CA9D75] transition font-medium">BLOG</a>
            <a href="/register-interest/" className="bg-[#AC835D] text-white px-6 py-2 rounded-lg hover:bg-[#CA9D75] transition shadow-lg">
              Enquiries
            </a>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-[#181D24] px-2 rounded-b-xl border-t border-gray-800">
            <a href="/" className="block text-gray-300 hover:text-[#CA9D75] transition p-2" onClick={() => setIsMenuOpen(false)}>HOME</a>
            <a href="/villas/" className="block text-gray-300 hover:text-[#CA9D75] transition p-2" onClick={() => setIsMenuOpen(false)}>VILLAS</a>
            <a href="/kr-projects/" className="block text-gray-300 hover:text-[#CA9D75] transition p-2" onClick={() => setIsMenuOpen(false)}>KR PROJECTS</a>
            <a href="/blog/blog/" className="block text-gray-300 hover:text-[#CA9D75] transition p-2" onClick={() => setIsMenuOpen(false)}>BLOG</a>
            <a href="/register-interest/" className="block w-full bg-[#AC835D] text-white px-6 py-3 rounded-lg hover:bg-[#CA9D75] transition mt-4 text-center" onClick={() => setIsMenuOpen(false)}>
              Enquiries
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

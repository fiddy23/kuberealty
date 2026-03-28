import { ArrowUpRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import {contactInfo} from '../data/siteContent';
import {withBase} from '../utils/paths';

export function Footer() {
  return (
    <footer className="bg-[#181D24] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.9fr_0.9fr_1.15fr] gap-8 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[#CA9D75] mb-4">KR</h2>
            <p className="text-gray-400 mb-4">
              Building Africa. Delivering world-class residential and commercial developments designed for modern living.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#CA9D75] transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#CA9D75] transition"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#CA9D75] transition"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#CA9D75] transition"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[#CA9D75] font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href={withBase('/')} className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href={withBase('/villas/')} className="text-gray-400 hover:text-white transition">Villas</a></li>
              <li><a href={withBase('/kr-projects/')} className="text-gray-400 hover:text-white transition">KR Projects</a></li>
              <li><a href={withBase('/blog/blog/')} className="text-gray-400 hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[#CA9D75] font-semibold text-lg">Our Projects</h3>
            <ul className="space-y-2">
              <li><a href={withBase('/bella-vida/')} className="text-gray-400 hover:text-white cursor-pointer transition">Bella Vida</a></li>
              <li><a href={withBase('/m-villa/')} className="text-gray-400 hover:text-white cursor-pointer transition">M Villa</a></li>
              <li><a href={withBase('/r-villa/')} className="text-gray-400 hover:text-white cursor-pointer transition">R Villa</a></li>
              <li><a href={withBase('/oxford-towers/')} className="text-gray-400 hover:text-white cursor-pointer transition">Oxford Towers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[#CA9D75] font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Phone size={20} className="mr-3 flex-shrink-0 text-[#AC835D]" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={20} className="mr-3 flex-shrink-0 text-[#AC835D]" />
                <a href="mailto:info@kuberealty.com" className="hover:text-white transition">info@kuberealty.com</a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-[#AC835D]" />
                <span>
                  KUBER REALTY
                  <br />
                  49 KOFI ANNAN ST.
                  <br />
                  AIRPORT RESIDENTIAL AREA 2,
                  <br />
                  ACCRA
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10 max-w-5xl rounded-3xl border border-white/25 p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.35fr] gap-6 items-center">
            <div>
              <h3 className="mb-2 text-white font-semibold text-lg uppercase tracking-[0.18em]">
                Subscribe To Newsletter
              </h3>
              <p className="text-gray-400">
                Get project launches, property updates, and investment news from Kuber Realty.
              </p>
            </div>
            <form className="flex items-stretch gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-md border border-white/25 bg-transparent px-5 py-4 text-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#CA9D75]"
              />
              <button
                type="submit"
                className="group inline-flex min-w-24 items-center justify-center rounded-md bg-[#AC835D] px-6 text-white transition hover:bg-[#CA9D75]"
                aria-label="Subscribe to newsletter"
              >
                <ArrowUpRight
                  size={28}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; 2026 Kuber Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

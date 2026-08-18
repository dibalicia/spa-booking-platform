import { Search, Phone, MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 font-body">
      <div className="bg-ink/50 backdrop-blur-sm border-b border-brass/20">
        <div className="max-w-7xl mx-auto px-6 h-24 grid grid-cols-3 items-center">
          <nav className="flex items-center gap-12 text-sm font-medium uppercase tracking-[0.15em] text-ivory/90">
            <a href="#about" className="hover:text-brass transition-colors">About Us</a>
            <a href="#reviews" className="hover:text-brass transition-colors">Reviews</a>
            <a href="#egift" className="hover:text-brass transition-colors">E-Gift</a>
          </nav>

          <div className="flex justify-center">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="Ô Chakra Spa"
                className="h-20 w-auto object-contain"
              />
            </a>
          </div>

          <div className="flex items-center justify-end gap-5">
            <a href="https://wa.me/213560034559" className="hidden lg:flex items-center gap-2 text-sm uppercase tracking-[0.1em] font-medium text-ivory/90 hover:text-brass transition-colors whitespace-nowrap">
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a href="tel:+213560034559" className="hidden lg:flex items-center gap-2 text-sm uppercase tracking-[0.1em] font-medium text-ivory/90 hover:text-brass transition-colors whitespace-nowrap">
              <Phone size={16} />
              0560 03 45 59
            </a>
            <button aria-label="Search" className="text-ivory/90 hover:text-brass transition-colors">
              <Search size={18} />
            </button>
            <button className="border border-brass text-brass rounded-full px-6 py-2.5 text-sm uppercase tracking-[0.1em] font-medium hover:bg-brass hover:text-ink transition-colors whitespace-nowrap">
              Book
            </button>
          </div>
        </div>
      </div>

      <div className="bg-ink/50 backdrop-blur-sm border-b border-brass/10">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-center">
          <a href="#price-list" className="text-sm font-medium tracking-[0.15em] uppercase text-ivory/80 hover:text-brass transition-colors">
            Price List
          </a>
        </div>
      </div>
    </header>
  );
}
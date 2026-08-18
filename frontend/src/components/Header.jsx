import { Search, Phone, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 font-body">
      <div className="bg-ink/95 backdrop-blur-sm border-b border-brass/20">
        <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-3 items-center">
          <nav className="flex items-center gap-8 text-sm tracking-wide text-ivory/90">
            <a href="#about" className="hover:text-brass transition-colors">About Us</a>
            <a href="#reviews" className="hover:text-brass transition-colors">Reviews</a>
            <a href="#egift" className="hover:text-brass transition-colors">E-Gift</a>
          </nav>

          <div className="flex justify-center">
            <a href="/" className="font-display italic text-2xl text-ivory tracking-wide">
              Your Spa Name
            </a>
          </div>

          <div className="flex items-center justify-end gap-5">
            <a href="https://wa.me/213000000000" className="hidden lg:flex items-center gap-2 text-sm text-ivory/90 hover:text-brass transition-colors">
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a href="tel:+213000000000" className="hidden lg:flex items-center gap-2 text-sm text-ivory/90 hover:text-brass transition-colors">
              <Phone size={16} />
              0000 000 000
            </a>
            <button aria-label="Search" className="text-ivory/90 hover:text-brass transition-colors">
              <Search size={18} />
            </button>
            <button className="border border-brass text-brass rounded-full px-5 py-2 text-sm tracking-wide hover:bg-brass hover:text-ink transition-colors">
              Book
            </button>
          </div>
        </div>
      </div>

      <div className="bg-ink border-b border-brass/10">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-center">
          <a href="#price-list" className="text-xs tracking-[0.15em] uppercase text-ivory/80 hover:text-brass transition-colors">
            Price List
          </a>
        </div>
      </div>
    </header>
  );
}
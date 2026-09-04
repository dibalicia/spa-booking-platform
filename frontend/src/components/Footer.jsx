import { MessageCircle, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-brass/20 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16">
        <div className="flex items-center">
          <img src={logo} alt="Ô Chakra Spa" className="h-[130px] w-auto" />
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <a href="/price-list" className="text-ivory/80 hover:text-brass uppercase tracking-wide transition-colors">Price List</a>
          <a href="#reviews" className="text-ivory/80 hover:text-brass uppercase tracking-wide transition-colors">Reviews</a>
          <a href="#egift" className="text-ivory/80 hover:text-brass uppercase tracking-wide transition-colors">E-Gift</a>
          <a href="#terms" className="text-ivory/80 hover:text-brass uppercase tracking-wide transition-colors">Terms and Conditions</a>
        </div>
        <div>
          <h3 className="font-heading text-ivory uppercase tracking-[0.1em] text-sm mb-4">Ô Chakra Spa</h3>
          <div className="flex items-start gap-2 text-ivory/70 text-sm mb-2">
            <MapPin size={16} className="mt-0.5 flex-shrink-0" />
            <span>Zone urbaine Garidi 1, lot n85, Kouba, Algiers</span>
          </div>
          <div className="flex items-center gap-2 text-ivory/70 text-sm">
            <Phone size={16} />
            <span>0560 03 45 59</span>
          </div>
        </div>
        <div>
          <a href="https://wa.me/213560034559" className="inline-flex items-center gap-2 border border-brass text-brass rounded-full px-5 py-2 text-sm uppercase tracking-wide mb-6 hover:bg-brass hover:text-ink transition-colors">
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <div className="flex items-center gap-4">
            <a href="#facebook" aria-label="Facebook" className="text-ivory/70 hover:text-brass transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" /></svg>
            </a>
            <a href="#instagram" aria-label="Instagram" className="text-ivory/70 hover:text-brass transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></svg>
            </a>
            <a href="#whatsapp" aria-label="WhatsApp" className="text-ivory/70 hover:text-brass transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="#tiktok" aria-label="TikTok" className="text-ivory/70 hover:text-brass transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
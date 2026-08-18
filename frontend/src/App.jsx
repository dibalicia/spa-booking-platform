import Header from "./components/Header";
import hero from "./assets/hero.jpg";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />

      <section className="relative h-screen">
        <img
          src={hero}
          alt="Ô Chakra Spa hammam interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </section>

      <main className="bg-ink">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-ivory/10 backdrop-blur-md rounded-xl px-10 py-12 md:px-16 md:py-14">
          <h2 className="font-heading font-light text-xl md:text-2xl lg:text-3xl tracking-[0.1em] uppercase text-ivory mb-8 text-center md:whitespace-nowrap">
              Ô Chakra — Spa &amp; Wellness Center in Algiers
            </h2>

            <div className="grid md:grid-cols-[2fr_auto_1fr] gap-10 items-center">
              <div className="space-y-3 text-ivory/80 font-body text-sm leading-relaxed">
                <p>
                  Ô Chakra is a haven of calm in the heart of Algiers, offering a
                  traditional hammam experience alongside modern spa treatments
                  all under one roof.
                </p>
                <p>
                  At Ô Chakra, we believe wellness is personal. Every visit is
                  tailored to you, combining hammam rituals with
                  massage, skincare, and body treatments delivered by experienced
                  hands.
                </p>
                <p>
                  We're proud to welcome you into a space built on care, tradition,
                  and genuine attention. We work for you so that every day you love yourself even more!
                </p>
              </div>

              <div className="hidden md:block w-px bg-brass/20 self-stretch" />

              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-brass/20 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-body text-base uppercase tracking-wide text-ivory leading-snug">
                    Farah
                  </span>
                  <span className="font-body text-base uppercase tracking-wide text-ivory leading-snug">
                    Boughella
                  </span>
                  <span className="font-body text-xs text-ivory/60 mt-2">
                    Founder of Ô Chakra Spa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Gallery />
    </div>
  );
}
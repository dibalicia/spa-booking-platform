import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import contactPhoto from "../assets/contact-photo.jpg";

export default function PriceList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/services/")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-ink">
      <Header />

      <section className="relative h-[65vh]">
        <img
          src={contactPhoto}
          alt="Ô Chakra Spa treatment room"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="font-display font-light uppercase tracking-[0.1em] text-5xl md:text-7xl text-ivory">
  Price List
</h1>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-24">
        {loading && (
          <p className="text-ivory/60 text-center font-body">Loading services...</p>
        )}

        {error && (
          <p className="text-ivory/60 text-center font-body">
            Unable to load the price list right now. Please try again later.
          </p>
        )}

        {!loading && !error && (
          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between border-b border-brass/20 pb-6"
              >
                <div>
                  <h3 className="font-body text-ivory text-lg mb-1">
                    {service.name}
                  </h3>
                  {service.description && (
                    <p className="text-ivory/60 text-sm font-body">
                      {service.description}
                    </p>
                  )}
                  <p className="text-ivory/50 text-xs font-body mt-1">
                    {service.duration_minutes} min
                  </p>
                </div>
                <p className="font-heading text-brass text-xl whitespace-nowrap ml-6">
                  {service.price} DZD
                </p>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
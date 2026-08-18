import { useState } from "react";
import contactPhoto from "../assets/contact-photo.jpg";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thanks ${name || "there"}, we'll be in touch!`);
  }

  return (
    <section className="bg-ink py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-charcoal/60 rounded-2xl overflow-hidden grid md:grid-cols-2">
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <h2 className="font-heading font-light text-3xl md:text-4xl uppercase tracking-[0.1em] text-ivory mb-4">
              Need Advice?
            </h2>
            <p className="text-ivory/70 font-body text-sm leading-relaxed mb-8 max-w-sm">
              We offer complementary online consultations.
              We're here to help you make the right choices.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-ivory/30 text-ivory placeholder:text-ivory/50 font-body text-sm py-2 focus:outline-none focus:border-brass transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="+213 000 00 00 00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent border-b border-ivory/30 text-ivory placeholder:text-ivory/50 font-body text-sm py-2 focus:outline-none focus:border-brass transition-colors"
                />
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="bg-ivory text-ink rounded-full px-8 py-3 text-sm uppercase tracking-[0.1em] font-medium hover:bg-brass transition-colors"
                >
                  Send a Request
                </button>
                <p className="text-ivory/50 font-body text-xs max-w-[160px]">
                  By clicking to send, I agree to the{" "}
                  <a href="#terms" className="underline hover:text-brass">
                    terms and conditions
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="hidden md:block h-full max-h-[480px]">
            <img
              src={contactPhoto}
              alt="Ô Chakra Spa treatment room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
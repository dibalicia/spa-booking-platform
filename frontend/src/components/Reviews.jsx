import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.07 7.93-2.9l-3.88-3.02c-1.08.72-2.45 1.15-4.05 1.15-3.11 0-5.75-2.1-6.69-4.92H1.3v3.1A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.31 14.31A7.2 7.2 0 0 1 4.93 12c0-.8.14-1.58.38-2.31v-3.1H1.3A12 12 0 0 0 0 12c0 1.93.46 3.76 1.3 5.41z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.76 0 3.34.6 4.59 1.79l3.44-3.44C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.3 6.59l4.01 3.1C6.25 6.87 8.89 4.77 12 4.77z"
      />
    </svg>
  );
}

export default function Reviews() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/reviews/")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => setError(true));
  }, []);

  if (error) return null;
  if (!data) return null;

  const allReviews = data.reviews || [];
  const perPage = 3;
  const pageCount = Math.max(1, Math.ceil(allReviews.length / perPage));
  const currentReviews = allReviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="bg-ink py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
          <h2 className="font-heading font-light text-2xl md:text-3xl uppercase tracking-[0.1em] text-ivory">
            What Our Clients Say
          </h2>

          <div className="flex flex-col items-center mt-6 md:mt-0">
            <img src={logo} alt="Ô Chakra Spa" className="h-14 w-auto mb-2" />
            <div className="flex items-center gap-1 text-brass">
              {"★".repeat(Math.round(data.rating || 0))}
              <span className="text-ivory ml-1 text-sm">{data.rating}</span>
            </div>
            <span className="text-ivory/60 text-xs mt-1">
              {data.total_ratings} reviews
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 min-h-[280px]">
          {currentReviews.map((review, i) => (
            <div
              key={`${page}-${i}`}
              className={`px-6 ${
                i > 0 ? "md:border-l md:border-brass/20" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <GoogleIcon />
                <span className="text-brass text-sm">
                  {"★".repeat(review.rating)}
                </span>
              </div>
              <p className="text-ivory/80 font-body text-sm leading-relaxed mb-6">
                {review.text.length > 180
                  ? review.text.slice(0, 180) + "…"
                  : review.text}
              </p>
              <p className="text-ivory font-body text-sm">
                {review.author_name}
              </p>
              <p className="text-ivory/50 font-body text-xs mt-1">
                {review.relative_time_description}
              </p>
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                aria-label={`Show review set ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all ${
                  i === page ? "w-6 bg-brass" : "w-2 bg-ivory/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
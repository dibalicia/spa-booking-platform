import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";

const images = [gallery1, gallery2, gallery3, gallery4];
// Duplicate the list so the loop feels seamless
const loopImages = [...images, ...images];

export default function Gallery() {
  return (
    <section className="bg-ink py-16 overflow-hidden">
      <div className="relative">
        <div className="flex gap-4 animate-slide w-max">
          {loopImages.map((img, i) => (
            <div
              key={i}
              className="w-[280px] md:w-[360px] h-[400px] flex-shrink-0 rounded-lg overflow-hidden"
            >
              <img
                src={img}
                alt="Ô Chakra Spa"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
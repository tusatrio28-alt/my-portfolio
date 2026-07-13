import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export interface GalleryCardProps {
  title: string;
  subtitle: string;
  description: string;
  location: string;
  images: string[];
  tags: string[];
  icon: string;
}

export default function GalleryCard({
  title,
  subtitle,
  description,
  location,
  images,
  tags,
  icon,
}: GalleryCardProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <article className="glass-card">
      {/* ================= IMAGE ================= */}

      <div className="carousel-wrapper">
        <img
          src={images[current]}
          alt={title}
          draggable={false}
          className="carousel-image"
        />

        <div className="image-overlay" />

        <div className="image-watermark">
          © Satrio Tri Utomo
        </div>

        {/* Previous */}

        <button
          onClick={prev}
          className="carousel-btn left"
          aria-label="Previous image"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next */}

        <button
          onClick={next}
          className="carousel-btn right"
          aria-label="Next image"
        >
          <ChevronRight size={22} />
        </button>

        {/* Indicator */}

        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={
                index === current
                  ? "dot active"
                  : "dot"
              }
            />
          ))}
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="card-content">
        <div className="card-heading">
          <span className="card-icon">
            {icon}
          </span>

          <div>
            <h3 className="card-title">
              {title}
            </h3>

            <p className="card-subtitle">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="card-location">
          <MapPin size={16} />

          <span>{location}</span>
        </div>

        <p className="card-description">
          {description}
        </p>

        <div className="card-tags">
          {tags.map((tag) => (
            <span
              key={tag}
              className="card-tag"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
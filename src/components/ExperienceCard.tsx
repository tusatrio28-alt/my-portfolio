import { useState } from "react";
import "../styles/cards.css";
import "../styles/carousel.css";
import "../styles/buttons.css";
import "../styles/watermark.css";
import "../styles/typography.css";

type Experience = {
  title: string;
  company: string;
  period: string;
  images: string[];
  description: string;
  tags: string[];
};

interface Props {
  exp: Experience;
}

export default function ExperienceCard({ exp }: Props) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) =>
      prev === exp.images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? exp.images.length - 1 : prev - 1
    );
  };

  return (
    <article className="glass-card">

      {/* ================= IMAGE ================= */}

      <div className="carousel-wrapper">

        <img
          src={exp.images[index]}
          alt={exp.title}
          draggable={false}
          className="carousel-image"
        />

        <div className="image-overlay" />

        <div className="image-watermark">
          © Satrio Tri Utomo
        </div>

        <button
          onClick={prev}
          className="carousel-btn left"
          aria-label="Previous Image"
        >
          {"<"}
        </button>

        <button
          onClick={next}
          className="carousel-btn right"
          aria-label="Next Image"
        >
          {">"}
        </button>

        <div className="carousel-dots">
          {exp.images.map((_, i) => (
            <span
              key={i}
              className={
                i === index
                  ? "dot active"
                  : "dot"
              }
            />
          ))}
        </div>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="card-content">

        <p className="card-period">
          {exp.period}
        </p>

        <h3 className="card-title">
          {exp.title}
        </h3>

        <p className="card-subtitle">
          {exp.company}
        </p>

        <p className="card-description">
          {exp.description}
        </p>

        <div className="card-tags">
          {exp.tags.map((tag) => (
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
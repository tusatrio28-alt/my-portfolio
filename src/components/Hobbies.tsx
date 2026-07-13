import GalleryCard from "./GalleryCard";
import { hobbies } from "../data/Hobbies";

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="section-dark"
    >
      <div className="section-container">

        {/* ================= HEADER ================= */}

        <div className="section-header">

          <p className="section-badge">
            Personal Activities
          </p>

          <h2 className="section-title">
            Hobbies & Adventures
          </h2>

          <p className="section-description">
            Aktivitas di luar pekerjaan yang membantu
            menjaga kesehatan, meningkatkan kreativitas,
            serta membangun kemampuan problem solving,
            teamwork, dan eksplorasi alam.
          </p>

        </div>

        {/* ================= GALLERY ================= */}

        <div className="gallery-grid">

          {hobbies.map((hobby) => (

            <GalleryCard
              key={hobby.id}
              title={hobby.title}
              subtitle={hobby.subtitle}
              description={hobby.description}
              location={hobby.location}
              images={hobby.images}
              tags={hobby.tags}
              icon={hobby.icon}
            />

          ))}

        </div>

      </div>
    </section>
  );
}
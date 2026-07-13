import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/Experiences";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-dark"
    >
      <div className="section-container">

        {/* HEADER */}

        <div className="section-header">

          <p className="section-badge">
            Professional Journey
          </p>

          <h2 className="section-title">
            Experience Gallery
          </h2>

          <p className="section-description">
            Dokumentasi aktivitas profesional
            sebagai IT Broadcast Support,
            mencakup monitoring sistem,
            troubleshooting perangkat,
            maintenance infrastruktur,
            dan operasional broadcast.
          </p>

        </div>

        {/* EXPERIENCE LIST */}

        <div className="experience-grid">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
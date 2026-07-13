import { ArrowRight, Download } from "lucide-react";
import hero from "../assets/monitoring_room.jpg";


export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
    >
      <div className="hero-glow" />

      <div className="section-container">

        <div className="hero-grid">
          {/* LEFT */}
          <div className="hero-content">
            
            <h1 className="hero-title">
              Menjaga Infrastruktur
              <br />

              <span className="hero-highlight">
                Broadcast Tetap Stabil
              </span>
            </h1>

            <p className="hero-description">
              Berpengalaman dalam monitoring sistem,
              troubleshooting perangkat broadcast,
              administrasi jaringan, serta memastikan
              operasional layanan siaran berjalan secara
              optimal selama 24/7.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="#experience"
                className="primary-btn"
              >
                Pengalaman
                <ArrowRight size={18} />
              </a>

              <a
                href="/cv.pdf"
                className="secondary-btn"
              >
                Download CV
                <Download size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-showcase">
            <div className="hero-glow"></div>
            <img
              src={hero}
              alt="Broadcast Monitoring"
              className="hero-image"
            />
            <div className="hero-overlay"/>
            <div className="hero-status">
              <span className="live-dot"/>
              BROADCAST MONITORING
            </div>
            <div className="hero-info">
              <span>24/7 System Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Download } from "lucide-react";
import hero from "../assets/edit_std_bola.jpg";


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
          <div>
            <p className="hero-subtitle">
              IT Broadcast Support
            </p>

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
          <div className="flex justify-center">
            <img
              src={hero}
              alt="Broadcast Monitoring"
              className="max-w-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

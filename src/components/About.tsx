import profile from "../assets/profile1.png";
import {
  Activity,
  ShieldCheck,
  Network,
  FileText,
  Clock3,
  Briefcase,
  Server,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="section-dark"
    >
      <div className="section-container">

        {/* Header */}

        <div className="section-header">

          <p className="section-badge">
            Professional Profile
          </p>

        </div>

        <div className="about-grid">

          {/* FOTO */}

          <div className="profile-wrapper">

            <div className="profile-container">

              <div className="profile-glow" />

              <div className="profile-frame">

                <img
                  src={profile}
                  alt="Profile"
                  className="profile-image"
                />

              </div>

              {/* Status */}

              <div className="profile-status">
                <span className="status-dot" />
                Available for Work
              </div>

              {/* Badge */}

              <div className="profile-badge">

                <p className="badge-label">
                  Experience
                </p>

                <h3 className="badge-title">
                  IT Broadcast Support
                </h3>

              </div>

            </div>

          </div>

          {/* CONTENT */}

          <div className="about-content">

            <p className="about-label">
              Hello, I'm Satrio Tri Utomo
            </p>

            <h2 className="about-title">
              Menjaga Infrastruktur Broadcast Tetap Stabil dan Andal
            </h2>

            <p className="about-description">
              Berpengalaman dalam monitoring sistem broadcast,
              troubleshooting perangkat, administrasi jaringan,
              serta memberikan dukungan teknis agar layanan siaran
              berjalan optimal tanpa gangguan.
            </p>

            <p className="about-description">
              Terbiasa bekerja dalam lingkungan operasional 24/7
              yang membutuhkan respon cepat, analisis masalah,
              koordinasi tim, dokumentasi teknis,
              serta preventive maintenance.
            </p>

            {/* Statistics */}

            <div className="about-stats">

              <div className="stat-card">
                <Clock3 size={22} />
                <h3>24/7</h3>
                <span>System Monitoring</span>
              </div>

              <div className="stat-card">
                <Briefcase size={22} />
                <h3>2+</h3>
                <span>Years Experience</span>
              </div>

              <div className="stat-card">
                <Server size={22} />
                <h3>100+</h3>
                <span>Devices Monitored</span>
              </div>

              <div className="stat-card">
                <CheckCircle2 size={22} />
                <h3>99%</h3>
                <span>Service Availability</span>
              </div>

            </div>

          </div>

        </div>

        {/* Professional Highlights */}

        <div className="about-features">

          <div className="feature-card">

            <Activity className="feature-icon" />

            <h4 className="feature-title">
              System Monitoring
            </h4>

            <p className="feature-description">
              Monitoring server, perangkat broadcast,
              serta memastikan seluruh layanan berjalan normal.
            </p>

          </div>

          <div className="feature-card">

            <ShieldCheck className="feature-icon" />

            <h4 className="feature-title">
              Troubleshooting
            </h4>

            <p className="feature-description">
              Analisis akar masalah serta penyelesaian
              gangguan hardware maupun software.
            </p>

          </div>

          <div className="feature-card">

            <Network className="feature-icon" />

            <h4 className="feature-title">
              Network Support
            </h4>

            <p className="feature-description">
              Konfigurasi LAN/WAN,
              monitoring jaringan,
              IP Address,
              dan broadcast connectivity.
            </p>

          </div>

          <div className="feature-card">

            <FileText className="feature-icon" />

            <h4 className="feature-title">
              Documentation
            </h4>

            <p className="feature-description">
              Penyusunan SOP,
              incident report,
              preventive maintenance,
              dan dokumentasi konfigurasi.
            </p>

          </div>

        </div>

        {/* Timeline */}

        <div className="career-section">

          <h3 className="career-title">
            Professional Journey
          </h3>

          <div className="timeline-card">

            <div className="timeline-dot" />

            <div>

              <span className="timeline-period">
                2024 - Sekarang
              </span>

              <h4 className="timeline-company">
                PT Media Nusantara
              </h4>

              <p className="timeline-role">
                IT Broadcast Support
              </p>

              <ul className="timeline-list">

                <li>
                  Monitoring Broadcast Infrastructure
                </li>

                <li>
                  Network Troubleshooting
                </li>

                <li>
                  Incident Handling
                </li>

                <li>
                  Technical Documentation
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
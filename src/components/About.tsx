import profile from "../assets/profile2.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="section-dark"
    >
      <div className="section-container">
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
              About Me
            </p>

            <h2 className="about-title">
              Menjaga Infrastruktur Broadcast
              Tetap Stabil dan Andal
            </h2>

            <p className="about-description">
              Saya memiliki ketertarikan yang kuat pada
              teknologi informasi, sistem broadcast,
              administrasi jaringan, dan operasional
              infrastruktur IT. Berpengalaman melakukan
              monitoring sistem, troubleshooting perangkat,
              serta memberikan dukungan teknis agar layanan
              broadcast tetap berjalan secara optimal.
            </p>

            <p className="about-description">
              Terbiasa bekerja pada lingkungan operasional
              yang membutuhkan respon cepat terhadap
              incident, koordinasi antar tim, dokumentasi
              teknis, serta analisis penyebab gangguan untuk
              menjaga availability sistem selama 24/7.
            </p>

            {/* FEATURES */}

            <div className="about-features">

              <div className="feature-card">
                <h4 className="feature-title">
                  System Monitoring
                </h4>

                <p className="feature-description">
                  Monitoring server, perangkat broadcast,
                  dan jaringan untuk menjaga availability
                  layanan.
                </p>
              </div>

              <div className="feature-card">
                <h4 className="feature-title">
                  Troubleshooting
                </h4>

                <p className="feature-description">
                  Analisis akar masalah dan penyelesaian
                  gangguan hardware maupun software.
                </p>
              </div>

              <div className="feature-card">
                <h4 className="feature-title">
                  Network Support
                </h4>

                <p className="feature-description">
                  Konfigurasi LAN/WAN, IP Address,
                  monitoring trafik jaringan,
                  dan konektivitas broadcast.
                </p>
              </div>

              <div className="feature-card">
                <h4 className="feature-title">
                  Documentation
                </h4>

                <p className="feature-description">
                  Penyusunan SOP, laporan insiden,
                  dokumentasi konfigurasi,
                  serta preventive maintenance.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
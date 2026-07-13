import {
  Mail,
  Phone,
  MapPin,
  StarHalf,
  Cat,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-dark"
    >
      <div className="section-container">

        {/* Header */}

        <div className="section-header">

          <p className="section-subtitle">
            Get In Touch
          </p>

          <h2 className="section-title">
            Let's Work Together
          </h2>

          <p className="section-description">
            Saya terbuka terhadap peluang kerja,
            kolaborasi, maupun diskusi mengenai
            teknologi Broadcast, Infrastruktur IT,
            dan Network Support.
          </p>

        </div>

        <div className="contact-grid">

          {/* LEFT */}

          <div>

            <div className="contact-card">

              <Mail className="contact-icon" />

              <div>

                <h3>Email</h3>

                <p>
                  satrio@email.com
                </p>

              </div>

            </div>

            <div className="contact-card">

              <Phone className="contact-icon" />

              <div>

                <h3>Phone</h3>

                <p>
                  +62 812 xxxx xxxx
                </p>

              </div>

            </div>

            <div className="contact-card">

              <MapPin className="contact-icon" />

              <div>

                <h3>Location</h3>

                <p>
                  Indonesia
                </p>

              </div>

            </div>

            <div className="contact-card">

              <StarHalf className="contact-icon" />

              <div>

                <h3>LinkedIn</h3>

                <p>
                  linkedin.com/in/satrio
                </p>

              </div>

            </div>

            <div className="contact-card">

              <Cat className="contact-icon" />

              <div>

                <h3>GitHub</h3>

                <p>
                  github.com/tusatrio28-alt
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <form className="contact-form">

            <input
              type="text"
              placeholder="Full Name"
              className="contact-input"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="contact-input"
            />

            <input
              type="text"
              placeholder="Subject"
              className="contact-input"
            />

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="contact-textarea"
            />

            <button className="primary-button">

              <Send size={18} />

              Send Message

            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
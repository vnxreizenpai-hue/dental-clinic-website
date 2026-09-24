import { useEffect, useState } from "react";

const Arrow = () => (
  <svg viewBox="0 0 24 24">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

const Star = () => (
  <svg viewBox="0 0 24 24">
    <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 8.7l6.2-.9L12 3Z" />
  </svg>
);

function App() {
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const openModal = () => {
    setSuccess(false);
    setModal(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setModal(false);
    document.body.classList.remove("modal-open");
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", esc);

    return () => {
      window.removeEventListener("keydown", esc);
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div className="site">

      {/* FLOATING ELEMENTS */}
      <div className="floating-orb orb-one" />
      <div className="floating-orb orb-two" />
      <div className="floating-orb orb-three" />

      {/* ================= NAVBAR ================= */}
      <header className="navbar">

        <a href="#home" className="brand">
          <div className="brand-mark">✦</div>

          <div className="brand-name">
            DENTAL
            <br />
            CARE
          </div>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#treatments">Treatments</a>
          <a href="#about">About</a>
          <a href="#support">Contact</a>
        </nav>

        <button
          className="nav-appointment"
          onClick={openModal}
          type="button"
        >
          Book Appointment
          <span>
            <Arrow />
          </span>
        </button>

      </header>


      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <div className="hero-image" />
        <div className="hero-overlay" />

        <div className="hero-glow glow-left" />
        <div className="hero-glow glow-right" />

        <div className="hero-content">

          <div className="eyebrow reveal">
            <span />
            A NEW STANDARD OF DENTAL CARE
          </div>

          <h1 className="reveal delay-1">
            Trusted Dental Care
            <br />
            <em>for Every Generation.</em>
          </h1>

          <p className="hero-copy reveal delay-2">
            Modern dental care designed around comfort,
            clarity and a healthier, more confident smile.
          </p>

          <div className="hero-actions reveal delay-3">

            <button
              className="primary-btn"
              type="button"
              onClick={openModal}
            >
              Book Appointment

              <span>
                <Arrow />
              </span>
            </button>

            <a href="#treatments" className="text-btn">
              Explore Treatments
              <span>→</span>
            </a>

          </div>

        </div>


        {/* SUBTLE FLOATING GLASS */}
        <div className="floating-note">
          <div className="note-icon">✦</div>

          <div>
            <strong>Care, reimagined.</strong>
            <small>Comfort in every detail</small>
          </div>
        </div>


        {/* HERO BOTTOM */}
        <div className="hero-trust">

          <div>
            <strong>01</strong>
            <span>
              PERSONALIZED
              <br />
              CARE
            </span>
          </div>

          <div>
            <strong>02</strong>
            <span>
              MODERN
              <br />
              TECHNOLOGY
            </span>
          </div>

          <div>
            <strong>03</strong>
            <span>
              PATIENT-FIRST
              <br />
              EXPERIENCE
            </span>
          </div>

        </div>

        <div className="scroll-indicator">
          <span />
          SCROLL TO EXPLORE
        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="intro-section">

        <div className="section-container intro-grid">

          <div className="section-label reveal">
            <span />
            WHY CHOOSE US
          </div>

          <div>

            <h2 className="reveal">
              Dentistry should
              <br />
              feel <em>different.</em>
            </h2>

            <p className="large-copy reveal delay-1">
              From your first consultation to ongoing care,
              every detail is designed to make your dental
              experience comfortable, simple and personal.
            </p>

            <div className="mini-points">

              <div className="reveal delay-1">
                <span>✦</span>
                <p>Personalised consultations</p>
              </div>

              <div className="reveal delay-2">
                <span>✦</span>
                <p>Modern treatment approach</p>
              </div>

              <div className="reveal delay-3">
                <span>✦</span>
                <p>Comfort-focused experience</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TREATMENTS ================= */}
      <section
        className="treatments-section"
        id="treatments"
      >

        <div className="section-container">

          <div className="section-heading">

            <div>

              <div className="section-label reveal">
                <span />
                TREATMENTS
              </div>

              <h2 className="reveal">
                Care for every
                <br />
                <em>smile.</em>
              </h2>

            </div>

            <p className="reveal delay-1">
              Thoughtfully designed dental treatments
              focused on comfort, precision and long-term
              oral health.
            </p>

          </div>


          <div className="treatment-grid">

            <article className="treatment-card reveal">

              <span className="treatment-number">
                01
              </span>

              <div className="treatment-icon">
                ✦
              </div>

              <h3>General Dentistry</h3>

              <p>
                Everyday dental care to help maintain
                healthy teeth and gums.
              </p>

              <a href="#support">
                Explore
                <span>
                  <Arrow />
                </span>
              </a>

            </article>


            <article className="treatment-card reveal delay-1">

              <span className="treatment-number">
                02
              </span>

              <div className="treatment-icon">
                ◇
              </div>

              <h3>Root Canal Care</h3>

              <p>
                Careful treatment focused on preserving
                your natural tooth.
              </p>

              <a href="#support">
                Explore
                <span>
                  <Arrow />
                </span>
              </a>

            </article>


            <article className="treatment-card reveal delay-2">

              <span className="treatment-number">
                03
              </span>

              <div className="treatment-icon">
                ◌
              </div>

              <h3>Smile Enhancement</h3>

              <p>
                Modern cosmetic options for a natural,
                confident smile.
              </p>

              <a href="#support">
                Explore
                <span>
                  <Arrow />
                </span>
              </a>

            </article>


            <article className="treatment-card reveal delay-3">

              <span className="treatment-number">
                04
              </span>

              <div className="treatment-icon">
                ✧
              </div>

              <h3>Preventive Care</h3>

              <p>
                Regular care and guidance for better
                long-term oral health.
              </p>

              <a href="#support">
                Explore
                <span>
                  <Arrow />
                </span>
              </a>

            </article>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="about-section" id="about">

        <div className="about-image">

          <div className="image-badge">

            <span>✦</span>

            <div>
              <strong>Thoughtful care.</strong>
              <small>Designed around you</small>
            </div>

          </div>

        </div>


        <div className="about-content">

          <div className="section-label reveal">
            <span />
            OUR APPROACH
          </div>

          <h2 className="reveal">
            Modern care.
            <br />
            <em>Human touch.</em>
          </h2>

          <p className="reveal delay-1">
            Great dentistry is about more than treatment.
            It is about creating an environment where
            patients feel informed, comfortable and cared
            for at every stage.
          </p>

          <button
            className="outline-btn reveal delay-2"
            type="button"
            onClick={openModal}
          >
            Start a conversation
            <span>
              <Arrow />
            </span>
          </button>

        </div>

      </section>


      {/* ================= TRUST ================= */}
      <section className="trust-section">

        <div className="section-container">

          <div className="trust-top">

            <div>

              <div className="section-label reveal">
                <span />
                PATIENT EXPERIENCE
              </div>

              <h2 className="reveal">
                Built around
                <br />
                <em>trust.</em>
              </h2>

            </div>


            <div className="rating reveal">

              <div className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>

              <span>
                Patient-focused experience
              </span>

            </div>

          </div>


          <div className="trust-cards">

            <article className="trust-card reveal">

              <div className="trust-icon">
                ✦
              </div>

              <h3>Clear consultations</h3>

              <p>
                Straightforward communication so patients
                understand their treatment options.
              </p>

            </article>


            <article className="trust-card reveal delay-1">

              <div className="trust-icon">
                ◇
              </div>

              <h3>Comfort first</h3>

              <p>
                A calm approach designed to make every
                visit feel more relaxed.
              </p>

            </article>


            <article className="trust-card reveal delay-2">

              <div className="trust-icon">
                ✧
              </div>

              <h3>Modern approach</h3>

              <p>
                Thoughtful treatment planning supported by
                contemporary dental techniques.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="cta-section">

        <div className="cta-glow" />

        <div className="cta-content">

          <div className="section-label reveal">
            <span />
            YOUR NEXT VISIT
            <span />
          </div>

          <h2 className="reveal">
            Your smile deserves
            <br />
            <em>thoughtful care.</em>
          </h2>

          <p className="reveal delay-1">
            Take the first step towards a more comfortable
            and confident dental experience.
          </p>

          <button
            className="primary-btn light reveal delay-2"
            type="button"
            onClick={openModal}
          >
            Book Appointment

            <span>
              <Arrow />
            </span>
          </button>

        </div>

      </section>


      {/* ================= SUPPORT ================= */}
      <section
        className="support-section"
        id="support"
      >

        <div className="support-inner">

          <div className="support-heading">

            <div className="section-label reveal">
              <span />
              SUPPORT & CONTACT
            </div>

            <h2 className="reveal">
              Here when you
              <br />
              <em>need us.</em>
            </h2>

            <p className="reveal delay-1">
              Have a question, need help choosing a treatment,
              or ready to plan your visit? Choose the option
              that works best for you.
            </p>

          </div>


          <div className="support-grid">

            {/* BOOK */}
            <button
              className="support-card reveal"
              type="button"
              onClick={openModal}
            >

              <div className="support-card-top">

                <div className="support-icon">
                  ✦
                </div>

                <span className="support-number">
                  01
                </span>

              </div>

              <span className="support-small">
                BOOK A VISIT
              </span>

              <h3>
                Schedule an
                <br />
                appointment.
              </h3>

              <p>
                Choose a convenient time to begin
                your dental care journey.
              </p>

              <span className="support-arrow">
                <Arrow />
              </span>

            </button>


            {/* CONTACT */}
            <a
              href="mailto:"
              className="support-card reveal delay-1"
            >

              <div className="support-card-top">

                <div className="support-icon">
                  ↗
                </div>

                <span className="support-number">
                  02
                </span>

              </div>

              <span className="support-small">
                CONTACT
              </span>

              <h3>
                Talk to
                <br />
                our team.
              </h3>

              <p>
                Get answers about appointments,
                treatments and your next visit.
              </p>

              <span className="support-arrow">
                <Arrow />
              </span>

            </a>


            {/* HELP */}
            <a
              href="#treatments"
              className="support-card reveal delay-2"
            >

              <div className="support-card-top">

                <div className="support-icon">
                  ?
                </div>

                <span className="support-number">
                  03
                </span>

              </div>

              <span className="support-small">
                SUPPORT
              </span>

              <h3>
                Need some
                <br />
                guidance?
              </h3>

              <p>
                Explore treatments and find the
                care that fits your needs.
              </p>

              <span className="support-arrow">
                <Arrow />
              </span>

            </a>

          </div>


          {/* BOTTOM INFO */}
          <div className="support-bottom reveal">

            <div>
              <span>AVAILABILITY</span>
              <strong>Appointments available</strong>
            </div>

            <div>
              <span>EXPERIENCE</span>
              <strong>Patient-first care</strong>
            </div>

            <div>
              <span>APPROACH</span>
              <strong>Comfort & clarity</strong>
            </div>

            <div className="support-scroll">
              <span>BACK TO TOP ↑</span>
            </div>

          </div>


          <footer className="footer">

            <span>
              © 2026 Dental Care
            </span>

            <span>
              Modern dental care experience
            </span>

          </footer>

        </div>


        <div className="support-orb support-orb-one" />
        <div className="support-orb support-orb-two" />
        <div className="support-orb support-orb-three" />

      </section>


      {/* ================= APPOINTMENT MODAL ================= */}
      {modal && (

        <div
          className="modal-backdrop"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >

          <div className="appointment-modal">

            <button
              className="modal-close"
              type="button"
              onClick={closeModal}
            >
              ×
            </button>


            {!success ? (

              <>
                <div className="modal-top">

                  <div className="modal-eyebrow">
                    <span />
                    BOOK A VISIT
                  </div>

                  <h2>
                    Let's plan your
                    <br />
                    <em>next visit.</em>
                  </h2>

                  <p>
                    Tell us a little about your visit and
                    your preferred appointment time.
                  </p>

                </div>


                <form onSubmit={submitForm}>

                  <div className="form-row">

                    <label>
                      Your name

                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                      />
                    </label>

                    <label>
                      Phone number

                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        required
                      />
                    </label>

                  </div>


                  <div className="form-row">

                    <label>
                      Preferred date

                      <input
                        type="date"
                        required
                      />
                    </label>

                    <label>
                      Treatment

                      <select
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Select treatment
                        </option>

                        <option>
                          General Dentistry
                        </option>

                        <option>
                          Root Canal Care
                        </option>

                        <option>
                          Smile Enhancement
                        </option>

                        <option>
                          Preventive Care
                        </option>

                        <option>
                          Consultation
                        </option>

                      </select>

                    </label>

                  </div>


                  <button
                    className="submit-btn"
                    type="submit"
                  >
                    Request Appointment

                    <span>
                      <Arrow />
                    </span>
                  </button>

                  <p className="form-note">
                    Demo booking form — no information is
                    sent anywhere yet.
                  </p>

                </form>
              </>

            ) : (

              <div className="success-state">

                <div className="success-icon">
                  ✓
                </div>

                <div className="modal-eyebrow">
                  <span />
                  REQUEST RECEIVED
                  <span />
                </div>

                <h2>
                  You're all
                  <br />
                  <em>set.</em>
                </h2>

                <p>
                  Your appointment request has been received
                  in this demo. This can later be connected
                  to the clinic's actual booking system.
                </p>

                <button
                  className="submit-btn"
                  type="button"
                  onClick={closeModal}
                >
                  Back to website

                  <span>
                    <Arrow />
                  </span>
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default App;
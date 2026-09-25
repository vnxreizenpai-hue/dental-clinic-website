import { useEffect, useState } from "react";
import "./App.css";

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

const Star = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3.8l2.55 5.17 5.71.83-4.13 4.03.98 5.69L12 16.83 6.89 19.52l.98-5.69-4.13-4.03.98-5.69 5.71-.83L12 3.8z" />
  </svg>
);

const treatments = [
  {
    number: "01",
    title: "General Dentistry",
    text: "Thoughtful everyday dental care focused on prevention, comfort and long-term oral health.",
  },
  {
    number: "02",
    title: "Root Canal Care",
    text: "Carefully planned treatment designed to protect your natural tooth and make the experience easier.",
  },
  {
    number: "03",
    title: "Smile Enhancement",
    text: "Cosmetic treatments designed around a natural-looking and confident smile.",
  },
  {
    number: "04",
    title: "Preventive Care",
    text: "Regular examinations and professional cleaning to help maintain your oral health.",
  },
];

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
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="site">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-mark">✦</span>
          <span>DENTAL CARE</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#treatments">Treatments</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="nav-appointment" onClick={openModal}>
          <span>Book Appointment</span>
          <Arrow />
        </button>
      </header>

      <main>

        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-overlay" />

          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          {/* Floating glass objects */}
          <div className="hero-floating hero-floating-one">
            <span className="floating-symbol">✦</span>
            <div>
              <small>CARE</small>
              <strong>Comfort first</strong>
            </div>
          </div>

          <div className="hero-floating hero-floating-two">
            <span className="floating-number">01</span>
            <div>
              <small>APPROACH</small>
              <strong>Patient-first</strong>
            </div>
          </div>

          <div className="hero-content reveal">
            <p className="eyebrow">A NEW STANDARD OF DENTAL CARE</p>

            <h1>
              Trusted dental care
              <span>for every generation.</span>
            </h1>

            <p className="hero-description">
              Modern dentistry with a calmer, more thoughtful approach —
              designed around your comfort and long-term smile health.
            </p>

            <div className="hero-actions">
              <button className="primary-button" onClick={openModal}>
                <span>Book Appointment</span>

                <span className="button-circle">
                  <Arrow />
                </span>
              </button>

              <a href="#treatments" className="text-button">
                Explore treatments
                <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-bottom reveal">
            <div className="hero-bottom-item">
              <span>01</span>
              <p>Personalized care</p>
            </div>

            <div className="hero-bottom-item">
              <span>02</span>
              <p>Modern technology</p>
            </div>

            <div className="hero-bottom-item">
              <span>03</span>
              <p>Patient-first experience</p>
            </div>
          </div>

          <div className="scroll-label">
            <span />
            Scroll to explore
          </div>
        </section>

        {/* INTRO */}
        <section className="intro section-pad">
          <div className="section-kicker reveal">
            THE DIFFERENCE
          </div>

          <div className="intro-grid">
            <h2 className="reveal">
              Dentistry should feel
              <em>different.</em>
            </h2>

            <div className="intro-copy reveal">
              <p>
                A dental visit should not feel rushed or intimidating.
                Every part of the experience should feel considered —
                from the first conversation to the treatment itself.
              </p>

              <a href="#about" className="inline-link">
                Discover our approach
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* TREATMENTS */}
        <section className="treatments section-pad" id="treatments">

          <div className="section-heading reveal">
            <div>
              <div className="section-kicker">
                WHAT WE OFFER
              </div>

              <h2>
                Care built around
                <br />
                your smile.
              </h2>
            </div>

            <p>
              From everyday preventive care to focused treatments,
              every service begins with understanding what you need.
            </p>
          </div>

          <div className="treatment-layout">

            <div className="treatment-feature reveal">
              <div className="treatment-feature-image" />
              <div className="treatment-feature-overlay" />

              <div className="feature-floating">
                <span>✦</span>
                <div>
                  <small>SMILE CARE</small>
                  <strong>Thoughtful by design</strong>
                </div>
              </div>

              <div className="feature-content">
                <span>01 / CORE CARE</span>

                <h3>
                  Healthy teeth.
                  <br />
                  Confident smile.
                </h3>

                <p>
                  A modern approach to everyday dental health,
                  focused on prevention and lasting care.
                </p>
              </div>
            </div>

            <div className="treatment-list">
              {treatments.map((item) => (
                <article
                  className="treatment-row reveal"
                  key={item.number}
                >
                  <span className="treatment-number">
                    {item.number}
                  </span>

                  <div className="treatment-info">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <span className="treatment-arrow">
                    <Arrow />
                  </span>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section className="about section-pad" id="about">

          <div className="about-visual reveal">
            <div className="about-image" />

            <div className="about-glass">
              <span>THE EXPERIENCE</span>
              <strong>Calm. Clear. Considered.</strong>
            </div>

            <div className="about-orb" />
          </div>

          <div className="about-content reveal">

            <div className="section-kicker">
              OUR APPROACH
            </div>

            <h2>
              Modern care.
              <br />
              <em>Human touch.</em>
            </h2>

            <p className="about-lead">
              Good dentistry is about more than treating a tooth.
              It is about creating an experience where patients feel
              informed, comfortable and cared for.
            </p>

            <div className="about-points">

              <div>
                <span>01</span>
                <p>
                  Clear explanations before every treatment.
                </p>
              </div>

              <div>
                <span>02</span>
                <p>
                  A calm environment designed around comfort.
                </p>
              </div>

              <div>
                <span>03</span>
                <p>
                  Technology used where it genuinely improves care.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* TRUST */}
        <section className="trust section-pad">

          <div className="trust-top reveal">

            <div>
              <div className="section-kicker">
                WHY IT MATTERS
              </div>

              <h2>
                Built around
                <br />
                <em>trust.</em>
              </h2>
            </div>

            <div className="trust-intro">

              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} />
                ))}
              </div>

              <p>
                A better dental experience starts with listening,
                explaining clearly and putting patient comfort first.
              </p>

            </div>

          </div>

          <div className="trust-grid">

            <article className="trust-card reveal">
              <span>01</span>
              <div className="trust-icon">↗</div>
              <h3>Clear communication</h3>
              <p>
                Understand your treatment, your options and
                what happens next.
              </p>
            </article>

            <article className="trust-card reveal">
              <span>02</span>
              <div className="trust-icon">◌</div>
              <h3>Comfort first</h3>
              <p>
                A calmer experience from consultation
                through treatment.
              </p>
            </article>

            <article className="trust-card reveal">
              <span>03</span>
              <div className="trust-icon">✦</div>
              <h3>Thoughtful technology</h3>
              <p>
                Modern tools used to support precision
                and better care.
              </p>
            </article>

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta" id="contact">

          <div className="final-ambient" />

          <div className="final-glow final-glow-one" />
          <div className="final-glow final-glow-two" />

          <div className="final-ring final-ring-one" />
          <div className="final-ring final-ring-two" />

          <div className="floating-object floating-object-one">
            <span>✦</span>
            <strong>Comfort first</strong>
          </div>

          <div className="floating-object floating-object-two">
            <span>01</span>
            <strong>Personal care</strong>
          </div>

          <div className="floating-object floating-object-three">
            <span className="mini-dot" />
            <strong>Modern dentistry</strong>
          </div>

          <div className="final-center-orb">
            <div className="orb-inner">
              <span>✦</span>
            </div>
          </div>

          <div className="final-cta-content reveal">

            <div className="section-kicker">
              YOUR NEXT VISIT
            </div>

            <h2>
              Your smile deserves
              <em>thoughtful care.</em>
            </h2>

            <p>
              Ready to take the next step?
              Start with a simple conversation about your dental care.
            </p>

            <button
              className="primary-button"
              onClick={openModal}
            >
              <span>Book Appointment</span>

              <span className="button-circle">
                <Arrow />
              </span>
            </button>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-top">

          <div className="footer-brand">

            <a href="#home" className="brand">
              <span className="brand-mark">✦</span>
              <span>DENTAL CARE</span>
            </a>

            <p>
              Modern dentistry with a more thoughtful,
              human approach.
            </p>

          </div>

          <div className="footer-links">

            <div>
              <span>EXPLORE</span>
              <a href="#home">Home</a>
              <a href="#treatments">Treatments</a>
              <a href="#about">About</a>
            </div>

            <div>
              <span>VISIT</span>
              <a href="#contact">Contact</a>

              <button onClick={openModal}>
                Book Appointment
              </button>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 Dental Care</span>
          <span>
            Thoughtful dentistry, beautifully delivered.
          </span>
        </div>

      </footer>

      {/* APPOINTMENT MODAL */}
      {modal && (
        <div
          className="modal-backdrop"
          onMouseDown={closeModal}
        >
          <div
            className="appointment-modal"
            onMouseDown={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={closeModal}
            >
              ×
            </button>

            {!success ? (
              <>
                <div className="modal-heading">

                  <div className="section-kicker">
                    APPOINTMENT
                  </div>

                  <h2>
                    Let's plan your visit.
                  </h2>

                  <p>
                    Tell us a little about your preferred appointment.
                  </p>

                </div>

                <form onSubmit={submitForm}>

                  <label>
                    Name
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label>
                    Phone
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      required
                    />
                  </label>

                  <div className="form-two">

                    <label>
                      Preferred date
                      <input
                        type="date"
                        required
                      />
                    </label>

                    <label>
                      Treatment
                      <select defaultValue="" required>
                        <option value="" disabled>
                          Select
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
                      </select>
                    </label>

                  </div>

                  <button
                    className="modal-submit"
                    type="submit"
                  >
                    Request Appointment
                    <Arrow />
                  </button>

                </form>

                <small>
                  Demo booking form — no information is sent anywhere yet.
                </small>
              </>
            ) : (
              <div className="success-state">

                <div className="success-icon">
                  ✓
                </div>

                <div className="section-kicker">
                  REQUEST RECEIVED
                </div>

                <h2>Thank you.</h2>

                <p>
                  Your appointment request has been recorded
                  in this demo.
                </p>

                <button
                  className="modal-submit"
                  onClick={closeModal}
                >
                  Close
                  <Arrow />
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
import { useForm, ValidationError } from "@formspree/react";
import "../styles/contact.css";
import { SOCIAL_LINKS } from "../../../src/data/socialLinks";

const ContactContent = () => {
  const [state, handleSubmit] = useForm("xkjgdgoq");

  return (
    <div className="contact-content">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="contact-header">
        <div className="contact-heading">
          <span className="contact-eyebrow">CONTACT / 07</span>

          <h2>
            Let's build
            <br />
            something
            <br />
            <span>useful.</span>
          </h2>
        </div>

        <div className="contact-intro">
          <span className="contact-intro-label">START A CONVERSATION</span>

          <p>
            Have a project, idea, or technical problem in mind? Tell me what
            you're working on and let's figure out what comes next.
          </p>

          <div className="contact-availability">
            <span className="availability-dot" />
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>
        </div>
      </header>

      {/* =====================================================
          CONTACT LAYOUT
      ===================================================== */}

      <section className="contact-layout">
        {/* ===================================================
            INFORMATION
        =================================================== */}

        <aside className="contact-details">
          <div className="contact-detail">
            <span className="contact-detail-number">01</span>

            <div>
              <span className="contact-label">EMAIL</span>

              <a href="mailto:brypaulopez@gmail.com">brypaulopez@gmail.com</a>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-detail-number">02</span>

            <div>
              <span className="contact-label">BASED IN</span>

              <p>Philippines</p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-detail-number">03</span>

            <div>
              <span className="contact-label">OPEN TO</span>

              <p>
                Web Development
                <br />
                Project Management
                <br />
                Technical Coordination
              </p>
            </div>
          </div>

          {/* =================================================
              SOCIAL LINKS
          ================================================= */}

          <div className="contact-social">
            <div className="contact-social-heading">
              <span>04</span>
              <span>FIND / CONTACT ME</span>
            </div>

            <div className="contact-links">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{social.name}</span>
                  <span className="contact-link-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* ===================================================
            FORM
        =================================================== */}

        <div className="contact-form-wrapper">
          <div className="contact-form-heading">
            <span>05 / MESSAGE</span>

            <p>I'll read through your message and get back to you.</p>
          </div>

          {state.succeeded ? (
            <div className="contact-success">
              <span className="contact-success-number">✓</span>

              <div>
                <h3>MESSAGE SENT.</h3>

                <p>
                  Thanks for reaching out. I've received your message and I'll
                  get back to you as soon as possible.
                </p>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* NAME + EMAIL */}

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="name">YOUR NAME</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    disabled={state.submitting}
                  />

                  <ValidationError
                    field="name"
                    prefix="Name"
                    errors={state.errors}
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="email">YOUR EMAIL</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    disabled={state.submitting}
                  />

                  <ValidationError
                    field="email"
                    prefix="Email"
                    errors={state.errors}
                  />
                </div>
              </div>

              {/* MESSAGE */}

              <div className="contact-form-group">
                <label htmlFor="message">MESSAGE</label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about your project..."
                  required
                  disabled={state.submitting}
                />

                <ValidationError
                  field="message"
                  prefix="Message"
                  errors={state.errors}
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit"
                disabled={state.submitting}
              >
                <span>{state.submitting ? "SENDING..." : "SEND MESSAGE"}</span>

                <span className="contact-submit-arrow">
                  {state.submitting ? "..." : "↗"}
                </span>
              </button>

              {/* GENERAL ERROR */}

              {state.errors && (
                <p className="contact-form-message contact-form-error">
                  Something went wrong while sending your message. Please try
                  again or email me directly.
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="contact-footer">
        <div>
          <span className="contact-footer-name">BRYAN LOPEZ</span>

          <span className="contact-footer-role">
            DEVELOPER · PROJECT MANAGER
          </span>
        </div>

        <span className="contact-footer-message">
          LET'S MAKE SOMETHING USEFUL.
        </span>
      </footer>
    </div>
  );
};

export default ContactContent;

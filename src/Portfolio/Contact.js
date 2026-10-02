import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-heading">
        <p className="section-tag">CONTACT ME</p>

        <h2>
          Let's <span>Work Together</span>
        </h2>

        <p className="contact-subtitle">
          Have a project or opportunity in mind? Feel free to get in touch
          with me.
        </p>
      </div>

      <div className="contact-content">

        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            I'm always open to discussing new projects, ideas or
            opportunities.
          </p>

          <div className="contact-item">
            <strong>Email</strong>
            <span>sonalikasisodiya69@gmail.com</span>
          </div>

          <div className="contact-item">
            <strong>Location</strong>
            <span>Indore</span>
          </div>
        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message">
          </textarea>

          <button type="submit">
            Send Message
          </button>

          </form>
          </div>

          
<div className="social-links">
  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/yourusername/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>
</div>

    </section>
  );
}

export default Contact;


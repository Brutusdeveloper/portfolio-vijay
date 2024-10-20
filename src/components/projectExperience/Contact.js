import React, { Fragment } from "react";
import "../Container.scss";
const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling to the top
  };
  return (
    <section className="contactWrapper" id="contact">
      <h1>
        Let's Get in Touch:{" "}
        <span className="connectText">Ways to Connect with Me</span>
      </h1>
      <p>
        Thank you for your interest in reaching out! I'd love to hear your
        feedback, answer any questions, or discuss suggestions you may have.
        Feel free to contact me directly at vijaybrutus@gmail.com. I
        strive to respond to all messages within 24 hours, but it may take a bit
        longer during busy times.If you'd prefer to connect via social media,
        please feel free to use the links provided below.
      </p>
      <div className="socialConnect">
        <div>
          <a className="buttonHref" href="https://www.linkedin.com/in/vijayakumar-m-44b888205/">
            <img src="assets/svg/linkedin.svg" />
            <span>Follow on LinkedIn</span>
          </a>
        </div>
        <div>
          <a className="buttonHref" href="mailto:vijaybrutus@gmail.com">
            <img src="assets/svg/mail.svg" />
            <span>vijaybrutus@gmail.com</span>
          </a>
        </div>
      </div>
      <hr/>
      <div className="footerScroll pointerCursor" onClick={scrollToTop}>
        <span className="material-icons-outlined arrowupward">arrow_upward</span>
        <span>Go back to top</span>
      </div>
    </section>
  );
};
export default Contact;

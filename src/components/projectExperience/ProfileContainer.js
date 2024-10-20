import React, { Fragment } from "react";
import "./projectExperience.scss";
import { scrollToSection } from "../../utils/utils";

const ProfileContainer = () => {
  return (
    <Fragment>
      <div className="profileContainer">
        <div>
          <h2 className="mb-3">Frontend Developer</h2>
          <h1>Vijayakumar M</h1>
          <p className="profileDescription">
            As a dedicated software engineer with a strong focus on ReactJS and
            Next.js, I specialize in crafting dynamic and intuitive web
            applications. I have a proven track record of building scalable,
            secure, and efficient solutions, utilizing a diverse set of
            frameworks and technologies to address the unique needs of each
            project. I thrive on tackling complex challenges and am committed to
            continuous learning, ensuring that I remain at the forefront of
            industry advancements. My passion lies in writing clean,
            maintainable code that adheres to best practices and industry
            standards, ultimately delivering exceptional user experiences.
          </p>
          <div className="routingElement">
            <a id="projects" onClick={() => scrollToSection("projects")}>
              Projects
            </a>
            <a href="/assets/pdf/Vijayresume.pdf" download="Vijayresume.pdf">
              Resume
            </a>
            <a
              className="contact  duration-300  transition-all"
              onClick={() => scrollToSection("contact")}
            >
              Contact
              <span className="material-icons pointerCursor">
                chevron_right
              </span>
            </a>
          </div>
        </div>

        <div>
          <img
            className="profileimage"
            src="/assets/images/vijay_photo.jpg"
            alt="profilePhoto"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default ProfileContainer;

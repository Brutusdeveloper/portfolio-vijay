import React, { Fragment } from "react";
import Certifications from "./Certifications";
import Education from "./Experience";
import Experience from "./Education";
import "./Qualifications.scss";

const QualificationIndex = () => {
  return (
    <section className="QualificationWrapper mb-5">
      <div style={{ width: "100%" }}>
        <Experience />
        <Certifications />
      </div>
        <Education />
    </section>
  );
};

export default QualificationIndex;

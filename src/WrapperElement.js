import React, { Fragment, useState } from "react";
import ProfileContainer from "./components/projectExperience/ProfileContainer";
import Contact from "./components/projectExperience/Contact";
import TechnologiesUsed from "./components/TechnologiesCard";
import EducationAndExperience from "./components/Qualifications/QualificationsIndex";
import Projects from "./components/projectExperience/ProjectExperience";
const WrapperElement = () => {
  const [state, setState] = useState(true);
  return (
    <Fragment>
      <div className="wrapperContainer">
        <div className={`dark ${state ? "light": ""}`}>
          <span
            className="material-icons pointerCursor"
            onClick={() => setState(!state)}
          >
            brightness_1
          </span>
          <ProfileContainer />
          
        </div>
      </div>
    </Fragment>
  );
};
export default WrapperElement;

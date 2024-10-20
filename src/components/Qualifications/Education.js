import React, { Fragment } from "react";
import "./Qualifications.scss";
import HeadingWithImage from "../../utils/HeadingWithImage";
import EducationJson from "../../utils/JSON/Education.json";
import TimeLineWrapper from "../../utils/TimelineWrapper";
const Education = () => {
  return (
    <Fragment>
      <div className="educationWrapper">
        <HeadingWithImage img={"education"} heading={"Education"} />
        {EducationJson.map((loop, index) => {
          return (
            <TimeLineWrapper
              key={index}
              year={loop.year}
              img={loop.img}
              altText={"vijay"}
            >
              <h3>{loop.name}</h3>
              <span className="subHeading">{loop.degree}</span>
            </TimeLineWrapper>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Education;

import React, { Fragment } from "react";
import "./Qualifications.scss";
import ExperienceJson from "../../utils/JSON/ExperienceJson.json";
import HeadingWithImage from "../../utils/HeadingWithImage";
import TimeLineWrapper from "../../utils/TimelineWrapper";

const Experience = () => {
  return (
    <Fragment>
      <div className="educationWrapper experienceWrapper">
        <HeadingWithImage img={"experience"} heading={"Experience"} />
        <div className="scrollExperience">
          {ExperienceJson.map((loop, index) => {
            return (
              <TimeLineWrapper
                key={index}
                year={loop.year}
                img={loop.img}
                altText={"vijay"}
                imgclassName={loop.style}
              >
                <div>
                  {loop.list.map((innerloop, innerIndex) => {
                    return (
                      <div
                        key={innerIndex}
                        className="listdescription d-flex gap-4 listdescription"
                      >
                        <img src="assets/svg/successIcon.svg" />
                        <span>{innerloop}</span>
                      </div>
                    );
                  })}
                </div>
              </TimeLineWrapper>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;

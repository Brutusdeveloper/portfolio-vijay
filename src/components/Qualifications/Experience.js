import React, { Fragment } from "react";
import "./Qualifications.scss";
import ExperienceJson from "../../utils/JSON/ExperienceJson.json";
import HeadingWithImage from "../../utils/HeadingWithImage";
import TimeLineWrapper from "../../utils/TimelineWrapper";
import ExperienceHeadingImg from "../../assets/svg/experience.svg";
import TCS from "../../assets/images/tcs.png";
import Zionext from "../../assets/images/zionext.jpg";
import Dmi from "../../assets/images/DMI.jpg";
import successIcon from "../../assets/svg/success.png"

const Experience = () => {
  const CompanyLogo =[
    TCS,
    Zionext,
    Dmi,
  ] 
  return (
    <Fragment>
      <div className="educationWrapper experienceWrapper">
        <HeadingWithImage img={ExperienceHeadingImg} heading={"Experience"} />
        <div className="scrollExperience">
          {ExperienceJson.map((loop, index) => {
            return (
              <TimeLineWrapper
                key={index}
                year={loop.year}
                img={CompanyLogo[index]}
                altText={"logo"}
                imgclassName={loop.style}
              >
                <div>
                  {loop.list.map((innerloop, innerIndex) => {
                    return (
                      <div
                        key={innerIndex}
                        className="listdescription d-flex gap-4 item-center  listdescription"
                      >
                        <img src={successIcon} />
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

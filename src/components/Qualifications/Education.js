import React, { Fragment } from "react";
import "./Qualifications.scss";
import HeadingWithImage from "../../utils/HeadingWithImage";
import TimeLineWrapper from "../../utils/TimelineWrapper";
import CollegeImage from "../../assets/images/KSRCT.png"
import Adhiyaman from "../../assets/images/adhyaman.png"
const Education = () => {

  const EducationCertification = [
    {
      "name": "K.S.Rangasamy College of Technology",
      "img": CollegeImage,
      "alt": "collegeImage",
      "degree": "Bachelor of Mechanical Engineering",
      "year": "2014 - 2018"
    },
    {
      "name": "Adhiyaman Matric Hr.Sec.School",
      "img": Adhiyaman,
      "alt": "SchoolImg",
      "degree": "Higher Secondary",
      "year": "2012 - 2014"
    }
  ]

  return (
    <Fragment>
      <div className="educationWrapper">
        <HeadingWithImage img={"education"} heading={"Education"} />
        {EducationCertification.map((loop, index) => {
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

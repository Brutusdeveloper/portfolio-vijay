import React, { Fragment } from "react";
import CertificationsJson from "../../utils/JSON/Certification.json";
import HeadingWithImage from "../../utils/HeadingWithImage";
import "./Qualifications.scss";
import { unique } from "../../utils/JSON/UniqueId";
import microsoft from "../../assets/svg/microsoft.svg";
import CertificateHeadingImage from "../../assets/svg/certificate.svg"
const Certifications = () => {
  return (
    <Fragment>
      <div className="CertificationWrapper" key={unique()}>
        <HeadingWithImage img={CertificateHeadingImage} heading={"Certification"}/>
        {CertificationsJson.map((loop, index) => {
          return (
            <Fragment>
              <div key={index} className="d-flex item-center gap-4 my-2 ml-5">
                <img
                  className="listing"
                  src={microsoft}
                  alt="microsoftimg"
                />
                <span className="fw-bold400">{loop.name}</span>
                <span className="listText">{loop.content}</span>
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Certifications;

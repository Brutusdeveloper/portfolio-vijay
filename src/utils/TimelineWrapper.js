import { Fragment } from "react";
import { unique } from "./JSON/UniqueId";

const TimeLineWrapper = ({year, img, altText, children, imgclassName}) => {
  return (
    <Fragment>
      <div className="timeline" key={unique()}>
        <div className="timeline-item">
          <div className="year-range">{year}</div>
          <div className="content d-flex item-center gap-4">
            <img src={img} alt={altText} className={imgclassName}/>
            <div className="instituteDetails institudeHeading">{children}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TimeLineWrapper;

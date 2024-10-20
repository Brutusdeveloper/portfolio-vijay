import { Fragment } from "react";
import { unique } from "./JSON/UniqueId";

const HeadingWithImage = ({img, heading}) => {
  return (
    <Fragment>
      <div className="d-flex item-center gap-4" key={unique()}>
        <img src={`assets/svg/${img}.svg`} />
        <h2>{heading}</h2>
      </div>
    </Fragment>
  );
};
export default HeadingWithImage;

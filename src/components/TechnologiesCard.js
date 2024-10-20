import "./Container.scss";
import TechnologiesCard from "../utils/JSON/TechnologiesCard.json"
const TechnologiesUsed = () => {
  return (
    <div className="TechonologieCard mb-5 text-center">
        <h2 className="mb-3">Technologies worked</h2>
      <div className="grid-container">
        {TechnologiesCard.map((loop, id) => {
          return (
            <div id={id} className="grid-item" key={id}>
              <img src={loop.icon}/>
              <span>{loop.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TechnologiesUsed;

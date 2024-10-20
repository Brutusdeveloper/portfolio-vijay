import React, { Fragment } from "react";
import "./projectExperience.scss";
import ProjectJson from "../../utils/JSON/Projects.json";
import { useTheme } from "../../App";
import { unique } from "../../utils/JSON/UniqueId";
const Projects = () => {
  const {isDarkMode} = useTheme();
  return (
    <Fragment>
      <div className="projectsWrapper" id="projects" key={unique()}>
        {ProjectJson.map((loop, key) => {
          return (
            <div key={key} className={`projectItemList card ${!isDarkMode ? "darkCard" :""}`}>
              <h2>{loop.title}</h2>
              <p>{loop.content}</p>
              <div className="d-flex flexWrap gap-3 innerCardsWrapper">
                {loop.usedSkills.map((innerloop, innerkey) => {
                  return (
                    <div className="innerCards">
                      <span>{innerloop}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default Projects;

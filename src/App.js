import React, { Fragment, useState, createContext, useContext } from "react";
import "./style/index.scss";
import ProfileContainer from "./components/projectExperience/ProfileContainer";
import Contact from "./components/projectExperience/Contact";
import TechnologiesUsed from "./components/TechnologiesCard";
import EducationAndExperience from "./components/Qualifications/QualificationsIndex";
import Projects from "./components/projectExperience/ProjectExperience";

const ThemeContext = createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      <div className="wrapperContainer">
        <div className={`dark ${isDarkMode ? "light" : ""}`}>
          <span
            className="material-icons pointerCursor"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            brightness_1
          </span>
          <ProfileContainer />
          <Projects />
          <EducationAndExperience />
          <TechnologiesUsed />
          <Contact />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
export default App;

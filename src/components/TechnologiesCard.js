import "./Container.scss";
import html from "../assets/svg/html.svg";
import CSS from "../assets/svg/css.svg";
import Javascript from "../assets/svg/js.svg";
import TypeScript from "../assets/svg/typescript.svg";
import SASS from "../assets/svg/sass.svg";
import react from "../assets/svg/react.svg";
import nextJs from "../assets/svg/nextJs.svg";
import webpack from "../assets/svg/webpack.svg";
import node from "../assets/svg/node.svg";
import jest from "../assets/svg/jest.svg";
import materialUI from "../assets/svg/materialUI.svg";
import antDesign from "../assets/svg/antdesign.svg";
import gitlab from "../assets/svg/gitlab.svg";
import azure from "../assets/svg/azure.svg";
const TechnologiesUsed = () => {

  const TechnologiesCard =[
    {
      "name": "HTML",
      "icon": html,
      "id": 1
    },
    {
      "name": "CSS",
      "icon": CSS,
      "id": 2
    },
    {
      "name": "Javascript",
      "icon": Javascript,
      "id": 3
    },
    {
      "name": "TypeScript",
      "icon": TypeScript,
      "id": 4
    },
    {
      "name": "SASS",
      "icon": SASS,
      "id": 5
    },
    {
      "name": "React JS",
      "icon": react,
      "id": 6
    },
    {
      "name": "Next JS",
      "icon": nextJs,
      "id": 7
    },  {
      "name": "Webpack",
      "icon": webpack,
      "id": 8
    },  {
      "name": "Node Js",
      "icon": node,
      "id": 9
    },  {
      "name": "Jest",
      "icon": jest,
      "id": 10
    } , {
      "name": "Material UI",
      "icon": materialUI,
      "id": 11
    },  {
      "name": "Ant Design",
      "icon": antDesign,
      "id": 12
    },
    {
      "name": "GitLab",
      "icon": gitlab,
      "id": 13
    },
    {
      "name": "Azure",
      "icon": azure,
      "id": 14
    }
  
  ]
  


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

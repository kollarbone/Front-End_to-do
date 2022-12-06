import "./Projects.css";
import { NavLink } from "react-router-dom";

export default function Propjects(props) {
  return (
    <div className="projects">
      <div className="header">
        <span>PROJECTS</span>
      </div>
      {props.store.map((item) => (
        <NavLink className="link" to={"/tasks/" + item.projectID}>
          <div className="project">
            <span className="project_name">{item.projectName}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

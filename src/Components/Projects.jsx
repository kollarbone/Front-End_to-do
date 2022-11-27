import "./Projects.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function Propjects(props) {
  return (
    <div className="projects">
      <div className="header">
        <span>PROJECTS</span>
        <MdOutlineAdd className="add_icon" />
      </div>
      {props.store.map((item) => (
        <NavLink className="link" to={"/tasks/" + item.projectID}>
          <div className="project">
            <RiDeleteBinLine className="close_icon" />
            <span className="project_name">{item.projectName}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

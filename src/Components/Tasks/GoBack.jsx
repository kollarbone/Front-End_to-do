import React from "react";
import "./Tasks.css";
import { FiChevronLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
export default function GoBack(props) {
  return (
    <div className="buttonBack">
      <NavLink className="link" to="/">
        <button className="button_back">
          <FiChevronLeft />
        </button>
      </NavLink>
    </div>
  );
}

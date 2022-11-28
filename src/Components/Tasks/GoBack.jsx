import React from "react";
import "./Tasks.css";
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function GoBack(props) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="buttonBack">
      <button className="button_back" onClick={goBack}>
        <FiChevronLeft />
      </button>
    </div>
  );
}

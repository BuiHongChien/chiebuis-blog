import React from "react";
import { Link } from "react-router-dom";

import avatar from "../../images/avatar.jpg";
import { interests, about, plans, goals } from "../App";

import "./Sidebar.css";

const Sidebar = ({ page }) => {
  const renderOptions = (page, options) => {
    return options.map((option) => {
      return (
        <div>
          <a href={`#${option}`} className={`a a-${page==="goals" | page==="about"?"goals-about":"plans-interests"}`}>
            {option.replace('-',' ').toUpperCase()}
          </a>
        </div>
      );
    });
  };

  return (
    <div className={`${page==="goals" | page==="about"?"goals-about":"plans-interests"}-sidebar sidebar`}>
      <div className="avatar-sidebar">
        <img src={avatar} alt="avatar" className="image"></img>
        <div className={`sidebar-overlay ${page==="goals" | page==="about"?"goals-about":"plans-interests"}-overlay`}>
          <Link to="/" className={`options-text ${page==="goals" | page==="about"?"goals-about":"plans-interests"}-text`}>
            Home
          </Link>
        </div>
      </div>
      {page === "about"
        ? renderOptions("about", about)
        : page === "plans"
        ? renderOptions("plans", plans)
        : page === "goals"
        ? renderOptions("goals", goals)
        : renderOptions("interests", interests)}
    </div>
  );
};

export default Sidebar;

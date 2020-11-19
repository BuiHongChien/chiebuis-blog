import React, { useState } from "react";
import { Link } from "react-router-dom";

import avatar from "../../../images/avatar.jpg";
import goals from "../../../images/goals.png";
import about from "../../../images/about.png";
import plans from "../../../images/plans.png";
import interests from "../../../images/interests.png";
import { fb, vk, ins, github } from "../links";

import "./Home.css";


const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const renderedMenu = () => {
    return (
      <React.Fragment>
        <div className="menu-options">
          <div className="options goals">
            <img src={goals} alt="goals" className="goals-image"></img>
            <div className="overlay goals-overlay">
              <Link to="/goals" className="text goals-text">
                #Goals
              </Link>
            </div>
          </div>

          <div className="options option plans">
            <img src={plans} alt="plans" className="plans-image"></img>
            <div className="overlay plans-overlay">
              <Link to="/plans" className="text plans-text">
                #Plans
              </Link>
            </div>
          </div>
        </div>

        <div className="avatar avatar-menu">
          <img src={avatar} alt="avatar" className="image"></img>
          <div className="overlay menu-overlay">
            <button
              className="text home-text"
              onClick={() => setShowMenu(!showMenu)}
            >
              Home
            </button>
          </div>
        </div>

        <div className="menu-options">
          <div className="options option interests">
            <img
              src={interests}
              alt="interests"
              className="interests-image"
            ></img>
            <div className="overlay interests-overlay">
              <Link to="/interests" className="text interests-text">
                #Interests
              </Link>
            </div>
          </div>

          <div className="options option about">
            <img src={about} alt="about" className="about-image"></img>
            <div className="overlay about-overlay">
              <Link to="/about" className="text about-text">
                #About
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const renderedHome = () => {
    return (
      <React.Fragment>
        <div className="avatar avatar-home">
          <img src={avatar} alt="avatar" className="image"></img>
          <div className="overlay menu-overlay">
            <button
              className="text menu-text"
              onClick={() => setShowMenu(!showMenu)}
            >
              #Menu
            </button>
          </div>
        </div>

        <div className="welcome">
          <p style={{ fontSize: "28px" }}>Bui Hong Chien</p>
          <p style={{ fontSize: "20px" }}>Welcome to my blog</p>
        </div>
      </React.Fragment>
    );
  };


  const renderedContactWindow = () => {
    return (
      <div className="contact-container">
        <div className="contact-header">
          <button
            className="btn-contact contact-close"
            onClick={() => setShowContact(false)}
          >
            X
          </button>
        </div>

        <div className="contact-list">
          <img
            src={avatar}
            alt="avatar"
            className="contact-avatar"
            onClick={()=>window.open(avatar)}
          ></img>

          <ul>
            <li>
              <i class="fab fa-google-plus"></i>chienbui211@gmail.com
            </li>
            <li>
              <i class="fas fa-phone-square-alt"></i>+(79) 313 557 094
            </li>
            <li>
              <i class="fab fa-facebook-square"></i>
              <a href={fb} target="_blank">
                ChienBui
              </a>
            </li>

            <li>
              <i class="fa fa-instagram"></i>
              <a href={ins} target="_blank">
                buichien.211
              </a>
            </li>
            <li>
              <i class="fa fa-github"></i>
              <a href={github} target="_blank">
                BuiHongChien
              </a>
            </li>
            <li>
              <i class="fab fa-vk"></i>
              <a href={vk} target="_blank">
                BuiChien
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="home">
      {showMenu ? renderedMenu() : renderedHome()}
      <button
        className="btn-contact contact-open"
        onClick={() => setShowContact(true)}
      >
        Contact Me
      </button>
      {showContact ? renderedContactWindow() : null}
    </div>
  );
};

export default Home;

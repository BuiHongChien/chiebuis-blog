import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

import avatar from "../../../images/avatar.jpg";
import goals from "../../../images/goals.png";
import about from "../../../images/about.png";
import plans from "../../../images/plans.png";
import interests from "../../../images/interests.png";
import { fb, vk, ins, github } from "../links";
import { randomMsg } from "../../App";

import "./Home.css";
import { render } from "@testing-library/react";

let perMsgs = [];
let robotMsgs = [];

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [running, setRunning] = useState(false);

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

  const renderedAvatar = () => {
    return (
      <div className="dark-overlay">
        <div className="show-avatar">
          <img src={avatar} alt="avatar" className="avatar-open" />
          <button
            className="btn-contact contact-close"
            onClick={() => setShowAvatar(false)}
          >
            X
          </button>
        </div>
      </div>
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
            onClick={() => setShowAvatar(true)}
          ></img>

          <ul>
            <li>
              <i className="fab fa-google-plus"></i>chienbui211@gmail.com
            </li>
            <li>
              <i className="fas fa-phone-square-alt"></i>+(79) 313 557 094
            </li>
            <li>
              <i className="fab fa-facebook-square"></i>
              <a href={fb} target="_blank">
                ChienBui
              </a>
            </li>

            <li>
              <i className="fa fa-instagram"></i>
              <a href={ins} target="_blank">
                buichien.211
              </a>
            </li>
            <li>
              <i className="fa fa-github"></i>
              <a href={github} target="_blank">
                BuiHongChien
              </a>
            </li>
            <li>
              <i className="fab fa-vk"></i>
              <a href={vk} target="_blank">
                BuiChien
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const addPerMsg = (id) => {
    const div = document.createElement("div");
    div.innerHTML = `
                <div class="message-per-container id-${id}">
                  <button class="btn-del del-${id}">
                  X
                  </button>
                  <div class="message message-per">${perMsgs[id]}</div>
                </div>`;
    document.querySelector(".messages-list").appendChild(div);

    const del = document.querySelector(`.id-${id}`);
    document
      .querySelector(`.del-${id}`)
      .addEventListener("click", function (e) {
        e.preventDefault();
        del.style.display = "none";
      });
  };

  const addRobotMsg = (id) => {
    let div = document.createElement("div");
    div.innerHTML = `
              <div class="message-robot-container robot-${id}">
                <div class="message message-robot">${robotMsgs[id]}</div>
              </div>
    `;
    document.querySelector(".messages-list").appendChild(div);
    setRunning(false);
  };

  const btnSendOnClick = (e) => {
    e.preventDefault();
    if (running) return;

    perMsgs.push(inputMessage);
    setInputMessage("");

    setRunning(true);

    addPerMsg(perMsgs.length - 1);

    const adj =
      randomMsg.adjs[Math.floor(Math.random() * randomMsg.adjs.length)];
    const noun =
      randomMsg.nouns[Math.floor(Math.random() * randomMsg.nouns.length)];
    const verb =
      randomMsg.verbs[Math.floor(Math.random() * randomMsg.verbs.length)];
    const robotMsg = "A " + adj + " " + noun + " " + verb;
    robotMsgs.push(robotMsg);
    window.setTimeout(addRobotMsg, 1000, robotMsgs.length - 1);
  };

  const renderedChatBot = () => {
    return (
      <div className="chatbot-container">
        <div className="contact-header">
          <i className="robot fas fa-robot"></i>
          <button
            className="btn-contact contact-close"
            onClick={() => setShowChatBot(false)}
          >
            X
          </button>
        </div>

        <div className="message-content">
          <div className="messages">
            <div className="messages-list"></div>
          </div>
          <div className="input-blank">
            <input
              autoFocus
              type="text"
              className="message-field"
              placeholder="Enter a message..."
              value={inputMessage}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (inputMessage) btnSendOnClick(e);
                  else e.preventDefault();
                }
              }}
              onChange={(e) => {
                setInputMessage(e.target.value);
              }}
            ></input>
            <button
              className="btn-send"
              onClick={inputMessage ? btnSendOnClick : null}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="home">
        {showMenu ? renderedMenu() : renderedHome()}

        <div className="window-container">
          <button
            className="btn-contact contact-open"
            onClick={() => setShowChatBot(true)}
          >
            <i className="far fa-comment-dots"></i>
          </button>
          <button
            className="btn-contact contact-open"
            onClick={() => setShowContact(true)}
          >
            Contact Me
          </button>

          {showContact ? renderedContactWindow() : null}
          {showChatBot ? renderedChatBot() : null}
        </div>
      </div>

      {showAvatar ? renderedAvatar() : null}
    </div>
  );
};

export default Home;

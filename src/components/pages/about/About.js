import React from "react";

import Sidebar from "../../sidebar/Sidebar";
import { fb, vk, ins, github } from "../links";
import "./About.css";


const About = () => {
  return (
    <div className="about-bg" id='about-page'>
      <Sidebar page="about" />
      <div className="main">
        <div className="intro">
          <p style={{ fontSize: "34px" }}>Bui Hong Chien</p>
          <i class="fas fa-laptop-code" />
          <p style={{ fontSize: "18px" }}>
            <i>Frontend developer</i>
          </p>
        </div>
        <div id="summary" className="grid grid-about">
          <div className="title">
            Summary <i class="fas fa-user-graduate" />
          </div>

          <p className="content">
            3rd year student in Programming and Information Technology, Russian
            ITMO National University
          </p>
        </div>
        <div id="education" className="grid grid-about">
          <div className="title">
            Education <i class="fas fa-graduation-cap" />
          </div>

          <p className="content">
            Information Technologies, Mechanics and Optics (ITMO) University
          </p>
        </div>
        <div id="train" className="grid grid-about">
          <div className="title">Train</div>
          <div className="list">
            <ul>
              <p style={{ textAlign: "center" }}>
                <b>Advantages</b>
              </p>
              <li>+ Enthusiasm at work</li>
              <li>+ Creativity at work</li>
              <li>+ Work hard, play hard</li>
              <li>+ Always be friendly</li>
            </ul>
            <ul>
              <p style={{ textAlign: "center" }}>
                <b>Disadvantages</b>
              </p>
              <li>- Poor qualifications</li>
              <li>- Poor foreign language skills</li>
            </ul>
          </div>
        </div>
        <div id="skills" className="grid grid-about">
          <div className="title">Skills</div>
          <div className="list">
            <ul>
              <li>
                <i class="fab fa-js" />
                JavaScript
              </li>
              <li>
                <i class="fab fa-html5" />
                HTML
              </li>
              <li>
                <i class="fab fa-css3-alt" />
                CSS
              </li>
            </ul>
            <ul>
              <li>
                <i class="fab fa-java" />
                Java
              </li>
              <li>
                <i class="fab fa-c#" />
                C#
              </li>
              <li>
                <i class="fab c-plus-plus" />
                C++
              </li>
            </ul>
          </div>
        </div>
        <div id="language" className="grid grid-about">
          <div className="title">
            Language <i class="fa fa-language" />
          </div>
          <div className="content-language">
            <p>Native Language: Vietnames</p>
            <table className="table">
              <tr>
                <th>Skills</th>
                <th>English</th>
                <th>Russian</th>
              </tr>
              <tr>
                <td>Listening</td>
                <td>
                  <i class="fa fa-check-square" />
                </td>
                <td>
                  <i class="fa fa-check-square" />
                </td>
              </tr>
              <tr>
                <td>Reading</td>
                <td>
                  <i class="fa fa-check-square" />
                </td>
                <td>
                  <i class="fa fa-check-square" />
                </td>
              </tr>
              <tr>
                <td>Speaking</td>
                <td>
                  <i class="fa fa-check-square" />
                </td>
                <td>
                  <i class="fa fa-check-square" />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div id="contact" className="grid grid-about">
          <div className="title">
            Contact <i class="fas fa-paper-plane" />
          </div>
          <div className="list">
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
            </ul>

            <ul>
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
      </div>
    </div>
  );
};

export default About;

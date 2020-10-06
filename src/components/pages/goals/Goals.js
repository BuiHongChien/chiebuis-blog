import React, { useState } from "react";

import Sidebar from "../../sidebar/Sidebar";

import "./Goals.css";

const Goals = () => {
  return (
    <div className="goals-bg">
      <Sidebar page="goals" />
      <div className="main">
        <div id="toeic" className="grid grid-goals">
          <div className="title">TOEIC</div>
          <div className="list">
            <ul>
              <li>
                <label className="checkbox-container">
                  450
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="checkbox-container">
                  600
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="checkbox-container">
                  700
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
            </ul>
            <ul>
              <li>
                <label className="checkbox-container">
                  800
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="checkbox-container">
                  850
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="checkbox-container">
                  900
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div id="yoga" className="grid grid-goals">
          <div className="title">Yoga</div>
          <div className="list">
            <ul>
              <li>
                <label className="checkbox-container">
                  Open Pose
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="checkbox-container">
                  Bridge Pose
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="checkbox-container">
                  Dve Pose
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
            </ul>

            <ul>
              <li>
                <label className="checkbox-container">
                  Camel Pose
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="checkbox-container">
                  Plow Pose
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="checkbox-container">
                  Pyramid Pose
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;

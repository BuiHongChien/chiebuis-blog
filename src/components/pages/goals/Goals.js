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
                <input type="checkbox" name="toeic1" checked='true'/>
                <label for="toeic1">450</label>
              </li>
              <li>
                <input type="checkbox" name="toeic2" checked='true' />
                <label for="toeic2">600</label>
              </li>
              <li>
                <input type="checkbox" name="toeic3" checked='true'/>
                <label for="toeic3">700</label>
              </li>
            </ul>
            <ul>
              <li>
                <input type="checkbox" name="toeic4" />
                <label for="toeic4">800</label>
              </li>
              <li>
                <input type="checkbox" name="toeic5" />
                <label for="toeic5">850</label>
              </li>
              <li>
                <input type="checkbox" name="toeic6" />
                <label for="toeic6">900</label>
              </li>
            </ul>
          </div>
        </div>

        <div id="yoga" className="grid grid-goals">
          <div className="title">Yoga</div>
          <div className="list">
            <ul>
              <li>
                <input type="checkbox" name="yoga1" checked='true' />
                <label for="yoga1">Open Pose</label>
              </li>
              <li>
                <input type="checkbox" name="yoga2" checked='true' />
                <label for="yoga2">Bridge Pose</label>
              </li>
              <li>
                <input type="checkbox" name="yoga3" />
                <label for="yoga3">Dve Pose</label>
              </li>
            </ul>

            <ul>
              <li>
                <input type="checkbox" name="yoga4" />
                <label for="yoga4">Camel Pose</label>
              </li>
              <li>
                <input type="checkbox" name="yoga5" />
                <label for="yoga5">Plow Pose</label>
              </li>
              <li>
                <input type="checkbox" name="yoga6" checked='true' />
                <label for="yoga6">Pyramid Pose</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;

import React from "react";

import Sidebar from "../../sidebar/Sidebar";
import Table from "./Table";
import "./Plans.css";

const thisWeek = [
  {
    work: "Read a book",
    status: "Done",
    time: "October 1-7",
    rate: "A",
    priority: "Medium",
  },
  {
    work: "Lab Prog Web",
    status: "Break",
    time: "September 4-9",
    rate: "",
    priority: "High",
  },
];

const nextWeek = [
  {
    work: "Read a book",
    status: "Waiting",
    time: "October 5-11",
    rate: "",
    priority: "Low",
  },
  {
    work: "Lab ML",
    status: "Waiting",
    time: "October 5-11",
    rate: "",
    priority: "High",
  },
];

const Plans = () => {
  return (
    <div className="plans-bg">
      <Sidebar page="plans" />
      <div className="main">
        <div id="this-week" className="grid grid-plans">
          <div className="title">This Week</div>
          <Table table={thisWeek} />
        </div>

        <div id="next-week" className="grid grid-plans">
          <div className="title">Next Week</div>
          <Table table={nextWeek} />
        </div>

        <div id="this-month" className="grid grid-plans">
          <div className="title">This Month</div>
          <p className="content"></p>
        </div>
      </div>
    </div>
  );
};

export default Plans;

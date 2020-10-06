import React from "react";

import Sidebar from "../../sidebar/Sidebar";
import Table from "./Table";
import "./Plans.css";

const thisWeek = [
  {
    work: "Read a book",
    time: "October 1-7",
  },
  {
    work: "Lab Prog Web",
    time: "October 1-7",
  },
  {
    work: "Lab linux",
    time: "October 1-7",
  },
  {
    work: "Lab machine learning",
    time: "October 1-7",
  },
];

const nextWeek = [
  {
    work: "Read a book",
    time: "October 5-11",
  },
  {
    work: "Lab machine learning",
    time: "October 5-11",
  },
  {
    work: "lab UML",
    time: "October 5-11",
  },
];

const thisMonth=[
  {
    work: "Read 4 books",
    time: "October",
  },
  {
    work: "Create own web",
    time: "October",
  },
  {
    work: "Achieve 1 yoga pose",
    time: "October",
  },
]

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
          <Table table={thisMonth} />
        </div>
      </div>
    </div>
  );
};

export default Plans;

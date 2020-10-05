import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js";
import Goals from "./pages/goals/Goals.js";
import Plans from "./pages/plans/Plans.js";
import Interests from "./pages/interests/Interests.js";

export const about = [
  "summary",
  "education",
  "projects",
  "skills",
  "language",
  "contact",
];
export const interests = ["travel", "drawing", "books", "music", "fashion"];
export const plans = ["this-week", "next-week", "this-month"];
export const goals = ["toeic", "yoga"];

const App = () => {
  return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/plans" exact component={Plans} />
        <Route path="/goals" exact component={Goals} />
        <Route path="/interests" exact component={Interests} />
      </BrowserRouter>
  );
};

export default App;

import React from "react";

import Sidebar from "../../sidebar/Sidebar";
import "./Interests.css";

const Interests = () => {
  return (
    <div className="interests-bg">
      <Sidebar page="interests" />
      <div className="main">
        <div id="travel" className="grid grid-interests">
          <div className="title">Travel <i className='fas fa-plane-departure' /></div>
          <p className="content"></p>
        </div>

        <div id="drawing" className="grid grid-interests">
          <div className="title">Drawing <i className='fas fa-paint-brush' /></div>
          <p className="content"></p>
        </div>

        <div id="books" className="grid grid-interests">
          <div className="title">Books <i className='fas fa-book-open' /></div>
          <p className="content"></p>
        </div>

        <div id="music" className="grid grid-interests">
          <div className="title">Music <i className='fas fa-music' /></div>
          <p className="content"></p>
        </div>

        <div id="fashion" className="grid grid-interests">
          <div className="title">Fashion <i className='fas fa-tshirt' /></div>
          <p className="content"></p>
        </div>
      </div>
    </div>
  );
};

export default Interests;

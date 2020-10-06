import React from "react";

import Sidebar from "../../sidebar/Sidebar";
import books from '../../../images/books.jpg';
import travel from '../../../images/travel.jpg';
import drawing from '../../../images/drawing.jpg';
import music from '../../../images/music.jpg';
import fashion from '../../../images/fashion.jpg';

import "./Interests.css";

const Interests = () => {
  return (
    <div className="interests-bg">
      <Sidebar page="interests" />
      <div className="main">
        <div id="travel" className="grid grid-interests">
          <div className="title"><img className="quote-image" src={travel} alt='travel'/>Travel <i className='fas fa-plane-departure' /></div>
          <p className="content quote">You'll never know until you go</p>
        </div>

        <div id="drawing" className="grid grid-interests">
          <div className="title"><img className="quote-image" src={drawing} alt='travel'/>Drawing <i className='fas fa-paint-brush' /></div>
          <p className="content quote">Drawing at its best is not what your eyes see but what our mind understands.</p>
        </div>

        <div id="books" className="grid grid-interests">
          <div className="title"><img className="quote-image" src={books} alt='travel'/>Books <i className='fas fa-book-open' /></div>
          <p className="content quote">I do believe something very magical can happen when you read a good book.</p>
        </div>

        <div id="music" className="grid grid-interests">
          <div className="title"><img className="quote-image" src={music} alt='travel'/>Music <i className='fas fa-music' /></div>
          <p className="content quote">Sometimes music is the only medicine the heart and soul need.</p>
        </div>

        <div id="fashion" className="grid grid-interests">
          <div className="title "><img className="quote-image" src={fashion} alt='travel'/>Fashion <i className='fas fa-tshirt' /></div>
          <p className="content quote">The joy of dressing is an art</p>
        </div>
      </div>
    </div>
  );
};

export default Interests;

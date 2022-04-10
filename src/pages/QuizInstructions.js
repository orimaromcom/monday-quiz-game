import React, {  Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import LifebuoyIcon from "mdi-react/LifebuoyIcon";
import LightningIcon from "mdi-react/LightningBoltIcon";
import imageNum1 from "../assets/img/imageNum1.jpg";
import imageNum2 from "../assets/img/imageNum2.jpg";
import imageNum3 from "../assets/img/imageNum3.jpg";
import imageNum4 from "../assets/img/imageNum4.jpg";

const QuizInstructions = () => (
  <Fragment>
    <Helmet>
     <title>Instructions Page</title>
    </Helmet>
    <div className="instructions container">
      <div className="instruction-title">How to play the game</div>
      <ul className="browser-default" id="main-list">
        <li>The game default has 10 random questions</li>
        <li>The player has 30 seconds to answer on each question</li>
        <li>
          Each correct answer is 1 point
          <img src={imageNum1} alt="Quiz instruction #1" />
        </li>
        <li>This is the image2 title</li>
        <img src={imageNum2} alt="Quiz instruction #2" />
        <li>
          Each game has 3 lifelines
          <ul id="sublist">
            <li>1 50-50 chances</li>
            <li>2 hints</li>
          </ul>
        </li>
        <li>
          Selecting a 50-50 lifeline
          <LifebuoyIcon className="lifeline-icon" size={24} /> will leave only 2 options
          <img src={imageNum3} alt="Quiz instruction #3" />
        </li>
        <li>
          Selecting a hint
          <LightningIcon className="lightning-icon" size={24} /> will remove one incorrect option
        <img src={imageNum4} alt="Quiz instruction #4" />
        </li>
        <li>You cn quit whenever you want</li>
        <li>You can add yourself to the Leaderboard if you like</li>
        <div className="back-button-container">
          <Link to="/" className="back-button">
            Back
          </Link>
        </div>
      </ul>
    </div>
  </Fragment>
);

export default QuizInstructions;

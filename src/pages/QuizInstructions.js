import React, { Component, Fragment } from "react";
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
      <div className="title">How to play the game</div>
      <ul className="browser-default" id="main-list">
        <li>The game is 10 minutes bla bla bla</li>
        <li>The game has 10 questions</li>
        <li>
          Each question has different score
          <img src={imageNum1} alt="Quiz instruction #1" />
        </li>
        <li>This is the image2 title</li>
        <img src={imageNum2} alt="Quiz instruction #2" />
        <li>
          Each game has 2 lifelines
          <ul id="sublist">
            <li>2 50-50 chances</li>
            <li>5 hints</li>
          </ul>
        </li>
        <li>
          Selecting a 50-50 lifelines
          <LifebuoyIcon className="lifeline-icon" size={24} />
          <img src={imageNum3} alt="Quiz instruction #3" />
        </li>
        <li>
          You can use hint with this icon:
          <LightningIcon className="lightning-icon" size={24} />
          <img src={imageNum4} alt="Quiz instruction #4" />
        </li>
        <li>You cn quit whenever you want</li>
        <li>the timer will run</li>
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

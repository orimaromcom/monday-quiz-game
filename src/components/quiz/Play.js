import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import LifebuoyIcon from "mdi-react/LifebuoyIcon";
import LightningIcon from "mdi-react/LightningBoltIcon";
import TimerIcon from "mdi-react/TimerOutlineIcon";

class Play extends Component {
  /* constructor(props) {
    super(props);
  } */

  increaseCount = () => {
    this.setState({
      counter: 5,
    });
  };
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
        <div className="questions">
          <h2>Quiz Mode</h2>
          <div className="lifeline-container">
            <p>
              <span>
                <LifebuoyIcon className="lifeline-icon" size={24} /> 2
                <LightningIcon className="lightning-icon" size={24} />5
              </span>
            </p>
            <p>
              <span>
                <span className="lightning"></span>
              </span>
            </p>
            <div>
              <p>
                <span className="right"> 2:50</span>
                <span>
                  <TimerIcon className="timer-icon" size={24} />
                </span>
              </p>
            </div>
          </div>
          <div>
            <p>
              <span className="right"> 1 of 15 </span>
            </p>
          </div>
          <h5>Google was founded in what year?</h5>
          <div className="options-container">
            <p className="option">1998</p>
            <p className="option">1998</p>
          </div>
          <div className="options-container">
            <p className="option">2000</p>
            <p className="option">2001</p>
          </div>

          <div className="button-container">
            <button>Previous</button>
            <button>Next</button>
            <button>Quit</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Play;

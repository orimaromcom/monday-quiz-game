import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import RocketIcon from "mdi-react/RocketLaunchIcon";
import { Link } from "react-router-dom";
import GlobeTest from "./GlobeTest"; //for later usage

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Ori monday quiz - Home Pge</title>
    </Helmet>
    <div id="home">
      <section>
        <div style={{ textAlign: "center" }}>
          <RocketIcon className="rocket-icon" size={100} />
        </div>
        <h1>monday quiz game</h1>

        <div className="play-button-container">
          <ul>
            <li>
              <Link className="play-button" to="/play">
                Play
              </Link>
            </li>
          </ul>
        </div>
        <div className="auth-container">
          <Link to="/login" className="auth-buttons" id="login-button">
            Login
          </Link>
          <Link to="/signup" className="auth-buttons" id="signup-button">
            Sign up
          </Link>
          <Link
            to="/instructions"
            className="auth-buttons"
            id="instructions-button"
          >
            Instructions
          </Link>
        </div>
        <div></div>
      </section>
    </div>
  </Fragment>
);

export default Home;

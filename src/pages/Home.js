import React, { Fragment } from "react";
import { Button, CircularProgress, Typography, Box } from "@mui/material";
import { Helmet } from "react-helmet";
import RocketIcon from "mdi-react/RocketLaunchIcon";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { handleScoreChange } from "../redux/actions";
import { handleHintsChange } from "../redux/actions";
import { handleLifelinesChange } from "../redux/actions";
import useGlobalTimer from "../hooks/useGlobalTimer";

const Home = () => {
  const { start } = useGlobalTimer();
  return (
    <Fragment>
      <Helmet>
        <title>monday quiz - Home Page</title>
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
                <Link
                  className="play-button"
                  to="/play"
                  onClick={() => start()}
                >
                  Play
                </Link>
                <Link className="play-button" to="/settings">
                  Select Questions
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
};

export default Home;

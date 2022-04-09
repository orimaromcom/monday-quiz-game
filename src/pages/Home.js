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
                >
                  Play
                </Link>
              </li>
              <li>
                <Link className="play-button" to="/settings">
                  Select Questions
                </Link>
              </li>
              <li>
                {" "}
                <div className="auth-container">
                  <Link
                    to="/instructions"
                    className="auth-buttons"
                    id="instructions-button"
                  >
                    Instructions
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;

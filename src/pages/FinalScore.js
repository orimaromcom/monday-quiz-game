import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  handleAmountChange,
  handleScoreChange,
  handleHintsChange,
  handleLifelinesChange,
} from "../redux/actions";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const FinalScore = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { score } = useSelector((state) => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(10));
    dispatch(handleHintsChange(2));
    dispatch(handleLifelinesChange(1));
    history.push("/");
  };

  return (
    <Fragment>
      <Helmet>
        <title>Final Score</title>
      </Helmet>
      <div mt={20}>
        <p className="final" variant="h3" fontWeight="bold" size="20">
          Your Final Score: {score}
        </p>
        <button
          className="return"
          onClick={handleBackToSettings}
          variant="outlined"
        >
          Back to home page
        </button>
        <Link to={"/leaderboard"} className="return">
          Leaderboard
        </Link>
      </div>
    </Fragment>
  );
};

export default FinalScore;

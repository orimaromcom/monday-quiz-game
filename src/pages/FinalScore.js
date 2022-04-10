
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useGlobalTimer from "../hooks/useGlobalTimer";

const FinalScore = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { score, startTime } = useSelector((state) => state);
  const { stop, getDuration } = useGlobalTimer();

  
  useEffect(() => {
    
    stop();
  }, []); 

  return (
    <Fragment>
      <Helmet>
        <title>Final Score</title>
      </Helmet>
      <div mt={20}>
        <p className="final" variant="h3" fontWeight="bold" size="20">
          Your Final Score: {score}
        </p>
        
        <Link to={"/leaderboard"} className="return">
          Leaderboard
        </Link>
        <Link className="return" to={"/"} variant="outlined">
          Back to home page
        </Link>
       
      </div>
    </Fragment>
  );
};

export default FinalScore;

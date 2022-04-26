import React, { Fragment } from "react";
import { CircularProgress, Box } from "@mui/material";
import { Helmet } from "react-helmet";
import LifebuoyIcon from "mdi-react/LifebuoyIcon";
import LightningIcon from "mdi-react/LightningBoltIcon";
import M from "materialize-css";
import TimerIcon from "mdi-react/TimerOutlineIcon";
import { useSelector, useDispatch } from "react-redux";
import useAxios from "../hooks/useAxios";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { handleResetToDefault, handleScoreChange } from "../redux/actions";
import { handleHintsChange } from "../redux/actions";
import { handleLifelinesChange } from "../redux/actions";
import { decode } from "html-entities";
import { constructAPICallURL } from "../utils";
import { Link } from "react-router-dom";
import correctNotification from "../assets/sounds/correct-answer2.wav";
import wrongNotification from "../assets/sounds/wrong-answer.wav";
import timeoutNotification from "../assets/sounds/timeout.wav";
import SwitchButton from "../components/SwitchButton";
import useGlobalTimer from "../hooks/useGlobalTimer";
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Play = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
    hints,
    lifelines,
  } = useSelector((state) => state);

  const history = useHistory();
  const dispatch = useDispatch();

  let apiUrl = constructAPICallURL({
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
  });

  const { response, error, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setPlayIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("blue");
  const [selectedButton, setSelectedButton] = useState(null);
  const [isAudioOn, setIsAudioOn] = useState(true);

  const { start } = useGlobalTimer();
  useEffect(() => {
    start();
  }, []);

  const playAudio = (audioElementKey) => {
    if (!isAudioOn) return;
    document.getElementById(audioElementKey).play();
  };
  let counter = 30;
  const [options, setOptions] = useState([]);

  const [currentCount, setCount] = useState(counter);
  const timer = () => setCount(currentCount - 1);

  useEffect(() => {
    if (currentCount <= 0) {
      handleClickAnswer(undefined, true);
      return;
    }
    const id = setInterval(timer, 1000);

    return () => clearInterval(id);
  }, [currentCount]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length + 1),
        0,
        question.correct_answer
      );
      setOptions(answers);
      console.log("use effect in play.js: ", { score, lifelines, hints });
    }
  }, [response, questionIndex]);

  useEffect(() => {
    dispatch(handleResetToDefault());
  }, []);

  if (loading) {
    return (
      <Box mt={30} textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <p className="error" variant="h6" mt={20} color="red" textAlign="center">
        Something Went Wrong!
      </p>
    );
  }

  const handleClickAnswer = (e, timeOver) => {
    if (timeOver) {
      if (questionIndex + 1 < response.results.length) {
        setPlayIndex(questionIndex + 1);
        playAudio("timeout");
        M.toast({
          html: "Timeout!",
          classes: "toast-invalid",
          displayLength: 400,
        });
      } else {
        history.push("/score");
      }
      setCount(counter);
      return;
    }
    const question = response.results[questionIndex];
    console.log(response.results)
    console.log(response.results[questionIndex])


    if (e.target.textContent == question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
      if (questionIndex + 1 < response.results.length) {
        M.toast({
          html: "+1",
          classes: "toast-valid",
          displayLength: 400,
        });
      }

      setBackgroundColor("green");
      playAudio("correct-answer");
      setTimeout(() => {
        setBackgroundColor("rgb(56, 56, 204)");
      }, 500);
    } else {
      setBackgroundColor("red");

      playAudio("wrong-answer");
      setTimeout(() => {
        setBackgroundColor("rgb(56, 56, 204)");
      }, 500);
    }
    setTimeout(() => {
      if (questionIndex + 1 < response.results.length) {
        setPlayIndex(questionIndex + 1);

        setCount(counter);
      } else {
        history.push("/score");
      }

      setBackgroundColor("rgb(56, 56, 204)");
    }, 500);
  };

  const split = () => {
    if (options.length < 4) {
      return;
    }
    if (lifelines > 0) {
      dispatch(handleLifelinesChange(lifelines - 1));
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers.splice(getRandomInt(3), 1)];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  };

  const hint = () => {
    if (options.length < 4) {
      return;
    }

    if (hints > 0) {
      dispatch(handleHintsChange(hints - 1));

      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers.splice(1)];
      answers.splice(getRandomInt(3), 0, question.correct_answer);
      setOptions(answers);
    }
  };

  return (
    <Fragment>
      <>
        {/* hidden items */}
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
        <audio id="correct-answer" src={correctNotification}></audio>
        <audio id="wrong-answer" src={wrongNotification}></audio>
        <audio id="timeout" src={timeoutNotification}></audio>
      </>

      <section className="questions">
        <header>
          <h2>monday quiz</h2>

          <div className="top-visuals row-container">
            <div className="indicators-container">
              <span className="audio-switch">
                {isAudioOn ? "🔉" : "🔇"}
                <SwitchButton
                  className={"audio-switch-button"}
                  checked={isAudioOn}
                  onChange={(evt) => {
                    setIsAudioOn(evt.target.checked);
                  }}
                />
              </span>
              <span className="lifeline-indicators">
                <span>
                  <LifebuoyIcon className="lifeline-icon" size={40} />
                  {lifelines}
                </span>
                <span>
                  <LightningIcon className="lightning-icon" size={40} />
                  {hints}
                </span>
              </span>
            </div>

            <div className="timer-section">
              <div className="aligned-row">
                <TimerIcon className="timer-icon" size={40} />
                <span>{currentCount}</span>
              </div>
              <span className="questionNumber">
                {questionIndex + 1} of {amount_of_question}
              </span>
            </div>
          </div>
          <div className="score">
            Score: {score} / {response.results.length}
          </div>
        </header>

        <article>
          <h5>{decode(response.results[questionIndex].question)}</h5>
          <div className="options-container">
            {options.map((data) => (
              <div key={data} className="option-container">
                <button
                  onClick={(e) => {
                    setSelectedButton(data);
                    handleClickAnswer(e);
                  }}
                  variant="contained"
                  className="option"
                  style={{
                    backgroundColor:
                      data === selectedButton
                        ? backgroundColor
                        : "rgb(56, 56, 204)",
                  }}
                >
                  <p>{decode(data)}</p>
                </button>
              </div>
            ))}
          </div>
        </article>
        <footer>
          <div className="button-container">
            <button onClick={split}>50:50</button>
            <button onClick={hint}>Hint</button>
            <Link to="/">
              <button
                style={{
                  backgroundColor: " red",
                }}
                className="quit"
              >
                Quit
              </button>
            </Link>
          </div>
        </footer>
      </section>
    </Fragment>
  );
};

export default Play;

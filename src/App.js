import React from "react";
import Home from "./pages/Home";
import QuizInstructions from "./pages/QuizInstructions";
import Play from "./pages/Play";
import Settings from "./pages/Settings";
import FinalScore from "./pages/FinalScore";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Leaderboard } from "./pages/Leaderboard";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/instructions" exact component={QuizInstructions} />
      <Route path="/play" exact component={Play} />
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Route path="/score" exact component={FinalScore} />
          <Route path="/leaderboard" exact component={Leaderboard} />
          <Route path="/settings" exact component={Settings} />
        </Box>
      </Container>
    </Router>
  );
}

export default App;

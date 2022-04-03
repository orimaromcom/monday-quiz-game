import React from "react";

import Home from "./components/Home";
import QuizInstructions from "./components/quiz/QuizInstructions";
import Play from "./components/quiz/Play";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/instructions" exact component={QuizInstructions} />
        <Route path="/play" exact component={Play} />
      </Router>
      <footer>
        <p>
          @Copyright {new Date().getFullYear()} Ori Marom{" "}
          <code>ori.marom10@gmail.com</code>
        </p>
      </footer>
    </main>
  );
}

export default App;

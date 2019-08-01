import React from "react";
import Question1 from "./components/Question1";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Quiz from "./components/Quiz";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Question6 from "./components/Question6";
import Question7 from "./components/Question7";
import News from "./components/News";
import Results from "./components/Results";
import Reviews from "./components/Reviews";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/quiz/question1" component={Question1} />
          <Route path="/quiz/question2" component={Question2} />
          <Route path="/quiz/question3" component={Question3} />
          <Route path="/quiz/question4" component={Question4} />
          <Route path="/quiz/question5" component={Question5} />
          <Route path="/quiz/question6" component={Question6} />
          <Route path="/quiz/question7" component={Question7} />
          <Route path="/quiz/results" component={Results} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/news" component={News} />
          <Route path="/reviews" component={Reviews} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

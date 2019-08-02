import React, { Component } from 'react';
import Question1 from "./components/Question1";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
import Modal from "./components/Modal";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  modalQuestion = (component) => {
    return (
      <Modal show={this.state.show} handleClose={this.hideModal}>
        {component}
      </Modal>
    );
  }

  render() {
    let redirect;
    if (this.state.show) {
      redirect = '';
    } else {
      redirect = <Redirect to="/" push={true} />;
    }
    return (
      <div className="App">
        <BrowserRouter>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <Quiz />
          </Modal>
          <Navigation showModal={this.showModal} />
          <Switch>
            <Route exact path="/" render={props => <Main {...props} showModal={this.showModal} />} />
            <Route path="/quiz/question1" render={props => this.modalQuestion(<Question1 />)} />
            <Route path="/quiz/question2" render={props => this.modalQuestion(<Question2 />)} />
            <Route path="/quiz/question3" render={props => this.modalQuestion(<Question3 />)} />
            <Route path="/quiz/question4" render={props => this.modalQuestion(<Question4 />)} />
            <Route path="/quiz/question5" render={props => this.modalQuestion(<Question5 />)} />
            <Route path="/quiz/question6" render={props => this.modalQuestion(<Question6 />)} />
            <Route path="/quiz/question7" render={props => this.modalQuestion(<Question7 />)} />
            <Route path="/quiz/results" render={props => this.modalQuestion(<Results />)} />
            <Route path="/news" component={News} />
          </Switch>
          {redirect}
        </BrowserRouter>
      </div>
    );
  }
}



export default App;

import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Question7 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      budget: "",
      navigate: false
    };
  }

  componentDidMount = () => {
    const json = sessionStorage.getItem("budget");
    const budget = JSON.parse(json);
    if (budget) {
      this.setState({ budget: budget });
    }
  };

  componentDidUpdate = () => {
    const budget = JSON.stringify(this.state.budget);
    sessionStorage.setItem("budget", budget);
    if (this.state.results) {
      const results = JSON.stringify(this.state.results);
      sessionStorage.setItem("results", results);
    }
  };

  handleChange = event => {
    const budget = event.target.value;
    const resultsJson = sessionStorage.getItem("results");
    const results = JSON.parse(resultsJson);

    switch (budget) {
      case '15-35':
        results.price = 35;
        break;
      case '35-45':
        results.price = 45;
        break;
      default:
    }
    this.setState({
      budget: budget,
      results: results
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.budget) {
      this.setState({
        navigate: true
      })
    } else {
      alert(`You need to choose an answer`);
    }
  };

  render() {
    const { budget, navigate } = this.state;
    if (navigate) {
      return <Redirect to="/quiz/results" push={true} />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Budget</p>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="15-35"
                checked={budget === "15-35"}
                onChange={this.handleChange}
              />
              $15 - $35
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="35-45"
                checked={budget === "35-45"}
                onChange={this.handleChange}
              />
              $35 - $45
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="45+"
                checked={budget === "45+"}
                onChange={this.handleChange}
              />
              $45+
            </label>
          </li>
        </ul>

        <Link className="btn btn-dark" to="/quiz/question6">
          Back
        </Link>
        <button name="next" className="btn btn-dark" type="submit">
          Show Results
        </button>
      </form>
    );
  }
}

export default Question7;

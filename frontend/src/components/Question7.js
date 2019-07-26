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
  };

  handleChange = event => {
    this.setState({
      budget: event.target.value
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
      return <Redirect to="/quiz/question6" push={true} />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Budget</p>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="yes"
                checked={budget === "yes"}
                onChange={this.handleChange}
              />
              Yes
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="no"
                checked={budget === "no"}
                onChange={this.handleChange}
              />
              No
            </label>
          </li>
        </ul>

        <Link className="btn btn-dark" to="/quiz/question6">
          Back
        </Link>
        <button name="next" className="btn btn-dark" type="submit">
          Next
        </button>
      </form>
    );
  }
}

export default Question7;

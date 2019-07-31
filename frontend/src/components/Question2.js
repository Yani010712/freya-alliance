import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Question2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activity: "",
      navigate: false
    };
  }

  componentDidMount = () => {
    const json = sessionStorage.getItem("activity");
    const activity = JSON.parse(json);
    if (activity) {
      this.setState({ activity: activity });
    }
  };

  componentDidUpdate = () => {
    const activity = JSON.stringify(this.state.activity);
    sessionStorage.setItem("activity", activity);
  };

  handleChange = event => {
    this.setState({
      activity: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.activity) {
      this.setState({ 
        navigate: true
      })
    } else {
      alert(`You need to choose an answer`);
    }
  };

  render() {
    const { activity, navigate } = this.state;
    if (navigate) {
      return <Redirect to="/quiz/question3" push={true} />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Physical Activity</p>
        <p>Pick one that best describes your lifestyle</p>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="sedentary"
                checked={activity === "sedentary"}
                onChange={this.handleChange}
              />
              Sedentary
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="moderate"
                checked={activity === "moderate"}
                onChange={this.handleChange}
              />
              Moderate Activity
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="active"
                checked={activity === "active"}
                onChange={this.handleChange}
              />
              Very Active
            </label>
          </li>
        </ul>

        <Link className="btn btn-dark" to="/quiz/question1">
          Back
        </Link>
        <button name="next" className="btn btn-dark" type="submit">
          Next
        </button>
      </form>
    );
  }
}

export default Question2;

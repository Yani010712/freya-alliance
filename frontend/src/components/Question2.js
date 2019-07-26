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
        <p>Activity</p>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="under17"
                checked={activity === "under17"}
                onChange={this.handleChange}
              />
              Under 17
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="17-30"
                checked={activity === "17-30"}
                onChange={this.handleChange}
              />
              17-30
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="31-40"
                checked={activity === "31-40"}
                onChange={this.handleChange}
              />
              31-40
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="41+"
                checked={activity === "41+"}
                onChange={this.handleChange}
              />
              41+
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

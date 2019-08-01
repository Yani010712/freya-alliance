import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Question6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cervical: "",
      navigate: false
    };
  }

  componentDidMount = () => {
    const json = sessionStorage.getItem("cervical");
    const cervical = JSON.parse(json);
    if (cervical) {
      this.setState({ cervical: cervical });
    }
  };

  componentDidUpdate = () => {
    const cervical = JSON.stringify(this.state.cervical);
    sessionStorage.setItem("cervical", cervical);
    if (this.state.results) {
      const results = JSON.stringify(this.state.results);
      sessionStorage.setItem("results", results);
    }
  };

  handleChange = event => {
    const cervical = event.target.value;
    const resultsJson = sessionStorage.getItem("results");
    const results = JSON.parse(resultsJson);

    switch (cervical) {
      case 'low':
        results.size = 'S';
        results.firmness = 'S';
        break;
      case 'high':
        results.size = 'L';
        break;
      default:
    }
    this.setState({
      cervical: cervical,
      results: results
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.cervical) {
      this.setState({
        navigate: true
      })
    } else {
      alert(`You need to choose an answer`);
    }
  };

  render() {
    const { cervical, navigate } = this.state;
    if (navigate) {
      return <Redirect to="/quiz/question7" push={true} />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Cervical Height</p>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="low"
                checked={cervical === "low"}
                onChange={this.handleChange}
              />
              Low
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="regular"
                checked={cervical === "regular"}
                onChange={this.handleChange}
              />
              Regular
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="high"
                checked={cervical === "high"}
                onChange={this.handleChange}
              />
              High
            </label>
          </li>
        </ul>

        <Link className="btn btn-dark" to="/quiz/question5">
          Back
        </Link>
        <button name="next" className="btn btn-dark" type="submit">
          Next
        </button>
      </form>
    );
  }
}

export default Question6;

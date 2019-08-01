import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Question4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flow: "",
      navigate: false
    };
  }

  componentDidMount = () => {
    const json = sessionStorage.getItem("flow");
    const flow = JSON.parse(json);
    if (flow) {
      this.setState({ flow: flow });
    }
  };

  componentDidUpdate = () => {
    const flow = JSON.stringify(this.state.flow);
    sessionStorage.setItem("flow", flow);
    if (this.state.results) {
      const results = JSON.stringify(this.state.results);
      sessionStorage.setItem("results", results);
    }
  };

  handleChange = event => {
    const flow = event.target.value;
    const resultsJson = sessionStorage.getItem("results");
    const results = JSON.parse(resultsJson);

    switch (flow) {
      case 'light':
        results.capacity = 'S';
        break;
      case 'heavy':
        results.capacity = 'L';
        break;
      default:
        results.capacity = 'M';
        break;
    }
    this.setState({
      flow: flow,
      results: results
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.flow) {
      this.setState({
        navigate: true
      })
    } else {
      alert(`You need to choose an answer`);
    }
  };

  render() {
    const { flow, navigate } = this.state;
    if (navigate) {
      return <Redirect to="/quiz/question5" push={true} />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Flow Volume</p>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="light"
                checked={flow === "light"}
                onChange={this.handleChange}
              />
              Light
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="regular"
                checked={flow === "regular"}
                onChange={this.handleChange}
              />
              Regular
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="heavy"
                checked={flow === "heavy"}
                onChange={this.handleChange}
              />
              Heavy
            </label>
          </li>
        </ul>

        <Link className="btn btn-dark" to="/quiz/question3">
          Back
        </Link>
        <button name="next" className="btn btn-dark" type="submit">
          Next
        </button>
      </form>
    );
  }
}

export default Question4;

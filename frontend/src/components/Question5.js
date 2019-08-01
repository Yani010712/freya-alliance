import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Question5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birth: "",
      navigate: false
    };
  }

  componentDidMount = () => {
    const json = sessionStorage.getItem("birth");
    const birth = JSON.parse(json);
    if (birth) {
      this.setState({ birth: birth });
    }
  };

  componentDidUpdate = () => {
    const birth = JSON.stringify(this.state.birth);
    sessionStorage.setItem("birth", birth);
    if (this.state.results) {
      const results = JSON.stringify(this.state.results);
      sessionStorage.setItem("results", results);
    }
  };

  handleChange = event => {
    const birth = event.target.value;
    const resultsJson = sessionStorage.getItem("results");
    const results = JSON.parse(resultsJson);

    switch (birth) {
      case 'yes':
        results.size = 'L';
        break;
      default:
    }
    this.setState({
      birth: birth,
      results: results
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.birth) {
      this.setState({
        navigate: true
      })
    } else {
      alert(`You need to choose an answer`);
    }
  };

  render() {
    const { birth, navigate } = this.state;
    if (navigate) {
      return <Redirect to="/quiz/question6" push={true} />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Birth</p>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="yes"
                checked={birth === "yes"}
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
                checked={birth === "no"}
                onChange={this.handleChange}
              />
              No
            </label>
          </li>
        </ul>

        <Link className="btn btn-dark" to="/quiz/question4">
          Back
        </Link>
        <button name="next" className="btn btn-dark" type="submit">
          Next
        </button>
      </form>
    );
  }
}

export default Question5;

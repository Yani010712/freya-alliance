import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Question3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bladder: "",
      navigate: false
    };
  }

  componentDidMount = () => {
    const json = sessionStorage.getItem("bladder");
    const bladder = JSON.parse(json);
    if (bladder) {
      this.setState({bladder: bladder });
    }
  };

  componentDidUpdate = () => {
    const bladder = JSON.stringify(this.state.bladder);
    sessionStorage.setItem("bladder", bladder);
  };

  handleChange = event => {
    this.setState({
      bladder: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.bladder) {
      this.setState({ 
        navigate: true
      })
    } else {
      alert(`You need to choose an answer`);
    }
  };

  render() {
    const { bladder, navigate } = this.state;
    if (navigate) {
      return <Redirect to="/quiz/question4" push={true} />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Bladder Sensitivity</p>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="yes"
                checked={bladder === "yes"}
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
                checked={bladder === "no"}
                onChange={this.handleChange}
              />
              No
            </label>
          </li>
        </ul>

        <Link className="btn btn-dark" to="/quiz/question2">
          Back
        </Link>
        <button name="next" className="btn btn-dark" type="submit">
          Next
        </button>
      </form>
    );
  }
}

export default Question3;

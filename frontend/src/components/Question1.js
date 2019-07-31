import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Question1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: "",
      navigate: false
    };
  }

  componentDidMount = () => {
    const json = sessionStorage.getItem("age");
    const age = JSON.parse(json);
    if (age) {
      this.setState({ age: age });
    }
  };

  componentDidUpdate = () => {
    const age = JSON.stringify(this.state.age);
    sessionStorage.setItem("age", age);
  };

  handleChange = event => {
    this.setState({
      age: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.age) {
      this.setState({ 
        navigate: true
      })
    } else {
      alert(`You need to choose an answer`);
    }
  };

  render() {
    const { age, navigate } = this.state; 
      if (navigate) {
        return <Redirect to="/quiz/question2" push={true} />
      }
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Select Your Age</p>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="under20"
                checked={age === "under20"}
                onChange={this.handleChange}
              />
              Under 20
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="20-35"
                checked={age === "20-35"}
                onChange={this.handleChange}
              />
              20-35
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="36+"
                checked={age === "36+"}
                onChange={this.handleChange}
              />
              36+
            </label>
          </li>
        </ul>

        <button className="btn btn-dark" type="submit">Next</button>
      </form>
    );
  }
}

export default Question1;

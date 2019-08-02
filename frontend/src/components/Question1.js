import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FormControl, RadioGroup, FormControlLabel, Radio, CardActions } from "@material-ui/core";

class Question1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: "",
      navigate: false
    };
  }

  componentDidMount = () => {
    const json = sessionStorage.getItem('age');
    const age = JSON.parse(json);
    if (age) {
      this.setState({ age: age });
    }
  };

  componentDidUpdate = () => {
    const age = JSON.stringify(this.state.age);
    sessionStorage.setItem("age", age);
    if (this.state.results) {
      const results = JSON.stringify(this.state.results);
      sessionStorage.setItem("results", results);
    }
  };

  handleChange = event => {
    const age = event.target.value;
    let results = {
      size: 'M',
      capacity: 'M',
      firmness: 'M'
    };
    switch (age) {
      case 'under20':
        results.capacity = 'S';
        results.size = 'XS';
        break;
      case '36+':
        results.capacity = 'L';
        break;
      default:
    }
    this.setState({
      age: age,
      results: results
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
      <FormControl component="form" onSubmit={this.handleSubmit}>
        <br /><br />
        <h3>Select Your Age</h3>
        <br /><br />
        <RadioGroup
          onChange={this.handleChange}>
          <FormControlLabel value="under20"
            control={<Radio checked={age === "under20"} />} label="Under 20" />
          <FormControlLabel value="20-35"
            control={<Radio checked={age === "20-35"} />} label="20-35" />
          <FormControlLabel value="36+"
            control={<Radio checked={age === "36+"} />} label="36+" />
        </RadioGroup>
        <br /><br />
        <CardActions>
          <button name="next" className="btn btn-dark ml-5" type="submit">Next</button>
        </CardActions>
      </FormControl>
    );
  }
}

export default Question1;

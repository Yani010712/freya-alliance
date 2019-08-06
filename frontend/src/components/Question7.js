import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { FormControl, RadioGroup, FormControlLabel, Radio, CardActions, Button } from "@material-ui/core";

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
      <FormControl component="form" onSubmit={this.handleSubmit} id="question7" align="center">
        <br /><br />
        <h3>What’s your budget?</h3>
        <br /><br />
        <RadioGroup
          onChange={this.handleChange}>
          <FormControlLabel value="15-35"
            control={<Radio checked={budget === "15-35"} />} label="$15 - $35" />
          <FormControlLabel value="35-45"
            control={<Radio checked={budget === "35-45"} />} label="$35 - $45" />
          <FormControlLabel value="45+"
            control={<Radio checked={budget === "45+"} />} label="$45+" />
        </RadioGroup>
        <br /><br />
        <CardActions>
          <Button
            name="back"
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            component={Link}
            to="/quiz/question6"
          >
            Back
          </Button>

          <Button
            name="next"
            variant="contained"
            color="primary"
            type="submit"
            size="large"
          >
            Next
          </Button>
        </CardActions>
      </FormControl>
    );
  }
}

export default Question7;

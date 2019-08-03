import "../App.css";
import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormControl, CardActions, Button } from "@material-ui/core";


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
    if (this.state.results) {
      const results = JSON.stringify(this.state.results);
      sessionStorage.setItem("results", results);
    }
  };

  handleChange = event => {
    const activity = event.target.value;
    const resultsJson = sessionStorage.getItem("results");
    const results = JSON.parse(resultsJson);

    switch (activity) {
      case 'active':
        results.firmness = 'F';
        break;
      default:
    }
    this.setState({
      activity: activity,
      results: results
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
      <FormControl component="form" onSubmit={this.handleSubmit}>
        <br /><br />
        <h3>Physical Activity</h3>
        <br /><br />
        <RadioGroup
          onChange={this.handleChange}>
          <FormControlLabel value="sedentary"
            control={<Radio checked={activity === "sedentary"} />} label="Sedentary" />
          <FormControlLabel value="moderate"
            control={<Radio checked={activity === "moderate"} />} label="Moderate Activity" />
          <FormControlLabel value="active"
            control={<Radio checked={activity === "active"} />} label="Very Active" />
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
            to="/quiz/question1"
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

export default Question2;

import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { FormControl, RadioGroup, FormControlLabel, Radio, CardActions, Button } from "@material-ui/core";

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
      <FormControl component="form" onSubmit={this.handleSubmit}>
        <br /><br />
        <h3>Cervical Height</h3>
        <br /><br />
        <RadioGroup
          onChange={this.handleChange}>
          <FormControlLabel value="low"
            control={<Radio checked={cervical === "low"} />} label="Low" />
          <FormControlLabel value="regular"
            control={<Radio checked={cervical === "regular"} />} label="Regular" />
          <FormControlLabel value="high"
            control={<Radio checked={cervical === "high"} />} label="High" />
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
            to="/quiz/question5"
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

export default Question6;

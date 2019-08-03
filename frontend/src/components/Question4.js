import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { FormControl, RadioGroup, FormControlLabel, Radio, CardActions, Button } from "@material-ui/core";

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
      <FormControl component="form" onSubmit={this.handleSubmit}>
        <br /><br />
        <h3>Flow Volume</h3>
        <br /><br />
        <RadioGroup
          onChange={this.handleChange}>
          <FormControlLabel value="light"
            control={<Radio checked={flow === "light"} />} label="Light" />
          <FormControlLabel value="regular"
            control={<Radio checked={flow === "regular"} />} label="Regular" />
          <FormControlLabel value="heavy"
            control={<Radio checked={flow === "heavy"} />} label="Heavy" />
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
            to="/quiz/question3"
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

export default Question4;

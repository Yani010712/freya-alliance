import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { FormControl, RadioGroup, FormControlLabel, Radio, CardActions, Button } from "@material-ui/core";

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
      this.setState({ bladder: bladder });
    }
  };

  componentDidUpdate = () => {
    const bladder = JSON.stringify(this.state.bladder);
    sessionStorage.setItem("bladder", bladder);
    if (this.state.results) {
      const results = JSON.stringify(this.state.results);
      sessionStorage.setItem("results", results);
    }
  };

  handleChange = event => {
    const bladder = event.target.value;
    const resultsJson = sessionStorage.getItem("results");
    const results = JSON.parse(resultsJson);

    switch (bladder) {
      case 'yes':
        results.firmness = 'S';
        break;
      default:
    }
    this.setState({
      bladder: bladder,
      results: results
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
      <FormControl component="form" onSubmit={this.handleSubmit} id="question3" align="center">
        <br /><br />
        <h3>Do you have bladder sensitivity, urinary incontinence, or severe menstrual cramps?</h3>
        <br /><br />
        <RadioGroup
          onChange={this.handleChange}>
          <FormControlLabel value="yes"
            control={<Radio checked={bladder === "yes"} />} label="Yes" />
          <FormControlLabel value="no"
            control={<Radio checked={bladder === "no"} />} label="No" />
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
            to="/quiz/question2"
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

export default Question3;

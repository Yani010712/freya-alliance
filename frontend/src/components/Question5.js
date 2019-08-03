import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { FormControl, RadioGroup, FormControlLabel, Radio, CardActions, Button } from "@material-ui/core";

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
      <FormControl component="form" onSubmit={this.handleSubmit}>
        <br /><br />
        <h3>Birth</h3>
        <br /><br />
        <RadioGroup
          onChange={this.handleChange}>
          <FormControlLabel value="yes"
            control={<Radio checked={birth === "yes"} />} label="Yes" />
          <FormControlLabel value="no"
            control={<Radio checked={birth === "no"} />} label="No" />
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
            to="/quiz/question4"
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

export default Question5;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from "@material-ui/core";

class Quiz extends Component {
    render() {
        return (
            <div>
                <br /><br />
                <h1>Quiz</h1>
                <br /><br />
                <p>Please answer each question to the best of your abilities in order to provide you with the best options</p>
                <br /><br />
                    <Button
                        component={Link}
                        name="next"
                        variant="contained"
                        color="primary"
                        type="submit"
                        size="large"
                        to="/quiz/question1"
                    >
                        Start
                    </Button>
                <br />
            </div>
        );
    }
}

export default Quiz;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";

class Quiz extends Component {
    render() {
        return (
            <div className="inner-modal-content">
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
                        id="quiz-start-button"
                    >
                        Start
                    </Button>
                <br />
                <div className="terms-and-conditions" align="center">
                  <p>
                    By selecting this button, I understand this website shares educational tools and information intended only to assist users in their personal efforts to find an alternative menstrual care solution. I understand all products recommended contain silicone.
                  </p>
                  <p>
                    This site is not operated by or affiliated with medical professionals. Nothing presented in this site should be construed as medical advice. The information and reports generated by this site should not be interpreted as a substitute for physician consultation, evaluation, or treatment. This site and its founders are not responsible for allergic reactions, injuries, or complications associated with the products recommended.
                  </p>
                </div>
            </div>
        );
    }
}

export default Quiz;

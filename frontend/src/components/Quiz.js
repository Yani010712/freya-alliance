import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import Typography from '../theme/components/Typography';

class Quiz extends Component {
    render() {
        return (
            <div className="inner-modal-content">
                <Typography color="inherit" align="center" variant="h3" marked="center" id="quiz-header">
                Quiz
                </Typography>
                <Typography color="inherit" align="center" variant="h5" marked="center">
                In order to provide you with the most accurate options, <br /> please answer each question to the best of your abilities.
                </Typography>

                <br /><br />
                    <Button
                        component={Link}
                        name="next"
                        align="center"
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

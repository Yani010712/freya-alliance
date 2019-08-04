import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from "@material-ui/core";
import Typography from '../theme/components/Typography';

class Quiz extends Component {
    render() {
        return (
            <div>
                <Typography color="inherit" align="center" variant="h3" marked="center">
                Quiz
                </Typography>
                <Typography color="inherit" align="center" variant="h5" marked="center">
                Please answer each question to the best of your abilities in order to provide you with the best options.<br></br>We only recommend the highest quality FDA approved products, strictly made of medical grade silicone. You can rest assured these products are all reliable and come from humane working environments. 
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
                    >
                        Start
                    </Button>
                <br />
            </div>
        );
    }
}

export default Quiz;
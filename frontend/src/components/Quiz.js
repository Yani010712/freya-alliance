import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Quiz extends Component {
    render() {
        return (
            <div>
                <h1>Quiz</h1>
                <p>Please answer each question to the best of your abilities in order to provide you with the best options</p>
                <Link className="btn btn-dark" to="/quiz/question1">Start</Link>
                <br />
                <Link to="/terms">Terms & Agreements</Link>
            </div>
        );
    }
}

export default Quiz;
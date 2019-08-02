import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Quiz extends Component {
    render() {
        return (
            <div>
                <br /><br />
                <h1>Quiz</h1>
                <br /><br />
                <p>Please answer each question to the best of your abilities in order to provide you with the best options</p>
                <br /><br />
                <Link className="btn btn-dark" to="/quiz/question1">Start</Link>
                <br />
            </div>
        );
    }
}

export default Quiz;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

class Quiz extends Component {
    render() {
        return (
            <div>
                <h1>Quiz</h1>
                <p>Please answer each question to the best of your abilities in order to provide you with the best options</p>
                <Link className="btn btn-dark" to="/quiz/question1">Start</Link>
                <br />
                <Footer />
            </div>
        );
    }
}

export default Quiz;
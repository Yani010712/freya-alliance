import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            
            <div className= "home-section">
                <h1>Wondering where to begin?</h1>
                <h3>Take our quiz today!</h3>
                <br />
                <Link className="btn btn-dark" to="/quiz/question1">Start</Link>
                <br />
                
            </div>
            
        );
    }
}

export default Home;
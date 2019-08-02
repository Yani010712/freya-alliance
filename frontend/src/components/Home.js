import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ showModal }) => (
    <div className="home-section">
        <h1>Wondering where to begin?</h1>
        <h3>Take our quiz today!</h3>
        <br />
        <Link className="btn btn-dark" onClick={showModal}>Start</Link>
        <br />

    </div>
);

export default Home;
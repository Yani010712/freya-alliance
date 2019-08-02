import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from './cup-3137099_1280.jpg';

const Home = ({ showModal }) => (
    <div className="home-section">
        <img src={ Jumbotron } alt="Freya Alliance Photo" id="jumbotron-image" />
        <div>
          <h1>Wondering where to begin?</h1>
            <h5>We’ve compiled a list of reliable menstrual cups that will make your decision as simple as possible. </h5>
            <h5>Take our Quiz to find out which ones match your body today!</h5>
          <br />
          <Link className="btn btn-dark" onClick={showModal} to="#">Start</Link>
          <br />
        </div>
    </div>
);

export default Home;

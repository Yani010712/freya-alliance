import React, { Component } from 'react';
import OurStory from './OurStory';
import ContactUs from './ContactUs';
import './Footer.css';
import CopyRight from './CopyRight';


class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-freya">
                    <div><OurStory/></div>
                    <div><ContactUs/></div>  
                </div>
                <CopyRight />

            </div>
            

        );
    }
}

export default Footer;
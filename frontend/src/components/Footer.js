import React, { Component } from 'react';
import OurStory from './OurStory';
import ContactUs from './ContactUs';


class Footer extends Component {
    render() {
        return (
            <div>
              <OurStory/>
              <ContactUs></ContactUs>
               <p>The Freya Alliance - All rights reserved</p>  
            </div>
        );
    }
}

export default Footer;
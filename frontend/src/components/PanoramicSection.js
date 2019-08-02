import React, { Component } from 'react';
import PanoramicPic from './PanoramicPic';
import BuyOneGiveOne from './BuyOneGiveOne';
import './PanoramicSection.css';


class PanoramicSection extends Component {
    render() {
        return (
            <div>
                <div className="panoramic">
                    <div><PanoramicPic/></div>
                    <div><BuyOneGiveOne/></div>  
                </div>
                
            </div>
            

        );
    }
}

export default PanoramicSection;
import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import PanoramicPic from './PanoramicPic';
import BuyOneGiveOne from './BuyOneGiveOne';

// import './PanoramicSection.css';


class PanoramicSection extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <PanoramicPic/>
                </Grid>
                <Grid item xs={12} sm={6} style={{ backgroundColor: '#74665e', color: '#fff' }}>
                    <Box m={5}>
                        <BuyOneGiveOne/>
                    </Box>
                </Grid>
            </Grid>
        );
    }
}

export default PanoramicSection;
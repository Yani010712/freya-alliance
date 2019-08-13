
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../theme/components/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: 200,
    marginTop: 50,
    backgroundPosition: 'center',
  },
  input: {
    display: 'none',
  },

}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className ="bogo">
      <Typography color="inherit" align="center" variant="h4"  className="bogo-container">
          Buy One Give One
          <span className="Typography-markedH4Center-10" id="bogo-underline"></span>
        </Typography>
        <div className="bogo-sub-header">
          <Typography color="inherit" align="center" variant="h6" marked="center" >
            Learn More About Our Campaign
          </Typography>
        </div >
        <div className="partnership-description">
          <p align="center">
            The Freya Alliance aims to help all women have regular access to menstrual hygiene products especially in areas where these products are either too expensive, or unavailable. We believe reusable menstrual cups are the solution to empowering women, enabling them to contribute towards our global development.
          </p>
          <p align="center">
            For every cup you purchase through any link on our site, a cup will be donated to women and teens in developing nations.
          </p>
        </div>
        <div align="center">
          <h5 className="misison-campaign" align="center"><b>
            We aim to provide <u>One Million Cups</u> by the year 2022!
          </b></h5>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            id="bogo-stories-button"
            className={classes.button}
            href="https://www.womenshealthmag.com/life/a19974024/periods-around-the-world/"
          >
            Stories
          </Button>
          <div className="bogo-read-more-text" align="center">
              * Read more about issues women face <br /> around the world because of their periods.
          </div>
        </div>
    </div>
  );
}

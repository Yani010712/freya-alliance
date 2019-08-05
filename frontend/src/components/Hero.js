import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import ProductHeroLayout from '../theme/components/ProductHeroLayout';
import Typography from '../theme/components/Typography';
import Button from '../theme/components/Button';

import BgImage from '../assets/hero-background.jpg';

const styles = theme => ({
  background: {
    backgroundImage: `url(${BgImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

const Hero = ({ classes, showModal }) => (
      <ProductHeroLayout backgroundClassName={classes.background} >
        {/* Increase the network loading priority of the background image. */}
        <img className="Site-header" style={{ display: 'none' }} src={BgImage} alt="" />
        <div id="site-header-container" align="center">
          <Typography color="inherit" align="center" variant="h2" marked="center" id="top-header">
            <b>Wondering where to begin?</b>
          </Typography>
          <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
            We’ve compiled a list of reliable menstrual cups <br />in hopes of making your decision as simple as possible.
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            className={classes.button}
            onClick={showModal}
            id="home-quiz-button"
          >
            Take Quiz
          </Button>
          <Typography variant="body2" color="inherit" align="center" className={classes.more} id="home-scroll-text">
            Or scroll down for more information!
          </Typography>
        </div>
      </ProductHeroLayout>
)

export default withStyles(styles)(Hero);

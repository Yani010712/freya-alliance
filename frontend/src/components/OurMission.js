import React from 'react';

import {withStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '../theme/components/Typography';
import {Container} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  container: {
    marginTop: theme.spacing (10),
    marginBottom: theme.spacing (15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  p: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 80,
    maxWidth: 1000,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing (0, 5),
  },
  icon: {
    fontSize: 72,
  },
  title: {
    marginTop: theme.spacing (4),
    marginBottom: theme.spacing(3),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

const OurMission = ({classes}) => (
  <div id="ourmission">
    <div className="yellow-arrow">
      <img src="yellow-arrow.png" height="65px" alt="Our Mission"/>
    </div>
    <section className={classes.root} id="our-mission-section">
      <Container className={classes.container} id="our-mission-container">
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          Our Mission
        </Typography>
        <p className={classes.p}>
          We aim to educate and promote the use of safe and affordable menstrual care products accessible to everyone and unique to anyone.
        </p>

        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <i className={`lnr lnr-earth ${classes.icon}`}></i>

              <Typography variant="h5" className={classes.title}>
                  Sustainable
              </Typography>
              <Typography variant="subtitle3" id="misison-details" align="center">
              On average, individuals use approximately 11,000 pads and tampons. That’s 250 to 300 pounds of plastic waste per person!
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <i className={`lnr lnr-thumbs-up ${classes.icon}`}></i>
              <Typography variant="h5" className={classes.title}>
                Affordable
              </Typography>
              <Typography variant="subtitle3" id="misison-details"  align="center">
              By adopting the use of a menstrual cup, individuals save an average of $7,800 in their lifetimes!
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <i className={`lnr lnr-clock ${classes.icon}`}></i>
              <Typography variant="h5" className={classes.title}>
                Convenient
              </Typography>
              <Typography variant="subtitle3" id="misison-details" align="center">
              Menstrual cups can last up to 12 hours before needing to be emptied, depending on your flow.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  </div>

);

export default withStyles (styles) (OurMission);

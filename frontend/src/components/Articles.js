import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    maxWidth: 300,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className="grid-container" id="articles" style={{ marginTop: 40, marginBottom: 80}}>
      <div className="orange-arrow">
        <img src="orange-arrow.png" height="65px" alt="tips" />
      </div>
     <Typography style={{ marginTop: 30, marginBottom: 20}}color="inherit" align="center" variant="h4" marked="center">
       Tips
       <span className="Typography-markedH4Center-10" id="article-underline"></span>
      </Typography>
      <p id="article-header" align="center" >
      Want to know how to use and care for these products?
    </p>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Card id="article-cards" className={classes.card}>
            <CardActionArea>
              <a href={'https://lenacup.com/pages/folds'}>
                <CardMedia
                  component="img"
                  alt="How to use & fold"
                  height="200"
                  image="./folding.png"
                  title="How to use & fold" />

              <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5" align="center">
                  How to Fold & Use Your Menstrual Cup
                </Typography>
              </CardContent>
              </a>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card id="article-cards" className={classes.card}>
            <CardActionArea>
              <a href={'https://menstrualcupaholic.com/how-to-remove-a-menstrual-cup/'}>
                <CardMedia
                  component="img"
                  alt="How to remove"
                  height="200"
                  image="./how_to_remove.png"
                  title="How to remove"
                />

              <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5" align="center">
                 How to Remove Your Menstrual Cup
                </Typography>
              </CardContent>
              </a>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card id="article-cards" className={classes.card}>
            <CardActionArea>
              <a href={'https://www.reusablenation.com/zero-waste-living/how-to-clean-and-store-your-menstrual-cup-correctly'}>
                <CardMedia
                  component="img"
                  alt="How to wash"
                  height="200"
                  image="how_to_clean.png"
                  title="How to wash"
                />

              <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5" align="center">
                 How to Care for Your Menstrual Cup
                </Typography>
              </CardContent>
              </a>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card id="article-cards" className={classes.card}>
            <CardActionArea>
              <a href={'https://www.menstrualcupsaustraliaonline.com.au/how-long-can-i-wear-a-menstrual-cup/'}>
                <CardMedia
                  component="img"
                  alt="wear duration"
                  height="200"
                  image="time.png"
                  title="How Long Can I Wear a Menstrual Cup?"
                />

              <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5" align="center">
                How Long Can I Wear a Menstrual Cup
                </Typography>
              </CardContent>
              </a>
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>

    </div>
  );
}

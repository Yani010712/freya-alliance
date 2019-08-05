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
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className="grid-container" style={{ marginTop: 40, marginBottom: 80}} id="articles">
     <Typography style={{ marginTop: 30, marginBottom: 80}}color="inherit" align="center" variant="h4" marked="center">
       Articles 
       <span className="Typography-markedH4Center-116"></span>
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <a href={'https://lenacup.com/pages/folds'}>
                <CardMedia
                  component="img"
                  alt="How to use & fold"
                  height="200"
                  image="./folding.png"
                  title="How to use & fold" />
              
              <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5">
                  How to use & fold
                </Typography>
              </CardContent>
              </a>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
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
                <Typography gutterBottom subtitle2="h5" component="h5">
                 How to remove
                </Typography>
              </CardContent>
              </a>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
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
                <Typography gutterBottom subtitle2="h5" component="h5">
                 How to wash
                </Typography>
              </CardContent>
              </a>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <a href={'https://www.theguardian.com/sustainable-business/2015/apr/27/disposable-tampons-arent-sustainable-but-do-women-want-to-talk-about-it'}>
                <CardMedia
                  component="img"
                  alt="Environmental damage"
                  height="200"
                  image="environmental.png"
                  title="Environmental damage"
                />
              
              <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5">
                Environmental damage
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

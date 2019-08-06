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
    <div className="grid-container" id="articles" style={{ marginTop: 40, marginBottom: 80}}>
     <Typography style={{ marginTop: 30, marginBottom: 20}}color="inherit" align="center" variant="h4" marked="center">
       Tips
       <span className="Typography-markedH4Center-10" id="article-underline"></span>
      </Typography>
      <h5 id="article-header" align="center" >
      These links contain more details on all things Cup Related!
    </h5>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <a href={'https://lenacup.com/pages/folds'}>
                <CardMedia
                  component="img"
                  alt="How to use & fold"
                  height="200"
                  image="data:image/png;base64,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"
                  title="How to use & fold" />
              </a>
              <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5">
                  How to use & fold
                </Typography>
              </CardContent>
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
                  image="data:image/jpeg;base64,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"
                  title="How to remove"
                />
              </a>
              <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5">
                 How to remove
                </Typography>
              </CardContent>
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJm7fMu1Tv3YcyMJU675_rh0luQArVQ316YD2KY_WL9hlJJilx"
                  title="How to wash"
                />
              </a>
              <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5">
                 How to wash
                </Typography>
              </CardContent>
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
                  image="data:image/jpeg;base64,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"
                  title="Environmental damage"
                />
              </a>
              <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5">
                Environmental damage
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
    <div className="grid-container">
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <a href={'https://lenacup.com/pages/folds'}>
                <CardMedia
                  component="img"
                  alt="Folding Methods"
                  height="200"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsx_btyR_J7mJtSLqMl-IlAhgOS4nxMu5sUS4ozDOEetpTYj1ig"
                  title="Folding Methods" />
              </a>
              <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5">
                  Folding Methods
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <a href={'https://lenacup.com/pages/folds'}>
                <CardMedia
                  component="img"
                  alt="Folding Methods"
                  height="200"
                  image="https://the-gadgeteer.com/wp-content/uploads/2014/03/wowcup-1.jpg"
                  title="Folding Methods"
                />
              </a>
              <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5">
                  Folding Methods
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <a href={'https://lenacup.com/pages/folds'}>
                <CardMedia
                  component="img"
                  alt="Folding Methods"
                  height="200"
                  image="https://i.ytimg.com/vi/3lX0tg7CEJw/maxresdefault.jpg"
                  title="Folding Methods"
                />
              </a>
              <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5">
                  Folding Methods
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <a href={'https://lenacup.com/pages/folds'}>
                <CardMedia
                  component="img"
                  alt="Folding Methods"
                  height="200"
                  image="https://images-na.ssl-images-amazon.com/images/I/51XSdtvLDrL.jpg"
                  title="Folding Methods"
                />
              </a>
              <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5">
                  Folding Methods
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

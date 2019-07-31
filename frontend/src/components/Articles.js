import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
        <div className="row">
            <Card className={classes.card}>
            <CardActionArea>
                <a href={'https://lenacup.com/pages/folds'}>
                <CardMedia
                component="img"
                alt="Folding Mothods"
                height="200"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsx_btyR_J7mJtSLqMl-IlAhgOS4nxMu5sUS4ozDOEetpTYj1ig"
                title="Folding Mothods"
                />
                </a>
                <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5">
                Folding Methods
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
            </Card>

            <Card className={classes.card}>
            <CardActionArea>
                <a href={'https://lenacup.com/pages/folds'}>
                <CardMedia
                component="img"
                alt="Folding Mothods"
                height="200"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsx_btyR_J7mJtSLqMl-IlAhgOS4nxMu5sUS4ozDOEetpTYj1ig"
                title="Folding Mothods"
                />
                </a>
                <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5">
                Folding Methods
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
            </Card>

            <Card className={classes.card}>
            <CardActionArea>
                <a href={'https://lenacup.com/pages/folds'}>
                <CardMedia
                component="img"
                alt="Folding Mothods"
                height="200"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsx_btyR_J7mJtSLqMl-IlAhgOS4nxMu5sUS4ozDOEetpTYj1ig"
                title="Folding Mothods"
                />
                </a>
                <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5">
                Folding Methods
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
            </Card>

            <Card className={classes.card}>
            <CardActionArea>
                <a href={'https://lenacup.com/pages/folds'}>
                <CardMedia
                component="img"
                alt="Folding Mothods"
                height="200"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsx_btyR_J7mJtSLqMl-IlAhgOS4nxMu5sUS4ozDOEetpTYj1ig"
                title="Folding Mothods"
                />
                </a>
                <CardContent>
                <Typography gutterBottom subtitle2="h5" component="h5">
                Folding Methods
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
            </Card>

            
        </div>

      </div>
      
    
  );
}

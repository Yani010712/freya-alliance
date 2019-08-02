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
    maxWidth: 800,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className="grid-container">
      
          <Card className={classes.card}>
            <CardActionArea>
              
                <CardMedia
                  component="img"
                  alt="Girls"
                  height="400"
                  image={'http://www.goodnewsfinland.com/wp-content/uploads/2017/11/20171113021502am_lunette_kenya-95.jpg'} 
                   />
              
            </CardActionArea>
          </Card>
        
    </div>
  );
}

















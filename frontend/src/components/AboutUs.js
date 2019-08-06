import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
  card: {
    display: "flex"
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    height: 200
  }
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div
      className="grid-container"
      style={{ marginTop: 20, marginBottom: 80 }}
    >
      <Grid container spacing={4} className={classes.grid}>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Annette"
                height="300"
                image="./AristideAnnette.jpg"
                title="Annette"
              />
              <CardContent className={classes.content}>
                <Typography variant="subtitle1">Annette Aristide</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                I’m an Engineer and Designer who enjoys exploring Archaeological Sites, studying Astronomy, learning new languages, and drinking tea. I aim to bring together all of my skills to bring forth economic, health, structural, and social change.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="yani"
                height="300"
                image="./RodriguezYani.jpg"
                title="Yani"
              />
              <CardContent className={classes.content}>
                <Typography variant="subtitle1">Yani Rodriguez</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                I’m a Web Developer very interested in using innovative technology to solve educational, social, and environmental problems. I love coffee, building origami art, and playingSudoku.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Milen"
                height="300"
                image="Buchillon-TriffMilen.jpg"
                title="Milen"
              />
              <CardContent className={classes.content}>
                <Typography variant="subtitle1">Milen</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                I’m a Front-End Developer. In my spare time, I enjoy drawing, hand drumming, and meditating.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

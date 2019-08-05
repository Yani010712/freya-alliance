import React, { Component } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "../theme/components/Typography";

import { Container } from "@material-ui/core";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  p: {
    fontSize: 24,
    textAlign: "center",
    marginTop: -10,
    marginBottom: 80,
    maxWidth: 1000
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  icon: {
    fontSize: 72
  },
  title: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
    textAlign: "center"
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=period+menstrual&apiKey=${API_KEY}&pageSize=4
             `
      )
      .then(response => {
        const data = response.data;
        const articles = data.articles;

        const list = articles.map((item, index) => {
          return {
            key: item.index,
            source: item.source.name,
            author: item.author,
            title: item.title,
            description: item.description,
            url: item.url,
            urlToImage: item.urlToImage,
            publishedAt: item.publishedAt
          };
        });

        this.setState({
          list: list
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { title, itemsSize, classes } = this.props;

    return (
      <Container maxWidth="lg" id="news">
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          {title}
        </Typography>

        <Grid container spacing={4}>
          {this.state.list.map((item, index) => (
            <Grid key={index} item xs={12} sm={itemsSize}>
              <NewsItem
                source={item.source.name}
                title={item.title}
                author={item.author}
                description={item.description}
                urlToImage={item.urlToImage}
                url={item.url}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

News.defaultProps = {
  title: "News",
  itemsSize: 6
};

export default withStyles(styles)(News);

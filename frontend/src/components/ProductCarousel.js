
import React from 'react';
import axios from 'axios';
import Slider from "react-slick";

import { withStyles } from '@material-ui/core/styles';
import Typography from '../theme/components/Typography';
import {Container} from '@material-ui/core';
import Box from '@material-ui/core/Box';

import Product from './Product';

const styles = theme => ({
  root: {
    backgroundColor: '#fff', // theme.palette.secondary.light,
  },
  container: {
    paddingTop: theme.spacing (10),
    paddingBottom: theme.spacing (15),
    position: 'relative',

  },
  p: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 80,
    maxWidth: 1000,
  },
  box: {
    padding: 10,
    boxSizing: 'border-box'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing (0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing (5),
    marginBottom: theme.spacing(5),
    textAlign: 'center'
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

class ProductCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    axios.get('/featured')
      .then(response => {
        this.setState({
          list: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { classes } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };

    return (
      <section className={classes.root} id="products">
        <div className="purple-arrow">
          <img src="purple-arrow.png" height="65px" alt="recommended" />
        </div>
          <Container className={classes.container}>
            <div className="purple-border">
              <Typography
                variant="h4"

                className={classes.title}
                component="h2"
                id="Typography-markedH4Center-rec"
              >
                Recommended Products
                <span className="Typography-markedH4Center-10" id="prod-underline"></span>
              </Typography>
              <h5 id="product-header" align="center" >
              Drag the carousel to explore some of our favorite products
              </h5>
              <Slider {...settings}>
                {this.state.list.map((product, index) => (
                  <Box key={index} className={classes.box}>
                    <Product product={product} />
                  </Box>
                ))}
              </Slider>
            </div>
          </Container>

      </section>
    );
  }
}

export default withStyles(styles)(ProductCarousel);

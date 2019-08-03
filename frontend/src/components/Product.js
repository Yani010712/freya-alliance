
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Product extends Component {

  render() {
    const classes = makeStyles({
      card: {
        // maxWidth: 200,
      },
    });

    return (
      <Card className={classes.card}>
        <a target="_blank" rel="noopener noreferrer" href={this.props.product.url}>
          <CardMedia
            component="img"
            alt={this.props.product.brand}
            height="150"
            image={this.props.product.image}
            title={this.props.product.brand} />
        </a>
        <CardContent>
          <Typography gutterBottom subtitle2="h5" component="h5">
            {this.props.product.brand}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Product;
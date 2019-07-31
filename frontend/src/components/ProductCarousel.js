import React from 'react';
import axios from 'axios';

import Slider from "react-slick";

import Product from './Product';

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
          console.log(response)
          this.setState({
            list: response.data
          })
        })
        .catch(error => console.log(error))
    }

  render(){

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
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

    return(
      <div >
          <Slider {...settings}>
            {this.state.list.map((product, index) => (
              <Product key={index} product={product}/>
            ))}
        </Slider>
      </div>
    );
  }
}

  export default ProductCarousel;
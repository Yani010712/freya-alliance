import React, { Component } from "react";
import ProductCarousel from './ProductCarousel';
import Hero from './Hero';
import OurMission from './OurMission';
import Articles from './Articles';
import PanoramicSection from './PanoramicSection';

import { Container } from '@material-ui/core';


class Main extends Component {
  render() {
    return (
      <>
        <Hero showModal={this.props.showModal} />

        <OurMission />

        <PanoramicSection />

        <ProductCarousel />

        <Container maxWidth="lg">

          <Articles />

          <h2 id="reviews">Reviews</h2>
        </Container>
      </>
    );
  }
}

export default Main;

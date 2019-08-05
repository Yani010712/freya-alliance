import React, { Component } from "react";
import ProductCarousel from './ProductCarousel';
import Hero from './Hero';
import OurMission from './OurMission';
import Articles from './Articles';
import News from './News';
import PanoramicSection from './PanoramicSection';
import PeriodCalculator from './PeriodCalculator';

import { Container } from '@material-ui/core';


class Main extends Component {
  render() {
    return (
      <>
        <Hero showModal={this.props.showModal} />

        
        <OurMission />
      

        <PanoramicSection />

        <ProductCarousel />

        <PeriodCalculator />

        <Container maxWidth="lg">
          <Articles />
          <News />
        </Container>
      </>
    );
  }
}

export default Main;

import React, { Component } from "react";
import ProductCarousel from './ProductCarousel';
import Hero from './Hero';
import OurMission from './OurMission';
import Articles from './Articles';
import News from './News';
import PanoramicSection from './PanoramicSection';
import PeriodCalculator from './PeriodCalculator';
import Footer from './Footer';
import { Container } from '@material-ui/core';


class Main extends Component {
  render() {
    return (
      <>
        <div id="home">
          <Hero showModal={this.props.showModal} />
        </div>

        
        <OurMission />
      

        <PanoramicSection />

        <ProductCarousel />

        <PeriodCalculator />

        <Container maxWidth="lg">
          <Articles />
          <News />
        </Container>
        <Footer />
      </>
    );
  }
}

export default Main;

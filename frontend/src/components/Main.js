import React, { Component } from "react";
import ProductCarousel from './ProductCarousel';
import News from './News';


class Main extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello 1</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Hello 2</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Hello 3</h1>

        <br />
        <br />
        <div className="clearfix mb-4">
          <h2 id="products" className="mb-4">Recommended Products</h2>
          <ProductCarousel />
        </div>
        <br />
        <br />
        <div className="clearfix">
          <h2 id="news" className="mb-4">Women News</h2>
          <News/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 id="hello6">Hello 6</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Main;


import React, { Component } from 'react';


class Product extends Component {
  render() {
    return (
      <div className="product card">
          <div className="image-container">
            <a href={this.props.product.url}><img className="card-img-top"  src={this.props.product.image} alt={this.props.product.image}/></a>
            <div className="card-body">
            <h5 className="card-title">{this.props.product.brand}</h5>   
            </div>
        </div>
      </div>  
    );
  }
}

export default Product;
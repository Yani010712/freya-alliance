
import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="product card-deck">
      <div className="image-container">
        <img className="card-img-top" src={this.props.product.img_src} alt={this.props.product.img_src}/>
        <div className="card-body">
            <h5 className="card-title">{this.props.product.name}</h5>
            <h6 className="card-title">Price {this.props.product.price}</h6>
            <h6 className="card-title">Length {this.props.product.length}</h6>
            <h6 className="card-title">Diameter {this.props.product.diameter}</h6>
            <h6 className="card-title">Capacity {this.props.product.capacity}</h6>
            <br></br>
            <br></br>
            
        </div>
      </div>
     </div>
    );
  }
}

export default Product;
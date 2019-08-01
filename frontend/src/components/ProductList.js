import React from 'react';
import axios from 'axios';
import Product from './Product';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    axios.get('/products')
      .then(response => {
        this.setState({
          list: response.data.products
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div >
        {this.state.list.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
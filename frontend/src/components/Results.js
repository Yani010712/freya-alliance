import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        }
    }

    serialize = (obj) => {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }

    componentDidMount = () => {
        const json = sessionStorage.getItem("results");
        const filters = JSON.parse(json);
        const getUrl = `/products?${this.serialize(filters)}`;
        axios.get(getUrl)
            .then(response => {
                this.setState({
                    list: response.data
                })
            })
            .catch(error => console.log(error))
    };

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

export default Results;
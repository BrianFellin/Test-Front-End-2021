import React, { Component } from 'react';
import { Box, Image, Data, Location } from './productlist-styles';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product
        }
    }

    render() {
        const product = this.state.product;

        return (<>
            <div style={Box}>
                <div style={Image}>
                    <img src={product.picture}/>
                </div>
                <div style={Data}>
                    <div>
                        <h3>price</h3>
                        <img src=""/>
                    </div>
                    <span>{product.title}</span>
                </div>
                <div style={Location}>
                    <small>location</small>
                </div>
            </div>
        </>)
    }
}

export default ProductList;
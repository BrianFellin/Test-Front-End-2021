import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Box, BoxItem, Image, Data, Price, Shipping, Title, Location } from './productlist-styles';
import shipping from '../../assets/ic_shipping.png';
import { withRouter } from 'react-router-dom';

class ProductList extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product
        }
    }

    parseNumber(currency, amount, decimals) {
        let num = parseFloat(`${amount}.${decimals}`);
        let price = new Intl.NumberFormat(window.navigator.language, { style: "currency", currency: currency }).format(num);

        return price.replace(currency, '$');
    }

    /**
     * Navega a la página de detalle del producto
     */
     onClickItem(id) {
        if (id) {
            this.props.history.push("/items/" + id);
        }
    }

    render() {
        const product = this.state.product;

        return (<>
            <div style={Box} onClick={() => this.onClickItem(product.id)}>
                <div style={BoxItem}>
                    <img style={Image} src={product.picture} alt="Imagen del producto" />
                    <div style={Data}>
                        <div style={Price}>
                            <label>{this.parseNumber(product.price.currency, product.price.amount, product.price.decimals)}</label>
                            {product.free_shipping ? (<img style={Shipping} src={shipping} alt="Imagen del envío" />) : (<></>)}
                        </div>
                        {/* To-Dd obtener desde el json*/}
                        <small style={Location}>Córdoba</small>
                        <div style={Title}>{product.title}</div>
                    </div>
                </div>
            </div>
        </>)
    }
}

export default withRouter(ProductList);
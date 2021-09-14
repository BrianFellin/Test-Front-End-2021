import React, { Component } from 'react';
import PropTypes, { string, any } from "prop-types";
import Navbar from '../Navbar';
import { withRouter } from 'react-router-dom';
import { Container, Box, BoxItem, Data, Image, DescriptionTitle, Description, Buy, Condition, Title, Price, Amount, Decimals, Button } from './details-styles';

class Details extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    state = { product: any, id: string }

    getItem(id) {
        this._asyncRequest = fetch(window.location.origin + "/api/items/" + id)
            .then(response => {
                return response.json()
            })
            .then(
                externalData => {
                    this._asyncRequest = null;
                    this.setState({ product: externalData, id: id });
                }
            );
    }

    componentWillMount() {
        this._asyncRequest = this.getItem(this.props.match.params.id);
    }

    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }
    }

    parseNumber(currency, amount) {
        let num = parseInt(`${amount}`);
        let price = new Intl.NumberFormat(window.navigator.language, { style: "currency", currency: currency, maximumFractionDigits: 0 }).format(num);
        return price.replace(currency, '$');
    }

    getDecimals(decimals) {
        return (decimals < 10 ? '0' : '') + decimals;
    }

    render() {
        if (this.state.product && this.state.product.item) {
            const product = this.state.product.item;
            return (
                <>
                    <div>
                        <Navbar />
                        <div style={Container}>
                            <div style={Box}>
                                <div style={BoxItem}>
                                    <div style={Data}>
                                        <img style={Image} src={product.picture} alt="Imagen del producto" />
                                        <div style={DescriptionTitle}>Descripción del producto</div>
                                        <div style={Description}>{product.description}</div>
                                    </div>
                                    <div style={Buy}>
                                        <div style={Condition}>
                                            {product.condition} - {product.sold_quantity} vendidos
                                        </div>
                                        <div style={Title}>
                                            <b>{product.title}</b>
                                        </div>
                                        <div style={Price}>
                                            <label style={Amount}>
                                                {this.parseNumber(product.price.currency, product.price.amount)}
                                            </label>
                                            <label style={Decimals}>
                                                {this.getDecimals(product.price.decimals)}
                                            </label>
                                        </div>
                                        <button style={Button}>Comprar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        else {
            return (
                <>
                    <div>
                        <Navbar />
                        <div>
                            Cargando...
                        </div>
                    </div>
                </>
            );
        }
    }
}


export default withRouter(Details);
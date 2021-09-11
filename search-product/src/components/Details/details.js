import React, { Component } from 'react';
import PropTypes, { string, any } from "prop-types";
import Navbar from '../Navbar';
import { withRouter } from 'react-router-dom';
import { Container, Box, BoxItem, Image } from './details-styles';

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
                                        <img style={Image} src={product.picture} alt="Imagen del producto" />
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
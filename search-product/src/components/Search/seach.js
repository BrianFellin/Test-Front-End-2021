import React, { Component } from 'react';
import PropTypes, { string, any } from "prop-types";
import Navbar from '../Navbar';
import { withRouter } from 'react-router-dom';
import ProductList from '../ProductList/productlist';
import { SearchBox } from './search-styles';
import Error from '../Error/error'

class Search extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    state = { searchResult: any, searchVal: string }

    findItems(search) {
        this._asyncRequest = fetch("api/items?q=" + search)
            .then(response => {
                return response.json()
            })
            .then(
                externalData => {
                    this._asyncRequest = null;
                    this.setState({ searchResult: externalData, searchVal: search });
                }
            );
    }

    getSearchParam(location) {
        return new URLSearchParams(location.search).get("search");
    }

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            let search = this.getSearchParam(location);
            if (search) {
                this._asyncRequest = this.findItems(search);
            }
        });

        let search = this.getSearchParam(this.props.location);
        this._asyncRequest = this.findItems(search);
    }

    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }
        this.unlisten();
    }

    render() {
        if (this.state.searchResult) {
            if (this.state.searchResult.items && this.state.searchResult.items.length > 0) {
                return (
                    <>
                        <div>
                            <Navbar />
                            <div style={SearchBox}>
                                {this.state.searchResult.items.map((item, index) => (
                                    <ProductList key={item.id} product={item} />
                                ))}
                            </div>
                        </div>
                    </>
                );
            } else {
                return (
                    <>
                        <Error title={'No encontramos lo que buscabas, intenta nuevamente.'} />
                    </>
                );
            }
        } else {
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

export default withRouter(Search);
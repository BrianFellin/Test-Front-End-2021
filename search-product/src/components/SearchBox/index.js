import React, { Component } from 'react';
import PropTypes from "prop-types";
import SearchIcon from '../../assets/ic_Search.png';
import { InputSearch, ButtonSearch } from './search-styles';
import { withRouter } from 'react-router-dom';

/**
 * Este componente engloba la seccion busqueda y lo que hace es recibir el texto y redirigir
 * a la pagina de listado de productos
 */
class SearchBox extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    };

    constructor() {
        super();

        this.state = {
            search: ''
        };

        this.onInputchange = this.onInputchange.bind(this);

        this.onClickButton = this.onClickButton.bind(this);

        this.onKeyPress = this.onKeyPress.bind(this);
    }

    /**
     * Establece el valor de lavariable search cada vez que cambia el input
     * @param {*} event
     */
    onInputchange(event) {
        this.setState({ search: event.target.value });
    }

    /**
     * Navega a la página de listar productos y agrega el parametro a la busqueda
     */
    onClickButton() {
        if(this.state.search !== ''){
            this.props.history.push("/items?search=" + this.state.search);
        }
    }

    /**
     * Se dispara cada vez que se presiona un tecla, filtro por 13 (enter) para buscar
     * @param {*} event 
     */
    onKeyPress(event) {
        if (event.charCode === 13) {
            this.onClickButton();
        }
    }

    render() {
        return (
            <>
                <input style={InputSearch} type="text" placeholder="Nunca dejes de buscar" value={this.state.search} onChange={this.onInputchange} onKeyPress={this.onKeyPress} />
                <button style={ButtonSearch} onClick={this.onClickButton} title="¡Buscamos!">
                    <img src={SearchIcon} alt="Busqueda" />
                </button>
            </>
        );
    }
}

export default withRouter(SearchBox);
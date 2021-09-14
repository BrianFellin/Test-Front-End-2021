import React, { Component } from 'react';
import icon from '../../assets/Logo_ML@2x.png';
import Navbar from '../Navbar';
import { Text } from './error-styles';

class Error extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div style={Text}>
                    <h2>{this.props.title}</h2>
                    <br />
                    <img src={icon} alt="ícono de mercado libre" />
                </div>
            </div >
        );
    }
}

export default Error;
import React from 'react';
import icon from  '../../assets/Logo_ML@2x.png';
import Navbar from '../Navbar';

const Error = () => {
    const text = {
        textAlign: 'center',
        marginTop: '50px'
    }

    return (
        <div>
            <Navbar />
            <div style={text}>
                <h2>Lo sentimos algo salió mal</h2>                
                <br />
                <img src={icon} alt="ícono de mercado libre" />
            </div>
        </div>
    );
}

export default Error;
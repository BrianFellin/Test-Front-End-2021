import React from 'react';
import icon from  '../../assets/Logo_ML@2x.png';
import Navbar from '../Navbar';
 
const Home = () => {
    const text = {
        textAlign: 'center',
        marginTop: '50px'
    }

    return (
        <div>
            <Navbar />
            <div style={text}>
                <h2>Bienvenido a Mercado Libre</h2>                
                <br />
                <img src={icon} alt="ícono de mercado libre" />
                <br />
                <h3>¡Recuerda, nunca dejes de buscar!</h3>     
            </div>
        </div>

    );
}
 
export default Home;
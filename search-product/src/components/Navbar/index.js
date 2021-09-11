import Logo from '../../assets/Logo_ML.png'
import React from 'react';
import { Nav, Img } from './navbar';
import SearchBox from '../SearchBox/searchbox'

const Navbar = () => {
  return (
    <>
      <div style={Nav}>
        <a href="/"><img style={Img} src={Logo} alt="Imagen del logo" /></a>
        <SearchBox />
      </div>
    </>
  );
};

export default Navbar;
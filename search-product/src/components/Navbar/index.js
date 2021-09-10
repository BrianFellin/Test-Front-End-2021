import Logo from '../../assets/Logo_ML.png'
import React from 'react';
import { Nav } from './navbar';
import SearchBox from '../SearchBox'

const Navbar = () => {
  return (
    <>
      <Nav>
        <a href="/"><img src={Logo} alt="Imagen del logo" /></a>        
        <SearchBox />
      </Nav>
    </>
  );
};

export default Navbar;
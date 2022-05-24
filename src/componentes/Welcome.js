import React from 'react';
import { Link } from 'react-router-dom';
import '../filesCss/App.css';
import logo from '../imagenes/logo.jpg';

// import { Link } from "react-router-dom";

// 

function Welcome () {
 return(
     <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
           Restaurant BurgerQueen 
          </h1> 
          
          <button className='btn-Menu' ><Link to = "/Menu"><h3>Carta</h3></Link></button>
        <button className='btn-Menu' ><Link to = "/Cocina"><h3>Cocina</h3></Link></button> 
        </header>
     </div>
 )
}
export default Welcome

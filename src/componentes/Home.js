import logo from '../imagenes/logo.jpg';
import React from 'react';
// import { Link } from "react-router-dom";
import '../filesCss/App.css';
import Menu from './Menu';
import Cocina from './Cocina';
import { useState } from 'react';


function Home() {

  const [pedido, setpedido]=useState([]);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
           Restaurant BurgerQueen 
          </h1> 
           
        </header>
           <Menu  pedido={pedido}
                  setpedido= {setpedido}/>
           <Cocina pedido={pedido}
                  setpedido= {setpedido} />
      
      </div>
    );
  }
  
  export default Home;
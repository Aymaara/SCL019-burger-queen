import '../filesCss/Menu.css';
import logo2 from '../imagenes/logo2.jpg';
import Tabs from './Tabs';
import { Link } from "react-router-dom";
import {useState} from 'react';
import Cuenta from './Cuenta'; //es hijo de MENU, y padre de tableAndNAme


function Menu({pedido, setpedido}) {

   const [carro, setcarro]=useState([]);
 

    return (
      <div className="Menu">
        <header className="Menu-header">
          <div className="MenuLogo">
           <img src={logo2} className="Menu-logo" alt="logotipo" /> 
           </div>
          <h1>
           Restaurant BurgerQueen 
          </h1>  
           <div className='btnSalir'>
           <button className='btn-exit' ><Link to = "/"><h3>Inicio</h3></Link></button>
           <button className='btn-exit' ><Link to = "/Cocina"><h3>Cocina</h3></Link></button>
           </div>
         </header> 
         <body>
               <div className='nav'>
                 <Tabs setcarro = {setcarro} carro = {carro} />
                 </div>
                 <div className='nav1'>
                 <Cuenta setcarro = {setcarro} carro = {carro} pedido={pedido} setpedido={setpedido}/> 
               </div>
         </body>
        </div>   
     
   );
 }
  
  export default Menu;

//                                Home
  //                  Menu                Cocina          --es padre de 
  //           Cuenta     Tabs       
  //   NameAndTable        Breakfast
  //      |    
  // use State para
  //traer pedido                
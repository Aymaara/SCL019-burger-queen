import '../filesCss/tabs.css';
import {useEffect, useState } from 'react';
import "../filesCss/Desayuno.css"
import {  Desayuno, MenuDia, Refrescos } from "../firebase";
import Breakfast from './Breakfast';




function Tabs ({carro, setcarro}) {

  const [menu, setmenu] = useState([]);
  const[toggleState, setToggleState] = useState(0);

const toggleTab = (index) => { setToggleState(index) };

  useEffect (() => {  
  if(toggleState === 1){ Desayuno().then((list)=> {setmenu(list)})}
  
  if(toggleState === 2 ){ MenuDia().then((list)=>{setmenu(list)})}
  
  if(toggleState === 3){ Refrescos().then((list)=>{setmenu(list)})}
  
  },[setmenu, toggleState])

if (!menu) {   
    return null;
  } 
    //------------------ o -----------------

    return (
        
    <div className="container">
         <div className='bloc-tabs'>
             <button className={toggleState ===1 ? "tabs active-tabs" : "tabs"} onClick = {() => toggleTab(1)} ><h3>Desayuno</h3></button>
             <button className={toggleState === 2?"tabs active-tabs" :'tabs'} onClick = {() => toggleTab(2)}><h3>Menú Día</h3></button>
             <button className={toggleState === 3?"tabs active-tabs" :'tabs'} onClick = {() => toggleTab(3)}> <h3>Refrescos</h3></button>
         </div>
         <div className='content-tabs' >
          <div
           className={toggleState === 1 || 2 || 3 ?  "content active-content" : "content"}>  <hr />
          <div className="breakfast">   
         { menu.map((burger)=>(
           <Breakfast key={burger.id}
                      menu= {menu} 
                      carro ={carro}
                      setcarro={setcarro}
                      burger={[burger.producto, burger.precio, burger.id]}/>
            
         ))
         }
            
       
 </div>
 </div> 
 </div>    

</div> 
    )
}
export default Tabs;

         // 
/* <Button 
key={burger.id}
menu={menu} 
burger={[burger.producto, burger.precio, burger.id]}
setcarro={setcarro} 
carro={carro}
count={count}
></Button> */
        
 // const hamburger = menu.filter((element) => element.id === id);

//   if (carro.length === 0) {
//       setcarro([{
//               id: id,
//               producto: producto,
//               precio: precio,
//               count:count 

//           }])
//   } else {
//       const carrito = [...carro];
//       console.log(carrito);
//       const listPedido = carrito.find((element) => element.id === id);
//       console.log(listPedido)
//       if (listPedido) { 
//        return null          
// }
         
//   }
//   setcarro([
//   ...carro,
//   ...hamburger
// ])
// }



  

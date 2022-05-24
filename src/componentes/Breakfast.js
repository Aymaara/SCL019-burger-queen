import React from "react";
import "../filesCss/Desayuno.css"



function Breakfast ({menu, setcarro, carro, burger}){
  // boton agregar al carro
  const [producto, precio, id] = burger;

const addBurger = ((id) => {
    //  if(menu.filter((see) => see.id === id)){
    if(carro.some((item) => item.id === id)){
      const idproduct= carro.map((item) => item.id === id ? 
      { ...item, count: item.count + 1} : item
      )
      setcarro(idproduct)
    }else{setcarro([
        ...carro,
        {id:id, producto:producto, precio:precio, count: 1}
    ])
}})
 

  console.log(carro)
  
    

  return(
        <div className = 'divbreakfast'>
          {
         menu ?(
          
<div className="breakfast">
              <button className='buton-agregar' type='button'  key={id} value={[producto, precio]}
              onClick={() => addBurger(id)} > {producto} - ${precio} </button>
        </div>    
         ):(console.log('hola'))
         }   
                
 
  </div>
 )
   
    
      
      
  
    }
export default Breakfast;
 
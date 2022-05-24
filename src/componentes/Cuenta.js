import {Fragment} from 'react';
import '../filesCss/carrito.css';
import NameAndTable from './NameAndTable'; // lo llamo linea 26, es hijo de cuenta
import { useState } from 'react';
import { AddPedido} from '../firebase.js';

function Cuenta({carro, setcarro}) {
  const [carga, setcarga]= useState(false);
  const [datos, setDatos] = useState({nombre: '', mesa: ''})

const enviarPedido =  async (carro, datos)=> {
  setcarga(true);
  await AddPedido({
    ...datos, 
    pedido:carro,
   
  })
  setcarga(false);
}

//función para eliminar
    const quitBurger = (id) => {
        const eliminar = carro.filter((quitar) => quitar.id !== id);
        console.log(eliminar);
        return setcarro(eliminar)
    }

    //función para restar
const restProduct = (id) => {
   const rest = carro.map((item) =>{
   if(item.count > 1){
       return item.id === id ? {...item, count: item.count - 1 }: item;
   }else{
return item.id === id ? { ...item, count: 1 } : item;
      }
    });    
    setcarro(rest);
  };

//función para sumar el total

  const todoTotal= carro.reduce((valorprevio, valoractual) =>
          valorprevio + valoractual.count * valoractual.precio, 0)
//función hora



    return (
      <section className='pedido'>
   <table summary='Pedido BurgerQueen'>
        {/* <caption>Un resumen de los grupos de música punk más famosos del Reino Unido</caption> */}
            
                <NameAndTable datos={datos} setDatos={setDatos}/>
              <div className='contenedor'>
                
   <thead>
    <tr>
      {/* <th scope="col">Cantidad</th> */}
      <th scope="col">Cantidad/Producto</th>
      <th scope="col">Quitar</th>
      <th scope="col">Precio</th>
    </tr>
  </thead>
           <div className='carrito'>  
                   {
                    carro.map((element) => {
                      return(
                       <Fragment key={ element.id}> 
      
   <tr>
      <th scope="row"># {element.count}</th>
      <td><span><b> {element.producto}</b> </span></td>
      <td><button className='btnes2'onClick={() => restProduct(element.id)}> Quitar </button>
      <button className='Eliminar' type='button' onClick={() => quitBurger(element.id)}> Eliminar</button> </td>
      <td><span><b> {element.count} x ${element.precio} </b></span></td>
    </tr>
                        
                      </Fragment>               
                      )               
                   })
                }
                </div>
                </div>
               </table>  
                <tfoot>
    <tr>
      <th scope="row" colspan="2">Total</th>
      <td colspan="2"><span><b> $ {todoTotal} </b></span></td>
    </tr>
  </tfoot>
  <button onClick={() => enviarPedido(carro, datos) } type="button" className="btn-btn-primary">Enviar</button>
    
    { 
       carga && 
       <div>
              <p>Enviando</p>
              </div>      
                
           
    }
           
             </section>
            
      
    )
}
export default Cuenta;
         
                           

                               
                              
                                    
                            
                           
                        



// estoy pensando en que: el props que recibe la función arriba del return, es otorgada cuando la función
// es llamada, entregandole un elemento del useState recorrido, por ejempplo Carro.
// pareciera que en donde se encuentra el useState es el componente padre


 
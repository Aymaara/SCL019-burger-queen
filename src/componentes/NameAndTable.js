
import React, {Fragment} from 'react';
import '../filesCss/carrito.css'

const NameAndTable = ({datos, setDatos}) => {

   

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.mesa)
    }

    return (
    <Fragment>
        <div className='pedido1'>
            <h2>Pedido</h2>
            <form className="row"
                onSubmit={enviarDatos}>
                <div className="inputName">
                    <input type="text" placeholder="Nombre" className="form-control"
                        onChange={handleInputChange}
                        name="nombre"></input>
                </div>
                <div className="inputTable">
                    <input type="text" placeholder="N° Mesa" className="form-control"
                        onChange={handleInputChange}
                        name="mesa"></input>
                </div>
                
            </form>
            <div className='datospadre'>  
            <div className='datos'>
             
                <td><p>Nombre</p>
                     <h3>{ datos.nombre}</h3></td>
               <td><p>Mesa</p>
               <h3> {
                    datos.mesa
                }</h3></td>

             
            </div>
            </div>

        </div>

    </Fragment>
);
}

export default NameAndTable;

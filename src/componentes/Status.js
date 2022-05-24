/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import '../filesCss/status.css';
import { db } from "../firebase";
import React, { useState } from "react";
import { updateDoc, doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';;




//Componente para los botones de los pedidos en cocina
export const ButtonStatus = ({ id, status }) => {
  //Estado para cambiar el status de los pedidos
  const [statusOrder, setStatusOrder] = useState(status);

  //Función para actualizar status del pedido
  const updateStatus = async () => {
    if (statusOrder === "Listo") {
      return;
    }
    try {
      await updateDoc(doc(db, "Pedido", id), {
        status: "Listo",
      });
      setStatusOrder("Listo");
    } catch (error) {
      throw new Error("Error al actualizar el status");
    }
  };

  //Función para cerrar/borrar el pedido
  const closeOrder = async (id) => {
    try {
      await deleteDoc(doc(db, "Pedido", id));
    } catch (error) {
      throw new Error("Error al borrar el pedido");
    }
  };

  //Alerta para confirmar
  const alert = () => {
    Swal.fire({
      title: "¿Deseas cerrar el pedido?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Cerrado",
          "El pedido se ha completado correctamente",
          "success"
        );
        closeOrder(id);
      }
    });
  };

  return (
    <section className='boxButtons'>
      <div onClick={() => updateStatus()} className= 'buttons'>
        {statusOrder === "Pendiente" ? (
          <button className='pending'>Pendiente</button>
        ) : (
          <button className='ready'>Listo</button>
        )}
      </div>
      <button className='close' onClick={() => alert()}>
        Cerrar
      </button>
    </section>
  );
};
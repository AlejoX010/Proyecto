import React, {Fragment} from 'react';

//Esto es para que muestre los objetos en un fichero aparte en el div 2 del app
const Cita = ({ cita, eliminarCita }) => (
    <Fragment>
   
    <div className="cita">
        <p>Prestatario: <span>{cita.prestatario}</span></p>
        <p>Prestamista: <span>{cita.prestamista}</span></p>
        <p>Cantidad: <span>${cita.cantidad}</span></p>
        <p>Comicion: <span>{cita.interes}%</span></p>
        <p>Ganancia: <span>${(parseInt(cita.interes)*parseInt(cita.cantidad))/100}</span></p>
        <p>Total: <span>${((parseInt(cita.interes)*parseInt(cita.cantidad))/100) + parseInt(cita.cantidad)}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Descripcion: <span>{cita.descripcion}</span></p>

        <button className="button eliminar u-full-width" 
        onClick={() => eliminarCita(cita.id)}// Se pone la funcion flecha
        >Eliminar &times;</button>
    </div>
    </Fragment>
);





export default Cita;
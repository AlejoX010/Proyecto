import React from 'react';
//Esto es para que muestre los objetos en un fichero aparte en el div 2 del app
const Cita = ({ cita, eliminarCita }) => (
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintoma: <span>{cita.sintomas}</span></p>

        <button className="button eliminar u-full-width" 
        onClick={() => eliminarCita(cita.id)}// Se pone la funcion flecha
        >Eliminar &times;</button>
    </div>
);



export default Cita;
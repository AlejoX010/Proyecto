import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const Formulario = ({ crearCita }) => {

    //Crear state de citas 
    const [cita, actualizarCita] = useState({
        prestatario: '',
        prestamista: '',
        cantidad: '',
        interes: '',
        fecha: '',
        hora: '',
        descripcion: ''
    })

    //Funcion que se ejecuta cada que el usuario escribe en el input
    const [error, actualizarError] = useState(false)

    const actualizarState = (e) => {
        //El e es la variable de evento, el target es como el tomar y el value es el valor del campo llenado
        // console.log(e.target.value);
        actualizarCita({
            ...cita, //Esta es para que rellene el campo especifico
            [e.target.name]: e.target.value // Aqui es para agregar lo que el cliente quiere al estado
        })
    }

    //Extraer valores (agarra los valores del formulario pa meterlo en otra cosa)
    const { prestatario, prestamista, cantidad, interes, fecha, hora, descripcion } = cita; //Se agarra para darle un valor al formulario y la cita del estado, esto tambien nos sirve para agarrar y resetear el formulario    yo soy el de arriba

    const sumitCita = (e) => {
        e.preventDefault(); //Esto siempre se hace para que no haga acciones por defecto que no queires
        // Acciones que siempre se deben de hacer...

        // Validar
        if (prestatario.trim() === '' || prestamista.trim() === '' || cantidad.trim() === '' || interes.trim() === '' || fecha.trim() === '' || hora.trim() === '' || descripcion.trim() === '') { //trim es para quitar los espacio de principio y fin
            actualizarError(true);
            return;
        }

        // Elimina lo de los campos son obligatorios cuando se llenan los datos 
        actualizarError(false);

        // Asignar un id
        cita.id = uuidv4();

        // Crear la cita
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            prestatario: '',
            prestamista: '',
            cantidad: '',
            interes: '',
            fecha: '',
            hora: '',
            descripcion: ''
        })
    }

    return (
        <Fragment>
            <h2>Realizar Prestamo</h2>

            {/* Esto dice que si en el caso de que error es true que ejecute algo y que si es false ps que no haga nada */}
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            {/* Aqui empiexa el formulario */}
            <form onSubmit={sumitCita}>  {/* onSumit es para la funcion de enviar */}
                <label>Nombre de la Prestatario</label>
                <input
                    type="text"
                    name="prestatario"
                    className="u-full-width"
                    placeholder="Nombre Prestatario"
                    onChange={actualizarState} /*Esta es como la accion que va a llevar a acabo la funcion*/
                    value={prestatario} //Este se complementa con el de arriba
                />


                <label>Nombre del Prestamista</label>
                <input
                    type="text"
                    name="prestamista"
                    className="u-full-width"
                    placeholder="Nombre Prestamista"
                    onChange={actualizarState}
                    value={prestamista}
                />

                <label>Cantidad Prestada (solo numero)</label>
                <input
                    type="number"
                    name="cantidad"
                    className="u-full-width"
                    placeholder="Cantidad"
                    onChange={actualizarState}
                    value={cantidad}
                />

                <label>Tasa de interes (solo numero)</label>
                <input
                    type="number"
                    name="interes"
                    className="u-full-width"
                    placeholder="Interes"
                    onChange={actualizarState}
                    value={interes}
                />


                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />


                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />


                <label>Descripcion</label>
                <textarea
                    className="u-full-width"
                    name="descripcion"
                    placeholder="Descripcion"
                    onChange={actualizarState}
                    value={descripcion}
                />


                <button type="submit" className="u-full-width button-primary">Agregar cita</button>

            </form>
        </Fragment>
    )
}

export default Formulario;

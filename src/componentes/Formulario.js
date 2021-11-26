import React, { Fragment, useState } from "react";

const Formulario = () => {

    //Crear state de citas 
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''

    })
    //Funcion que se ejecuta cada que el usuario escribe en el input
    const actualizarState = () => {
        console.log('escribiendo...');
    }

    return (
        <Fragment>
            <h2>Crear cita</h2>
            {/* Aqui empiexa el formulario */}
            <form>
                <label>Nombre de la Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState} />

                <label>Nombre del Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={actualizarState}/>

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState} />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width" 
                    onChange={actualizarState}/>

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    placeholder="Descripcion de los sintomas"
                    onChange={actualizarState} />

                <button type="submit" className="u-full-width button-primary">Agregar cita</button>

            </form>
        </Fragment>
    )
}

export default Formulario;

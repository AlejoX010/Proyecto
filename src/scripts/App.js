import React, { Fragment, useState, useEffect } from "react";
import Formulario from '../componentes/Formulario.js'
import Cita from '../componentes/Cita.js';

// const App = () => {} eso tamb8ien es una funcion
// Se pueden mandar a llamar variables pero apra eso debe de ser entre llaves

//Mandando a llamar asi a la funcion y poniendole las props se pueden reutilizar el codigo para mandar mas diferentes mensajes con la misma funcion
// Las Funciones siempre van en mayusculas

function App() {

  //CItas en localstorage (Es para subirlo a la mini db que tiene chrome)
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //Arrego de las citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //useEffect para realizar diferentes operaciones cuando el state cambia, es para que cada que el estado de citas cambie esto lo se vuelve a ejecutar
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]); //Este arreglo es una dependencia 

  //Funcion que tome las citas actuales y agregue las nuevas
  const crearCita = cita => {
    console.log(cita);
    guardarCitas([
      ...citas,
      cita
    ])
  }

  //Funcion que elimina una cita por su id

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas)
  }

  //Mensaje condicional
  // Aqui es un ejemplo de como poner una condicional abreviada ?=entonces y :=else
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      {/* Este es el div contenedor para agregar algunos estilos */}
      <div className="container">
        {/* Este es en el que aplica el calavera */}
        <div className="row">
          {/* Este es el div del formulario */}
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>


    </Fragment>
  );
}

export default App;

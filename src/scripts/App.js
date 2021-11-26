import React, { Fragment } from "react";
import Formulario from '../componentes/Formulario.js'

// const App = () => {} eso tamb8ien es una funcion
// Se pueden mandar a llamar variables pero apra eso debe de ser entre llaves

//Mandando a llamar asi a la funcion y poniendole las props se pueden reutilizar el codigo para mandar mas diferentes mensajes con la misma funcion
// Las Funciones siempre van en mayusculas

function App() {
  return (
    <Fragment>
      <h1>Administrador de pasientes</h1>
      {/* Este es el div contenedor para agregar algunos estilos */}
      <div className="container">
        {/* Este es en el que aplica el calavera */}
        <div className="row">
          {/* Este es el div del formulario */}
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>


    </Fragment>
  );
}

export default App;

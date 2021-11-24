import './App.css';


// const App = () => {} eso tamb8ien es una funcion
// Se pueden mandar a llamar variables pero apra eso debe de ser entre llaves

//Mandando a llamar asi a la funcion y poniendole las props se pueden reutilizar el codigo para mandar mas diferentes mensajes con la misma funcion
// Las Funciones siempre van en mayusculas
const Mensaje = (props) => {
  return (
    <h1>{props.mensaje}</h1>
  )
}


function App() {
  return (
    <div className="App">
      <Mensaje mensaje="Este es el mensaje cambiado" />
      <Mensaje mensaje="Este es el mensaje dos" />
      <Mensaje mensaje="Este es el mensaje tres" />
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./components/Frase";
import Spinner from "./components/Spinner";
import { useState, useEffect } from "react";

function App() {
const [personaje, setPersonaje] = useState({});
const [spinnerValue, setSpinnerValue] = useState(false);

useEffect( () => {
  consultarApi()
},[]);

const consultarApi = async() => {
  setSpinnerValue(true);
  const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const resultado = await respuesta.json();
  setPersonaje(resultado[0]);
  setTimeout( () => setSpinnerValue(false), 2000);
}

const mostrarComponente = (spinnerValue === true) ? <Spinner></Spinner> : <Frase personaje={personaje}></Frase>;

  return (
    <section className="container my-5 text-center">
        <figure>
          <img
            src={process.env.PUBLIC_URL + "simpsonsLogo.svg"}
            alt="Logo de los Simpsons"
            className="w-50"
          />
        </figure>
        <Button variant="warning" onClick={ () => consultarApi()}>Obtener frase</Button>
        {mostrarComponente}
    </section>
  );
}

export default App;

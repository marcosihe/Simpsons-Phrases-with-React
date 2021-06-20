import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./components/Frase";
import { useState, useEffect } from "react";

function App() {
const [personaje, setPersonaje] = useState({});

useEffect( () => {
  consultarApi()
},[]);

const consultarApi = async() => {
  const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const resultado = await respuesta.json();
  setPersonaje(resultado[0]);
}

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
        <Frase personaje={personaje}></Frase>
    </section>
  );
}

export default App;

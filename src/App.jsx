import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./components/Frase";

function App() {
  return (
    <section className="container my-5 text-center">
        <figure>
          <img
            src={process.env.PUBLIC_URL + "simpsonsLogo.svg"}
            alt="Logo de los Simpsons"
            className="w-50"
          />
        </figure>
        <Button variant="warning">Obtener frase</Button>
        <Frase></Frase>
    </section>
  );
}

export default App;

import React from "react";
import { Card, Button } from "react-bootstrap";

const Frase = (props) => {
  return (
    <Card className="my-4 border-warning">
      <Card.Body border="success">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src={props.personaje.image} alt={props.personaje.character} />
          </div>
          <div className="col-sm-12 col-md-8">
            <Card.Title className="py-3"><h3>{props.personaje.character}</h3></Card.Title>
            <Card.Text className="py-2 pl-5 pr-5">
              {props.personaje.quote}
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Frase;

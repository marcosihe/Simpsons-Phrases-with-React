import React from "react";
import { Card, Button } from "react-bootstrap";

const Frase = () => {
  return (
    <Card className="my-4">
      <Card.Body>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src="" alt="" />
          </div>
          <div className="col-sm-12 col-md-8">
            <Card.Title>Personaje</Card.Title>
            <Card.Text>
              Random phrase
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Frase;

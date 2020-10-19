import React from "react";
import { Card } from "react-bootstrap";
import "../../App.css";

const CardComponent = props => {
  return (
    <>
      <Card className="bg-light text-dark my-3 card">
        <Card.Body>
          <Card.Title className="title">{props.title}</Card.Title>
          <Card.Text>{props.info}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComponent;

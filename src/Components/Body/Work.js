import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "../../App.css";

const videos = [
  {
    title: "Parking App",
    info:
      "Manage parking of vehicles in your organization.You can park the vehicle, show the status of available slots and remove the vehicle by applying some charges based on 1Rs/min",
    link: "https://parking-e486e.web.app"
  },
  {
    title: "Sign In",
    info:
      "Simple Sign In Application which provides sign in using google, facebook and email registration",
    link: "https://signup-24552.web.app"
  },
  {
    title: "Len-Den",
    info:
      "Len-Den is an app which keeps the track of all your money with your friends,like how much you have to give them and how much you have to take from them.It can also used in shops to keep track of customer's money who buy item and pay later",
    link: "https://lenden-68143.web.app/#/"
  },
  {
    title: "@lalitlsg",
    info:
      "New Portfolio site,fully resoponsive and animated using styled components and CSS flexbox and dark theme feature",
    link: "https://unruffled-boyd-62e355.netlify.app/"
  }
];

const Videos = () => {
  return (
    <>
      <Row>
        {videos.map((value, key) => {
          return (
            <Col xs={12} sm={4} key={key} className="mb-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={value.link}
                style={{ textDecoration: "none" }}
              >
                <Card style={{ height: "90%" }} className="card my-3">
                  <Card.Body>
                    <Card.Title className="title">{value.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {value.info}
                    </Card.Subtitle>
                    <Button
                      className="button"
                      style={{
                        backgroundColor: "#9acd32",
                        borderColor: "#9acd32 "
                      }}
                    >
                      Visit
                    </Button>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Videos;

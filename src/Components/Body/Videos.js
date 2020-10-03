import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "../../App.css";

const videos = [
  {
    title: "Openstack API",
    info: "Handling openstack through API’s",
    link: "https://youtu.be/UwnpO51f8DE"
  },
  {
    title: "Openstack Installation",
    info: "Two node setup in virtual box for openstack installation",
    link: "https://youtu.be/MaLw6Fxa9cE"
  },
  {
    title: "Openstack SDK",
    info: "Connecting to openstack using openstack sdk in python",
    link: "https://youtu.be/ApEPfhKmVWE"
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
                href={value.link}
                style={{ textDecoration: "none" }}
              >
                <Card style={{ height: "10rem" }} className="video-card my-3">
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
                      Watch Video
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

import React from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../App.css";
import profile from "../../Images/profile.png";
import Instagram from "../../Images/Instagram.svg";
import Facebook from "../../Images/Facebook.svg";
import Linkedin from "../../Images/Linkedin.svg";
import Youtube from "../../Images/Youtube.svg";
import Medium from "../../Images/Medium.svg";
import Twitter from "../../Images/Twitter.svg";
import StackOverflow from "../../Images/StackOverflow.svg";

const social = [
  { img: Instagram, link: "https://www.instagram.com/lalits_17/" },
  { img: Facebook, link: "https://www.facebook.com/lalitlsg17/" },
  { img: Linkedin, link: "https://www.linkedin.com/in/lalit-garghate/" },
  {
    img: Youtube,
    link: "https://www.youtube.com/channel/UCHOKI7oqx0J7iEmeTR2V7xw"
  },
  { img: Medium, link: "https://medium.com/@lalit.garghate" },
  { img: Twitter, link: "https://twitter.com/lalitlsg" },
  {
    img: StackOverflow,
    link: "https://stackoverflow.com/users/11844605/lalit-garghate"
  }
];

const HomeAboutCommon = props => {
  const history = useHistory();

  const contact = () => {
    history.push("/contact");
  };

  return (
    <>
      <Row style={{ marginTop: "10%" }}>
        <Col
          xs={12}
          sm={{ span: 5, order: props.name === "about" ? "last" : "first" }}
        >
          <img src={props.logo} alt="developer" className="img-developer" />
        </Col>
        <Col
          xs={12}
          sm={{ span: 5, order: props.name === "about" ? "first" : "last" }}
          className="mx-auto mt-2"
        >
          {props.name === "about" ? (
            <img
              src={profile}
              alt="profile"
              width="100"
              height="100"
              style={{
                borderRadius: "10%",
                display: "block",
                margin: "auto"
              }}
            />
          ) : null}

          <h1
            className="first-heading"
            style={{ textAlign: props.name === "about" ? "center" : null }}
          >
            {props.h1}
          </h1>
          <h3
            className="my-3 second-heading"
            style={{ textAlign: props.name === "about" ? "center" : null }}
          >
            <span> {props.h2} </span>
            <span style={{ color: "#9acd32" }}>{props.brandName}</span>
          </h3>
          {props.name === "home" ? (
            <button
              className="btn-contact-us"
              style={{ left: props.name === "about" ? "33%" : null }}
              onClick={contact}
            >
              {props.btnText}
            </button>
          ) : (
            <div className="social">
              {social.map((value, key) => {
                return (
                  <a target={key} key={key} href={value.link}>
                    <img
                      src={value.img}
                      alt="social"
                      width="50"
                      height="50"
                      className="social-logo"
                    />
                  </a>
                );
              })}
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default HomeAboutCommon;

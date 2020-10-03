import React from "react";
import emailjs from "emailjs-com";
import { Row, Col } from "react-bootstrap";
import email from "../../Images/email.svg";
import sent from "../../Images/sent.svg";

import "../../App.css";

const Contact = () => {
  const [display, setDisplay] = React.useState(false);

  const sendMail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        "one-for-me",
        "template_w0lviln",
        e.target,
        "user_7MBjcguwVqtd32s0m492U"
      )
      .then(
        result => {
          console.log(result.text);
          setDisplay(true);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Row style={{ marginTop: "5px" }}>
        <Col xs={12} sm={5}>
          <img src={email} alt="email" className="img-developer" />
        </Col>
        <Col xs={12} sm={5} className="mx-auto my-2">
          <div
            className="formimg"
            style={{ display: display ? "block" : "none" }}
          >
            <img src={sent} alt="email" width="90%" height="90%" />
            Email Sent Successfully!
          </div>
          <div className="form" style={{ display: display ? "none" : "block" }}>
            <form onSubmit={sendMail}>
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />

              <input
                required
                type="text"
                id="email"
                name="email"
                placeholder="Your Email"
              />

              <input
                required
                type="text"
                id="subject"
                name="subject"
                placeholder="Your Subject"
              />

              <textarea
                required
                id="message"
                name="message"
                placeholder="Your Message"
              />

              <input type="submit" value="Submit" />
            </form>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Contact;

import React from "react";
import HomeAboutCommon from "./HomeAboutCommon";
import mail from "../../Images/mail.svg";
const About = () => {
  return (
    <>
      <HomeAboutCommon
        logo={mail}
        h1={"Lalit Garghate"}
        h2={"Software Engineer"}
        brandName={"OneForMe.com"}
        btnText={"Mail Us"}
        name={"about"}
      />
    </>
  );
};

export default About;

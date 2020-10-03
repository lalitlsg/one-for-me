import React from "react";
import developer from "../../Images/developer.svg";
import HomeAboutCommon from "./HomeAboutCommon";

const Home = () => {
  return (
    <>
      <HomeAboutCommon
        logo={developer}
        h1={"It's Time To Get Your Business Online"}
        h2={"Create Website For Your Business With"}
        brandName={"OneForMe.com"}
        btnText={"Contact Us"}
        name={"home"}
      />
    </>
  );
};

export default Home;

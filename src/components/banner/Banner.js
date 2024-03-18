import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import banner from "../../images/main-banner-1.jpg";
import catBanner1 from "../../images/catbanner-01.jpg";
import catBanner2 from "../../images/catbanner-02.jpg";
import catBanner3 from "../../images/catbanner-03.jpg";
import catBanner4 from "../../images/catbanner-04.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <Container class1="home-wrapper-1 py-5">
        <div className="">
          <img src={banner} alt="main banner" width={"100%"} />
          <div className="main-banner-content position-absolute"></div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

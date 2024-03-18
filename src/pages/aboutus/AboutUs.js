import React from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import "./AboutUs.css";
const AboutUs = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "About-us",
    },
  ];
  return (
    <div className="ps-page--single">
      <BreadCrumb breadcrumb={breadCrumb} />
      <div className="about-us">
        <div className="about-us-flex">
          <img
            className="about-us-img"
            src="https://i0.wp.com/jozzbybazar.com/wp-content/uploads/2023/05/Profile-page.png?fit=750%2C466&ssl=1"
            alt=""
          />
          <div className="about-us-text-container">
            <h1 className="about-us-heading">About us</h1>
            <p>
              Founded in 2023 with a vision to “transform the way trade, Jozzby
              Bazar is the south largest business-to-business (B2B) e-commerce
              platform. It has operations categories like Lifestyle.
            </p>
          </div>
        </div>
        <div className="about-us-flex">
          <div className="about-us-text-container">
            <h1 className="about-us-heading">Our Mission</h1>
            <p>
              Jozzby Bazar is solving core trade problems faced by small and
              medium businesses, through its unique low-cost business model by
              leveraging technology and bringing the benefits of eCommerce to
              them. It is a one stop shop for all business requirements in the
              b2b space Jozzby Bazar aim is to be a trusted partner to small
              businesses by empowering them with technology, financial
              inclusivity, and supply chain capabilities to compete and win in
              an increasingly tech and digital world.
            </p>
          </div>
          <img
            className="about-us-img"
            src="https://i0.wp.com/jozzbybazar.com/wp-content/uploads/2023/02/about-bannner-.jpg?fit=760%2C491&ssl=1"
            alt=""
          />
        </div>
        <div className="about-us-container">
          <h1>Our Team</h1>
          <p>
            Jozzby Bazar enables small manufacturers, and brands to market and
            sells their products at low cost with 100% payment security and
            complete transparency to source from a large selection of
            high-quality products at the best prices while facilitating
            efficient and transparent transactions with a huge convenience.
          </p>
        </div>
      </div>

      {/* <AboutAwards /> */}
    </div>
  );
};

export default AboutUs;

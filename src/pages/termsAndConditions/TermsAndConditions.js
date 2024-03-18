import React, { useState } from "react";
import "./TermsAndConditions.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import TermData from "./TermData";
const TermsAndConditions = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Terms & Conditions",
    },
  ];
  return (
    <>
      <BreadCrumb breadcrumb={breadCrumb} />
      <div className="container">
        <div className="term-container">
          <h1>Terms and conditions</h1>
        </div>
        <div className="ps-section__content">
          <h3>Jozzby Bazar</h3>
          <p>
            We value the trust you place in us. That’s why we insist upon the
            highest standards for secure transactions and customer information
            privacy. Please read the following statement to learn about our
            information gathering and dissemination practices.
          </p>
          <p>
            Thanks for using our products and services Services. The Services
            are provided by Jossby Technologies India Pvt Ltd. Jozzby Bazar,
          </p>
          <p>
            Note: Our Privacy Policy is subjected to change at any time without
            notice. To make sure you are aware of changes, please review this
            policy periodically.
          </p>
          <p>
            By visiting this website or mobile application you agree to be bound
            by the terms and conditions of this Privacy Policy. If you do not
            agree please do not use or access our website or app.
          </p>
          <p>
            By mere use of the website, you expressly consent to our use and
            disclose of your personal information in accordance with this
            Privacy Policy. This Privacy Policy is incorporated into and subject
            to the Terms of Use.
          </p>

          <div className="wrapper-accordion">
            <div className="accordion">
              {TermData.map((item, i) => (
                <div className="item-accordion" key={i}>
                  <div className="title-accordion" onClick={() => toggle(i)}>
                    <h4>{item.question}</h4>
                    <span>{selected === i ? "-" : "+"}</span>
                  </div>
                  <div
                    className={
                      selected === i
                        ? "content-accordion show"
                        : "content-accordion"
                    }
                  >
                    {item.answer.split("\n").map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;

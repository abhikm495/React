import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./ContactUs.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

const ContactUs = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Contact-us",
    },
  ];
  return (
    <>
      <BreadCrumb breadcrumb={breadCrumb} />
      <div className="ps-contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.897942275955!2d77.5734767806147!3d13.042167780549997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1700404aa505%3A0x8aba189a17a64259!2sJossby%20Technologies%20india%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1707375583829!5m2!1sen!2sin"
          height="450"
          width="100%"
        ></iframe>
      </div>
      <div className="ps-contact-info">
        <div className="container">
          <div className="ps-section__header">
            <h3>Contact Us For Any Questions</h3>
          </div>
          <div className="ps-section__content">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                <div className="ps-block--contact-info">
                  <h4>Contact Directly</h4>
                  <p>
                    <a href="mailto:support@jozzbybazar.com">
                      support@jozzbybazar.com
                    </a>
                    <br />
                    <span>(+91) 76191 96633</span>
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                <div className="ps-block--contact-info">
                  <h4>Head Quater</h4>
                  <p>
                    <span>
                      5th D Cross Rd, RMV, Stage 2, Sanjayanagara, Bengaluru,
                      Karnataka 560094
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                <div className="ps-block--contact-info">
                  <h4>Work With Us</h4>
                  <p>
                    <span>Send your CV to our email:</span>
                    <a href="mailto:support@jozzbybazar.com">
                      hr@jozzbybazar.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                <div className="ps-block--contact-info">
                  <h4>Customer Service</h4>
                  <p>
                    <span>Chat with us</span>
                    <br />
                    <a
                      href="https://api.whatsapp.com/send/?phone=%2B917483422859&text=Welcome+By+Jozzby+bazar&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp size={"25px"} />
                    </a>
                    <br />
                    <span>(+91) 76191 96633</span>
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                <div className="ps-block--contact-info">
                  <h4>Available</h4>
                  <p>
                    <span>Mon-Sat / 10:00 AM - 7:00 PM</span>
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                <div className="ps-block--contact-info">
                  <h4>Vendor Support</h4>

                  <p>
                    <a href="mailto:hr@jozzbybazar.com">
                      supply@jozzbybazar.com
                    </a>
                    <br />
                    <span>(+91) 9535026699</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

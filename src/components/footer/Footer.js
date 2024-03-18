import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../../images/newsletter.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-black">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-black mb-4">Contact Us</h4>
              <div>
                <p> Available Mon-Sat / 10:00 AM - 7:00 PM</p>
                <address className="text-black fs-6">
                  {" "}
                  5th D Cross Rd, RMV, Stage 2, Sanjayanagara, Bengaluru,
                  Karnataka 560094
                </address>
                <a href="tel:+91 9091234567" className="mt-3 d-block mb-1 ">
                  +91 76191 96633
                </a>

                <a
                  href="mailto:dreamlicious.srs@gmail.com"
                  className="mt-2 d-block mb-0 "
                >
                  support@jozzbybazar.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="" href="#">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/about-us" className="text-white py-2 mb-1">
                  About Us
                </Link>
                <Link to="/faq" className="text-white py-2 mb-1">
                  Faq
                </Link>
                <Link to="/contact-us" className="text-white py-2 mb-1">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Jozzby Bazar
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

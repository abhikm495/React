import React from "react";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import "./PlayStore.css";
import { Link } from "react-router-dom";
const PlayStore = () => {
  return (
    <div className="playstore-container">
      <div className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex flex-column  gap-30 align-items-center">
                <span className="heading">
                  Download Jozzby Bazar - B2B App Now
                </span>
                <div className="d-flex justify-content-between">
                  <Link
                    to={
                      "https://apps.apple.com/in/app/jozzby-bazar-b2b/id6478763055"
                    }
                  >
                    <button className="me-2 me-md-3 download-img">
                      <img
                        src="https://1000logos.net/wp-content/themes/redwaves-lite/app_store.svg"
                        alt=""
                        width={"200px"}
                      />
                    </button>
                  </Link>
                  <Link
                    to={
                      "https://play.google.com/store/apps/details?id=com.jozzbybazar.customer&pli=1com.jozzbybazar.customer"
                    }
                  >
                    <button className="me-2 me-md-3 download-img">
                      <img
                        src="https://1000logos.net/wp-content/themes/redwaves-lite/google_play.svg"
                        alt=""
                        width={"200px"}
                      />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="sub-heading">
                <h2>Hurry,Grab The Best Offers</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayStore;

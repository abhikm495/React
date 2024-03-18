import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrumb.css";
const BreadCrumb = ({ breadcrumb }) => {
  return (
    <div className="ps-breadcrumb">
      <div className="container">
        <ul className="breadcrumb">
          {breadcrumb.map((item, index) => {
            if (!item.url) {
              return <li key={index}>/{item.text}</li>;
            } else {
              return (
                <li key={index}>
                  <Link to={item.url}>{item.text}</Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;

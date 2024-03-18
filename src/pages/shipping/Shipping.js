import React from "react";
import "./Shipping.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
const Shipping = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Shipping",
    },
  ];
  return (
    <>
      <BreadCrumb breadcrumb={breadCrumb} />
      <div className="policy-container">
        <h2 className="policy-header">Shipping Policy</h2>
        <p>
          Normally, shipping from Jozzby bazar can take anywhere between 10 – 15
          business days for a single order.
        </p>
        <p>
          Jozzby bazar will begin processing the order as soon as it is
          received. It takes around 7 days to process the order and around 7
          days to ship the order. These timelines are subject to change within
          the organization.
        </p>
        <p>
          We do not ship backorders. Every item on our website is usually in
          stock. In the rare case of an item being unavailable we will contact
          you within 5 days of placing the order and initiate either a refund or
          a replacement depending on the customer.
        </p>
        <p>
          Only 1 shipping address can be processed per order, if you had
          multiple addresses, you would like items shipped to, please treat them
          as separate orders.
        </p>
      </div>
    </>
  );
};

export default Shipping;

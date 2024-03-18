import React from "react";
import "./Refund.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
const Refund = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "return & refund",
    },
  ];
  return (
    <>
      <BreadCrumb breadcrumb={breadCrumb} />
      <div className="policy-container">
        <h2 className="policy-header">Return Refund Policy</h2>
        <h4>
          If you are not completely satisfied with your purchase for any reason,
          you may return it to us for a full refund or an exchange. Please refer
          below for more information on our return policy.
        </h4>
        <h5>1.How do I return the product?</h5>
        <ul>
          <li>Sign in to your Jozzby bazar account on the app/website.</li>
          <li>Find the order in my orders, click on “return item” button.</li>
          <li>
            Find the item(s) you want to return and enter the reason for return
          </li>
          <li>
            Fill in the appropriate detail such as email, phone number, net
            banking/ bank/cancelled cheque/UPI details and address for pick up
            in 3 working days.
          </li>
          <li>
            Your return request may need to go through a verification process
            depending on the type of product you want to return.
          </li>
          <li>
            Refund will be initiated and processed within 3 working days of
            product reaching the seller.
          </li>
          <li>
            Your request will be fulfilled according to the Jozzby bazar
            returns/replacement guarantee.
          </li>
        </ul>
        <h5>2.How do I place an exchange request on Jozzby bazar?</h5>
        <p>
          If you would like to exchange your products purchased, kindly follow
          the following steps:
        </p>
        <ul>
          <li>
            Under the “My Orders” area of the App/Website, you can create an
            exchange for products purchased from Jozzby bazar within the stated
            return/exchange time (see product details page for the same). You
            will be able to proceed and generate an exchange id if your address
            is suitable for exchange. Please keep a record of your exchange id
            for future use.
          </li>
          <li>
            lace the product in a packet but do not seal it. Please make sure
            the product is unused, unwashed, and has all the tags intact.
          </li>
          <li>
            Give the original product to our delivery person, and he will give
            you the replacement. Please make sure you have the original item on
            hand and that the exchange item is being sent to the same address as
            the original item.
          </li>
          <li>
            Track the status of your exchange request under “My orders” of the
            app/website.
          </li>
        </ul>
        <h5>
          3.Can I return the product to the delivery person if I did not like
          it?
        </h5>
        <ul>
          <li>
            You can establish a Return on App or Website and we have a very
            flexible policy. Our courier partners have been told not to accept a
            package as a return while making a package delivery to avoid any
            confusion or delays.
          </li>
        </ul>
        <h5>4.What are the non-returnable products at Jozzby bazar?</h5>
        <ul>
          <li>That the Product has been utilised.</li>
          <li>The Product has been washed.</li>
          <li>
            The price tags, brand tags, box, original packaging material, and
            accompanying accessories have been damaged or discarded by the user.
          </li>
          <li>Where the Product has been damaged.</li>
          <li>
            In case of undergarments and hosiery, product returns will not be
            accepted.
          </li>
          <li>
            In case of jewellery, the products returned are fake or counterfeit.
          </li>
          <li>
            That Jozzby bazar is satisfied that the Product has been rendered
            defective or unusable.
          </li>
          <li>
            Where the user breaches the Cancellation, Return and Refund Policy.
          </li>
        </ul>
        <h5>
          5.Where payment had been made by cash on delivery, how do I get
          refund?
        </h5>
        <ul>
          <li>
            In this regard you are required to update your bank details via a
            Cancelled Cheque while creating a request for return.
          </li>
        </ul>
        <h5>6.When is the refund for my return provided?</h5>
        <ul>
          <li>
            We share a promised pick-up date once the Return ID is generated.
            Your return order will be picked up on that date. As soon as the
            Return ID is generated, we shall inform you of the projected return
            date.
          </li>
        </ul>
        <h5>7.Further terms applicable to Refund:</h5>
        <ul>
          <li>
            If, after conducting quality checks, it is determined that the
            Product being returned entitles the User to a refund, Jozzby bazar
            will commence the process of refunding the cash paid by the User
            towards the purchase of a Product. It is also clarified that Jozzby
            bazar is not obligated to refund or return any Product that it
            determines to be ineligible for a refund or return based on such
            quality checks.
          </li>
          <li>
            Except in the instance of a Product that is defective at the time of
            delivery, the refund that a User is entitled to does not include
            cash paid towards shipping charges or any other such charges that
            may be applicable from time to time (for reasons attributable to and
            accepted by Jozzby bazar after due verification at its sole
            discretion).
          </li>
          <li>
            Jozzby bazar will make every reasonable effort to keep the User
            informed about the status of the refund by sending updates to the
            User’s registered phone number and email address. Jozzby bazar
            disclaims any and all liability that may emerge as a result of its
            failure to keep the User informed about the refund status.
          </li>
          <li>
            If Jozzby bazar accepts the refund request without objection, the
            refund should reflect in the User’s bank account within a reasonable
            time (according to the User’s bank’s restrictions in the event of
            bank account/credit card refunds) after Jozzby bazar initiates the
            refund.
          </li>
        </ul>
        <h5>8.Please note:</h5>
        <ul>
          <li>
            Received damaged goods during transit: Unpacking Video Required.
          </li>
          <li>
            Received product is different from the ordered product: Unpacking
            Video Required.
          </li>
          <li>
            Received product has a manufacturing defect: Unpacking Video
            Required.
          </li>
          <li>
            Product will not be returned if tag on the product is lost or if the
            invoice is lost.
          </li>
        </ul>
        <p>
          Within 3 days of the purchase date, all returns must be postmarked.
          All returned items must be brand new and untampered, with all tags and
          labels attached. Within 3 days of delivery, this item is returnable.
          This item can be exchanged for a different size or colour or returned
          for a full refund.
        </p>
        <p>
          For a successful refund/replacement, please preserve the item in its
          original condition, with the brand outer box, MRP tags attached,
          warranty cards, and original accessories in manufacturer packaging.
          Before giving a refund or replacement, we may contact you to determine
          the product’s damage or defect. If the product of your choice is
          unavailable in your preferred size or colour or model, or if it is out
          of stock, you may decide that you want your money back. In this
          scenario, you may choose Refund to have your money returned to you.
        </p>
        <h5>9.Easy refund option:</h5>
        <ul>
          <li>
            As an IMP transfer if you have paid via cash-on-delivery; o Enter
            your Net banking details or share a cancelled cheque or debit/credit
            card details and UPI details that was used during placing the order.
            o After filling all the appropriate details click “submit “to
            return.
          </li>
          <li>
            Your money will reach you in 2 working days of product reaching the
            seller.
          </li>
        </ul>
        <h5>10.Contact Us:</h5>
        <ul>
          <li>
            If you have any questions concerning our return policy, please
            contact us at: [phone number] email address: help@jozzbybazar.in
          </li>
        </ul>
      </div>
    </>
  );
};

export default Refund;

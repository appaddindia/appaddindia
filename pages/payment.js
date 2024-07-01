import React, { Component } from "react";
import Link from "next/link";
import NavbarTwo from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import BuyProduct from "../components/Common/BuyProduct";

class Payment extends Component {
  render() {
    return (
      <>
        <NavbarTwo />

        <PageBanner
          pageTitle="Payment Details"
          breadcrumbTextOne="Home"
          breadcrumbTextTwo="Payment"
          breadcrumbUrl="/"
        />

        <div className="ptb-100">
          <div className="container">
            <div className="faq-area-content">
              <span>Payment</span>
              <h3>Payment Options</h3>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6">
                <Link href="http://localhost/payment.php">
                  <a className="default-btn-one">
                    Pay Online using NetBanking / Debit Card / Credit Card
                  </a>
                </Link>
                <br />
                <br />

                <h2>
                  Bank Account Details :-
                  <br />
                  <br />
                  Account Holder: APPADD INDIA PVT LTD
                  <br />
                  Account Number: 50200060422380
                  <br />
                  Bank Name: HDFC Bank
                  <br />
                  IFSC: HDFC0001753
                  <br />
                  Account Type: CURRENT
                </h2>
                <br />
              </div>
              <div className="col-lg-6">
                {/* <img src="/images/appadd-upi.jpg" alt="image" /> */}
                <BuyProduct />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Payment;

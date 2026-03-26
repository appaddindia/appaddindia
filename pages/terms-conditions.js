import React, { Component } from "react";
import Link from "next/link";
import NavbarTwo from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

class TermsConditions extends Component {
  render() {
    return (
      <>
        <NavbarTwo />

        <PageBanner
          pageTitle="Terms and Conditions"
          breadcrumbTextOne="Home"
          breadcrumbTextTwo="Terms and Conditions"
          breadcrumbUrl="/"
        />

        <div className="ptb-100">
          <div className="container">
            <h4>1. Introduction</h4>
            <p>
              Welcome to Appadd India Pvt Ltd. By accessing or using our website{" "}
              <a
                href="https://appaddindia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://appaddindia.com/
              </a>
              , you agree to comply with and be bound by the following Terms and
              Conditions. If you do not agree, please do not use our website or
              services.
            </p>

            <h4>2. Services</h4>
            <p>
              We provide digital services including but not limited to:
            </p>
            <ul>
              <li>Search Engine Optimization (SEO)</li>
              <li>Digital Marketing &amp; Social Media Marketing</li>
              <li>Website Design &amp; Development</li>
              <li>Mobile App Development</li>
              <li>Software Development</li>
              <li>Google Ads / PPC Campaign Management</li>
            </ul>
            <p>
              All services are subject to project scope, agreements, and
              timelines discussed with clients.
            </p>

            <h4>3. User Responsibilities</h4>
            <p>By using our website, you agree:</p>
            <ul>
              <li>To provide accurate and complete information</li>
              <li>
                Not to misuse the website for illegal or unauthorized activities
              </li>
              <li>Not to attempt hacking, data theft, or system disruption</li>
              <li>To respect intellectual property rights</li>
            </ul>

            <h4>4. Intellectual Property</h4>
            <p>All content on this website, including:</p>
            <ul>
              <li>Text, graphics, logos</li>
              <li>Website design &amp; code</li>
              <li>Images and branding</li>
            </ul>
            <p>
              is the property of Appadd India Pvt Ltd and protected under
              applicable copyright laws.
            </p>
            <p>
              You may not copy, reproduce, or distribute any content without
              written permission.
            </p>

            <h4>5. Payments &amp; Refund Policy</h4>
            <p>
              All payments for services must be made as per agreed terms.
            </p>
            <p>
              Payments once made are non-refundable, unless otherwise specified
              in a written agreement.
            </p>
            <p>Delayed payments may result in suspension of services.</p>

            <h4>6. Project Delivery &amp; Timelines</h4>
            <p>
              Timelines depend on project scope, approvals, and client
              cooperation.
            </p>
            <p>
              Delays caused due to lack of client input are not our
              responsibility.
            </p>
            <p>
              We strive to deliver projects on time but do not guarantee exact
              deadlines in all cases.
            </p>

            <h4>7. Third-Party Services</h4>
            <p>
              We may use third-party tools or platforms such as Google Ads and
              hosting providers.
            </p>
            <p>
              We are not responsible for issues caused by third-party services.
            </p>
            <p>Their terms and policies will also apply.</p>

            <h4>8. Limitation of Liability</h4>
            <p>Appadd India Pvt Ltd shall not be held liable for:</p>
            <ul>
              <li>Any indirect or consequential loss</li>
              <li>Business interruption</li>
              <li>Loss of data or revenue</li>
            </ul>
            <p>
              All services are provided on a best-effort basis without
              guaranteed results.
            </p>

            <h4>9. No Guarantee of Results</h4>
            <p>While we follow industry best practices:</p>
            <ul>
              <li>SEO rankings, traffic, and conversions are not guaranteed</li>
              <li>
                Results depend on multiple external factors, including
                competition and algorithm changes
              </li>
            </ul>

            <h4>10. Termination of Services</h4>
            <p>We reserve the right to:</p>
            <ul>
              <li>Suspend or terminate services for non-payment</li>
              <li>Terminate access for violation of terms</li>
            </ul>
            <p>
              Clients may terminate services with prior written notice as per
              agreement.
            </p>

            <h4>11. Privacy</h4>
            <p>
              Your use of the website is also governed by our{" "}
              <Link href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
              , which explains how we collect and use your data.
            </p>

            <h4>12. Modifications</h4>
            <p>
              We may update these Terms and Conditions at any time. Changes will
              be effective immediately upon posting on this page.
            </p>

            <h4>13. Governing Law</h4>
            <p>
              These Terms shall be governed by the laws of India, with
              jurisdiction in Bangalore, Karnataka.
            </p>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default TermsConditions;

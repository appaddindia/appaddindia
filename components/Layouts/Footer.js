import React, { Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="footer-section pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer-area">
                  <div className="footer-heading">
                    <h3>About Us</h3>
                  </div>

                  <p>
                    Appadd India Pvt Ltd. was established in the year 2016, is
                    proudly among one of those digital and software solution
                    provider whose ideology totally matches with the evolving
                    needs of the digital world. The company started operating
                    with the vision to give their clients a very unique
                    experience of their vast potential.
                  </p>

                  <ul className="footer-social">
                    <li>
                      <a
                        href="https://www.linkedin.com/company/appadd-india-pvt-ltd/"
                        target="_blank"
                        className="bg-3955bc"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/appaddindia/"
                        target="_blank"
                        className="bg-1da1f2"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        className="bg-004dff"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="bg-0273af"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-item-area">
                  <div className="footer-heading">
                    <h3>Important Links</h3>
                  </div>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/about-us">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a>Services</a>
                      </Link>
                    </li>
                    {this.props.pathname !== "/payment" && (
                      <li>
                        <Link href="/pricing">
                          <a>Package</a>
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link href="/careers">
                        <a>Careers</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-item-area">
                  <div className="footer-heading">
                    <h3>Featured Service</h3>
                  </div>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/automated-seo">
                        <a>Automated SEO</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/website-designing">
                        <a>Website Designing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/digital-marketing">
                        <a>Digital Marketing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/google-ads">
                        <a>Google Ads</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/social-media-marketing">
                        <a>Social Media</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="mb-30">
                  <div className="footer-heading">
                    <h3>Contact</h3>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-call-answer"></i>
                    <h3>Phone</h3>
                    <span>(+91) 63608 62127</span>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-envelope"></i>
                    <h3>Email</h3>
                    <span>enquiry@appadd.in</span>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-placeholder-filled-point"></i>
                    <h3>Address</h3>
                    <span>
                      #1697/36, Ground floor, Golden House, Dr. Rajkumar Road,
                      Rajajinagar, Bangalore - 560021
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <div className="default-animation">
            <div className="shape-img1">
              <img src="/images/shape/12.svg" alt="image" />
            </div>
            <div className="shape-img2">
              <img src="/images/shape/13.svg" alt="image" />
            </div>
            <div className="shape-img3">
              <img src="/images/shape/14.png" alt="image" />
            </div>
            <div className="shape-img4">
              <img src="/images/shape/15.png" alt="image" />
            </div>
            <div className="shape-img5">
              <img src="/images/shape/2.png" alt="image" />
            </div>
          </div>
        </footer>

        {/* Copyright footer */}
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <p>
                  © {currentYear} Appadd India Pvt Ltd. All Rights Reserved.
                </p>
              </div>

              <div className="col-lg-6">
                <ul>
                  <li>
                    <Link href="/terms-conditions">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function FooterWithRouter(props) {
  const router = useRouter();
  return <Footer {...props} pathname={router.pathname} />;
}

export default FooterWithRouter;

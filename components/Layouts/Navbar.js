import React, { Component } from "react";
import Link from "../../utils/ActiveLink";
import SidebarModal from "./SidebarModal";
import { useRouter } from "next/router";

class Navbar extends Component {
  // Sidebar Modal
  state = {
    sidebarModal: false,
  };
  toggleModal = () => {
    this.setState({
      sidebarModal: !this.state.sidebarModal,
    });
  };

  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const { pathname } = this.props;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <div id="navbar" className="navbar-area navbar-two">
          <div className="neemo-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src="/images/logo.gif" alt="logo" />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/about-us" activeClassName="active">
                        <a className="nav-link">About us</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/#">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Our Services <i className="fa fa-plus"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/services" activeClassName="active">
                            <a className="nav-link">Services</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/website-development"
                            activeClassName="active"
                          >
                            <a className="nav-link">Website Development</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/digital-marketing"
                            activeClassName="active"
                          >
                            <a className="nav-link">Digital Marketing</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/social-media-marketing"
                            activeClassName="active"
                          >
                            <a className="nav-link">Social Media Marketing</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/google-ads" activeClassName="active">
                            <a className="nav-link">Google Ads</a>
                          </Link>
                        </li>

                        {/* Hide these two only on /payment */}
                        {pathname !== "/payment" && (
                          <>
                            <li className="nav-item">
                              <Link href="/pricing" activeClassName="active">
                                <a className="nav-link">Website Package</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="/seo-package"
                                activeClassName="active"
                              >
                                <a className="nav-link">SEO Package</a>
                              </Link>
                            </li>
                          </>
                        )}

                        <li className="nav-item">
                          <Link href="/faq" activeClassName="active">
                            <a className="nav-link">FAQ</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/automated-seo" activeClassName="active">
                        <a className="nav-link">Automated SEO</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/careers" activeClassName="active">
                        <a className="nav-link">Careers</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/payment" activeClassName="active">
                        <a className="nav-link">Payment</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="others-options">
                  <div className="burger-menu" onClick={this.toggleModal}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Sidebar Modal */}
        <SidebarModal
          onClick={this.toggleModal}
          active={this.state.sidebarModal ? "active" : ""}
        />
      </>
    );
  }
}

// Wrap Navbar with router info
function NavbarWithRouter(props) {
  const router = useRouter();
  return <Navbar {...props} pathname={router.pathname} />;
}

export default NavbarWithRouter;

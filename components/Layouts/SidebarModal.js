import React, { Component } from 'react';

class SidebarModal extends Component {
    state = {
        modal: false
    };
    closeModal = () => {
        this.props.onClick(this.state.modal);
    }
    render() {
        return (
            <div className={`sidebar-modal ${this.props.active}`}>
                <div className="sidebar-modal-inner">
                    <div className="sidebar-about-area">
                        <div className="title">
                            <h2>Review Us</h2>
                            <img src="/images/google-review.jpg" alt="google-review" />
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="sidebar-contact-area">
                        <div className="contact-info">
                            <div className="contact-info-content">
                                <h2>
                                    <span className="info">+91 80437 45752</span><br/>
                                    <span className="info">+91 63608 62127</span>
                                    <span className="or">OR</span>
                                    <span className="info">enquiry@appadd.in</span>
                                </h2>
        
                                <ul className="social">
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/" target="_blank">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/appaddindia/" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/appadd-india-pvt-ltd/" target="_blank">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Close Modal */}
                    <span onClick={this.closeModal} className="close-btn sidebar-modal-close-btn">
                        <i className="fas fa-times"></i>
                    </span>
                </div>
            </div>
        );
    }
}

export default SidebarModal;
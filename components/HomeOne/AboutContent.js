import React, { Component } from 'react';

class AboutContent extends Component {
    render() {
        return (
            <section className="about-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-image.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-area-content">
                                <span>About Us</span>
                                <h3>We are Dynamic Team of SEO Agency</h3>
                                <strong>To exceed our customers expectations with innovative and bespoke Assurance, Testing and giving 100% satisfactory services. Our Community helps the customers to give end to end support on the services offerings.</strong>
                                <p>We are specialize in high-quality integrated UI/UX design, branding, web design and development, E-commerce solutions, digital marketing, online advertising, social media marketing, online marketing, mobile app development services.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-6 col--6">
                                    <div className="single-fun-facts">
                                        <h3>
                                            1,000
                                            <span className="sign-icon">+</span>
                                        </h3>
                                        <p>Project Completed</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-6 col-6">
                                    <div className="single-fun-facts">
                                        <h3>
                                            1,000
                                            <span className="sign-icon">+</span>
                                        </h3>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        );
    }
}

export default AboutContent;
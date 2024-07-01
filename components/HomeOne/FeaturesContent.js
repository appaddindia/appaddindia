import React, { Component } from 'react';
import Link from 'next/link';

class FeaturesContent extends Component {
    render() {
        return (
            <section className="features-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="features-content-area">
                                <span>Care Features</span>
                                <h3>Creativity, Transparency, And Trust are the Core Quality That Makes Us Perfection Crafted.</h3>
                                <p>Our focus is on achieving positive outcomes and lasting success for our clients through effective execution of our SEO strategies. We offer high levels of proficiency & expertise to ensure that your website is positioned right on top for the keywords that matter for your business. We have provided detailed comparison between Appadd automated SEO e-plugin tool and Regular Manual SEO below. So now choice is yours. Be smart and grapple up all the opportunities beforehand to empower up your brand performance and experience of your individuality.</p>

                                <div className="features-btn">
                                    <Link href="/features">
                                        <a className="features-btn-one">More Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f1eff8">
                                        <div className="icon">
                                            <i className="flaticon-seo"></i>
                                        </div>
                                        <h3>Seo Consultancy</h3>
                                        <p>SEO consultants perform many services, use an array of SEO software tools, and then offer expert advice at a strategic and tactical level to meet their client's needs.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-fbe6d4">
                                        <div className="icon">
                                            <i className="flaticon-analytics"></i>
                                        </div>
                                        <h3>Competitor Analysis</h3>
                                        <p>Competitive Analysis is the process of identifying competitors in your industry and researching their different marketing strategies. You can use this information to identify your strengths and weaknesses relative to each competitor.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f0fffc">
                                        <div className="icon">
                                            <i className="flaticon-laptop"></i>
                                        </div>
                                        <h3>Social Media Marketing</h3>
                                        <p>Social media marketing is the use of social media platforms and websites to promote a product or a service. We develop creative social media experiences that are both engaging and click worthy.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f8e1eb">
                                        <div className="icon">
                                            <i className="flaticon-analysis-1"></i>
                                        </div>
                                        <h3>Website Development</h3>
                                        <p>We do not design website rather we design your story that connects the mission, vision and purpose of your brand with your customer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="features-animation">
                    <div className="shape-img1">
                        <img src="/images/shape/8.png" alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src="/images/shape/5.png" alt="image" />
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturesContent;
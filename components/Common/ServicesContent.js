import React, { Component } from 'react';
import Link from 'next/link';

class ServicesContent extends Component {
    render() {
        return (
            <section className="services-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Services</span>
                        <h3>How We Can Help?</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-faddd4">
                                    <i className="flaticon-landing-page"></i>
                                </div>
                                <h3>
                                    <Link href="/single-service/">
                                        <a>Website Development</a>
                                    </Link>
                                </h3>
                                <p>We do not design website rather we design your story that connects the mission, vision and purpose of your brand with your customer. We believe that a highly engaging website is of utmost priority to tell your story your way, to represent your company’s thoughts and values and to get your customers right information about your products and services.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-cafbf1">
                                    <i className="flaticon-goal"></i>
                                </div>
                                <h3>
                                    <Link href="/single-service/">
                                        <a>Search Engine Optimization</a>
                                    </Link>
                                </h3>
                                <p>Our focus is on achieving positive outcomes and lasting success for our clients through effective execution of our SEO strategies. We offer high levels of proficiency & expertise to ensure that your website is positioned right on top for the keywords that matter for your business.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-ddd5fb">
                                    <i className="flaticon-contract"></i>
                                </div>
                                <h3>
                                    <Link href="/single-service/">
                                        <a>Digital Marketing</a>
                                    </Link>
                                </h3>
                                <p>On daily basis, the consumers of your products and services are bombarded with huge number of marketing messages. In this situation, it’s more than difficult to be heard above the din. So, to cut through this, you need to build a strong digital marketing strategies and smart integrated campaigns that can help you to retain a loyal audience.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-fcdeee">
                                    <i className="flaticon-application"></i>
                                </div>
                                <h3>
                                    <Link href="/single-service/">
                                        <a>E-Commerce Development</a>
                                    </Link>
                                </h3>
                                <p>We follow the best ecommerce practices pinned down to a science. Our developemnt team will help you transform the great digital experiences into amazing revenue generators.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c5ebf9">
                                    <i className="flaticon-seo"></i>
                                </div>
                                <h3>
                                    <Link href="/single-service/">
                                        <a>APP Development</a>
                                    </Link>
                                </h3>
                                <p>You have visited the right page as we at AppaddIndia, meet the custom mobile app development requirements of our clients around the world.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-f8fbd5">
                                    <i className="flaticon-data-recovery"></i>
                                </div>
                                <h3>
                                    <Link href="/single-service/">
                                        <a>Google Addwords</a>
                                    </Link>
                                </h3>
                                <p>Pay-per click (PPC) advertising is an essential component of any internet marketing strategy. You can boost traffic to your website by complementing organic search results with paid advertisements. At present, this strategy is considered as one of the most effective ways to get your brand or message in front of a target audience.</p>
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
            </section>
        );
    }
}

export default ServicesContent;
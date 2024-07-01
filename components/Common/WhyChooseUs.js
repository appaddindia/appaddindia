import React, { Component } from 'react';
import Link from 'next/link';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="choose-content-area">
                                <span>Why Choose Us</span>
                                <h3>Outstanding Digital Experience</h3>
                                <p>Our team members are highly experienced and technically very sound who
leaves no stone unturned to deliver quality services which is flavored with
the pure essence of creativity and impactful ideas. They work seamlessly to deliver best in class customer experience.</p><br/>
                                <p>We are here to help you grow your business through our unique services such as automated SEO plugin tool, highly functional e-commerce website ,customized softwares, appointment tool for clinics and hospitals, and last but not the least ,our social media campaining headed by our proficient team who will help you connect to the world of your choice.</p>

                                <div className="choose-text">
                                    <i className="flaticon-check-mark"></i>
                                    <h4>Agile Working Process</h4>
                                </div>

                                <div className="choose-text">
                                    <i className="flaticon-check-mark"></i>
                                    <h4>Dedicated Team Member</h4>                                
                                </div>

                                <div className="choose-text">
                                    <i className="flaticon-check-mark"></i>
                                    <h4>24/7 Support</h4>
                                </div>

                                <div className="choose-btn">
                                    <Link href="/about-us">
                                        <a className="default-btn-one">Discover More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="choose-image">
                                <img src="/images/choose-image.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChooseUs;
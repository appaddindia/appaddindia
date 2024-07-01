import React, { Component } from 'react';

class AboutContent extends Component {
    render() {
        return (
            <section className="about-section pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-image.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-area-content">
                                <h3><font color="#f20791">Who We Are ?</font></h3>
                                <h4>We Are One of the Trusted Experts for Providing Best Marketing Solutions That Fills Gaps And Accelerate Growth Agendas.</h4>
                                <h5><font color="purple">We Build Unrivalled Digital Experiences That Cut Through The Advertising Noise On The Internet.</font></h5>
                                <h6>Appaddindia pvt ltd, established in the year 2016 is proudly among one of those digital and software solution provider whose ideology totally matches with the evolving needs of the digital world .The company started operating with the vision to give their clientele a very unique experience of their vast potential.</h6>
                                <h6>Company is headed under the co-founder who is a gem of the internet marketing world having 15+ years of experience in his field of expertise. The company that started 7 years back in a very small scale has now developed very well fulfilling almost 1000+ client’s expectations. Our doors are open for any businesses either at the edge of shrinking or who wants to add credibility to their business.</h6>
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
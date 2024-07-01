import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
}

class TestimonialSection extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="testimonial-section ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="testimonial-content-area">
                                <span>Testimonial</span>
                                <h3>What Our Client Say</h3>
                                <p>We are a company built on exceptional service and it is the foundation of our culture and values. We asked our clients what they think about us, and here is what they said.</p>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            {this.state.display ? <OwlCarousel 
                            className="testimonial-slides owl-carousel owl-theme"
                                {...options}
                            >
                                <div className="testimonial-single-item">
                                    <div className="testimonial-image">
                                        <img src="/images/client-image/6.jpg" alt="image" />
                                    </div>
                                    <div className="testimonial-content-text">
                                        <h3>Shreyansh Kant</h3>
                                        <div className="icon">
                                            <i className="flaticon-quote"></i>
                                        </div>
                                        <p>Working with Appadd was nice experience! This is a process driven organization with an extremely professional teams. They redesigned our entire website from scratch and ensured that it was exactly as per the industry standards and we are happy to be associated with them.</p>
                                    </div>
                                </div>

                                <div className="testimonial-single-item">
                                    <div className="testimonial-image">
                                        <img src="/images/client-image/6.jpg" alt="image" />
                                    </div>
                                    <div className="testimonial-content-text">
                                        <h3>Mukesh Purohit</h3>
                                        <div className="icon">
                                            <i className="flaticon-quote"></i>
                                        </div>
                                        <p>What I like about Appadd is that they always deliver beyond the basic objectives and provide clear actionable recommendations. They have a great staff and they are proactive and dedicated in what they do. Their well working team spirit and customer focus is impressive.</p>
                                    </div>
                                </div> 

                                <div className="testimonial-single-item">
                                    <div className="testimonial-image">
                                        <img src="/images/client-image/6.jpg" alt="image" />
                                    </div>
                                    <div className="testimonial-content-text">
                                        <h3>Prasant Jinaga</h3>
                                        <div className="icon">
                                            <i className="flaticon-quote"></i>
                                        </div>
                                        <p>The team is very professional, ethical and driven by results. We had a major boost in ROI ever since they have started handling our account and their team ensured that we got a robust head start on our online strategy from day one and we are happy to be associated with Appadd.</p>
                                    </div>
                                </div>

                            </OwlCarousel> : ''}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TestimonialSection;
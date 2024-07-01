import React, { Component } from 'react';
import Link from 'next/link';

class SEOCompare extends Component {
    render() {
        return (
            <section className="pricing-section ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>SEO comparison</span>
                        <h3>We Provide Best Solutions for Our Clients</h3>
                    </div>

                    <div className="tab pricing-tab">
                        <div className="tab-content">
                            <div className="tabs-item">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box bg-f6f5fb">
                                            <div className="pricing-header">
                                                <h3>Regular Manual SEO</h3>
                                            </div><br/>

                                            <ul className="pricing-features">
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Very expensive
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    More time for discovery
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Limited keywords & contents
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Manual keywords management by SEO expert
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Manual analytics report by service provider
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box bg-ed0678">
                                            <div className="pricing-header">
                                                <h3>Appadd Automated SEO Plugin</h3>
                                            </div><br/>

                                            <ul className="pricing-features">
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Cost effective
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Less time for discovery
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Unlimited keywords & contents
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Self-manageable user-friendly dashboard
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Detailed analytics reports online 
                                                </li>
                                            </ul>

                                            <div className="pricing-shape">
                                                <img src="/images/pricing-shape.png" alt="image" />
                                            </div>
                                        </div>
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

export default SEOCompare;
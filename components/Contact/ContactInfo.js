import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="contact-box">
                            <div className="icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="content">
                                <h4>Phone / Fax</h4>
                                <p>(+91) 80437 45752</p>
                                <p>(+91) 63608 62127</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="contact-box">
                            <div className="icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="content">
                                <h4>E-mail</h4>
                                <p>enquiry@appadd.in</p>
                                <p>info@appaddindia.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="contact-box">
                            <div className="icon">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <div className="content">
                                <h4>Bangalore Location</h4>
                                <p>#1697/36, Ground floor, Golden House, Dr. Rajkumar Road, Rajajinagar, Bangalore</p>
                            </div>
                        </div>
                    </div>
                </div><br/>

                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="contact-box">
                            <div className="icon">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <div className="content">
                                <h4>Delhi Location</h4>
                                <p>D5 block, #1 Paryavaran Complex, Saket, Ignou Road, New Delhi</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="contact-box">
                            <div className="icon">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <div className="content">
                                <h4>Hyderabad Location</h4>
                                <p>G2, Jyothi Colony, AOC Centre, Shakuntla Tower, Secunderabad</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="contact-box">
                            <div className="icon">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <div className="content">
                                <h4>Overseas Location</h4>
                                <p>11,Becquerel Court, West Parkside, London - Se10 0QQ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}

export default ContactInfo;
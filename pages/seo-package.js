import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="SEO Package" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="SEO Package" 
                    breadcrumbUrl="/" 
                />

                <div className="ptb-100">
                    <div className="container">
                        <h4><font color="purple">AUTOMATED  SEO PLUGIN SOFTWARE (GOOGLE) Rs. 40,000  upto 5 Locations Near by Business Centre.</font></h4><br/>
                        <h5>Auto  SEO ultimate tool for any business.</h5><br/>
                        <h5>Paste 2 Line e-plugin code in the existing website and that’s it.</h5><br/>
                        <h5>100% assured result on 1st page of Google with selected keywords within 90 days of period from the day of installation.</h5><br/>
                        <h5>Unlimited number of content updates and keywords.</h5><br/>
                        <h5>e-PLUGIN DASHBOARD.</h5><br/>
                        <h5>Update and manage Business Keywords.</h5><br/>
                        <h5>Update website  Instantly</h5><br/>
                        <h5>In-depth Visitor analytics at plugin.appaddindia.com</h5><br/>
                        <h5>Services 24 x 7 Maintenance.</h5><br/>
                        <h5>Research keywords and phrases to select appropriate, relevant search terms.</h5><br/>
                        <h5>Editing and/or optimization of text for various html tags, META data, page titles, and page text as necessary.</h5><br/>
                        <h5>Analysis and recommendations on optimal website structure, navigation, code, etc. for best SEO purposes.</h5><br/>
                        <h5>Recommend, as required, additional web pages or content for the purpose of “catching” keyword/phrase searches.</h5><br/>
                        <h5>Create traffic and ranking reports for Search Engine Optimization (SEO) and any associated pages showing rankings in the search engines.</h5><br/>
                        <h5>Dedicated account Manager to support for the period of one year.</h5><br/><br/>
                        <h4>NOTE :-</h4>
                        <h5>More than 5 Locations available at additional cost of Rs. 5,000 per Location</h5>
                        <h5>Content management support for 1 year by an exclusive dedicated manager at an additional cost of Rs. 20,000</h5>
                    </div>
                </div>
 
                <Footer />
            </>
        );
    }
}

export default PrivacyPolicy;
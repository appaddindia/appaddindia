import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import SEOContent from '../components/AutomatedSEO/SEOContent';
import SEOCompare from '../components/AutomatedSEO/SEOCompare';
import Footer from '../components/Layouts/Footer';

class AboutUs extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Automated SEO" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Automated SEO" 
                    breadcrumbUrl="/"
                />

                <SEOContent />

                <SEOCompare />
                
                <Footer />
            </>
        );
    }
}

export default AboutUs;
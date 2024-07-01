import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/AboutUs/AboutContent';
import FeaturesArea from '../components/HomeTwo/FeaturesArea';
import Footer from '../components/Layouts/Footer';

class AboutUs extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="About Us" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="About Us" 
                    breadcrumbUrl="/" 
                />

                <AboutContent />

                <FeaturesArea />
                
                <Footer />
            </>
        );
    }
}

export default AboutUs;
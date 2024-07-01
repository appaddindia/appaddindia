import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PricingContent from '../components/PricingPlans/PricingContent';
import Footer from '../components/Layouts/Footer';

class Pricing extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Pricing" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Our Pricing Plans" 
                    breadcrumbUrl="/" 
                />

                <PricingContent />

                <Footer />
            </>
        );
    }
}

export default Pricing;
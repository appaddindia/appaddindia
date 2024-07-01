import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FeaturesContent from '../components/HomeOne/FeaturesContent';
import TabsContent from '../components/HomeOne/TabsContent';
import Footer from '../components/Layouts/Footer';

class Features extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Features" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Features" 
                    breadcrumbUrl="/" 
                />

                <FeaturesContent />

                <div className="pb-100">
                    <TabsContent />
                </div>

                <Footer />
            </>
        );
    }
}

export default Features;
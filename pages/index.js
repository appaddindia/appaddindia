import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import FeaturesContent from '../components/HomeOne/FeaturesContent';
import AboutContent from '../components/AboutUs/AboutContent';
import ServicesContent from '../components/Common/ServicesContent';
import WhyChooseUs from '../components/Common/WhyChooseUs';
import TabsContent from '../components/HomeOne/TabsContent';
import TestimonialSection from '../components/HomeOne/TestimonialSection';
import Footer from '../components/Layouts/Footer';

class Index extends Component {
    render() {
        return (
            <>
                // <Navbar />

                // <MainBanner />

                <FeaturesContent />

                <div className="pb-100">
                    <AboutContent />
                </div>

                <ServicesContent />

                <WhyChooseUs />

                <TabsContent />

                <TestimonialSection />
                
                <Footer />
            </>
        );
    }
}

export default Index;

import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TeamMemberContact from '../components/Team/TeamMemberContact';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import PartnerLogos from '../components/Common/PartnerLogos';
import Footer from '../components/Layouts/Footer';

class Team extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Team" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Our Team Members" 
                    breadcrumbUrl="/" 
                />

                <TeamMemberContact />

                <SubscribeStyleTwo />

                <PartnerLogos />

                <Footer />
            </>
        );
    }
}

export default Team;
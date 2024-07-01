import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectsStyleOne from '../components/Projects/ProjectsStyleOne';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import PartnerLogos from '../components/Common/PartnerLogos';
import Footer from '../components/Layouts/Footer';

class Projects extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Projects" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Projects" 
                    breadcrumbUrl="/" 
                />

                <ProjectsStyleOne />

                <SubscribeStyleTwo />

                <PartnerLogos />
                
                <Footer />
            </>
        );
    }
}

export default Projects;
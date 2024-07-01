import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CareersForm from '../components/Careers/CareersForm';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Careers" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Careers"
                    breadcrumbUrl="/" 
                />

                <CareersForm />
                
                <Footer />
            </>
        );
    }
}

export default Contact;
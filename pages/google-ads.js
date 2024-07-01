import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class GoogleAds extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Google Ads" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Google Ads" 
                    breadcrumbUrl="/" 
                />

                <div className="ptb-100">
                    <div className="container">
                        <h4><font color="purple">A MUST GO TO STRATEGY FOR RAPID GROWTH OF YOUR BUSINESS.</font></h4><br/>
                        <p>Pay-per click (PPC) advertising is an essential component of any internet
marketing strategy. You can boost traffic to your website by
complementing organic search results with paid advertisements. At
present, this strategy is considered as one of the most effective ways to
get your brand or message in front of a target audience.</p>

                        <h4>Need for Pay Per click ad for your company.</h4>
                        <p>The best part of this paid online advertisement is that you have to pay only
when someone clicks on your ad and you don’t have to look for your
audience since the audience finds you. In fact, this is proved to be one of
the quickest ways to expand your business.
We are here to run a hassle-free Pay per click (PPC) campaign for you.
To ensure that the clicks you receive are from those who are most likely
to buy your goods and services we employ the best PPC methodology.</p>

                    <h3>WE MANAGE YOUR PPC CAMPAIGN ON ALL FRONTS CONSISTENTLY TO
PRODUCE EXCELLENT RESULT IN JUST A FRACTION OF TIME IN A VERY COST EFFECTIVE WAY.</h3>
                    </div>
                </div>
 
                <Footer />
            </>
        );
    }
}

export default GoogleAds;
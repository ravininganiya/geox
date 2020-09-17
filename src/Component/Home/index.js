import React from 'react';
// import './index.css';
import '../../assets/css/style.css';
// import '../assets/css/page.css';
// import '../assets/css/recet.css';
import '../../assets/css/responsive.css';

import Header from './Header';
import HomeBanner from './HomeBanner';
import HomeAboutSection from './HomeAboutSection';
import PropertyProfileSection from './PropartyProfileSection';
import GeoxSection from './GeoxSection';
import SolutionSection from './SolutionSection';
import ContactBoxSection from './ContactBoxSection';
import FooterSection from './FooterSection';
import FooterStrip from './FooterStrip';

const Home=()=> {
    
    return(
        <>
            <Header />
            {/* <!-- home banner --> */}
            <HomeBanner />
            {/* <!-- home banner --> */}
            {/* <!-- home about section --> */}
            <HomeAboutSection />
            {/* <!-- home about section --> */}
            {/* <!-- home proparty profile section --> */}
            <PropertyProfileSection />
            {/* // <!-- home proparty profile section --> */}
            {/* // <!-- geox section --> */}
            <GeoxSection />
            {/* <!-- geox section --> */}
            {/* <!-- our solution section --> */}
            <SolutionSection />
            {/* <!-- our solution section --> */}
            {/* <!-- home contact box section --> */}
            <ContactBoxSection />
            {/* <!-- home contact box section --> */}
            {/* <!-- footer section --> */}
            <FooterSection />
            {/* <!-- footer section --> */}
            {/* <!-- footer strip section --> */}
            <FooterStrip />
            {/* <!-- footer strip section --> */}
        

        </>

    )
}
export default Home;
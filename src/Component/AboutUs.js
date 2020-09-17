import React from 'react';
import '../assets/css/style.css';
import {
    logo, 
    aboutImagetwo,
    aboutImagethree,
    aboutImagefour,
    aboutImagefive,
    aboutImageSix,
    reactangleFourth
} from '../assets/IconAsset';

function AboutUs() {
    return (
        <>
            {/* <!-- body wrapper --> */}
            <div class="main-wrapper">
                {/* <!-- header section --> */}
                <header class="header-wrapper">
                    <div class="header-container">
                        <div class="header-inner_wrapper">
                            <div class="header-left_navigation">
                                {/* <!-- brand logo --> */}
                                <div class="brand_wrapper">
                                    <a href="index.html"><img src={logo} alt="img" /></a>
                                </div>
                                {/* <!-- brand logo --> */}
                                {/* <!-- header navigation --> */}
                                <div class="header_navigation">
                                    <div class="header-inner_list">
                                        <ul class="nav-list">
                                            <li><a href="#">Product</a></li>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Conact Us</a></li>
                                            <li><a href="#">My Projects</a></li>
                                            <li><a href="#">Package</a></li>
                                            <li><a href="#">API access</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- header navigation --> */}
                            </div>
                            {/* <!-- right navigation --> */}
                            <div class="header-right_navigation">
                                {/* <!-- navigation hamburgur --> */}
                                <div class="hamburgur-file">
                                    <div class="menu-btn">
                                        <div class="menu-btn__burger"></div>
                                    </div>
                                </div>
                                <div class="right_navigation_container">
                                    <div class="right_navigation_btn">
                                        <a href="#">Login Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- right navigation --> */}
                        </div>
                    </div>
                </header>
                {/* <!-- header section --> */}

                {/* <!--about page banner section --> */}
                    {/* <!-- banner section --> */}
                    <div class="about-banner">
                        <div class="about-banner_image">
                            <img src={reactangleFourth} alt="img" />
                        </div>
                        <div class="about-banner_content">
                            <div class="about-banner_text">
                                <h3>There are many variations of passages of Lorem Ipsum available</h3>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- banner section --> */}

                {/* <!-- about page banner section --> */}

                {/* <!-- about us extra section --> */}
                    <section class="anout-exra">
                        <div class="anout-exra_wrapper ">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="anout-exra_content_block">
                                        <div class="anout-exra_content">
                                            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software .</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 pl-0 pr-0">
                                    <div class="anout-exra_img">
                                        <img src={aboutImagetwo} alt="Website" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                {/* <!-- about us extra section --> */}

                {/* <!-- about us manage risk appartment --> */}
                    <section class="manage_risk">
                        <div class="manage_risk_container">
                            <div class="manage_risk_wrapper">
                                <div class="grid_manage_riskbox_container">
                                    <div class="grid_manage_riskbox_image">
                                        <img src={aboutImagethree} alt="img" />
                                    </div>
                                </div>
                                <div class="grid_manage_riskbox_container">
                                    <div class="grid_manage_riskbox_content">
                                        <h3>Manage Your Risks Accurate</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.</p>

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                        <div class="grid_manage_riskbox_action promo-banner_action">
                                            <a href="#">Button</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid_manage_riskbox_container grid_manage_riskbox_block3">
                                    <div class="grid_manage_riskbox_image">
                                        <img src={ aboutImagefour} alt="img" />
                                        <p>Lorem Ipsum is simply </p>
                                    </div>
                                    <div class="grid_manage_riskbox_image">
                                        <img src={aboutImagefive} alt="img" />
                                        <p>Lorem Ipsum is simply </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                {/* <!-- about us manage risk appartment --> */}

                    {/* <!-- about timeline --> */}
                <div class="about-timeline">
                    <div class="about-timeline_container">
                        <div class="about-timeline_wrapper">
                            <div class="about-timeline_title">
                                <div class="about-section_title mt-0">
                                    <h2 class="webfixf-in">Company customer types belief</h2>
                                    <p class="webfixf">Valuable property attributes combined with a simple API allow investors and insurers to  better select properties, evaluate risk, and streamline underwriting processes.</p>
                                </div>
                            </div>
                            <div class="timeline_container">
                                <div class="timeline_container_inner">
                                    <div class="timeline_block">
                                        <h3>GeoX-Group Founded</h3>
                                        <p>2010</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* <!-- about timeline --> */}




                {/* <!-- footer section --> */}
                <footer>
                    <div class="footer-container">
                        <div class="footer-wrapper row">
                            <div class="col-md-3">
                                <div class="footer-wrapper_logo">
                                    <img src={aboutImageSix} alt="logo" />
                                </div>
                            </div>
                            <div class="col-md-2 col-6">
                                <div class="footer-wrapper_box">
                                    <div class="footer-wrapper_box_title">
                                        <h3>navigations</h3>
                                    </div>
                                    <ul class="footer-wrapper_box_list">
                                        <li><a href="#">Connect Us</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Product</a></li>
                                        <li><a href="#">Login</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2 col-6">
                                <div class="footer-wrapper_box">
                                    <div class="footer-wrapper_box_title">
                                        <h3>contact</h3>
                                    </div>
                                    <div class="footer-wrapper_box_add">
                                        <p>San Francisco Bay<br /> Headquarters 283 4th<br /> Street, Suite 301,<br /> Oakland, CA 94607</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="footer-wrapper_box">
                                    <div class="footer-wrapper_box_title">
                                        <h3>Subscribe for Periodic Updates</h3>
                                        <p>Receive news, announcements and reports</p>
                                    </div>
                                    <div class="footer-wrapper_box_form">
                                        <form action="">
                                            <div class="subscription_box">
                                                <input type="email" placeholder="Insert email" />
                                                <div class="action_sub">
                                                    <input type="submit" name="" value="Update me" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="footer-followus">
                                        <span>Follow Us</span>
                                        <span><a href="#"><i class="lni lni-facebook-original"></i></a></span>
                                        <span><a href="#"><i class="lni lni-linkedin-original"></i></a></span>
                                        <span><a href="#"><i class="lni lni-twitter-original"></i></a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- footer section --> */}
                {/* <!-- footer strip section --> */}
                <section class="fooeter-strip">
                    <div class="fooeter-strip_container">
                        <p>&copy; 2020, Gopriv. Privacy Policy Terms & Conditions</p>
                    </div>
                </section>
                {/* <!-- footer strip section --> */}
            </div> 

                {/* <!-- body wrapper --> */}

        </>
    )
}

export default AboutUs

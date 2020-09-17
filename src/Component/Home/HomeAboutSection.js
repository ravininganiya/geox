import React from 'react';

import {
    accurateReliable,
    threeDAttributes,
    billonData
} from '../../assets/IconAsset';

const HomeAboutSection=()=>{
    return(
        <>
            {/* <!-- home about section --> */}
            <section className="about-section">
                <div className="about-container">
                    <div className="about-container_wrapper">
                        {/* <!-- about section top title --> */}
                        <div className="about-section_toptitle">
                            <h3 className="webfixf">About Us</h3>
                        </div>
                        {/* <!-- about section title --> */}
                        <div className="about-section_title">
                            <h2 className="webfixf-in">Company customer types belief</h2>
                            <p className="webfixf">Valuable property attributes combined with a simple API allow investors and insurers to  better select properties, evaluate risk, and streamline underwriting processes.</p>
                        </div>
                        {/* <!-- about section content --> */}
                        <div className="about-section_content">
                            <div className="about-section_content_wrapper">
                                {/* <!-- Swiper --> */}
                                <div className="swiper-containers  swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="about-section_slide_wrapper">
                                                <img src={accurateReliable} />
                                                <div className="about-section_slide_content">
                                                    <h2 className="webfixf">Accurate & Reliable</h2>
                                                    <p className="webfixf">We have refined iterative AI-based systems which have the ability to extract HD Vector Maps with the accuracy of a trained GIS professional, at-scale</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="about-section_slide_wrapper">
                                                <img src={threeDAttributes} />
                                                <div className="about-section_slide_content">
                                                    <h2 className="webfixf">3D Attributes</h2>
                                                    <p className="webfixf">We produce millions of km2 of HD Vector Maps per month, offering unmatched speed and scalability across all terrains, while maintaining best-in-className accuracy</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="about-section_slide_wrapper">
                                                <img src={billonData} alt="img" />
                                                <div className="about-section_slide_content">
                                                    <h2 className="webfixf">12+ Billon data point</h2>
                                                    <p className="webfixf">We partner to gain access to the most up-to-date geospatial imagery, which is then rapidly mined using our AI-based systems to  create and maintain the most up-to-date representations of reality</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Add Pagination --> */}
                                    <div className="swiper-pagination custom_pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- home about section --> */}
        </>
    )
}
export default HomeAboutSection;
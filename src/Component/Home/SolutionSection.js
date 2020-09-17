import React from 'react';

import { uptoDate,
    affordable,
    richPropertyData,
    comprehensivePropertyData,
    USAfullCoverage,
    rectangleFirst,
    rectangleSecond 
} from '../../assets/IconAsset';

const SolutionSection =()=>{
    return(
        <>
            <section className="our-section">
                <div className="our-section_container">
                    <div className="our-section_wrapper">
                        {/* <!-- about section top title --> */}
                        <div className="about-section_toptitle geox-section_toptitle our-section_toptitle">
                            <h3 className="webfixf">OUR Solution</h3>
                        </div>
                        {/* <!-- geox section title --> */}
                        <div className="about-section_title geox-section_title our-section_title">
                            <h2 className="webfixf-in">Assess remotely.<br />Underwrite & price accurately.</h2>
                            <p className="webfixf">Valuable property attributes combined with a simple API allow investors and insurers to better select properties, evaluate risk, and streamline underwriting processes.</p>
                        </div>
                    </div>
                </div>
                <div className="our-section_image">                            
                    <div className="our-section_image_container">
                        <div className="our-section_image_box our-section_image_box_frist">
                            <img src={rectangleFirst} alt="img" />
                        </div>
                        <div className="our-section_image_box our-section_image_box_2nd">
                            <img src={rectangleSecond} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="our-section_container">
                    <div className="our-section_wrapper">
                        <div className="geox-section_content_wrapper our-section_content_wrapper">
                            <div className="geox-section_box our-section_box ">
                                <div className="geox-section_Inner_box our-section_Inner_box">
                                    <img src={uptoDate} alt="Website" />
                                    <div className="geox-section_content_box">
                                        <h3 className="webfixf">Up to date </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="geox-section_box our-section_box">
                                <div className="geox-section_Inner_box our-section_Inner_box">
                                    <img src={affordable} alt="Website" />
                                    <div className="geox-section_content_box">
                                        <h3 className="webfixf">Affordable</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="geox-section_box our-section_box">
                                <div className="geox-section_Inner_box our-section_Inner_box">
                                    <img src={richPropertyData} alt="Website" />
                                    <div className="geox-section_content_box">
                                        <h3 className="webfixf">Rich Property <br />Data</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="geox-section_box our-section_box">
                                <div className="geox-section_Inner_box our-section_Inner_box">
                                    <img src={comprehensivePropertyData} alt="Website" />
                                    <div className="geox-section_content_box">
                                        <h3 className="webfixf">Comprehensive <br />Property Data</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="geox-section_box our-section_box">
                                <div className="geox-section_Inner_box our-section_Inner_box">
                                    <img src={USAfullCoverage} alt="Website" />
                                    <div className="geox-section_content_box">
                                        <h3 className="webfixf">USA full<br />coverage </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="geox-section_content_action our-section_content_action">
                            <a href="#">Know more <span><i className="lni lni-arrow-top-right"></i></span></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SolutionSection;
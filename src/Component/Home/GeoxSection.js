import React from 'react';

import {
    accurateUnderwriting,
    streamlinesInsurance,
    reducingClaims,
    growsRevenues
    
} from '../../assets/IconAsset';

const GeoxSection =()=>{
    return(
        <>
            {/* // <!-- geox section --> */}
            <section className="geox-section">
                <div className="geox-section_container">
                    <div className="geox-section_wrapper">
                        {/* <!-- about section top title --> */}
                        <div className="about-section_toptitle geox-section_toptitle">
                            <h3 className="webfixf">GeoX benefits</h3>
                        </div>
                        {/* <!-- geox section title --> */}
                        <div className="about-section_title geox-section_title">
                            <h2 className="webfixf-in">GeoX high quality property data value</h2>
                            <p className="webfixf">High-Quality Property Data is vital to insurance companies and agents for better business results.</p>
                        </div>
                        <div className="geox-section_content">
                            <div className="geox-section_content_wrapper">
                                <div className="geox-section_box">
                                    <div className="geox-section_Inner_box">
                                        <img src={accurateUnderwriting} alt="Website" />
                                        <div className="geox-section_content_box">
                                            <h3 className="webfixf">Accurate <br />Underwriting</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="geox-section_box">
                                    <div className="geox-section_Inner_box">
                                        <img src={streamlinesInsurance} alt="Website" />
                                        <div className="geox-section_content_box">
                                            <h3 className="webfixf">Streamlines <br />Insurance processes</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="geox-section_box">
                                    <div className="geox-section_Inner_box">
                                        <img src={reducingClaims} alt="Website" />
                                        <div className="geox-section_content_box">
                                            <h3 className="webfixf">Reducing <br />claims</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="geox-section_box">
                                    <div className="geox-section_Inner_box">
                                        <img src={growsRevenues} alt="Website" />
                                        <div className="geox-section_content_box">
                                            <h3 className="webfixf">Grows <br />revenues</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="geox-section_content_action">
                                <a href="#">Know more <span><i className="lni lni-arrow-top-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- geox section --> */}
        </>
    )
}

export default GeoxSection;
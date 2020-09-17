import React from 'react';
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { reactangleThird,rectangleSecond,rectangleFirst } from '../../assets/IconAsset';

const PropertyProfileSection =()=>{
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    return(
        <>
            {/* <!-- home proparty profile section --> */}
            <section className="pro-profile">
                <div className="pro-profile_container">
                    <div className="pro-profile_wrapper">
                        {/* <!-- pro-profile section title --> */}
                        <div className="about-section_title pro-profile_title">
                            <h2 className="webfixf-in">Company customer types belief</h2>
                            <p className="webfixf">Valuable property attributes combined with a simple API allow investors and insurers to  better select properties, evaluate risk, and streamline underwriting processes.</p>
                        </div>
                        {/* <!-- slide proparty wrapper --> */}
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide>
                        <div className="pro-profile_slide_wrapper">
                            <div className="pro-profile_slide-container swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="pro-profile_slide_box">
                                            <div className="pro-profile_slide_inner_box">
                                                <div className="pro-profile_slide_left_box">
                                                    <div className="pro-profile_slide_img">
                                                        <img src={reactangleThird} alt="img" />
                                                    </div>
                                                </div>
                                                <div className="pro-profile_slide_right_box">
                                                    <div className="pro-profile_slide_toptitle">
                                                        <p className="webfixf">Turning imagery into property specific intelligence</p>
                                                    </div>
                                                    <div className="pro-profile_slide_title">
                                                        <h2 className="webfixf-in">Property Profile</h2>
                                                        <h6 className="webfixf">123 MAIN STREET, USA</h6>
                                                    </div>
                                                    <div className="pro-profile_slide_toggle_wrapper">
                                                        <div className="pro-profile-block">
                                                            <div className="pro-profile-title">
                                                                <h3 className="webfixf">By peril attributes: <br /><label>Hail</label></h3>
                                                                <span className="pro-profile_nav" id="tab1" ><i className="lni lni-chevron-down"></i></span>
                                                            </div>
                                                            <div className="pro-profile-content tab1 show collapse_box">
                                                                <div className="pro-profile-content_wrapper">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Roof Condition</td>
                                                                                <td>Severe</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Roof Covering</td>
                                                                                <td>Membrane</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Roof Geometry</td>
                                                                                <td>Flat</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pro-profile-block">
                                                            <div className="pro-profile-title">
                                                                <h3 className="webfixf">Property Characteristics</h3>
                                                                <span className="pro-profile_nav" id="tab2" ><i className="lni lni-chevron-down"></i></span>
                                                            </div>
                                                            <div className="pro-profile-content tab2 collapse_box">
                                                                <div className="pro-profile-content_wrapper">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Solar Panels</td>
                                                                                <td>No</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Roof Area</td>
                                                                                <td>22,000 sq ft.</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pro-profile-block">
                                                            <div className="pro-profile-title">
                                                                <h3 className="webfixf">SUMMARY OF ROOF SCORES</h3>
                                                                <span className="pro-profile_nav" id="tab3" ><i className="lni lni-chevron-down"></i></span>
                                                            </div>
                                                            <div className="pro-profile-content tab3 pro-profile-content-last collapse_box">
                                                                <div className="pro-profile-content_wrapper">
                                                                    <div className="pro-profile-content_title">
                                                                        <h2>SUMMARY OF ROOF SCORES</h2>
                                                                        <p>6 out of 100</p>
                                                                    </div>
                                                                    <div className="inner_pwer_wrrap">
                                                                        <input type='range' disabled value='0'/>
                                                                    </div>
                                                                    <div className="inner_pwer_wrrap_strio">
                                                                        <span>Low</span>
                                                                        <span>Fire</span>
                                                                        <span>Storm Risk</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="pro-profile_slide_box">
                                            <div className="pro-profile_slide_inner_box">
                                                <div className="pro-profile_slide_left_box">
                                                    <div className="pro-profile_slide_img">
                                                        <img src="media/Rectangle_23.png" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="pro-profile_slide_right_box">
                                                    <div className="pro-profile_slide_toptitle">
                                                        <p className="webfixf">Turning imagery into property specific intelligence</p>
                                                    </div>
                                                    <div className="pro-profile_slide_title">
                                                        <h2 className="webfixf-in">Property Profile</h2>
                                                        <h6 className="webfixf">123 MAIN STREET, USA</h6>
                                                    </div>
                                                    <div className="pro-profile_slide_toggle_wrapper">
                                                        <div className="pro-profile-block">
                                                            <div className="pro-profile-title">
                                                                <h3 className="webfixf">By peril attributes: <br /><label>Hail</label></h3>
                                                                <span className="pro-profile_nav" id="tab1"><i className="lni lni-chevron-down"></i></span>
                                                            </div>
                                                            <div className="pro-profile-content tab1 show collapse_box">
                                                                <div className="pro-profile-content_wrapper">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Roof Condition</td>
                                                                                <td>Severe</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Roof Covering</td>
                                                                                <td>Membrane</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Roof Geometry</td>
                                                                                <td>Flat</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pro-profile-block">
                                                            <div className="pro-profile-title">
                                                                <h3 className="webfixf">Property Characteristics</h3>
                                                                <span className="pro-profile_nav" id="tab2" ><i className="lni lni-chevron-down"></i></span>
                                                            </div>
                                                            <div className="pro-profile-content tab2 collapse_box">
                                                                <div className="pro-profile-content_wrapper">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Solar Panels</td>
                                                                                <td>No</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Roof Area</td>
                                                                                <td>22,000 sq ft.</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pro-profile-block">
                                                            <div className="pro-profile-title">
                                                                <h3 className="webfixf">SUMMARY OF ROOF SCORES</h3>
                                                                <span className="pro-profile_nav" id="tab3" ><i className="lni lni-chevron-down"></i></span>
                                                            </div>
                                                            <div className="pro-profile-content tab3 pro-profile-content-last collapse_box">
                                                                <div className="pro-profile-content_wrapper">
                                                                    <div className="pro-profile-content_title">
                                                                        <h2>SUMMARY OF ROOF SCORES</h2>
                                                                        <p>6 out of 100</p>
                                                                    </div>
                                                                    <div className="inner_pwer_wrrap">
                                                                        <input type='range'  />
                                                                    </div>
                                                                    <div className="inner_pwer_wrrap_strio">
                                                                        <span>Low</span>
                                                                        <span>Fire</span>
                                                                        <span>Storm Risk</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Add Arrows --> */}
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </div>
                            
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><img src={rectangleSecond} /></SwiperSlide>
                        <SwiperSlide><img src={rectangleFirst} /></SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </section>
            {/* // <!-- home proparty profile section --> */}
        </>
    )
}
export default PropertyProfileSection;
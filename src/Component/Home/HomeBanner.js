import React from 'react';
import {
    reactangle
} from '../../assets/IconAsset';

const HomeBanner =()=>{
    return(
        <>
        {/* <!-- home banner --> */}
        <section className="home-banner">
            <div className="home-banner_wrapper">
                <div className="home-banner_image">
                    <img src={reactangle} alt="Banner Image" />
                </div>
                <div className="home-banner_content">
                    <div className="home-banner_inner_wrapper">
                        <div className="home-banner_text">
                            <h3>3D-AI Intelligence for Property data</h3>
                            <p>With unique business ideas and the passionate people behind.</p>
                            <h5>Watch Video <span><i className="lni lni-play"></i></span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- home banner --> */}
        </>
    )

};

export default HomeBanner;
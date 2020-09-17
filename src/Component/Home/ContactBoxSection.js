import React from 'react';

const ContactBoxSection=()=>{
    return(
        <>
            <section className="contact-box">
                <div className="contact-box_container">
                    <div className="contact-box_wrapper">
                        <div className="contact-box_left_box">
                            <div className="contact-box_box">
                                {/* <!-- about section top title --> */}
                                <div className="about-section_toptitle geox-section_toptitle">
                                    <h3 className="webfixf">Section</h3>
                                </div>
                                {/* <!-- geox section title --> */}
                                <div className="about-section_title geox-section_title">
                                    <h2 className="webfixf-in">Company customer types belief, Lorem Ipsum is not simply random text.</h2>
                                    <p className="webfixf">Ecopia leverages artificial intelligence (“AI”) to mine geospatial big data, rapidly generating HD Vector Maps at-scale, all with the accuracy of a trained GIS professional. Our HD Vector Maps are trusted foundational layers embedded into critical applications around the world.</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-box_right_box">
                            <div className="contact-box_form_box">
                                <form method="POST" action="">
                                    {/* <!-- about section top title --> */}
                                    <div className="about-section_toptitle geox-section_toptitle our-section_toptitle contact-section_toptitle">
                                        <h3 className="webfixf">Take the next step</h3>
                                    </div>
                                    {/* <!-- geox section title --> */}
                                    <div className="about-section_title geox-section_title our-section_title contact-section_title">
                                        <h2 className="webfixf-in">Contact Us</h2>
                                    </div>
                                    <div className="contact-box_contant">
                                        <div className="contact-box_contant_g">
                                            <div className="contact-box_group">
                                                <input type="text" name="fname" placeholder="Frist Name" />
                                            </div>
                                            <div className="contact-box_group">
                                                <input type="text" name="lname" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="contact-box_group">
                                            <input type="email" name="email" placeholder="Email Address" />
                                        </div>
                                        <div className="contact-box_group">
                                            <input type="text" name="cname" placeholder="Company Name" />
                                        </div>
                                        
                                        <div className="contact-box_group">
                                            <input type="tel" name="tel" placeholder="Phone Number" />
                                        </div>
                                        <div className="contact-box_group">
                                            <textarea type="text" name="textarea" placeholder="Tell us more about your project, needs, and timelines" rows="5" ></textarea>
                                        </div>
                                        <div className="contact-box_group">
                                            <input type="submit" name="submit" value="submit" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactBoxSection;
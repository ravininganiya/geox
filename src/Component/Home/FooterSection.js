import React from 'react';
import history from '../../history';
import {footerLogo
} from '../../assets/IconAsset';

const FooterSection =()=>{
    const handleAboutUs =()=>{
        history.push('./AboutUs')
    }
    const handleLogin =()=>{
        history.push('./SignIn')
    }
    return(
        <>
            {/* <!-- footer section --> */}
            <footer>
                <div className="footer-container">
                    <div className="footer-wrapper row">
                        <div className="col-md-3">
                            <div className="footer-wrapper_logo">
                                <img src={footerLogo} alt="logo" />
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="footer-wrapper_box">
                                <div className="footer-wrapper_box_title">
                                    <h3>navigations</h3>
                                </div>
                                <ul className="footer-wrapper_box_list">
                                    <li><a href="#">Connect Us</a></li>
                                    <li><a href="" onClick={handleAboutUs} >About Us</a></li>
                                    <li><a href="#" >Product</a></li>
                                    <li><a href="" onClick={handleLogin}>Login</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="footer-wrapper_box">
                                <div className="footer-wrapper_box_title">
                                    <h3>contact</h3>
                                </div>
                                <div className="footer-wrapper_box_add">
                                    <p>San Francisco Bay<br /> Headquarters 283 4th<br /> Street, Suite 301,<br /> Oakland, CA 94607</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="footer-wrapper_box">
                                <div className="footer-wrapper_box_title">
                                    <h3>Subscribe for Periodic Updates</h3>
                                    <p>Receive news, announcements and reports</p>
                                </div>
                                <div className="footer-wrapper_box_form">
                                    <form action="">
                                        <div className="subscription_box">
                                            <input type="email" placeholder="Insert email" />
                                            <div className="action_sub">
                                                <input type="submit" name="" value="Update me" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="footer-followus">
                                    <span>Follow Us</span>
                                    <span><a href="#"><i className="lni lni-facebook-original"></i></a></span>
                                    <span><a href="#"><i className="lni lni-linkedin-original"></i></a></span>
                                    <span><a href="#"><i className="lni lni-twitter-original"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- footer section --> */}
        </>
    )
}

export default FooterSection;
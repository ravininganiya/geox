import React,{useState} from 'react';
import {
    logo, 
    group,
} from '../../assets/IconAsset';
import '../../App.css';
import history from '../../history';


const Header =()=>{
    
    const[loginState,setLoginState]=useState(false);

    const handleLogIn=()=>{
        // setLoginState(true);
        history.push('./SignIn');
    }
    const handleAboutUs=()=>{
        history.push('./AboutUs');
    }
    const handleMyproject =()=>{
        history.push('./MyProject');
    }
    return(
        <>
            <header className="header-wrapper home">
                        <div className="header-container">
                            <div className="header-inner_wrapper">
                                <div className="header-left_navigation">
                                    {/* <!-- brand logo --> */}
                                    <div className="brand_wrapper">
                                        <a href="index.html"><img src={logo} alt="img" /></a>
                                    </div>
                                    {/* <!-- brand logo --> */}
                                    {/* <!-- header navigation --> */}
                                    <div className="header_navigation">
                                        <div className="header-inner_list">
                                            <ul className="nav-list">
                                                <li><a href="#">Product</a></li>
                                                <li><a href="" onClick={e=>handleAboutUs(e)}>About Us</a></li>
                                                <li><a href="#">Conact Us</a></li>
                                                <li><a href="" onClick={handleMyproject}>My Projects</a></li>
                                                <li><a href="#">Package</a></li>
                                                <li><a href="#">API access</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- header navigation --> */}
                                </div>
                                {/* <!-- right navigation --> */}
                                <div className="header-right_navigation">
                                    {/* <!-- navigation hamburgur --> */}
                                    <div className="hamburgur-file">
                                        <div className="menu-btn">
                                            <div className="menu-btn__burger"></div>
                                        </div>
                                    </div>
                                    <div className="right_navigation_container">
                                        <div className="right_navigation_btn">
                                            <a href="" onClick={handleLogIn} >Login Now</a>
                                        </div>
                                        {/* <!-- LogIn from --> */}
                                        {/* <Modal 
                                            visible={loginState}
                                            onCancel={()=>setLoginState(false)}
                                            footer={null}
                                            header={null}
                                        >
                                            <SignIn />    
                                        </Modal>  */}
                                        {/* <!-- LogIn from --> */}
                                        <div className="right_navigation_pop">
                                            <div className="right_navigation_wrapper">
                                                <div className="right_navigation_box">
                                                    <div className="right_navigation_box_img">
                                                        {/* <!-- <img src="" --> */}
                                                        <span className="right_navigation_box_text">af</span>
                                                    </div>
                                                    <div className="right_navigation_box_content">
                                                        <h2>Alexjender Jhon</h2>
                                                        <p>Dummymail1234@gmail.com</p>
                                                        <div className="right_navigation_box_action">
                                                            <a href="#">Account Setting</a>
                                                            <a href="#">Sign out</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right_navigation_box">
                                                    <div className="right_navigation_box_img">
                                                        {/* <!-- <img src="" --> */}
                                                        <span className="right_navigation_box_text">
                                                        <img src={group} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="right_navigation_box_content">
                                                        <h2>Alexjender Jhon</h2>
                                                        <p>Dummymail1234@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="right_navigation_box">
                                                    <div className="right_navigation_box_img">
                                                        {/* <!-- <img src="" --> */}
                                                        <span className="right_navigation_box_text">af</span>
                                                    </div>
                                                    <div className="right_navigation_box_content">
                                                        <h2>Alexjender Jhon</h2>
                                                        <p>Dummymail1234@gmail.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- right navigation --> */}
                            </div>
                        </div>
                    </header>
                    {/* <!-- header section --> */}
                </>
                )
        }
export default Header;
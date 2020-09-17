import React,{useState, useEffect} from "react";
// import GoogleLogin from 'react-google-login';
// import { LinkedIn } from 'react-linkedin-login-oauth2';

import { connect } from "react-redux";
import { adminLogin } from "../actions";
import { LoginUser, logoutUser } from "../actions/authAction";

import history from "../history";
import SignUp from "./SignUp";
// import Unsplash from "../Api/Unsplash";
// import Password from "antd/lib/input/Password";
import { message } from "antd";
const SignIn =(props)=>{
    const [email, setEmail] = useState();
    const [password, setPassword] =useState();

    const [screenType, setScreenType] = useState("login");

    
    const onEmailInput =(e)=>{
        setEmail(e.target.value)
    }
    const onPasswordInput =(e)=>{
        setPassword(e.target.value)
    }
    const handleSignUp =()=>{
        history.push('./SignUp')
    }
    const setCookies = () => {
        if (props.userAuth.isSignedIn) {
          const { cookies } = props;
          if (cookies) {
            const {
              Authorization,
              isSignedIn,
              userId,
              userType,
              userName,
            } = props.userAuth;
            cookies.set("Authorization", Authorization, { path: "/" });
            cookies.set("isSignedIn", isSignedIn, { path: "/" });
            cookies.set("userId", userId, { path: "/" });
            cookies.set("userType", userType, { path: "/" });
            cookies.set("userName", userName, { path: "/" });
          }
          // console.log("yes");
    
          //  history.push("/");
        }
      };
      useEffect(() => {
        // history.push("/");
        setCookies();
      }, [props.userAuth.isSignedIn]);
    const handleLogin = async()=>{
        if (email === "" || email === null || email === undefined) {
            message.warning("Please Enter Email");
            return;
        }
        if (password === "" || password === null || password === undefined) {
            message.warning("Please Enter password");
            return;
        }

        let formValues = {
            email,
            password,
        };
        try {
            const response =  adminLogin(formValues);
            console.log(response);
            if (response.status === 200) {
              props.LoginUser(response.data);
              localStorage.setItem("user_type", response.data.user_type);
              history.push("/home");
            }
        } catch (error) {
            message.warning(error.response.data.error.message);
        }
    };
    
    
    return(
        <>
            <section className="login_wrapper">
                <div className="login_wrapper_container">
                    <div className="login_wrapper_inner">
                        <div className="login_action">
                            <span className="login_action_btn"><i className="lni lni-close"></i></span>
                        </div>
                        
                        <div className="login_heading">
                            <h2 className="login_title webfixf-in">Welcome</h2>
                            <p className="webfixf">Please enter a valid email address & password</p>
                        </div>
                    {screenType === "login" ?(
                        <div className="login_form">
                            {/* <form className="row" > */}
                                <div className="form_group_wrapper col-md-12">
                                    <span className="form_group_label">Email Address</span>
                                    <div className="log_form_group_inner">
                                        <input type="text" name="email" onChange={onEmailInput} placeholder="Enter email address" />
                                    </div>
                                </div>
                                <div className="form_group_wrapper col-md-12">
                                    <span className="form_group_label">Password </span>
                                    <div className="log_form_group_inner">
                                        <input type="text" name="password" onChange={onPasswordInput} placeholder="Enter your password" />
                                    </div>
                                </div>
                                <div className="form_group_wrapper col-md-12">
                                    <div className="log_form_group_inner">
                                        <button onClick={handleLogin} >Login</button>
                                    </div>
                                </div>
                                <div className="form_group_wrapper col-md-12">
                                    <div className="log_form_group_forget">
                                        <span className="forgot_toggle">Forgot password</span>
                                    </div>
                                </div>
                            {/* </form> */}
                        </div>
                    ):(<div>
                       
                            <SignUp setScreenType={setScreenType} />
                            <div
                            style={{ textAlign: "center", marginTop: "40px !important" }}
                            >
                            <button onClick={() => setScreenType("login")}>
                                Already a user Login
                            </button>
                            </div>
                        </div>
                        )}
                        <div className="login_brack_point">
                            <p>-ou login width-</p>
                        </div>
                        <div className="login_social_media">
                            <div className="social_login_box">
                                <a href="#">
                                    <span className="social_login_btn_icon"><i className="lni lni-google"></i></span>
                                    <span className="social_login_btn_text">
                                        login with google  
                                        
                                    </span>
                                </a>
                            </div>
                            <div className="social_login_box">
                                <a href="#">
                                    <span className="social_login_btn_icon"><i className="lni lni-linkedin-original"></i></span>
                                    <span className="social_login_btn_text">
                                        login with linkedin
                                        
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="login_accoun_box">
                            <p>Don't have an account ? <span className="link_toggle" onClick={handleSignUp}>Create Account</span> </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { userAuth: state.userAuth, cookies: ownProps.cookies };
};
export default connect(mapStateToProps, { LoginUser, logoutUser })(SignIn);

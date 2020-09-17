import React,{useState} from "react";
import { message } from "antd";
import {connect } from "react-redux";
// import {Select} from "antd";
import history from '../history';
import { SignUpUser } from "../actions/authAction";

const SignUpForm = (props)=>{
    const [userName, setUserName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [billingAddress, setBillingAddress] = useState("");

    const onFirstNameChange =(e)=>{
        console.log(e.target.value);
        setUserName(e.target.value);
    }
    const onLastNameChange =(e)=>{
        console.log(e.target.value);
        setLastName(e.target.value);
    }
    const onEmailChange =(e)=>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const onSelectStateChange =(e)=>{
        console.log(e.target.value);
        setState(e.target.value);
    }
    const onZipChange =(e)=>{
        console.log(e.target.value);
        // setEmail(e.target.value);
    }
    const onBillingAddressChange =(e)=>{
        console.log(e.target.value);
        setBillingAddress(e.target.value);
    }
    const onAddressOptionalChange =(e)=>{
        console.log(e.target.value);
        // setEmail(e.target.value);
    }
    const onOrganizationChange =(e)=>{
        console.log(e.target.value);
        // setEmail(e.target.value);
    }
    const onPhoneChange =(e)=>{
        console.log(e.target.value);
        // setEmail(e.target.value);
    }
    const onCompanyChange =(e)=>{
        console.log(e.target.value);
        // setEmail(e.target.value);
    }
    const onSelectCountryChange =(e)=>{
        console.log(e.target.value);
        setCountry(e.target.value);
    }
    const onSelectCityChange =(e)=>{
        console.log(e.target.value);
        setCity(e.target.value);
    }
    const handleSignin =()=>{
        history.push("./SignIn");
    }
   
    const handleSubmit = async()=>{
        if(userName == "" || userName == null || userName == undefined)
        {
            message.warning("Please enter your name");
            return;
        }
        if(lastName == "" || lastName == null || lastName == undefined)
        {
            message.warning("Please enter your lastName");
            return;
        }
        if(email == "" || email == null || email == undefined)
        {
            message.warning("Please enter your email");
            return;
        }
        if(country == "" || country == null || country == undefined)
        {
            message.warning("Please enter your country");
            return;
        }
        if(city == "" || city == null || city == undefined)
        {
            message.warning("Please enter your city");
            return;
        }
        if(state == "" || state == null || state == undefined)
        {
            message.warning("Please enter your state");
            return;
        }
        if(billingAddress == "" || billingAddress == null || billingAddress == undefined)
        {
            message.warning("Please enter your billingAddress");
            return;
        }
        let formValues = {
            userName,
            lastName,
            email,
            country,
            city,
            state,
            billingAddress
        };
        try {
            const response =  SignUpUser(formValues);
            // console.log(response);
            if (response.status === 200) {
              props.SignUpUser(response.data);
              localStorage.setItem("user_type", response.data.user_type);
              history.push("/home");
            }
        } catch (error) {
            message.warning(error.response.data.error.message);
        }
    }
    return(
        <>
            <section class="login_wrapper">
                <div class="login_wrapper_container">
                    <div class="login_wrapper_inner">
                        <div class="login_action">
                            <span class="login_action_btn"><i class="lni lni-close"></i></span>
                        </div>
                        <div class="login_heading">
                            <h2 class="login_title webfixf-in">Sign up</h2>
                            <p class="webfixf">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                        <div class="login_form">
                            <form method="" action="" class="row" onSubmit={(e)=>handleSubmit(e)}>
                                <div class="form_group_wrapper col-md-6">
                                    <span class="form_group_label">Frist Name*</span>
                                    <div class="log_form_group_inner">
                                        <input type="text" placeholder="Enter frist name" onChange={onFirstNameChange} />
                                    </div>
                                </div>
                                <div class="form_group_wrapper col-md-6">
                                    <span class="form_group_label">Last Name* </span>
                                    <div class="log_form_group_inner">
                                        <input type="text" placeholder="Enter last name" onChange={onLastNameChange} />
                                    </div>
                                </div>
                                <div class="form_group_wrapper col-md-12">
                                    <span class="form_group_label">Email* </span>
                                    <div class="log_form_group_inner">
                                        <input type="email" placeholder="Enter email address" onChange={onEmailChange} />
                                    </div>
                                </div>
                                <div class="form_group_wrapper col-md-12">
                                    <span class="form_group_label">Company* </span>
                                    <div class="log_form_group_inner">
                                        <input type="text" placeholder="Company He/She works for" onChange={onCompanyChange} />
                                    </div>
                                </div>
                                <div class="form_group_wrapper col-md-6">
                                    <span class="form_group_label">Country* </span>
                                    <div class="log_form_group_inner">
                                        <select defaultValue="default" onChange={onSelectCountryChange}>
                                            <option value="default">Select Country</option>
                                            <option value="delhi">Delhi</option>
                                            <option value="mumbai">Mumbai</option>
                                            <option value="kolkata">Kolkata</option>
                                        </select>
                                        <span class="log_form_group_icon"><i class="fas fa-angle-down"></i></span>
                                    </div>
                                </div>
                                <div class="form_group_wrapper col-md-6">
                                    <span class="form_group_label">City* </span>
                                    <div class="log_form_group_inner">
                                        <select onChange={onSelectCityChange}>
                                            <option>Select City</option>
                                        </select>
                                        <span class="log_form_group_icon"><i class="fas fa-angle-down"></i></span>
                                    </div>
                                </div>
                                <div class="form_group_wrapper col-md-6">
                                    <span class="form_group_label">State* </span>
                                    <div class="log_form_group_inner">
                                        <select onChange={onSelectStateChange}>
                                            <option>Select State</option>
                                        </select>
                                        <span class="log_form_group_icon"><i class="fas fa-angle-down"></i></span>
                                    </div>
                                </div>
                                <div class="form_group_wrapper col-md-6">
                                    <span class="form_group_label">Zip* </span>
                                    <div class="log_form_group_inner">
                                        <input type="text" placeholder="123456" onChange={onZipChange} />
                                    </div>
                                </div>
                                <div class="form_group_wrapper col-md-12">
                                    <span class="form_group_label">Billing Address* </span>
                                    <div class="log_form_group_inner">
                                        <input type="text" placeholder="Enter billing address" onChange={onBillingAddressChange} />
                                    </div>
                                </div>
                                <div class="form_group_wrapper col-md-12">
                                    <span class="form_group_label">Address (optional) </span>
                                    <div class="log_form_group_inner">
                                        <input type="text" placeholder="Enter optional address" onChange={onAddressOptionalChange} />
                                    </div>
                                </div>
                                <div class="form_group_wrapper col-md-12">
                                    <span class="form_group_label">Industry / organization</span>
                                    <div class="log_form_group_inner">
                                        <select  onChange={onOrganizationChange} >
                                            <option value="default">Select Industry / organization</option>
                                        </select>
                                        <span class="log_form_group_icon"><i class="fas fa-angle-down"></i></span>
                                    </div>
                                </div>
                                <div class="form_group_wrapper col-md-12">
                                    <span class="form_group_label">Phone Number </span>
                                    <div class="log_form_group_inner">
                                        <input type="text" placeholder="Enter your phone number" onChange={onPhoneChange} />
                                    </div>
                                </div>
                                <div class="form_group_wrapper col-md-12">
                                    <div class="log_form_group_inner">
                                        <input type="submit" name="submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="login_accoun_box">
                            <p>Do have an account ? <span class="link_toggle" onClick={handleSignin}>Login Now</span> </p>
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
export default connect(mapStateToProps, { SignUpUser})(SignUpForm);
// export default SignUpForm;
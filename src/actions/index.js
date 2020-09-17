import LoginUser from "../Component/LoginUser";
import SignUp from "../Component/LoginUser";
import Unsplash from "../Api/Unsplash"

export const adminLogin = async (formValues) =>{
    const response = await Unsplash().post("/users", formValues);
    return response;
}

export const adminSignUp = async (formValues) =>{
    const response = await Unsplash().post("/users", formValues);
    return response;
}
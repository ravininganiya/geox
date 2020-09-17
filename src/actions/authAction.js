export const LoginUser =(values)=>{
    const data = values;
    return {
        type: "LOGIN_USER",
        payload: data,
      };
};
export const SignUpUser =(values)=>{
  const data = values;
  return {
      type: "SIGNUP_USER",
      payload: data,
    };
};
export const setUserAuthValue = (formValues) => {
  return {
    type: "SET_USER_AUTH",
    payload: formValues,
  };
};
export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};
const initialState =[]

export default (state=initialState, action)=>{
    switch (action.type) {
        case "LOGIN_USER":
          return {
            ...state,
            isSignedIn: true,
            userId: action.payload.userId,
            // Authorization: action.payload.token,
            userName: action.payload.username,
            userType: action.payload.user_type
          };
          case "SIGNUP_USER":
            return{
              ...state,
            isSignUp : true,
            userId: action.payload.userId,
            Authorization: action.payload.token,
            userType: action.payload.user_type,
            // userName: action.payload.username,
            // userEmail: action.payload.email,
            // userCompany: action.payload.company,
            // userCountry: action.payload.country,
            // userZip: action.payload.zip,
            // userCity: action.payload.city,
            // userState: action.payload.state,            
            // userAddress: action.payload.address,
            // userBillingAddress: action.payload.billingAddress,
            // userOrganisation: action.payload.organisation,
            // userPhone: action.payload.phone

            }
          default:
            return state;
    }
       
}
import * as actionTypes from "./actionTypes";
import axios from "axios";

//handle loading spinner
export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
};

//grab the token and user info from response
export const authSuccess = (authData) => {
    
    return{
        type:actionTypes.AUTH_SUCCESS,
        authData
    }
}

//grab the error data from response
export const authFail = (error) => {
    return{
        type:actionTypes.AUTH_FAIL,
        error
    }
}

//run asynchronous code and get response from server
//login asynchronous
export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post("http://127.0.0.2:8000/api/v1/user/login",{email,password})
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(err => dispatch(authFail(err)));
    }
}
//sign up asynchronous
export const signUp = (user) => {
    return dispatch => {
        dispatch(authStart());
        axios
          .post("http://127.0.0.2:8000/api/v1/user/signup", {
            username:user.username,
            email:user.email,
            password:user.password,
            passwordConfirm:user.passwordConfirm,
          })
          .then((response) => {
            dispatch(authSuccess(response.data));
          })
          .catch((err) => dispatch(authFail(err)));
    }
}
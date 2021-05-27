import classes from "./authform.module.css";
import Input from "../UI/input/input";
import Btn from "../UI/btn/btn";
import { useRef, useState } from "react";
import {useSession,signIn,signOut} from "next-auth/client";
import {useRouter} from "next/router";
import * as actions from "../../store/actions/auth";
import {connect} from "react-redux";
import axios from "axios";

const AuthForm = (props) => {
  const router = useRouter();

  //define state for page layout////////////////////////////
  const [loginMode, setLogInMode] = useState(true);
  const switchLoginModeHandler = () => {
    setLogInMode((prevState) => !prevState);
  };
  ///////////////////////////////////////////////////

  // defining state for if user loged in or not
  const [isLogin, setIsLogin] = useState(false);
  // change the login mode

  // defining ref///////////////////////////
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confrimPasswordInputRef = useRef();
  const userNameInputRef = useRef();
  //////////////////////////////////////////NEXTAUTH/////////////////////////////
  const createUserNext = async(e) => {
    e.preventDefault();
    const newUserInfo = {
      username: userNameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      passwordConfirm: confrimPasswordInputRef.current.value,
    };
    const response = await axios.post("http://127.0.0.2:8000/api/v1/user/signup",newUserInfo);
    alert(response.status);

  }
  ////// user login/////////////////////////
  const logTheUserIn = (e) => {
    e.preventDefault();
    signIn();
  }
  //////////////////////////////////////////NEXTAUTH/////////////////////////////
  /////////////////////////////////REDUX/////////////////////////////////////////
  //function for loging in the user
  const logTheUserInRedux = async (e) => {
    e.preventDefault();
    //grab data from input
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    //send request to server
    props.onAuth(email, password);
  };

  //function for creating new user
  const createUserRedux = async (e) => {
    e.preventDefault();
    const newUserInfo = {
      username: userNameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      passwordConfirm: confrimPasswordInputRef.current.value,
    };
    // simple validation for form inputs
    //validation code....
    props.onSignUp(newUserInfo);
  };
  /////////////////////////////////REDUX/////////////////////////////////////////
  return (
    <>
      {loginMode && (
        <div className={classes.Content}>
          <div dir="rtl" className={classes.FormBox}>
            <div dir="rtl" className="mb-3">
              <label className="float-right">آدرس الکترونیکی</label>
              <div>
                <Input width="true" ref={emailInputRef} />
              </div>
            </div>
            <div dir="rtl" className="mb-5">
              <label className="float-right">رمز عبور</label>
              <div>
                <Input width="true" ref={passwordInputRef} />
              </div>
            </div>
            <div className={classes.BtnBox}>
              <Btn onClick={(e) => logTheUserIn(e)}>ورود</Btn>
              <Btn className="mt-3" onClick={() => switchLoginModeHandler()}>
                ثبت نام نکرده اید!
              </Btn>
            </div>
          </div>
        </div>
      )}
      {loginMode || (
        <div className={classes.Content}>
          <div dir="rtl" className={classes.FormBox}>
            <div dir="rtl" className="mb-3">
              <label className="float-right">نام کاربری</label>
              <div>
                <Input width="true" ref={userNameInputRef} />
              </div>
            </div>
            <div dir="rtl" className="mb-3">
              <label className="float-right">آدرس الکترونیکی</label>
              <div>
                <Input width="true" ref={emailInputRef} />
              </div>
            </div>
            <div dir="rtl" className="mb-3">
              <label className="float-right">رمز عبور</label>
              <div>
                <Input width="true" ref={passwordInputRef} />
              </div>
            </div>
            <div dir="rtl" className="mb-5">
              <label className="float-right">تکرار رمز عبور</label>
              <div>
                <Input width="true" ref={confrimPasswordInputRef} />
              </div>
            </div>
            <div className={classes.BtnBox}>
              <Btn onClick={() => switchLoginModeHandler()}>عضو هستم!</Btn>
              <Btn onClick={(e) => createUserNext(e)}>ثبت نام</Btn>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email,password)),
    onSignUp: (userCreationObj) => dispatch(actions.signUp(userCreationObj)),
  };
}
export default connect(null,mapDispatchToProps)(AuthForm);
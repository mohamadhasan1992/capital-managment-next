import classes from "./loginform.module.css";
import Input from "../UI/input/input";
import Btn from "../UI/btn/btn";
import PropertyList from "../property/propertyList";

const SignupMode = (props) => {
  return (
    <form className={classes.Content}>
      <div dir="rtl" className={classes.FormBox}>
        <div dir="rtl" className="mb-3">
          <label className="float-right">نام کاربری</label>
          <div>
            <Input width="true" />
          </div>
        </div>
        <div dir="rtl" className="mb-3">
          <label className="float-right">آدرس الکترونیکی</label>
          <div>
            <Input width="true" />
          </div>
        </div>
        <div dir="rtl" className="mb-3">
          <label className="float-right">رمز عبور</label>
          <div>
            <Input width="true" />
          </div>
        </div>
        <div dir="rtl" className="mb-5">
          <label className="float-right">تکرار رمز عبور</label>
          <div>
            <Input width="true" />
          </div>
        </div>
        <div className={classes.BtnBox}>
          <Btn link="/auth/login">
            ورود
          </Btn>
          <Btn link="/">ثبت نام</Btn>
        </div>
      </div>
    </form>
  );
};

export default SignupMode;

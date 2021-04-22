import classes from "./loginform.module.css";
import Input from "../UI/input/input";
import Btn from "../UI/btn/btn";
import PropertyList from "../property/propertyList";

const LoginMode = (props) => {
    return (
      <form className={classes.Content}>
        <div dir="rtl" className={classes.FormBox}>
          <div dir="rtl" className="mb-3">
            <label className="float-right">آدرس الکترونیکی</label>
            <div>
              <Input width="true" />
            </div>
          </div>
          <div dir="rtl" className="mb-5">
            <label className="float-right">رمز عبور</label>
            <div>
              <Input width="true" />
            </div>
          </div>
          <div className={classes.BtnBox}>
            <Btn link="/">ورود</Btn>
            <Btn link="/auth/signup">ثبت نام</Btn>
          </div>
        </div>
      </form>
    );
}
export default LoginMode;
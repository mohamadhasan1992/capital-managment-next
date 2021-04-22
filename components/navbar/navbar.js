import classes from "./navbar.module.css";
import Image from "next/image";
import Btn from "../UI/btn/btn";
import Link from "next/link";
// import Link from "next/link";

const Navbar = () => {
    return (
      <nav
        dir="rtl"
        className="navbar navbar-expand-lg text-light bg-dark justify-content-center align-items-center"
      >
        <div className="row w-100">
          <div className="col-4">
            <div className="d-flex">
              <Image
                className={classes.BrandLogo}
                src="/logo.png"
                width="48"
                height="48"
                alt="logo"
              />
              <h4 className="navbar-brand">
                <Link href="/">
                  <a className={classes.LinkStyle}>سامانه مدیریت سرمایه</a>
                </Link>
              </h4>
            </div>
          </div>
          <div className="col-4">
            <p className={classes.Position}>00:00</p>
          </div>
          <div className="col-4">
            <div dir="ltr" className="btn-group">
              <Btn link="/auth/login">ورود</Btn>
              <Btn link="/signal">سیگنال</Btn>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
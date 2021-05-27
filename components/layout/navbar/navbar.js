import classes from "./navbar.module.css";
import Image from "next/image";
import Btn from "../../UI/btn/btn";
import LinkBtn from "../../UI/btn/linkBtn";
import Link from "next/link";
import {useSession ,signOut} from "next-auth/client";
import {useRouter} from "next/router";


const Navbar = () => {
  const pageQuery = useRouter().pathname.slice(1);
  
  const [session, loading] = useSession();

  const logOutHandler = () => {
    signOut();
  }


  const loginBtn = session ? <Btn onClick={logOutHandler}>خروج</Btn> : <LinkBtn link="/auth">ورود</LinkBtn>;
    return (
      <header>
        <nav
          dir="rtl"
          className="navbar navbar-expand-lg text-light bg-dark justify-content-center align-items-center"
        >
          <div className="d-flex align-items-center w-100">
            <div className="col-4">
              <div className="d-flex ">
                <Image
                  className={classes.BrandLogo}
                  src="/images/globals/logo.png"
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
                {loginBtn}
                {pageQuery === "signal" && <LinkBtn link="/signal/newsignal">افزودن</LinkBtn>}
                {pageQuery !== "signal" && <LinkBtn link="/signal">سیگنال</LinkBtn>}
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;
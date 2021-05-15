import classes from "./layout.module.css";
import Header from "./navbar/navbar";
import Footer from "./footer/footer";

const Layout = (props) => {
    return(
        <div className={classes.Content}>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;
import classes from "./btn.module.css";
import Link from "next/link";

const Btn = (props) => {
  
    return (
      <Link href={props.link}> 
        <p className={classes.Btn}>{props.children}</p>
      </Link>
    );
};
export default Btn;
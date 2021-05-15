


import classes from "./btn.module.css";
import Link from "next/link";

const LinkBtn = (props) => {
  const btnStyle = [classes.Btn,classes.Round].join(" ");
  return (
    <Link href={props.link}>
      <span className={btnStyle}>{props.children}</span>
    </Link>
  );
};
export default LinkBtn;
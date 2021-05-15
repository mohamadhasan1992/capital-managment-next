import Link from "next/link";
import classes from "./layoutselector.module.css";

const LayoutSelector = (props) => {
    return (
      <div className={classes.Content}>
        <div className="btn-group" role="group" aria-label="Basic example">
          <Link href="/dailyproperty">
            <a
              type="button"
              className="btn btn-secondary"
            >
              حسابداری
            </a>
          </Link>
          <Link href="/">
            <a
              type="button"
              className="btn btn-secondary"
            >
              دفتر ثبت
            </a>
          </Link>
        </div>
      </div>
    );
}
export default LayoutSelector;
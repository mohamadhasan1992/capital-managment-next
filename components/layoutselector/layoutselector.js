import classes from "./layoutselector.module.css";

const LayoutSelector = (props) => {
    return (
      <div className={classes.Content}>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            onClick={() => props.changeToDailyProperty()}
            type="button"
            className="btn btn-secondary"
          >
            حسابداری{" "}
          </button>
          <button
            onClick={() => props.changeToProperty()}
            type="button"
            className="btn btn-secondary"
          >
            دفتر ثبت
          </button>
        </div>
      </div>
    );
}
export default LayoutSelector;
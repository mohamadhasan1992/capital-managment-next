import classes from "./dailyproperty.module.css";
import DailyPropertyList from "./dailypropertylist";

const DailyProperty = (props) => {
    return (
      <div className={classes.Content}>
        <div className="row">
          <div className="col-md-4">
            <DailyPropertyList dailyProperties={props.dailyProperties} />
          </div>
          <div className="col-md-8">//chart placeholder</div>
        </div>
      </div>
    );
}

export default DailyProperty;
import classes from "./dailyproperty.module.css";
import DailyPropertyList from "./dailypropertylist";

const DailyProperty = () => {
    return (
      <div className={classes.Content}>
        <div className="row">
          <div className="col-md-4">
            <DailyPropertyList />
          </div>
          <div className="col-md-8">
          </div>
        </div>
      </div>
    );
}

export default DailyProperty;
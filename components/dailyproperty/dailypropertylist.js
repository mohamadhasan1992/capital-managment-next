import DailyPropertyTitle from "./dailypropertytitle";
import DailyPropertyInput from "./dailypropertyinput";
import DailyPropertyItems from "./dailypropertyitems";
import classes from "./dailyproperty.module.css";

const DailyPropertyList = () => {
    return (
      <div>
        <table className="table">
          <thead className={classes.Direction}>
            <DailyPropertyTitle />
          </thead>
          <tbody>
            <tr>
                <DailyPropertyInput />              
            </tr>
            <DailyPropertyItems />
          </tbody>
        </table>
      </div>
    );
}
export default DailyPropertyList;
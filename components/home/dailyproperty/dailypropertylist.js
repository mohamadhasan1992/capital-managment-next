import DailyPropertyTitle from "./dailypropertytitle";
import DailyPropertyInput from "./dailypropertyinput";
import DailyPropertyItems from "./dailypropertyitems";
import classes from "./dailyproperty.module.css";

const DailyPropertyList = (props) => {
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
            {props.dailyProperties.map((dailyProperty,index) => {
              return (
                <DailyPropertyItems key={index} dailyProperty={dailyProperty} />
              );
            })}
            
          </tbody>
        </table>
      </div>
    );
}
export default DailyPropertyList;
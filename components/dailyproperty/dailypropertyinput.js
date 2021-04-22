import Input from "../UI/input/input";
import classes from "./dailyproperty.module.css";

const DailyPropertyInput = () => {
    return (
      <>
        <td className={classes.Direction}>
          <Input />
        </td>
        <td className={classes.Direction}>
          <Input />
        </td>
      </>
    );
}
export default DailyPropertyInput;
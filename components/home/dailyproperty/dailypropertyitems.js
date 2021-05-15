import classes from "./dailyproperty.module.css";

const DailyPropertyItems = (props) => {
  const{_id,value,date,day} = props.dailyProperty;
  return (
      <tr className={classes.Direction}>
        <td>{date}</td>
        <td>{value}</td>
      </tr>
      
  );
};
export default DailyPropertyItems;

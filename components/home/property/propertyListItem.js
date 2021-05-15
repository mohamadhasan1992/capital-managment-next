import classes from "./property.module.css";

const propertyListItem = (props) => {
    const {_id,name,buyDate,value,enteryPoint,stopLimit,target,sellDate} = props.property;
    return (
      <tr className={classes.Direction}>
        <td className={classes.Direction}>{name}</td>
        <td className={classes.Direction}>{buyDate}</td>
        <td className={classes.Direction}>{value}</td>
        <td className={classes.Direction}>{enteryPoint}</td>
        <td className={classes.Direction}>{stopLimit}</td>
        <td className={classes.Direction}>{target}</td>
        <td className={classes.Direction}>{sellDate}</td>
        <td dir="ltr">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-secondary text-dark">
              به روز رسانی
            </button>
            <button type="button" className="btn btn-secondary">
              بایگانی
            </button>
          </div>
        </td>
      </tr>
    );
};

export default propertyListItem;

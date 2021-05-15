import react from "react";
import classes from "./property.module.css";

const PropertyTitle = () => {
    return (
      <tr className={classes.Direction}>
        
        <th className={classes.Direction} scope="col">
          نام نماد
        </th>
        <th className={classes.Direction} scope="col">
          تاریخ خرید
        </th>
        <th className={classes.Direction} scope="col">
          ارزش خرید
        </th>
        
        <th className={classes.Direction} scope="col">
          نقطه ورود
        </th>
        <th className={classes.Direction} scope="col">
          حد ضرر
        </th>
        <th className={classes.Direction} scope="col">
          هدف
        </th>
        <th className={classes.Direction} scope="col">
          تاریخ فروش
        </th>
        
      </tr>
    );
}

export default PropertyTitle;
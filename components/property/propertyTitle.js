import react from "react";
import classes from "./property.module.css";

const PropertyTitle = () => {
    return (
      <tr className={classes.Direction}>
        <th className={classes.Direction} scope="col">
          #
        </th>
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
          علت خرید
        </th>
        <th className={classes.Direction} scope="col">
          تاریخ فروش
        </th>
        <th className={classes.Direction} scope="col">
          ارزش فروش
        </th>
        <th className={classes.Direction} scope="col">
          علت فروش
        </th>
      </tr>
    );
}

export default PropertyTitle;
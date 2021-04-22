import react from "react";
import classes from "./property.module.css";

const PropertyList = () => {
  return (
    <>
      <tr className={classes.Direction}>
        <th scope="row">1</th>
        <td className={classes.Direction}>غگلپا</td>
        <td className={classes.Direction}>99/12/1</td>
        <td className={classes.Direction}>3500</td>
        <td className={classes.Direction}>کف کانال</td>
        <td className={classes.Direction}>99/12/14</td>
        <td className={classes.Direction}>4200</td>
        <td className={classes.Direction}>رسیدن به هدف</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td className={classes.Direction}>فنوال</td>
        <td className={classes.Direction}>99/12/13</td>
        <td className={classes.Direction}>4200</td>
        <td className={classes.Direction}>سیگنال سایت</td>
        <td className={classes.Direction}>99/12/14</td>
        <td className={classes.Direction}>52000</td>
        <td className={classes.Direction}>رسیدن به هدف</td>
      </tr>
    </>
  );
}

export default PropertyList;

import react from "react";
import Input from '../UI/input/input';
import classes from "./property.module.css";

const PropertyInput = () => {
  return (
    <tr className={classes.Direction}>
      <td> </td>
      <td>
        <Input placeholder="نام نماد" inputtype="input" />
      </td>
      <td>
        <Input placeholder="" inputtype="input" />
      </td>
      <td>
        <Input placeholder="" inputtype="input" />
      </td>
      <td>
        <Input placeholder="" inputtype="input" />
      </td>
      <td>
        <Input placeholder="" inputtype="input" />
      </td>
      <td>
        <Input placeholder="" inputtype="input" />
      </td>
      <td>
        <Input placeholder="" inputtype="input" />
      </td>
      
      <th scope="row"></th>
    </tr>
  );
};

export default PropertyInput;

import {useRef} from "react";
import Input from '../../UI/input/input';
import classes from "./property.module.css";
import BuyIcon from "../../icons/buyicon";
import UpdateIcon from "../../icons/updateIcon";
import axios from "axios";

const PropertyInput = () => {
  const nameInputRef = useRef();
  const buyDateInputRef = useRef();
  const valueInputRef = useRef();
  const stopInputRef = useRef();
  const targetInputRef = useRef();
  const sellDateInputRef = useRef();
  const enteryPointInputRef = useRef();

  const submitHandler = () => {
    const newProperty = {
      name: nameInputRef.current.value,
      buyDate: buyDateInputRef.current.value,
      value: valueInputRef.current.value,
      enteryPoint: enteryPointInputRef.current.value,
      stopLimit: stopInputRef.current.value,
      target: targetInputRef.current.value,
      sellDate: sellDateInputRef.current.value,
      bought:true
    };
    try{
      axios
        .post("http://127.0.0.2:8000/api/v1/property",newProperty)
        .then(res => console.log(res))
        
    }catch(err){
      console.log(err);
    }
    
    
  }
  return (
    <tr className={classes.Direction}>
      <td>
        <input
          placeholder="نام نماد"
          className={classes.InputStyle}
          ref={nameInputRef}
        ></input>
      </td>
      <td>
        <input
          placeholder=""
          className={classes.InputStyle}
          ref={buyDateInputRef}
        ></input>
      </td>
      <td>
        <input
          placeholder=""
          className={classes.InputStyle}
          ref={valueInputRef}
        ></input>
      </td>
      <td>
        <input
          placeholder=""
          className={classes.InputStyle}
          ref={stopInputRef}
        ></input>
      </td>
      <td>
        <input
          placeholder=""
          className={classes.InputStyle}
          ref={enteryPointInputRef}
        ></input>
      </td>
      <td>
        <input
          placeholder=""
          className={classes.InputStyle}
          ref={targetInputRef}
        ></input>
      </td>
      <td>
        <input
          placeholder=""
          className={classes.InputStyle}
          ref={sellDateInputRef}
        ></input>
      </td>
      
      <td dir="ltr">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => submitHandler()}
        >
          ثبت
        </button>
      </td>

      <th scope="row"></th>
    </tr>
  );
};

export default PropertyInput;

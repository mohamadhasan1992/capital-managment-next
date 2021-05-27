import {useRef} from "react";
import Input from '../../UI/input/input';
import classes from "./property.module.css";
import {postData} from "../../../dataFetching/postData"; 


const PropertyInput = () => {
  const nameInputRef = useRef();
  const buyDateInputRef = useRef();
  const valueInputRef = useRef();
  const stopInputRef = useRef();
  const targetInputRef = useRef();
  const sellDateInputRef = useRef();
  const enteryPointInputRef = useRef();

  const submitHandler = async() => {
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
      const response = await postData("http://127.0.0.2:8000/api/v1/property",newProperty);
      alert(response.status);
      if(response.status === "success"){
        nameInputRef.current.value = "";
        buyDateInputRef.current.value = "";
        valueInputRef.current.value = "";
        enteryPointInputRef.current.value = "";
        stopInputRef.current.value = "";
        targetInputRef.current.value = "";
        sellDateInputRef.current.value = "";
      }
    }catch(err){
      console.log(err);
    }
    
  
    
  }
  return (
    <tr className={classes.Direction}>
      <td>
        <Input
          inputtype="input"
          className={classes.InputStyle}
          ref={nameInputRef}
        >
          نام نماد
        </Input>
      </td>
      <td>
        <Input
          inputtype="input"
          className={classes.InputStyle}
          ref={buyDateInputRef}
        >تاریخ خرید</Input>
      </td>
      <td>
        <Input
          inputtype="input"
          className={classes.InputStyle}
          ref={valueInputRef}
        >ارزش خرید</Input>
      </td>
      <td>
        <Input
          inputtype="input"
          className={classes.InputStyle}
          ref={stopInputRef}
        >نقطه ورود</Input>
      </td>
      <td>
        <Input
          inputtype="input"
          className={classes.InputStyle}
          ref={enteryPointInputRef}
        >حد ضرر</Input>
      </td>
      <td>
        <Input
          inputtype="input"
          className={classes.InputStyle}
          ref={targetInputRef}
        >هدف</Input>
      </td>
      <td>
        <Input
          inputtype="input"
          className={classes.InputStyle}
          ref={sellDateInputRef}
        >تاریخ فروش</Input>
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

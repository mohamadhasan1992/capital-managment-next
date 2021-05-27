import Input from "../../UI/input/input";
import classes from "./dailyproperty.module.css";
import {useRef} from "react";
import {postData} from "../../../dataFetching/postData";

const DailyPropertyInput = () => {
  const dateInputRef = useRef();
  const propertyInputRef = useRef();
  const submitHandler = async(e) => {
    e.preventDefault();
    const newDailyProperty = {
      date: dateInputRef.current.value,
      value: propertyInputRef.current.value,
      // user:""
    };
    const response = await postData(
      "http://127.0.0.2:8000/api/v1/dailyproperty",
      newDailyProperty
    );
    alert(response.status);
    dateInputRef.current.value = "";
    propertyInputRef.current.value = "";
  }
  return (
    <>
      <td className={classes.Direction}>
        <Input ref={dateInputRef} />
      </td>
      <td className={classes.Direction}>
        <Input ref={propertyInputRef} />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={(e) => submitHandler(e)}
        >
          ثبت
        </button>
      </td>
    </>
  );
}
export default DailyPropertyInput;
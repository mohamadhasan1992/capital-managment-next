import React from "react";
import classes from "./input.module.css";

const input = (props) => {
  const inputClasses = [classes.InputStyle];
  if (props.invalid && props.touched) {
    inputClasses.push(classes.Invalid);
  }
  if(props.width){
    inputClasses.push(classes.Width4);
  }

  let inputElement = null;
  switch (props.inputtype) {
    case "input":
      inputElement = (
        <input
          type="password"
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.changed}
        />
      );
      break;
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.changed}
        />
      );
      break;
    case "textArea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
  }
  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;

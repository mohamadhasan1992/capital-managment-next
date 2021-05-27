import React from "react";
import classes from "./input.module.css";

const input = React.forwardRef((props,ref) => {
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
          type="input"
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          placeholder={props.children} 
          ref={ref}
          required
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
          ref={ref}
          required
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
          ref={ref}
          required
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
          ref={ref}
          required
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
});

export default input;

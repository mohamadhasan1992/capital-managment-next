import classes from "./btn.module.css";

const Btn =(props) => {

  const btnStyle = [classes.Btn];
  if(props.type === "round"){
    btnStyle.push(classes.Round)
  }
  return(
    <button className={btnStyle.join(" ")} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Btn;
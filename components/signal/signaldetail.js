import classes from "./signaldetail.module.css";

const SignalDetail = (props) => {
    const{name,type,timeframe,createdTime, target1, target2 , target3, stopLoss, leverage} = props.signalData;
    return (
      <div className="container mt-5">
        <ul className={classes.Content}>
          <li className={classes.Item}>
            <div className="d-flex align-items-center">
              <span>Name: </span>
              <h1 className="pl-2">{name}</h1>
              <span className="badge bg-success ml-3">{type}</span>
            </div>
          </li>
          <li className={classes.Item}>
            <span>TimeFrame: </span>
            {timeframe}
          </li>
          <li className={classes.Item}>
            <span>Date: </span>
            {createdTime}
          </li>
          <li className={classes.Item}>
            <span>Target-1: </span>
            {target1}
          </li>
          <li className={classes.Item}>
            <span>Target-2: </span>
            {target2}
          </li>
          <li className={classes.Item}>
            <span>Target-3: </span>
            {target3}
          </li>
          <li className={classes.Item}>
            <span>StopLoss: </span>
            {stopLoss}
          </li>
          <li className={classes.Item}>
            <span>Leverage: </span>
            {leverage}
          </li>
        </ul>
      </div>
    );
}

export default SignalDetail;
import Image from "next/image";
import Btn from "../../UI/btn/linkBtn";
import TimeIcon from "../../icons/TimeIcon";
import TargetIcon from "../../icons/targeticon";
import StopIcon from "../../icons/stopicon";
import classes from "./card.module.css";

const Card = (props) => {
  const {name,timeframe, target1, stopLoss, _id} = props.signal;
  const cardLink = `/signal/${_id}`;
  const cardImage = `/images/signal/${_id}.png`;
  
    return (
      <div className="col-sm-3 mb-3">
        <div className="card text-center" style={{ width: 18 + "em" }}>
          <Image
            src={cardImage}
            className="card-img-top"
            alt="logo"
            width={180}
            height={180}
          />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              
              <span className="ml-2">
                {name}
              </span>
            </li>
            <li className="list-group-item">
              <span>{timeframe}</span>
              <span className="ml-2">
                <TimeIcon />
              </span>
            </li>
            <li className="list-group-item">
              <span>{target1}</span>
              <span className="ml-2">
                <TargetIcon />
              </span>
            </li>
            <li className="list-group-item">
              <span>{stopLoss}</span>
              <span className="ml-2">
                <StopIcon />
              </span>
            </li>
          </ul>
          <div className="card-body">
            <Btn link={cardLink}>مشاهده</Btn>
          </div>
        </div>
      </div>
    );
}

export default Card;
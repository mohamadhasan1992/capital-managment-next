import Btn from "../../UI/btn/btn";
import classes from './wholeProperty.module.css';
import CalculateIcon from "../../icons/calculateIcon";
import {useRef} from "react";
import {postData} from "../../../dataFetching/postData";

// calculatin each property value
  const eachPropertyValueCalculation = (initialProperty, selectedDiff) => {
    switch (selectedDiff) {
      case "1":
        return initialProperty / 4;
      case "1":
        return initialProperty / 3;
      case "1":
        return initialProperty / 2;
      default:
        return initialProperty / 4;
    }
  };

const WholeProperty = (props) => {
  const {initialProperty} = props.wholeProperty;

  const initialPropertyInputRef = useRef();
  const checkOneRef = useRef();
  const checkTwoRef = useRef();
  const checkThreeRef = useRef();
  
  // const difficultyHandler = (e) => {
  //   console.log(e.target.value);
  // }
  let selectedDifficulty = "";
  let eachPropVal = "";
  const submitWholePropertyHandler = async(e) => {
    e.preventDefault();
    const initialProperty = initialPropertyInputRef.current.value;
    // grab the selected dropdown option
    const checkArr = [checkOneRef, checkTwoRef, checkThreeRef];
    const selectedCheck = checkArr.forEach(check => {
      if(check.current.selected === true){
        selectedDifficulty = check.current.value;
      }
    })
    // created object
    const wholePropertyObject = {
      initialProperty,
      difficulty:selectedDifficulty
    };
    // preparing result box information
    eachPropVal = eachPropertyValueCalculation(
      initialProperty,
      selectedDifficulty
    );

    
    
    const response = await postData("http://127.0.0.2:8000/api/v1/wholeproperty",wholePropertyObject);
    alert(response.status);
  }

    return (
      <div className={classes.Content}>
        <div className="container d-flex justify-content-between">
          <h6 dir="rtl" className="border border-dark rounded-top p-4">
            سبد سهامی پیشنهادی برای شما تعداد {selectedDifficulty} سهم به مبلغ {eachPropVal}
            <span>{initialProperty}</span> می باشد.
          </h6>
          <div>
            <Btn onClick={(e) => submitWholePropertyHandler(e)}>
              <span className="mr-2">
                <CalculateIcon />
              </span>
              پردازش اطلاعات
            </Btn>
          </div>
          <div dir="rtl" className="d-flex flex-column w-25">
            <div className="d-flex align-items-baseline mb-3">
              <h6 className="d-inline-block w-25 ml-2">سرمایه اولیه</h6>
              <div className="input-group mb-3">
                <span dir="ltr" className="input-group-text">
                  .00
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  ref={initialPropertyInputRef}
                ></input>
                <span className="input-group-text">تومان</span>
              </div>
            </div>
            <select className="form-select" aria-label="Default select example">
              <option defaultValue >لطفا میزان ریسک پذیری را انتخاب کنید</option>
              <option ref={checkOneRef} value="1" >کم</option>
              <option ref={checkTwoRef} value="2">متوسط</option>
              <option ref={checkThreeRef} value="3">زیاد</option>
            </select>
          </div>
        </div>
      </div>
    );
}

export default WholeProperty;
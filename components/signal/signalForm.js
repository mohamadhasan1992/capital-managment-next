import Input from "../UI/input/input";
import Btn from "../UI/btn/btn";
import classes from "./signaldetail.module.css";
import axios from "axios";
import {useRef} from "react";
import {useRouter} from "next/router";



const postData = async(url,data) => {
    try{
        const response = await axios.post(url, data).then((res) => res.data);
        return response;
    }catch(err){
        return err;
    }
    
}

const signalForm = () => {

    const router = useRouter();
    //ref definition
    const nameInputRef = useRef();
    const typeInputRef =useRef();
    const timeframeInputRef = useRef();
    const createdTimeInputRef = useRef();
    const enteryPointInputRef = useRef();
    const target1InputRef = useRef();
    const target2InputRef = useRef();
    const target3InputRef = useRef();
    const stopLossInputRef = useRef();
    const leverageInputRef = useRef();

    const submitHandler = async(e) => {
        e.preventDefault();
        const name = nameInputRef.current.value;
        const type = typeInputRef.current.value;
        const timeframe = timeframeInputRef.current.value;
        const createdTime = createdTimeInputRef.current.value;
        const enteryPoint = enteryPointInputRef.current.value;
        const target1 = target1InputRef.current.value;
        const target2 = target2InputRef.current.value;
        const target3 = target3InputRef.current.value;
        const stopLoss = stopLossInputRef.current.value;
        const leverage = leverageInputRef.current.value;

        const signalObject = {
          name,
          type,
          timeframe,
          createdTime,
          enteryPoint,
          target1,
          target2,
          target3,
          stopLoss,
          leverage,
        };
        
        const response = await postData(
            "http://127.0.0.2:8000/api/v1/signal",
            signalObject
        );
        if(response.status === "success"){
            router.push("/signal");
        }else{
            alert(response.status)
        }
        
    }
    

    return (
      <div className={classes.Form}>
        <div dir="rtl" className={classes.FormBox}>
          <div dir="rtl" className="d-block mb-3">
            <label className="float-right">نام</label>
            <div>
              <Input width="true" ref={nameInputRef} />
            </div>
          </div>
          <div dir="rtl" className="mb-2">
            <label className="float-right">long or short</label>
            <div>
              <Input width="true" ref={typeInputRef} />
            </div>
          </div>
          <div dir="rtl" className="mb-2">
            <label className="float-right">timeFrame</label>
            <div>
              <Input width="true" ref={timeframeInputRef} />
            </div>
          </div>
          <div dir="rtl" className="mb-2">
            <label className="float-right">تاریخ</label>
            <div>
              <Input width="true" ref={createdTimeInputRef} />
            </div>
          </div>
          <div dir="rtl" className="mb-2">
            <label className="float-right">محدوده ی ورود</label>
            <div>
              <Input width="true" ref={enteryPointInputRef} />
            </div>
          </div>
          <div dir="rtl" className="mb-2">
            <label className="float-right">هدف اول</label>
            <div>
              <Input width="true" ref={target1InputRef} />
            </div>
          </div>
          <div dir="rtl" className="mb-2">
            <label className="float-right">هدف دوم</label>
            <div>
              <Input width="true" ref={target2InputRef} />
            </div>
          </div>
          <div dir="rtl" className="mb-2">
            <label className="float-right">هدف سوم</label>
            <div>
              <Input width="true" ref={target3InputRef} />
            </div>
          </div>
          <div dir="rtl" className="mb-2">
            <label className="float-right">حد ضرر</label>
            <div>
              <Input width="true" ref={stopLossInputRef} />
            </div>
          </div>
          <div dir="rtl" className="mb-2">
            <label className="float-right">اهرم</label>
            <div>
              <Input width="true" ref={leverageInputRef} />
            </div>
          </div>
          <div className={classes.BtnBox}>
            <Btn onClick={(event) => submitHandler(event)}>افزودن!</Btn>
          </div>
        </div>
      </div>
    );
}

export default signalForm;
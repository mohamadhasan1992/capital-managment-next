import react from "react";
import classes from './wholeProperty.module.css';

const WholeProperty = () => {
    return (
      <div className={classes.Content}>
        <div className="container d-flex justify-content-between">
          <h6 dir="rtl" className="border border-dark rounded-top p-4">
            سبد سهامی پیشنهادی برای شما تعداد 4 سهم به مبلغ می باشد.
          </h6>

          <div dir="rtl" className="d-flex flex-column w-25">
            <div className="d-flex align-items-baseline mb-3">
              <h6 className="d-inline-block w-25 ml-2">سرمایه اولیه</h6>
              <div className="input-group mb-3">
                <span dir="ltr" class="input-group-text">
                  .00
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                ></input>
                <span className="input-group-text">تومان</span>
              </div>
            </div>
            <select className="form-select" aria-label="Default select example">
              <option selected>لطفا میزان ریسک پذیری را انتخاب کنید</option>
              <option value="1">زیاد</option>
              <option value="2">متوسط</option>
              <option value="3">کم</option>
            </select>
          </div>
        </div>
      </div>
    );
}

export default WholeProperty;
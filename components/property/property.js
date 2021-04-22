import react from "react";
import classes from "./property.module.css";
import PropertyTitle from './propertyTitle';
import PropertyInput from "./propertyInput";
import PropertyList from "./propertyList";

const Property = () => {
    return (
      <div dir="rtl" className={classes.Content}>
        <table className="table">
          <thead>
              <PropertyTitle />
          </thead>
          <tbody>
            <PropertyInput />
            <PropertyList />
          </tbody>
        </table>
        
      </div>
    );
}
export default Property;
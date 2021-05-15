import classes from "./property.module.css";
import PropertyListItem from "./propertyListItem";

const PropertyList = (props) => {
  const {property} = props; 
  const propertyJSX = property.map((eachProperty,index) => {
    return(
      <PropertyListItem key={index} property={eachProperty} />
    )
  })
  return (
    <>
      {propertyJSX}
      
    </>
  );
}

export default PropertyList;

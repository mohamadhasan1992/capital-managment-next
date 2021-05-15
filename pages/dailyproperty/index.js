import DailyProperty from "../../components/home/dailyproperty/dailyproperty";
import LayoutSelector from "../../components/home/layoutselector/layoutselector";
import {getdailyProperty} from "../../dataFetching/getData";

const dailyProperty = (props) => {
  return (
      <>
        <LayoutSelector />
        <DailyProperty dailyProperties={props.dailyProperties} />
      </>
  )
};
export async function getStaticProps(){
    const dailyProperties = await getdailyProperty();
    return{
        props:{
            dailyProperties 
        }
    }
}

export default dailyProperty;

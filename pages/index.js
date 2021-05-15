import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import WholeProperty from '../components/home/wholeProperty/wholeProperty';
import Property from '../components/home/property/property';
import LayoutSelector from "../components/home/layoutselector/layoutselector";

import {
  getAllProperties,
  getWholeProperty,
} from "../dataFetching/getData";

const HomePage = (props) => {
  //getting property data from props
  const {properties,wholeProperty} = props;
  
  return (
    <>
      <WholeProperty wholeProperty={wholeProperty} />
      <LayoutSelector />
      <Property property={properties} />
    </>
  );
}
export async function getServerSideProps(ctx) {
  //if nobody logged in
    return {
      props: {
        properties: [
          {
            name: "",
            buyDate: "",
            value: "",
            enteryPoint: "",
            stopLimit: "",
            target: "",
            sellDate: "",
          },
        ],
        wholeProperty: { initialProperty: "", difficulty: "" },
      },
    };
  //if there is an user
  // const properties = await getAllProperties(session.user._id);
  // const wholeProperty = await getWholeProperty(session.user._id);
  // return {
  //   props: {
  //     session,
  //     properties,
  //     wholeProperty
  //   }
  // }

  
 
}

export default HomePage;

import classes from "./signal.module.css";
import Card from "../../components/signal/signalCard/card";
import axios from "axios";

const SignalPage = (props) => {
  const signalData = props.signals;


    return (
      <>
        <div className={classes.Content}>
          <div className="row">
            {signalData.map((signal) => (
              <Card key={signal._id} signal={signal} />
            ))}
          </div>
        </div>
      </>
    );
}

 
export const getStaticProps = async () => {
  //fetch data from DATABASE
  const signals = await axios.get("http://127.0.0.2:8000/api/v1/signal")
                              .then(res => res.data.signals);
  if(!signals){
    return{
      notFound:true,
      redirect:{
        destination:"/"
      }
    }
  }
  return {
    props: {
      signals,
    },
    revalidate:5,
  };
};

export default SignalPage;


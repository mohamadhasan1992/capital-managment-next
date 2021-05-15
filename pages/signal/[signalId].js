import {useRouter} from "next/router";
import SignalDetail from "../../components/signal/signaldetail";
import axios from "axios";


const signalDetail = (props) => {

  const signal= props.signal;
  console.log(signal);
  return(
      <>
        <SignalDetail signalData={signal} />
      </>
  )
}

const getData = async() => {
  const signals = await axios.get(`http://127.0.0.2:8000/api/v1/signal`)
                      .then(res => res.data.signals);

  return signals;
}

export const getStaticProps = async(ctx) => {
  const id= ctx.params.signalId;
  //fetch data from server
  const signals = await getData();
  // find a signal thats id is === signalId
  const signal = signals.find(signal => signal._id === id);
  if(!signal){
    return{
      notFound:true
    }
  }
  return{
    props:{
      signal
    },
    revalidate:60
    
  }
}
export const getStaticPaths = async(ctx) => {
  const signals = await getData();
  //creating id array
  const ids = signals.map(signal => signal._id);
  //converting ids to the form {params:{signalId:id}}
  const params = ids.map((id) => ({params:{signalId:id}}));
  // paths: {params:{signalId:id}}
  return{
    paths:params,
    fallback:"blocking"
  }
}

export default signalDetail;
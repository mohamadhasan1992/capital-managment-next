import {useRouter} from "next/router";
import SignalDetail from "../../components/signal/signaldetail";
import Layout from "../../components/layout/layout";


const signalDetail = () => {
  const router = useRouter();
  const id = router.query.signalId;
  //fetch data by id
  //if couldnt find data // response an error text
    const signalData = {
      name:"bitcoin",
      type:"long",
      duration: "12m",
      createdTime: "00/01/20",
      target1: "120",
      target2: "150",
      target3: "190",
      stopLoss: "98",
      leverage: "50x",
    };
  return(
      <Layout>
        <SignalDetail signalData={signalData}/>        
      </Layout>
  )
}

export default signalDetail;
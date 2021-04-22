import classes from "./signal.module.css";
import Card from "../../components/UI/card/card";
import Layout from "../../components/layout/layout";

const SignalPage = () => {
    return (
      <Layout>
        <div className={classes.Content}>
          <div className="row">
            <Card duration="12 m" target="125" stop="95" id="1"/>
            <Card duration="12 m" target="125" stop="95" id="2"/>
            <Card duration="12 m" target="125" stop="95" id="3"/>
            <Card duration="12 m" target="125" stop="95" id="4"/>
            <Card duration="12 m" target="125" stop="95" id="5"/>
          </div>
        </div>
      </Layout>
    );
}

export default SignalPage;
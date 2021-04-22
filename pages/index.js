import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import WholeProperty from '../components/wholeProperty/wholeProperty';
import Property from '../components/property/property';
import Footer from "../components/footer/footer";
import LayoutSelector from "../components/layoutselector/layoutselector";
import DailyProperty from "../components/dailyproperty/dailyproperty";
import Layout from "../components/layout/layout";


const HomePage = () => {
  const [layout,setLayout]=useState("property");
  const changeToProperty = () => {
    setLayout("property");
  }
  const changeToDailyProperty = () => {
    setLayout("dailyproperty");
  };
  return (
      <Layout>
        {layout && <WholeProperty />}
        <LayoutSelector
          changeToDailyProperty={changeToDailyProperty}
          changeToProperty={changeToProperty}
        />
        {layout === "property" ? <Property /> : <DailyProperty />}
      </Layout>
  );
}

export default HomePage;

import React from "react";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner";
import BottomBanner from "./BottomBanner/BottomBanner";
import InfoCards from "./Info/InfoCards";
import Reviews from "./Reviews/Reviews";
import ServicesAll from "./Service/ServicesAll";

const Home = () => {
  return (
    <div className="mx-6">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <ServicesAll></ServicesAll>
      <BottomBanner></BottomBanner>
      <Appointment></Appointment>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;

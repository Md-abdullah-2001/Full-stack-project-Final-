import React, { useState } from "react";
import AppointBottom from "../AppointmentPage/AppointBottom";
import AppointmentPage from "../AppointmentPage/AppointmentPage";

const MainAppointment = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div>
      <AppointmentPage
        selected={selected}
        setSelected={setSelected}
      ></AppointmentPage>
      <AppointBottom selected={selected}></AppointBottom>
    </div>
  );
};

export default MainAppointment;

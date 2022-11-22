import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import { Link } from "react-router-dom";
const Appointment = () => {
  return (
    <section className="mt-36" style={{ background: `url(${appointment})` }}>
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          <img className="lg:w-1/2 -mt-40" src={doctor} alt="/" />
          <div className="text-white">
            <h4 className="text-blue-400 font-semibold text-2xl">
              Appointment
            </h4>
            <h1 className="text-3xl font-bold">Make an Appointment Today</h1>
            <p className="py-6 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <Link to="/appointment">
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;

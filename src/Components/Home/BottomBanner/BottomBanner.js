import React from "react";
import treatment from "../../../assets/images/treatment.png";
const BottomBanner = () => {
  return (
    <div>
      <div className=" lg:flex gap-16 mt-56 ">
        <img
          className=" lg:w-1/2 w-full h-96 rounded-2xl"
          src={treatment}
          alt=""
          srcSet=""
        />
        <div className=" lg:w-1/3">
          <h1
            className="
          text-3xl font-semibold text-blue-300"
          >
            Exceptional Dental Care <br />
            On Your Terms
          </h1>
          <p>
            Cleft lip and cleft palate are birth defects that occur when a
            baby's lip or mouth. OHAI Is a Non-Governmental Organization - OHAI.
            Read News. Donate Online. Highlights: Volunteering Opportunities
            Available, Donation Option Available, Newsletter Available.
          </p>
          <button className=" mt-6 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;

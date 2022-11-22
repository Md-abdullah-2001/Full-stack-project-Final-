import React from "react";

const OptionSlot = ({ slot, setTreatment }) => {
  const { name, slots, price } = slot;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body  text-center">
        <h2 className="text-lg font-semibold text-blue-400 text-center">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length}{" "}
          {slots.length > 1 ? "spaces available" : "space available"}
        </p>
        <p>Fees: ${price}</p>
        <div className="card-actions ">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(slot)}
            className="btn mx-auto  btn-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default OptionSlot;

import { format } from "date-fns/esm";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { ContextApi } from "../../ContextApi/AuthContext";

const Modal = ({ treatment, selected, setTreatment, refetch }) => {
  const { user } = useContext(ContextApi);
  // console.log(user.displayName);
  const { name, slots, price } = treatment;
  console.log(price);
  const date = format(selected, "PP");
  // console.log(date);
  const handleabaooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(name, email, phone, slot, price);
    const booking = {
      appointmentDate: date,
      patient: name,
      treatmentName: treatment.name,
      email,
      phone,
      slot: slot,
      price,
    };
    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking confirmed");

          setTreatment(null);
          refetch();
        } else {
          toast.error(data.message);
        }
      });

    console.log(booking);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-4">{name}</h3>
          <form onSubmit={handleabaooking}>
            <input
              disabled
              type="text"
              value={date}
              className="input  input-bordered mb-3 w-full "
            />
            <select name="slot" className="select select-bordered w-full mb-3">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              disabled
              name="name"
              className="input input-bordered mb-3 w-full "
            />

            <input
              type="email"
              defaultValue={user?.email}
              disabled
              required
              placeholder="E-mail"
              name="email"
              className="input input-bordered mb-3 w-full "
            />
            <input
              type="number"
              required
              placeholder="Your Phone"
              name="phone"
              className="input input-bordered mb-3 w-full "
            />
            <br />
            <input
              className="btn btn-outline w-full mt-7"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;

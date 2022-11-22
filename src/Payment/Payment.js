import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();

  return (
    <div>
      <h1 className="text-3xl "> Payment for {booking.treatmentName}</h1>
      <h1 className="text-xl "> Please Pay ${booking.price}</h1>
    </div>
  );
};

export default Payment;

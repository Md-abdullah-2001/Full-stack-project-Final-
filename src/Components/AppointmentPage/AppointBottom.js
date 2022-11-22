import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import OptionSlot from "./OptionSlot";

const AppointBottom = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selected, "PP");
  const { data: slots = [], refetch } = useQuery({
    queryKey: ["availableAppointment", date],
    queryFn: () =>
      fetch(`http://localhost:5000/availableAppointment?date=${date}`).then(
        (res) => res.json()
      ),
  });

  return (
    <div className="p-8">
      <p className="text-lg text-blue-400 font-bold text-center">
        You selected {format(selected, "PP")}.
      </p>
      <input type="checkbox" className="toggle" />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {slots.map((slot) => (
          <OptionSlot
            setTreatment={setTreatment}
            slot={slot}
            key={slot._id}
          ></OptionSlot>
        ))}
      </div>
      {treatment && (
        <Modal
          refetch={refetch}
          setTreatment={setTreatment}
          selected={selected}
          treatment={treatment}
        ></Modal>
      )}
    </div>
  );
};

export default AppointBottom;

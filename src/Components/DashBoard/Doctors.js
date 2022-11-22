import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmModal from "../../ConfirmModal/ConfirmModal";
import Loader from "../../Loader";

const Doctors = () => {
  const [delDoctor, setDelDoctor] = useState(null);
  const closeModal = () => {
    setDelDoctor(null);
  };

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/doctors`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        console.log(data);
        return data;
      } catch (error) {}
    },
  });

  const successDelete = (doctor) => {
    console.log(doctor);
    fetch(` http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          toast.error(`Doctor ${doctor.name} Deleted`);
        }
      });
  };
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <h1 className="text-3xl  mt-6">Manage Doctors{doctors.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Email</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img alt="" src={doctor.image} />
                    </div>
                  </div>
                </th>
                <td>{doctor.name}</td>
                <td>{doctor.speciality}</td>
                <td>{doctor.email}</td>
                <td>
                  <label
                    onClick={() => setDelDoctor(doctor)}
                    htmlFor="confirm-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {delDoctor && (
        <ConfirmModal
          title={`Are you sure you wat to Delete?`}
          message={`If you Delete ${delDoctor.name} , It cannot be undo `}
          closeModal={closeModal}
          successDelete={successDelete}
          modalData={delDoctor}
        ></ConfirmModal>
      )}
    </div>
  );
};

export default Doctors;

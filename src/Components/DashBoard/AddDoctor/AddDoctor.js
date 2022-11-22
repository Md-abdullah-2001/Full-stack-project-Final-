import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Loader from "../../../Loader";

const AddDoctor = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const imgHostKey = process.env.REACT_APP_IMG_KEY;
  console.log(imgHostKey);
  const { data: specialities, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/speciality`);
      const data = res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    console.log(data.img);
    const image = data.img[0];
    console.log(image);

    const formData = new FormData();
    formData.append("image", image);
    // const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData.data.url);

        const doctor = {
          name: data.name,
          email: data.email,
          speciality: data.speciality,
          image: imgData.data.url,
        };
        console.log(doctor);
        fetch(`http://localhost:5000/doctors`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("token")}`,
          },

          body: JSON.stringify(doctor),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            toast.success(`${data.name} is Added as Doctor`);
            navigate("/dashboard/doctors");
          });
        reset();
      });
  };
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-4/6 mt-9">
      <h1 className="text-3xl">Add doctors here</h1>
      <form className=" mx-auto " onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name must be typed",
            })}
            className="input input-bordered w-full "
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            className="input input-bordered w-full "
          />
          <label className="label">
            {" "}
            <span className="label-text">Speciality</span>
          </label>
          <select
            {...register("speciality")}
            className="select select-bordered w-full "
          >
            {specialities.map((speciality) => (
              <option value={speciality.name} key={speciality._id}>
                {speciality.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Name</span>
          </label>
          <input
            type="file"
            {...register("img")}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full "></div>

        <label className="label"> </label>
        <input
          className="btn btn-accent w-full"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;

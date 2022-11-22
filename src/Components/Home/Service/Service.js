import React from "react";
const Service = ({ service }) => {
  const { name, icon, descr } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img src={icon} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{descr}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;

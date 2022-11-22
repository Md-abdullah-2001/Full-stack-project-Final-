import React from "react";

import fluoride from "../../../assets/images/fluoride.png";
import treat from "../../../assets/images/cavity.png";
import white from "../../../assets/images/whitening.png";
import Service from "./Service";

const services = [
  {
    id: 1,
    name: "fluoride",
    descr: "it is very useful for the people of all ages by the way",
    icon: treat,
  },
  {
    id: 2,
    name: "fluoride",
    descr: "it is very useful for the people of all ages by the way",
    icon: white,
  },
  {
    id: 3,
    name: "fluoride",
    descr: "it is very useful for the people of all ages by the way",
    icon: fluoride,
  },
];

const ServicesAll = () => {
  return (
    <div className="my-16">
      <div className="text-center my-16">
        <h1 className=" text-4xl font-bold text-blue-600">Our Services</h1>
        <h1 className="text-xl font-bold text-blue-600">
          We are prod of all our services for its unique quality.
        </h1>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 s">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default ServicesAll;

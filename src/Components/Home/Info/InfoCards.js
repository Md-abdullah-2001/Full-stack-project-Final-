import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";
const InfoCards = () => {
  const infocards = [
    {
      id: 1,
      name: "Open time",
      description: "it opens from 9:00AM -5:00pm",
      img: clock,
      bgClass: "bg-gradient-to-r from-blue-200 to-blue-500",
    },
    {
      id: 2,
      name: "Open time",
      description: "it opens from 9:00AM -5:00pm",
      img: marker,
      bgClass: "bg-gradient-to-r from-cyan-200 to-blue-500",
    },
    {
      id: 3,
      name: "Open time",
      description: "it opens from 9:00AM -5:00pm",
      img: phone,
      bgClass: "bg-gradient-to-r from-blue-500  to-cyan-200",
    },
  ];
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5">
      {infocards.map((card) => (
        <InfoCard card={card} key={card.id}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;

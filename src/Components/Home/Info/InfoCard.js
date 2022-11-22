import React from "react";

const InfoCard = ({ card }) => {
  const { name, img, description, bgClass } = card;
  return (
    <div>
      <div className={`card card-compact w-96 ${bgClass} shadow-xl  p-6`}>
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title text-center">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

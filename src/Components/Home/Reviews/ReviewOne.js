import React from "react";

const ReviewOne = ({ review }) => {
  const { name, img, location, description } = review;
  return (
    <div className="">
      <div className="card card-compact w-96 bg-base-100 shadow-xl p-6">
        <div className="card-body">
          <p>{description}</p>
        </div>
        <div className="flex ">
          <div className="avatar">
            <div className="w-12 ml-8  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img alt="/" src={img} />
            </div>
          </div>
          <div className="ml-4">
            {" "}
            <h3 className="text-lg font-semibold">{name}</h3>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewOne;

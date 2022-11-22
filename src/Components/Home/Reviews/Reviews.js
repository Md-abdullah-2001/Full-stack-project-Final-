import React from "react";
import quete from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import ReviewOne from "./ReviewOne";
const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Thomas Frunk",
      img: people1,
      location: "california",
      description:
        "Among the items that a I can expertly install, repair, and replace are toilets, kitchen and bathroom sinks, showers, tubs, faucets, dishwasher, water ",
    },
    {
      id: 2,
      name: "Thomas Frunk",
      img: people2,
      location: "california",
      description:
        "Among the items that a I can expertly install, repair, and replace are toilets, kitchen and bathroom sinks, showers, tubs, faucets, dishwasher, water ",
    },
    {
      id: 3,
      name: "Thomas Frunk",
      img: people3,
      location: "california",
      description:
        "Among the items that a I can expertly install, repair, and replace are toilets, kitchen and bathroom sinks, showers, tubs, faucets, dishwasher, water ",
    },
  ];
  return (
    <div className="mt-36">
      <div className="flex justify-between">
        <div>
          <h4 className="text-lg text-blue-300 font-semibold">Testimonials</h4>
          <h4 className="text-3xl font-semibold">
            What Our Clients Have to say About Us
          </h4>
        </div>
        <img className="lg:w-48 md:w-36 w-28" src={quete} alt="" />
      </div>
      <div className="grid sm:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {reviewsData.map((review) => (
          <ReviewOne key={review.id} review={review}></ReviewOne>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

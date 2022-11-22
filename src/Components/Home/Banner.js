import React from "react";
import chair from "../../assets/images/chair.png";
const Banner = () => {
  return (
    <div>
      <div
        className="hero py-28 px-4"
        // style={{
        //   opacity: "0.1",
        //   backgroundSize: "fill",
        //   backgroundImage: `url("https://i.ibb.co/TbMcFfV/chair.png")`,
        // }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img alt="/" src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Your Online Smiles <br /> Starts here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import banner from '../../../public/images/banner.jpg';
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url('${banner}')`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-6xl font-semibold">
            Discover Food Taste Our <br /> <span className="font-bold text-yellow-500">Best</span> Healthy & Tasty.
          </h1>
          <p className="mb-5 text-gray-100">
            Our food is made from the freshest ingredients and the  result is a much better <br />sushi with a fresh look and of course great taste guarantee.
          </p>
          <button className="btn btn-outline btn-accent">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

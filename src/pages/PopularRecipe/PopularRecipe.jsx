import React from "react";
import recipe1 from '../../../public/images/food1.png'
import recipe2 from '../../../public/images/food2.png'
import recipe3 from '../../../public/images/food3.png'
const PopularRecipe = () => {
  return (
    <div className="bg-gray-800 lg:px-10 py-10">
      <h1 className="text-center font-bold text-white text-4xl mb-10">
        Our Popular Recipe
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 px-2 lg:px-0">
      <div className="card card-compact lg:w-96 bg-base-100 shadow-xl mb-5 lg:mb-0">
        <figure>
          <img className=""
            src={recipe1}
            alt="Shoes"
          />
        </figure>
          <h2 className="text-center font-bold text-3xl">Pannacotta</h2>
          <p className="text-center text-yellow-500 font-semibold my-3"><span className="text-4xl">$</span><span className="text-3xl">32</span></p>
          <p className="text-center text-xl font-semibold text-gray-500 pb-5">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
      </div>
      <div className="card card-compact lg:w-96 bg-base-100 mb-5 lg:mb-0 shadow-xl">
        <figure>
          <img
            src={recipe2}
            alt="Shoes"
          />
        </figure>
          <h2 className="text-center font-bold text-3xl">Vitello Tonnato</h2>
          <p className="text-center text-yellow-500 font-semibold my-3"><span className="text-4xl">$</span><span className="text-3xl">32</span></p>
          <p className="text-center text-xl font-semibold text-gray-500 pb-5">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
      </div>
      <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={recipe3}
            alt="Shoes"
          />
        </figure>
          <h2 className="text-center font-bold text-3xl">Fettuccine al Pomodoro</h2>
          <p className="text-center text-yellow-500 font-semibold my-3"><span className="text-4xl">$</span><span className="text-3xl">32</span></p>
          <p className="text-center text-xl font-semibold text-gray-500 pb-5">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
      </div>
      </div>
    </div>
  );
};

export default PopularRecipe;

import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {id,chefName,picture,likes,numRecipes,yearsOfExperience}=chef;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{chefName}</h2>
          <div className="card-actions justify-between">
            <h5 className=" font-semibold"><span className=" text-center font-bold">Experience</span> : {yearsOfExperience} Year</h5>
            <h4 className=" font-semibold"><span className=" text-center font-bold">Recipes</span> : {numRecipes} Plus</h4>
          </div>
          <div className="card-actions justify-between">
            <h5 className="flex items-center gap-1 font-semibold"><span className=" text-center font-bold">Like</span> : {likes} <FaHeart></FaHeart></h5>
            <Link to={`/:${id}`} ><button className="btn btn-outline btn-info btn-sm">View Recipes</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;

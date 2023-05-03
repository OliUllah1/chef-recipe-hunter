import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const ChefDetails = () => {
  const chefData = useLoaderData();
  const {id,chefName,picture,likes,numRecipes,yearsOfExperience,chefDescription}=chefData;
  console.log(chefData);
  return (
    <div className="p-10">
        <div className=" flex gap-10 items-center">
            <div>
                <img src={picture} className="max-w-sm rounded-lg shadow-2xl"/>
            </div>
            <div>
                <h1 className="text-5xl font-bold mb-4 underline">Chef Details</h1>
                <h3 className=" font-semibold text-3xl"><span className=" font-bold">Name : </span> {chefName}</h3>
                <p className=" font-semibold my-2"><span className=" font-bold">Chef Description :</span> {chefDescription}</p>
                <p className=" font-semibold mb-2"><span className=" text-center font-bold">Experience</span> : {yearsOfExperience} Year</p>
                <p className=" font-semibold mb-2"><span className=" text-center font-bold">Recipes</span> : {numRecipes} Plus</p>
                <p className="flex items-center gap-1 font-semibold"><span className=" text-center font-bold">Like</span> : {likes} <FaHeart></FaHeart></p>
            </div>
        </div>






      {/* <div className="hero min-h-screen bg-base-200 py-10">
        <div className="flex gap-5 border border-blue-500 p-5 rounded-lg">
          <img src={picture} className="max-w-sm rounded-lg shadow-2xl"/>
          <div>
            <h1 className="text-3xl font-bold m-0 p-0">Name: {chefName}</h1>
            <p className="py-6">{chefDescription}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ChefDetails;

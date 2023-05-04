
import { useLoaderData, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Recipes from "../Recipes/Recipes";
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {
  const chefData = useLoaderData();
  const {
    id,
    chefName,
    picture,
    likes,
    numRecipes,
    yearsOfExperience,
    chefDescription,
    recipes
  } = chefData;
  return (
    
    <div className="p-10">
      {chefData?<div><div className=" flex gap-10 items-center">
        <div>
          <LazyLoad><img src={picture} className="max-w-sm rounded-lg shadow-2xl" /></LazyLoad>
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-4 underline">Chef Details</h1>
          <h3 className=" font-semibold text-3xl">
            <span className=" font-bold">Name : </span> {chefName}
          </h3>
          <p className=" font-semibold my-2">
            <span className=" font-bold">Chef Description :</span>{" "}
            {chefDescription}
          </p>
          <p className=" font-semibold mb-2">
            <span className=" text-center font-bold">Experience</span> :{" "}
            {yearsOfExperience} Year
          </p>
          <p className=" font-semibold mb-2">
            <span className=" text-center font-bold">Recipes</span> :{" "}
            {numRecipes} Plus
          </p>
          <p className="flex items-center gap-1 font-semibold">
            <span className=" text-center font-bold">Like</span> : {likes}{" "}
            <FaHeart></FaHeart>
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-center font-bold text-3xl">{chefName} Recipe Lists</h1>
          <div className="grid grid-cols-3 mt-5">
            {
                recipes.map((recipe,index)=><Recipes key={index} recipe={recipe}></Recipes>)
            }
          </div>
      </div></div>:<progress className="progress w-96"></progress>}
    </div>
  );
};

export default ChefDetails;

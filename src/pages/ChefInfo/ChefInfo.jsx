import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../ChefCard/ChefCard";

const ChefInfo = () => {
  const allChefInfo = useLoaderData();
  return (
    <div className=" bg-gray-800 py-10 lg:pl-14 lg:pr-10">
      {
        allChefInfo?<div>
        <h1 className=" text-center text-4xl text-white font-bold mb-5">
          Meet Our <br /> Professional Chefs
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-2 lg:px-0">
          {allChefInfo.map((chef) => (
            <ChefCard chef={chef} key={chef.id}></ChefCard>
          ))}
        </div>
      </div>:<progress className="progress w-96"></progress>
      }
    </div>
  );
};

export default ChefInfo;

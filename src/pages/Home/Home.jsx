import React from "react";

import ChefInfo from "../ChefInfo/ChefInfo";
import MainMenu from "../MainMenu/MainMenu";
import Banner from "../Banner/Banner";
import PopularRecipe from "../PopularRecipe/PopularRecipe";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefInfo></ChefInfo>
      <MainMenu></MainMenu>
      <PopularRecipe></PopularRecipe>
    </div>
  );
};

export default Home;

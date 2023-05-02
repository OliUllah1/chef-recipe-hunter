import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("../../../public/images/banner.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-6xl font-bold">Experienece The Best Only <br />Taste Of Itlay</h1>
            <p className="mb-5">
              Mistaken Idea Of Denouncing Pleasure And Praising Pain.
            </p>
            <button className="btn btn-outline btn-accent">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

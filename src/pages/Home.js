import React from "react";

import Categories from "../components/Categories";
import CarouselPets from "../components/CarouselPets";

const Home = () => {
  return (
    <>
      <div>HomePAGE</div>
      <Categories />
      <div className="container">
        <h2>Newest pets</h2>
        <CarouselPets />
      </div>
    </>
  );
};

export default Home;

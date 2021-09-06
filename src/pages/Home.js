import React from "react";


import Categories from "../components/Categories";
import CarouselPets from "../components/CarouselPets";


const Home = () => {
  return (
    <>
      <Categories />
      <div className="container">
        <h2>
          Pets Available for Adoption
        </h2>
        <CarouselPets />
      </div>
    </>
  );
};

export default Home;

import React from "react";

import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import CarouselPets from "../components/CarouselPets";


const Home = () => {
  return (
    <>
      <Navbar />
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

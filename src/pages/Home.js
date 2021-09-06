import React from "react";

import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import CarouselPets from "../components/CarouselPets";

import Banner from "../components/Banner";

import CommunityPreview from "../components/CommunityPreview"



const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <div className="container">
        <h2>Newest pets</h2>
        <CarouselPets />
      </div>
      <CommunityPreview/>
    </>
  );
};

export default Home;

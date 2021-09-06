import React from "react";

import Categories from "../components/Categories";
import CarouselPets from "../components/CarouselPets";

import Banner from "../components/Banner";

import CommunityPreview from "../components/CommunityPreview";

const Home = () => {
  return (
    <div className="app-container">
      <Banner />
      <Categories />
      <div className="container">
        <h2>Newest pets</h2>
        <CarouselPets />
      </div>
      <CommunityPreview />
    </div>
  );
};

export default Home;

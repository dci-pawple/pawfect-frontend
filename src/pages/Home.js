import React from "react";


import Categories from "../components/Categories";
import CarouselPets from "../components/CarouselPets";

import Banner from "../components/Banner";

import CommunityPreview from "../components/CommunityPreview";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <CarouselPets />
      <CommunityPreview/>
    </div>

  );
};

export default Home;

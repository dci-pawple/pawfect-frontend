import React from "react";
import Categories from "../components/Categories";
import CarouselPets from "../components/CarouselPets";
import PetCard from "../components/PetCard";
import Dog1 from '../dummy/images/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg'


const Home = () => {
  return (
    <>
      <div>HomePAGE</div>
      <Categories />
      <div className="container">
        <h2>Newest pets</h2>
      <CarouselPets/>
      <PetCard src={Dog1}/>
      </div>
    </>
  )
};

export default Home;

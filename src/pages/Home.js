import React from "react";
import PetCard from "../components/PetCard";
// import CarouselPets from "../components/CarouselPets";

const Home = () => {
  return (
    <>
      <div>HomePAGE</div>
          {/* <CarouselPets/> */}
          <section className="cards">
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
          </section>
          

      </>
    )
};

export default Home;

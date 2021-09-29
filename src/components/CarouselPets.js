import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import PetCard from "./PetCard";

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CarouselPets = () => {
  const [petsList, setPetsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // process.env.REACT_APP_BACKEND_URL
        // http://localhost:4000/
        await fetch(process.env.REACT_APP_BACKEND_URL + "pets/")
          .then((data) => data.json())
          .then((res) => {
            setPetsList(res.data);
          });
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <div className="carousel-container">
      <h2 className="heading-carousel">Newest Pets</h2>
      <Carousel itemsToShow={3} breakPoints={breakPoints}>
        {petsList
          .filter((item, i) => i < 5)
          .map((pet) => (
            <PetCard pet={pet} key={pet._id} />
          ))}
      </Carousel>

      <button className="btn__see-all">
        <Link to="/gallery">See all</Link>
      </button>
    </div>
  );
};

export default CarouselPets;

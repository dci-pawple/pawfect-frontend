import React from "react";
import PetCard from "../components/PetCard";
import Dog3 from '../dummy/images/charles-deluvio-Mv9hjnEUHR4-unsplash.jpg'

const Gallery = () => {
  
  return (
    <div className="app-container container">
      <h2>Pets available:</h2>
      <div className="gallery__grid-container">
      {[...Array(30).keys()].map((card, index) => (
        <PetCard src={Dog3} key={index}/>
      ))}
      
      </div>
      
    </div>
  )
  
};

export default Gallery;

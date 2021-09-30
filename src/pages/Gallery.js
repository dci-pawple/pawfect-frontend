import React, { useContext } from "react";
import GalleryFilter from "../components/GalleryFilter";
import PetCard from "../components/PetCard";
import MyContext from "../context/MyContext";

const Gallery = ({ filter }) => {
  const { filteredData } = useContext(MyContext);

  return (
    <div className="app-container container gallery">
      <h2>Pets available:</h2>
      <GalleryFilter filter={filter} />
      <div className="gallery__grid-container">
        {filteredData &&
          filteredData.map((pet, index) => (
            <PetCard pet={pet} petData={pet} key={pet._id} />
          ))}
      </div>
    </div>
  );
};

export default Gallery;

import React, { useEffect, useState, useContext } from "react";
import PetCard from "./PetCard";
import MyContext from "../context/MyContext";

const SavedSearches = () => {
  const [favouritesList, setFavouritesList] = useState([]);
  const { favouritePetsIds } = useContext(MyContext);
  const { userId } = useContext(MyContext);

  useEffect(() => {
    const fetchFavourites = () => {
      console.log({ userId });
      // process.env.REACT_APP_BACKEND_URL
      // http://localhost:4000/
      fetch(
        process.env.REACT_APP_BACKEND_URL +
          `pets/filter?favorites=true&userId=${userId}`
      )
        .then((data) => data.json())
        .then((response) => {
          console.log("response.data", response.data);
          setFavouritesList(response.data);
        })
        .catch((err) => console.error("error in favourites =>", err));
    };

    fetchFavourites();
  }, [userId, favouritePetsIds]);

  return (
    <div className="app-container container">
      <h2>My Favourites</h2>
      <div className="gallery__grid-container">
        {favouritesList &&
          favouritesList.map((favouritePet, index) => (
            <PetCard
              favouritesList={favouritesList}
              pet={favouritePet}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default SavedSearches;

import React, { useEffect, useState, useContext } from "react";
import PetCard from "./PetCard";
import MyContext from "../context/MyContext";
import { Link } from "react-router-dom";

const SavedSearches = () => {
  const [favouritesList, setFavouritesList] = useState([]);
  const { favouritePetsIds } = useContext(MyContext);
  const { userId } = useContext(MyContext);

  useEffect(() => {
    const fetchFavourites = () => {
      // process.env.REACT_APP_BACKEND_URL
      // http://localhost:4000/
      fetch(
        process.env.REACT_APP_BACKEND_URL +
          `pets/filter?favorites=true&userId=${userId}`
      )
        .then((data) => data.json())
        .then((response) => {
          setFavouritesList(response.data);
        })
        .catch((err) => console.error("error in favourites =>", err));
    };

    fetchFavourites();
  }, [userId, favouritePetsIds]);

  return (
    <div className="app-container container my-favs">
      <h2>My Favourites</h2>
      <div className="gallery__grid-container">
        {favouritesList && favouritesList.length !== 0 ? (
          favouritesList.map((favouritePet, index) => (
            <PetCard
              favouritesList={favouritesList}
              pet={favouritePet}
              key={index}
            />
          ))
        ) : (
          <div className="opacity50">
            <h2>No favorites here yet</h2>
            <h3>
              When you find a pet you love, add it to your favorites list by
              tapping the favorite button <i className="far fa-heart"></i>
            </h3>
            <Link to="/gallery">
              <p>Find your pet</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedSearches;
